/**
 * Upload status.
 */
export type UploadStatus =
  | 'idle'
  | 'preparing'
  | 'uploading'
  | 'processing'
  | 'completed'
  | 'error'
  | 'aborted';

/**
 * Upload progress information.
 */
export interface UploadProgress {
  /**
   * Bytes uploaded.
   */
  loaded: number;

  /**
   * Total bytes.
   */
  total: number;

  /**
   * Percentage (0-100).
   */
  percentage: number;
}

/**
 * Completed upload part.
 */
export interface UploadPart {
  partNumber: number;
  etag: string;
}

/**
 * Options for simple uploads.
 */
export interface UploadOptions {
  /**
   * Target folder ID.
   */
  folderId?: string;

  /**
   * Alt text for the file.
   */
  alt?: string;

  /**
   * Caption for the file.
   */
  caption?: string;

  /**
   * Description for the file.
   */
  description?: string;

  /**
   * Copyright text.
   */
  copyright?: string;

  /**
   * Focal point (e.g., "50,50").
   */
  focalPoint?: string;

  /**
   * Progress callback.
   */
  onProgress?: (progress: UploadProgress) => void;

  /**
   * Status change callback.
   */
  onStatusChange?: (status: UploadStatus) => void;

  /**
   * Abort signal for cancellation.
   */
  abortSignal?: AbortSignal;
}

/**
 * Options for multipart uploads.
 */
export interface MultipartUploadOptions extends UploadOptions {
  /**
   * Part size in bytes (default: 5MB).
   */
  partSize?: number;

  /**
   * Number of concurrent part uploads (default: 3).
   */
  concurrency?: number;
}

/**
 * Result of a completed upload.
 */
export interface UploadResult {
  /**
   * ID of the uploaded file.
   */
  id: string;

  /**
   * URL of the uploaded file.
   */
  url: string;
}
