import { FragmentBuilder } from '../FragmentBuilder';
import type { FragmentInterface, FragmentVariant } from '../types';

/**
 * Predefined fragments for FairuLicense.
 */
export const licenseFragments = {
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
    return FragmentBuilder.for('FairuLicense')
      .name('LicenseMinimal')
      .select(['id', 'name']);
  },

  default(): FragmentBuilder {
    return FragmentBuilder.for('FairuLicense')
      .name('LicenseDefault')
      .select(['id', 'name', 'type', 'start', 'end', 'active']);
  },

  full(): FragmentBuilder {
    return FragmentBuilder.for('FairuLicense')
      .name('LicenseFull')
      .select([
        'id',
        'name',
        'type',
        'start',
        'end',
        'active',
        'replaces',
        'created_at',
        'updated_at',
      ]);
  },
};
