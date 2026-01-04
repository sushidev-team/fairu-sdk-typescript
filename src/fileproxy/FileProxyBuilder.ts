import type {
  FileProxyParams,
  ImageFormat,
  FitMode,
  VideoVersion,
  SignOptions,
} from './types';

/**
 * Default FileProxy base URL.
 */
const DEFAULT_BASE_URL = 'https://files.fairu.app';

/**
 * Fluent builder for constructing FileProxy URLs.
 *
 * @example
 * ```typescript
 * const url = new FileProxyBuilder('asset-uuid', 'image.jpg')
 *   .width(800)
 *   .height(600)
 *   .quality(85)
 *   .format('webp')
 *   .build();
 *
 * // Result: https://files.fairu.app/asset-uuid/image.jpg?width=800&height=600&quality=85&format=webp
 * ```
 */
export class FileProxyBuilder {
  private params: FileProxyParams = {};
  private baseUrl: string;

  constructor(
    private readonly id: string,
    private readonly name: string,
    baseUrl?: string
  ) {
    this.baseUrl = baseUrl ?? DEFAULT_BASE_URL;
  }

  /**
   * Set the width in pixels (1-6000).
   */
  width(value: number): this {
    if (value < 1 || value > 6000) {
      throw new Error('Width must be between 1 and 6000');
    }
    this.params.width = value;
    return this;
  }

  /**
   * Set the height in pixels (1-6000).
   */
  height(value: number): this {
    if (value < 1 || value > 6000) {
      throw new Error('Height must be between 1 and 6000');
    }
    this.params.height = value;
    return this;
  }

  /**
   * Set dimensions (width and height).
   */
  dimensions(width: number, height: number): this {
    return this.width(width).height(height);
  }

  /**
   * Set the quality (1-100, default: 95).
   */
  quality(value: number): this {
    if (value < 1 || value > 100) {
      throw new Error('Quality must be between 1 and 100');
    }
    this.params.quality = value;
    return this;
  }

  /**
   * Set the output format.
   */
  format(value: ImageFormat): this {
    this.params.format = value;
    return this;
  }

  /**
   * Set the fit mode for cropping.
   */
  fit(value: FitMode): this {
    this.params.fit = value;
    return this;
  }

  /**
   * Set the focal point for smart cropping.
   *
   * @param x - X position (0-100%)
   * @param y - Y position (0-100%)
   * @param zoom - Zoom multiplier (1.0-100.0)
   */
  focal(x: number, y: number, zoom: number = 1): this {
    if (x < 0 || x > 100) {
      throw new Error('Focal X must be between 0 and 100');
    }
    if (y < 0 || y > 100) {
      throw new Error('Focal Y must be between 0 and 100');
    }
    if (zoom < 1 || zoom > 100) {
      throw new Error('Focal zoom must be between 1 and 100');
    }
    this.params.focal = `${x}-${y}-${zoom}`;
    return this;
  }

  /**
   * Set focal point from a string (e.g., "50-30-1.5" or "50,50").
   */
  focalFromString(value: string | null | undefined): this {
    if (!value) return this;

    // Handle comma-separated format (e.g., "50,50")
    if (value.includes(',')) {
      const [x, y] = value.split(',').map(Number);
      if (!isNaN(x) && !isNaN(y)) {
        return this.focal(x, y);
      }
    }

    // Handle dash-separated format (e.g., "50-30-1.5")
    if (value.includes('-')) {
      const parts = value.split('-').map(Number);
      if (parts.length >= 2 && !parts.some(isNaN)) {
        return this.focal(parts[0], parts[1], parts[2] ?? 1);
      }
    }

    return this;
  }

  /**
   * Return raw/original file without processing.
   */
  raw(value: boolean = true): this {
    this.params.raw = value;
    return this;
  }

  /**
   * Process SVG to raster WebP.
   */
  processSvg(value: boolean = true): this {
    this.params.process_svg = value;
    return this;
  }

  /**
   * Set video quality version.
   */
  version(value: VideoVersion): this {
    this.params.version = value;
    return this;
  }

  /**
   * Set video timestamp for frame extraction.
   *
   * @param value - Timestamp in format HH:MM:SS.mmm
   */
  timestamp(value: string): this {
    this.params.timestamp = value;
    return this;
  }

  /**
   * Set timestamp from seconds.
   */
  timestampFromSeconds(seconds: number): this {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    const ms = Math.round((seconds % 1) * 1000);

    const hh = hours.toString().padStart(2, '0');
    const mm = minutes.toString().padStart(2, '0');
    const ss = Math.floor(secs).toString().padStart(2, '0');
    const mmm = ms.toString().padStart(3, '0');

    return this.timestamp(`${hh}:${mm}:${ss}.${mmm}`);
  }

  /**
   * Sign the URL for protected files.
   */
  sign(options: SignOptions | string): this {
    const secretKey = typeof options === 'string' ? options : options.secretKey;
    const now = Math.floor(Date.now() / 1000);

    // Build the string to sign
    const pathToSign = `/${this.id}/${this.name}`;
    const stringToSign = `${pathToSign}${now}`;

    // Create HMAC-SHA256 signature
    // Note: In browser, you'd use SubtleCrypto. For Node.js, you'd use crypto.
    // This is a placeholder - actual implementation depends on environment.
    const signature = this.createHmacSignature(stringToSign, secretKey);

    this.params.signature = signature;
    this.params.signature_date = now.toString();

    return this;
  }

  /**
   * Create HMAC-SHA256 signature (environment-specific implementation needed).
   */
  private createHmacSignature(_data: string, _key: string): string {
    // This is a placeholder. In a real implementation:
    // - Browser: Use SubtleCrypto API
    // - Node.js: Use crypto module
    // For now, we'll throw an error indicating async signing is needed
    throw new Error(
      'Synchronous signing not available. Use signAsync() instead or provide pre-computed signature.'
    );
  }

  /**
   * Set a pre-computed signature.
   */
  withSignature(signature: string, signatureDate: string | number): this {
    this.params.signature = signature;
    this.params.signature_date =
      typeof signatureDate === 'number'
        ? signatureDate.toString()
        : signatureDate;
    return this;
  }

  /**
   * Build the URL string.
   */
  build(): string {
    const path = `${this.baseUrl}/${this.id}/${encodeURIComponent(this.name)}`;
    const queryParams = this.buildQueryString();

    if (queryParams) {
      return `${path}?${queryParams}`;
    }

    return path;
  }

  /**
   * Build the query string from params.
   */
  private buildQueryString(): string {
    const entries: [string, string][] = [];

    if (this.params.width !== undefined) {
      entries.push(['width', this.params.width.toString()]);
    }
    if (this.params.height !== undefined) {
      entries.push(['height', this.params.height.toString()]);
    }
    if (this.params.quality !== undefined) {
      entries.push(['quality', this.params.quality.toString()]);
    }
    if (this.params.format !== undefined) {
      entries.push(['format', this.params.format]);
    }
    if (this.params.fit !== undefined) {
      entries.push(['fit', this.params.fit]);
    }
    if (this.params.focal !== undefined) {
      entries.push(['focal', this.params.focal]);
    }
    if (this.params.raw) {
      entries.push(['raw', 'true']);
    }
    if (this.params.process_svg) {
      entries.push(['process_svg', 'true']);
    }
    if (this.params.version !== undefined) {
      entries.push(['version', this.params.version]);
    }
    if (this.params.timestamp !== undefined) {
      entries.push(['timestamp', this.params.timestamp]);
    }
    if (this.params.signature !== undefined) {
      entries.push(['signature', this.params.signature]);
    }
    if (this.params.signature_date !== undefined) {
      entries.push(['signature_date', this.params.signature_date]);
    }

    return entries.map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&');
  }

  /**
   * Get the current parameters.
   */
  getParams(): FileProxyParams {
    return { ...this.params };
  }

  /**
   * Convert to string (alias for build).
   */
  toString(): string {
    return this.build();
  }
}

/**
 * Create a new FileProxyBuilder.
 *
 * @example
 * ```typescript
 * import { fileProxy } from '@fairu/sdk/fileproxy';
 *
 * const url = fileProxy('asset-uuid', 'image.jpg')
 *   .width(800)
 *   .format('webp')
 *   .build();
 * ```
 */
export function fileProxy(
  id: string,
  name: string,
  baseUrl?: string
): FileProxyBuilder {
  return new FileProxyBuilder(id, name, baseUrl);
}

/**
 * Utility functions for FileProxy.
 */
export const fileProxyUtils = {
  /**
   * Build a meta URL for getting image dimensions.
   */
  meta(id: string, baseUrl: string = DEFAULT_BASE_URL): string {
    return `${baseUrl}/meta/${id}`;
  },

  /**
   * Build an HLS video streaming URL.
   */
  hls(
    tenantId: string,
    assetId: string,
    path: string,
    baseUrl: string = DEFAULT_BASE_URL
  ): string {
    return `${baseUrl}/hls/${tenantId}/${assetId}/${path}`;
  },

  /**
   * Build an HLS decryption key URL.
   */
  hlsKey(
    id: string,
    quality: VideoVersion,
    filename: string,
    baseUrl: string = DEFAULT_BASE_URL
  ): string {
    return `${baseUrl}/hls/key/${id}/${quality}/${filename}`;
  },
};
