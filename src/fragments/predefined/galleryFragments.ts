import { FragmentBuilder } from '../FragmentBuilder';
import type { FragmentInterface, FragmentVariant } from '../types';

/**
 * Predefined fragments for FairuGallery.
 */
export const galleryFragments = {
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
    return FragmentBuilder.for('FairuGallery')
      .name('GalleryMinimal')
      .select(['id', 'name']);
  },

  /**
   * Default fragment with common fields.
   */
  default(): FragmentBuilder {
    return FragmentBuilder.for('FairuGallery')
      .name('GalleryDefault')
      .select([
        'id',
        'name',
        'description',
        'public',
        'sorting_field',
        'sorting_direction',
        'created_at',
        'updated_at',
      ]);
  },

  /**
   * Full fragment with all fields and relations.
   */
  full(): FragmentBuilder {
    return FragmentBuilder.for('FairuGallery')
      .name('GalleryFull')
      .select([
        'id',
        'name',
        'description',
        'public',
        'sorting_field',
        'sorting_direction',
        'share_link',
        'created_at',
        'updated_at',
      ])
      .with('items', (f) =>
        f.select([
          'id',
          'name',
          'mime',
          'url',
          'width',
          'height',
          'blurhash',
        ])
      );
  },
};
