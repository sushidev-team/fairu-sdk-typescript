import { FragmentBuilder } from '../FragmentBuilder';
import type { FragmentInterface, FragmentVariant } from '../types';

/**
 * URL generation options for asset fragments.
 */
export interface AssetUrlOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'jpg' | 'jpeg' | 'png' | 'webp';
  fit?: 'cover' | 'contain';
  withStoredFocalPoint?: boolean;
}

/**
 * Predefined fragments for FairuAsset.
 */
export const assetFragments = {
  /**
   * Get a fragment by variant name.
   */
  get(variant: FragmentVariant = 'default'): FragmentInterface {
    switch (variant) {
      case 'minimal':
        return this.minimal();
      case 'full':
        return this.full();
      default:
        return this.default();
    }
  },

  /**
   * Minimal fragment with just id and name.
   */
  minimal(): FragmentBuilder {
    return FragmentBuilder.for('FairuAsset')
      .name('AssetMinimal')
      .select(['id', 'name']);
  },

  /**
   * Default fragment with common fields.
   */
  default(): FragmentBuilder {
    return FragmentBuilder.for('FairuAsset')
      .name('AssetDefault')
      .select([
        'id',
        'name',
        'mime',
        'alt',
        'caption',
        'description',
        'url',
        'width',
        'height',
        'blurhash',
        'focal_point',
        'blocked',
        'has_error',
        'created_at',
        'updated_at',
      ]);
  },

  /**
   * Full fragment with all fields and relations.
   */
  full(): FragmentBuilder {
    return FragmentBuilder.for('FairuAsset')
      .name('AssetFull')
      .select([
        'id',
        'name',
        'mime',
        'alt',
        'caption',
        'description',
        'copyright_text',
        'url',
        'width',
        'height',
        'original_width',
        'original_height',
        'blurhash',
        'focal_point',
        'blocked',
        'has_error',
        'size',
        'versions',
        'created_at',
        'updated_at',
      ])
      .with('copyrights', (f) =>
        f.select(['id', 'name', 'email', 'phone', 'website', 'active'])
      )
      .with('licenses', (f) =>
        f.select(['id', 'name', 'type', 'start', 'end', 'active'])
      );
  },

  /**
   * Fragment with parameterized URL generation.
   */
  withUrls(options?: AssetUrlOptions): FragmentBuilder {
    const builder = FragmentBuilder.for('FairuAsset')
      .name('AssetWithUrls')
      .select([
        'id',
        'name',
        'mime',
        'alt',
        'width',
        'height',
        'blurhash',
        'focal_point',
      ]);

    if (options && Object.keys(options).length > 0) {
      builder.withArguments('url', {
        width: options.width,
        height: options.height,
        quality: options.quality,
        format: options.format,
        fit: options.fit,
        withStoredFocalPoint: options.withStoredFocalPoint ?? true,
      });
    } else {
      builder.field('url');
    }

    return builder;
  },
};
