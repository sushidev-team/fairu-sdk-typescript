import { FragmentBuilder } from '../FragmentBuilder';
import type { FragmentInterface, FragmentVariant } from '../types';

/**
 * Predefined fragments for FairuFolder.
 */
export const folderFragments = {
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
    return FragmentBuilder.for('FairuFolder')
      .name('FolderMinimal')
      .select(['id', 'name']);
  },

  /**
   * Default fragment with common fields.
   */
  default(): FragmentBuilder {
    return FragmentBuilder.for('FairuFolder')
      .name('FolderDefault')
      .select([
        'id',
        'name',
        'parent_id',
        'created_at',
        'updated_at',
      ]);
  },

  /**
   * Full fragment with all fields and relations.
   */
  full(): FragmentBuilder {
    return FragmentBuilder.for('FairuFolder')
      .name('FolderFull')
      .select([
        'id',
        'name',
        'parent_id',
        'auto_assign_copyright',
        'created_at',
        'updated_at',
      ])
      .with('parent', (f) => f.select(['id', 'name']))
      .with('copyright', (f) => f.select(['id', 'name']));
  },

  /**
   * Fragment with nested content (folders and assets).
   */
  withContent(): FragmentBuilder {
    return FragmentBuilder.for('FairuFolder')
      .name('FolderWithContent')
      .select([
        'id',
        'name',
        'parent_id',
        'created_at',
        'updated_at',
      ])
      .with('folders', (f) => f.select(['id', 'name', 'parent_id']))
      .with('assets', (f) =>
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
