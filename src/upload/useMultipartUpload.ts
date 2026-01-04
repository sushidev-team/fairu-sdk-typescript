import { useState, useCallback, useRef } from 'react';
import { useMutation } from 'urql';
import type {
  UploadStatus,
  UploadProgress,
  MultipartUploadOptions,
  UploadResult,
  UploadPart,
} from './types';
import { UploadError } from '../errors';

const INIT_MULTIPART_MUTATION = `
  mutation InitFairuMultipartUpload(
    $filename: String!
    $folder: ID
    $fileSize: Int
    $contentType: String
    $alt: String
    $caption: String
    $description: String
    $copyright: String
  ) {
    initFairuMultipartUpload(
      filename: $filename
      folder: $folder
      fileSize: $fileSize
      contentType: $contentType
      alt: $alt
      caption: $caption
      description: $description
      copyright: $copyright
    ) {
      id
      upload_id
    }
  }
`;

const GET_PART_URL_MUTATION = `
  mutation GetFairuMultipartPartUrl($fileId: ID!, $uploadId: String!, $partNumber: Int!) {
    getFairuMultipartPartUrl(fileId: $fileId, uploadId: $uploadId, partNumber: $partNumber) {
      url
      part_number
    }
  }
`;

const COMPLETE_MULTIPART_MUTATION = `
  mutation CompleteFairuMultipartUpload($fileId: ID!, $uploadId: String!, $parts: [FairuMultipartPartInput!]!) {
    completeFairuMultipartUpload(fileId: $fileId, uploadId: $uploadId, parts: $parts) {
      id
      url
    }
  }
`;

const ABORT_MULTIPART_MUTATION = `
  mutation AbortFairuMultipartUpload($fileId: ID!, $uploadId: String!) {
    abortFairuMultipartUpload(fileId: $fileId, uploadId: $uploadId)
  }
`;

const DEFAULT_PART_SIZE = 5 * 1024 * 1024; // 5MB
const DEFAULT_CONCURRENCY = 3;

/**
 * State for the multipart upload hook.
 */
export interface UseMultipartUploadState {
  status: UploadStatus;
  progress: UploadProgress;
  error: UploadError | null;
  result: UploadResult | null;
  partsCompleted: number;
  totalParts: number;
}

/**
 * Result of the useMultipartUpload hook.
 */
export interface UseMultipartUploadResult extends UseMultipartUploadState {
  upload: (file: File, options?: MultipartUploadOptions) => Promise<UploadResult>;
  abort: () => void;
  reset: () => void;
}

const initialState: UseMultipartUploadState = {
  status: 'idle',
  progress: { loaded: 0, total: 0, percentage: 0 },
  error: null,
  result: null,
  partsCompleted: 0,
  totalParts: 0,
};

/**
 * Hook for multipart uploads of large files.
 *
 * @example
 * ```tsx
 * function LargeFileUploader() {
 *   const {
 *     upload,
 *     progress,
 *     status,
 *     partsCompleted,
 *     totalParts,
 *     abort,
 *   } = useMultipartUpload();
 *
 *   const handleFileSelect = async (e) => {
 *     const file = e.target.files?.[0];
 *     if (!file) return;
 *
 *     try {
 *       await upload(file, {
 *         partSize: 10 * 1024 * 1024, // 10MB parts
 *         concurrency: 5,
 *       });
 *     } catch (err) {
 *       console.error('Upload failed:', err);
 *     }
 *   };
 *
 *   return (
 *     <div>
 *       <input type="file" onChange={handleFileSelect} />
 *       {status === 'uploading' && (
 *         <div>
 *           <progress value={progress.percentage} max={100} />
 *           <span>Parts: {partsCompleted}/{totalParts}</span>
 *           <button onClick={abort}>Cancel</button>
 *         </div>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 */
export function useMultipartUpload(): UseMultipartUploadResult {
  const [state, setState] = useState<UseMultipartUploadState>(initialState);
  const abortControllerRef = useRef<AbortController | null>(null);
  const uploadStateRef = useRef<{
    fileId: string;
    uploadId: string;
  } | null>(null);

  const [, initMultipart] = useMutation(INIT_MULTIPART_MUTATION);
  const [, getPartUrl] = useMutation(GET_PART_URL_MUTATION);
  const [, completeMultipart] = useMutation(COMPLETE_MULTIPART_MUTATION);
  const [, abortMultipart] = useMutation(ABORT_MULTIPART_MUTATION);

  const upload = useCallback(
    async (
      file: File,
      options: MultipartUploadOptions = {}
    ): Promise<UploadResult> => {
      const partSize = options.partSize ?? DEFAULT_PART_SIZE;
      const concurrency = options.concurrency ?? DEFAULT_CONCURRENCY;

      abortControllerRef.current = new AbortController();
      const { signal } = abortControllerRef.current;

      try {
        // Calculate parts
        const totalParts = Math.ceil(file.size / partSize);

        setState({
          status: 'preparing',
          progress: { loaded: 0, total: file.size, percentage: 0 },
          error: null,
          result: null,
          partsCompleted: 0,
          totalParts,
        });
        options.onStatusChange?.('preparing');

        // Initialize multipart upload
        const initResponse = await initMultipart({
          filename: file.name,
          folder: options.folderId,
          fileSize: file.size,
          contentType: file.type || 'application/octet-stream',
          alt: options.alt,
          caption: options.caption,
          description: options.description,
          copyright: options.copyright,
        });

        if (initResponse.error || !initResponse.data?.initFairuMultipartUpload) {
          throw new UploadError('Failed to initialize multipart upload', 'INIT_FAILED');
        }

        const { id: fileId, upload_id: uploadId } =
          initResponse.data.initFairuMultipartUpload;
        uploadStateRef.current = { fileId, uploadId };

        if (signal.aborted) {
          throw new UploadError('Upload aborted', 'ABORTED');
        }

        // Start uploading
        setState((prev) => ({ ...prev, status: 'uploading' }));
        options.onStatusChange?.('uploading');

        // Upload parts with concurrency control
        const completedParts: UploadPart[] = [];
        let uploadedBytes = 0;

        // Create part ranges
        const partRanges: Array<{ partNumber: number; start: number; end: number }> = [];
        for (let i = 0; i < totalParts; i++) {
          partRanges.push({
            partNumber: i + 1,
            start: i * partSize,
            end: Math.min((i + 1) * partSize, file.size),
          });
        }

        // Upload part function
        const uploadPart = async (partInfo: typeof partRanges[0]): Promise<UploadPart> => {
          if (signal.aborted) {
            throw new UploadError('Upload aborted', 'ABORTED');
          }

          // Get presigned URL for part
          const urlResponse = await getPartUrl({
            fileId,
            uploadId,
            partNumber: partInfo.partNumber,
          });

          if (urlResponse.error || !urlResponse.data?.getFairuMultipartPartUrl) {
            throw new UploadError(
              `Failed to get URL for part ${partInfo.partNumber}`,
              'PART_FAILED',
              partInfo.partNumber
            );
          }

          const { url } = urlResponse.data.getFairuMultipartPartUrl;

          // Upload part
          const partBlob = file.slice(partInfo.start, partInfo.end);
          const etag = await uploadPartWithProgress(
            url,
            partBlob,
            signal,
            (partLoaded) => {
              const totalLoaded = uploadedBytes + partLoaded;
              const progress: UploadProgress = {
                loaded: totalLoaded,
                total: file.size,
                percentage: Math.round((totalLoaded / file.size) * 100),
              };
              setState((prev) => ({ ...prev, progress }));
              options.onProgress?.(progress);
            }
          );

          uploadedBytes += partInfo.end - partInfo.start;

          setState((prev) => ({
            ...prev,
            partsCompleted: prev.partsCompleted + 1,
          }));

          return {
            partNumber: partInfo.partNumber,
            etag,
          };
        };

        // Execute with concurrency limit
        for (let i = 0; i < partRanges.length; i += concurrency) {
          const batch = partRanges.slice(i, i + concurrency);
          const results = await Promise.all(batch.map(uploadPart));
          completedParts.push(...results);
        }

        if (signal.aborted) {
          throw new UploadError('Upload aborted', 'ABORTED');
        }

        // Complete multipart upload
        setState((prev) => ({ ...prev, status: 'processing' }));
        options.onStatusChange?.('processing');

        const completeResponse = await completeMultipart({
          fileId,
          uploadId,
          parts: completedParts.map((p) => ({
            PartNumber: p.partNumber,
            ETag: p.etag,
          })),
        });

        if (
          completeResponse.error ||
          !completeResponse.data?.completeFairuMultipartUpload
        ) {
          throw new UploadError('Failed to complete multipart upload', 'COMPLETE_FAILED');
        }

        const result: UploadResult = {
          id: completeResponse.data.completeFairuMultipartUpload.id,
          url: completeResponse.data.completeFairuMultipartUpload.url,
        };

        setState({
          status: 'completed',
          progress: { loaded: file.size, total: file.size, percentage: 100 },
          error: null,
          result,
          partsCompleted: totalParts,
          totalParts,
        });
        options.onStatusChange?.('completed');
        uploadStateRef.current = null;

        return result;
      } catch (error) {
        const uploadError =
          error instanceof UploadError
            ? error
            : new UploadError(
                error instanceof Error ? error.message : 'Upload failed'
              );

        setState((prev) => ({
          ...prev,
          status: uploadError.isAborted() ? 'aborted' : 'error',
          error: uploadError,
        }));
        options.onStatusChange?.(
          uploadError.isAborted() ? 'aborted' : 'error'
        );

        throw uploadError;
      }
    },
    [initMultipart, getPartUrl, completeMultipart]
  );

  const abort = useCallback(async () => {
    abortControllerRef.current?.abort();

    // Abort the multipart upload on the server
    if (uploadStateRef.current) {
      const { fileId, uploadId } = uploadStateRef.current;
      await abortMultipart({ fileId, uploadId });
      uploadStateRef.current = null;
    }
  }, [abortMultipart]);

  const reset = useCallback(() => {
    abort();
    setState(initialState);
  }, [abort]);

  return {
    ...state,
    upload,
    abort,
    reset,
  };
}

/**
 * Upload a part with progress tracking.
 */
async function uploadPartWithProgress(
  url: string,
  blob: Blob,
  signal: AbortSignal,
  onProgress: (loaded: number) => void
): Promise<string> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        onProgress(event.loaded);
      }
    });

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const etag = xhr.getResponseHeader('ETag') ?? '';
        resolve(etag.replace(/"/g, ''));
      } else {
        reject(new UploadError(`Part upload failed with status ${xhr.status}`, 'PART_FAILED'));
      }
    });

    xhr.addEventListener('error', () => {
      reject(new UploadError('Part upload failed', 'NETWORK_ERROR'));
    });

    xhr.addEventListener('abort', () => {
      reject(new UploadError('Upload aborted', 'ABORTED'));
    });

    signal.addEventListener('abort', () => {
      xhr.abort();
    });

    xhr.open('PUT', url);
    xhr.send(blob);
  });
}
