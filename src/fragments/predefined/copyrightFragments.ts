import { FragmentBuilder } from '../FragmentBuilder';
import type { FragmentInterface, FragmentVariant } from '../types';

/**
 * Predefined fragments for FairuCopyright.
 */
export const copyrightFragments = {
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

  minimal(): FragmentBuilder {
    return FragmentBuilder.for('FairuCopyright')
      .name('CopyrightMinimal')
      .select(['id', 'name']);
  },

  default(): FragmentBuilder {
    return FragmentBuilder.for('FairuCopyright')
      .name('CopyrightDefault')
      .select(['id', 'name', 'email', 'phone', 'website', 'active']);
  },

  full(): FragmentBuilder {
    return FragmentBuilder.for('FairuCopyright')
      .name('CopyrightFull')
      .select([
        'id',
        'name',
        'email',
        'phone',
        'website',
        'active',
        'created_at',
        'updated_at',
      ]);
  },
};
