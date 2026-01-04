import { FairuError } from './FairuError';

/**
 * Upload error codes.
 */
export type UploadErrorCode =
  | 'ABORTED'
  | 'NETWORK_ERROR'
  | 'INIT_FAILED'
  | 'PART_FAILED'
  | 'COMPLETE_FAILED'
  | 'SIZE_LIMIT_EXCEEDED'
  | 'INVALID_FILE_TYPE'
  | 'TIMEOUT';

/**
 * Error class for upload failures.
 */
export class UploadError extends FairuError {
  public readonly uploadCode?: UploadErrorCode;
  public readonly partNumber?: number;

  constructor(
    message: string,
    code?: UploadErrorCode,
    partNumber?: number
  ) {
    super(message, code);
    this.name = 'UploadError';
    this.uploadCode = code;
    this.partNumber = partNumber;
  }

  /**
   * Check if the upload was aborted by the user.
   */
  isAborted(): boolean {
    return this.uploadCode === 'ABORTED';
  }

  /**
   * Check if this is a network error.
   */
  override isNetworkError(): boolean {
    return this.uploadCode === 'NETWORK_ERROR';
  }

  /**
   * Check if initialization failed.
   */
  isInitFailed(): boolean {
    return this.uploadCode === 'INIT_FAILED';
  }

  /**
   * Check if a part upload failed.
   */
  isPartFailed(): boolean {
    return this.uploadCode === 'PART_FAILED';
  }

  /**
   * Check if completing the upload failed.
   */
  isCompleteFailed(): boolean {
    return this.uploadCode === 'COMPLETE_FAILED';
  }

  /**
   * Check if the file exceeded size limits.
   */
  isSizeLimitExceeded(): boolean {
    return this.uploadCode === 'SIZE_LIMIT_EXCEEDED';
  }

  /**
   * Check if the file type is invalid.
   */
  isInvalidFileType(): boolean {
    return this.uploadCode === 'INVALID_FILE_TYPE';
  }

  /**
   * Check if the upload timed out.
   */
  isTimeout(): boolean {
    return this.uploadCode === 'TIMEOUT';
  }

  /**
   * Check if this error is retryable.
   */
  isRetryable(): boolean {
    return (
      this.uploadCode === 'NETWORK_ERROR' ||
      this.uploadCode === 'PART_FAILED' ||
      this.uploadCode === 'TIMEOUT'
    );
  }

  /**
   * Convert to JSON for serialization.
   */
  override toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      uploadCode: this.uploadCode,
      partNumber: this.partNumber,
    };
  }
}
