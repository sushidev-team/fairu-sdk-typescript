import { useState, useCallback, useRef } from 'react';
import { useMutation } from 'urql';
import type {
  UploadStatus,
  UploadProgress,
  UploadOptions,
  UploadResult,
} from './types';
import { UploadError } from '../errors';

const CREATE_UPLOAD_LINK_MUTATION = `
  mutation CreateFairuUploadLink(
    $type: FairuUploadType!
    $filename: String!
    $folder: ID
    $alt: String
    $caption: String
    $description: String
    $focal_point: String
    $copyright: String
  ) {
    createFairuUploadLink(
      type: $type
      filename: $filename
      folder: $folder
      alt: $alt
      caption: $caption
      description: $description
      focal_point: $focal_point
      copyright: $copyright
    ) {
      id
      url
    }
  }
`;

/**
 * State for the upload hook.
 */
export interface UseUploadState {
  status: UploadStatus;
  progress: UploadProgress;
  error: UploadError | null;
  result: UploadResult | null;
}

/**
 * Result of the useUpload hook.
 */
export interface UseUploadResult extends UseUploadState {
  /**
   * Upload a file.
   */
  upload: (file: File, options?: UploadOptions) => Promise<UploadResult>;

  /**
   * Abort the current upload.
   */
  abort: () => void;

  /**
   * Reset the upload state.
   */
  reset: () => void;
}

const initialState: UseUploadState = {
  status: 'idle',
  progress: { loaded: 0, total: 0, percentage: 0 },
  error: null,
  result: null,
};

/**
 * Hook for uploading files to Fairu.
 *
 * @example
 * ```tsx
 * function FileUploader() {
 *   const { upload, progress, status, error, result } = useUpload();
 *
 *   const handleFileSelect = async (e) => {
 *     const file = e.target.files?.[0];
 *     if (!file) return;
 *
 *     try {
 *       const result = await upload(file, {
 *         folderId: 'target-folder-id',
 *         alt: 'Uploaded image',
 *       });
 *       console.log('Uploaded:', result);
 *     } catch (err) {
 *       console.error('Upload failed:', err);
 *     }
 *   };
 *
 *   return (
 *     <div>
 *       <input type="file" onChange={handleFileSelect} />
 *       {status === 'uploading' && (
 *         <progress value={progress.percentage} max={100} />
 *       )}
 *     </div>
 *   );
 * }
 * ```
 */
export function useUpload(): UseUploadResult {
  const [state, setState] = useState<UseUploadState>(initialState);
  const abortControllerRef = useRef<AbortController | null>(null);

  const [, createUploadLink] = useMutation(CREATE_UPLOAD_LINK_MUTATION);

  const upload = useCallback(
    async (file: File, options: UploadOptions = {}): Promise<UploadResult> => {
      // Create new abort controller
      abortControllerRef.current = new AbortController();
      const { signal } = abortControllerRef.current;

      try {
        // Set initial state
        setState({
          status: 'preparing',
          progress: { loaded: 0, total: file.size, percentage: 0 },
          error: null,
          result: null,
        });
        options.onStatusChange?.('preparing');

        // Create upload link
        const linkResponse = await createUploadLink({
          type: 'STANDARD',
          filename: file.name,
          folder: options.folderId,
          alt: options.alt,
          caption: options.caption,
          description: options.description,
          focal_point: options.focalPoint,
          copyright: options.copyright,
        });

        if (linkResponse.error || !linkResponse.data?.createFairuUploadLink) {
          throw new UploadError('Failed to create upload link', 'INIT_FAILED');
        }

        const { id, url } = linkResponse.data.createFairuUploadLink;

        // Check if aborted
        if (signal.aborted) {
          throw new UploadError('Upload aborted', 'ABORTED');
        }

        // Start upload
        setState((prev) => ({ ...prev, status: 'uploading' }));
        options.onStatusChange?.('uploading');

        // Upload file with progress tracking
        await uploadWithProgress(url, file, signal, (progress) => {
          setState((prev) => ({ ...prev, progress }));
          options.onProgress?.(progress);
        });

        // Check if aborted
        if (signal.aborted) {
          throw new UploadError('Upload aborted', 'ABORTED');
        }

        // Completed
        const result: UploadResult = { id, url };
        setState({
          status: 'completed',
          progress: { loaded: file.size, total: file.size, percentage: 100 },
          error: null,
          result,
        });
        options.onStatusChange?.('completed');

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
    [createUploadLink]
  );

  const abort = useCallback(() => {
    abortControllerRef.current?.abort();
  }, []);

  const reset = useCallback(() => {
    abortControllerRef.current?.abort();
    setState(initialState);
  }, []);

  return {
    ...state,
    upload,
    abort,
    reset,
  };
}

/**
 * Helper function for upload with progress tracking.
 */
async function uploadWithProgress(
  url: string,
  file: File,
  signal: AbortSignal,
  onProgress: (progress: UploadProgress) => void
): Promise<void> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        onProgress({
          loaded: event.loaded,
          total: event.total,
          percentage: Math.round((event.loaded / event.total) * 100),
        });
      }
    });

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve();
      } else {
        reject(new UploadError(`Upload failed with status ${xhr.status}`));
      }
    });

    xhr.addEventListener('error', () => {
      reject(new UploadError('Upload failed', 'NETWORK_ERROR'));
    });

    xhr.addEventListener('abort', () => {
      reject(new UploadError('Upload aborted', 'ABORTED'));
    });

    signal.addEventListener('abort', () => {
      xhr.abort();
    });

    xhr.open('PUT', url);
    xhr.setRequestHeader(
      'Content-Type',
      file.type || 'application/octet-stream'
    );
    xhr.send(file);
  });
}
