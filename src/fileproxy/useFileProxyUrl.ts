import { useMemo } from 'react';
import { FileProxyBuilder } from './FileProxyBuilder';
import type { ImageFormat, FitMode } from './types';

/**
 * Options for the useFileProxyUrl hook.
 */
export interface UseFileProxyUrlOptions {
  /**
   * Width in pixels.
   */
  width?: number;

  /**
   * Height in pixels.
   */
  height?: number;

  /**
   * Quality (1-100).
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
   * Focal point string (e.g., "50,50" or "50-30-1.5").
   */
  focal?: string | null;

  /**
   * Return raw file without processing.
   */
  raw?: boolean;

  /**
   * Process SVG to raster.
   */
  processSvg?: boolean;

  /**
   * Custom base URL.
   */
  baseUrl?: string;

  /**
   * Skip URL generation if true.
   */
  skip?: boolean;
}

/**
 * React hook for generating FileProxy URLs.
 *
 * @example
 * ```tsx
 * function AssetImage({ asset }) {
 *   const url = useFileProxyUrl(asset.id, asset.name, {
 *     width: 800,
 *     format: 'webp',
 *     focal: asset.focal_point,
 *   });
 *
 *   return <img src={url} alt={asset.alt} />;
 * }
 * ```
 */
export function useFileProxyUrl(
  id: string | null | undefined,
  name: string | null | undefined,
  options: UseFileProxyUrlOptions = {}
): string | null {
  return useMemo(() => {
    // Skip if no id or name, or if explicitly skipped
    if (!id || !name || options.skip) {
      return null;
    }

    const builder = new FileProxyBuilder(id, name, options.baseUrl);

    // Apply options
    if (options.width !== undefined) {
      builder.width(options.width);
    }
    if (options.height !== undefined) {
      builder.height(options.height);
    }
    if (options.quality !== undefined) {
      builder.quality(options.quality);
    }
    if (options.format !== undefined) {
      builder.format(options.format);
    }
    if (options.fit !== undefined) {
      builder.fit(options.fit);
    }
    if (options.focal) {
      builder.focalFromString(options.focal);
    }
    if (options.raw) {
      builder.raw(true);
    }
    if (options.processSvg) {
      builder.processSvg(true);
    }

    return builder.build();
  }, [
    id,
    name,
    options.width,
    options.height,
    options.quality,
    options.format,
    options.fit,
    options.focal,
    options.raw,
    options.processSvg,
    options.baseUrl,
    options.skip,
  ]);
}

/**
 * React hook for generating responsive image srcset.
 *
 * @example
 * ```tsx
 * function ResponsiveImage({ asset }) {
 *   const { src, srcSet, sizes } = useResponsiveImageUrl(asset.id, asset.name, {
 *     widths: [400, 800, 1200, 1600],
 *     sizes: '(max-width: 600px) 100vw, 50vw',
 *   });
 *
 *   return <img src={src} srcSet={srcSet} sizes={sizes} alt={asset.alt} />;
 * }
 * ```
 */
export function useResponsiveImageUrl(
  id: string | null | undefined,
  name: string | null | undefined,
  options: {
    widths: number[];
    sizes?: string;
    format?: ImageFormat;
    quality?: number;
    focal?: string | null;
    baseUrl?: string;
  }
): {
  src: string | null;
  srcSet: string | null;
  sizes: string | undefined;
} {
  return useMemo(() => {
    if (!id || !name || options.widths.length === 0) {
      return { src: null, srcSet: null, sizes: undefined };
    }

    const sortedWidths = [...options.widths].sort((a, b) => a - b);
    const defaultWidth = sortedWidths[Math.floor(sortedWidths.length / 2)];

    // Generate default src
    const srcBuilder = new FileProxyBuilder(id, name, options.baseUrl)
      .width(defaultWidth);

    if (options.format) srcBuilder.format(options.format);
    if (options.quality) srcBuilder.quality(options.quality);
    if (options.focal) srcBuilder.focalFromString(options.focal);

    const src = srcBuilder.build();

    // Generate srcSet
    const srcSetParts = sortedWidths.map((width) => {
      const builder = new FileProxyBuilder(id, name, options.baseUrl)
        .width(width);

      if (options.format) builder.format(options.format);
      if (options.quality) builder.quality(options.quality);
      if (options.focal) builder.focalFromString(options.focal);

      return `${builder.build()} ${width}w`;
    });

    return {
      src,
      srcSet: srcSetParts.join(', '),
      sizes: options.sizes,
    };
  }, [
    id,
    name,
    options.widths,
    options.sizes,
    options.format,
    options.quality,
    options.focal,
    options.baseUrl,
  ]);
}
