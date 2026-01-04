/**
 * Image format options.
 */
export type ImageFormat = 'jpg' | 'jpeg' | 'png' | 'webp';

/**
 * Fit mode for image cropping.
 */
export type FitMode = 'cover' | 'contain';

/**
 * Video quality versions.
 */
export type VideoVersion = 'low' | 'medium' | 'high';

/**
 * FileProxy URL parameters.
 */
export interface FileProxyParams {
  /**
   * Width in pixels (1-6000).
   */
  width?: number;

  /**
   * Height in pixels (1-6000).
   */
  height?: number;

  /**
   * Quality (1-100, default: 95).
   */
  quality?: number;

  /**
   * Output format.
   */
  format?: ImageFormat;

  /**
   * Fit mode for cropping.
   */
  fit?: FitMode;

  /**
   * Focal point for smart cropping (x-y-zoom).
   */
  focal?: string;

  /**
   * Return raw/original file without processing.
   */
  raw?: boolean;

  /**
   * Process SVG to raster WebP.
   */
  process_svg?: boolean;

  /**
   * Video quality version.
   */
  version?: VideoVersion;

  /**
   * Video timestamp for frame extraction (HH:MM:SS.mmm).
   */
  timestamp?: string;

  /**
   * HMAC-SHA256 signature for protected files.
   */
  signature?: string;

  /**
   * Unix timestamp for signature validation.
   */
  signature_date?: string;
}

/**
 * Options for building signed URLs.
 */
export interface SignOptions {
  /**
   * Secret key for HMAC signature.
   */
  secretKey: string;

  /**
   * Expiration time in seconds (optional).
   */
  expiresIn?: number;
}
