import { FragmentBuilder } from './FragmentBuilder';
import type { FragmentInterface, FragmentVariant } from './types';
import {
  assetFragments,
  folderFragments,
  galleryFragments,
  copyrightFragments,
  licenseFragments,
} from './predefined';

/**
 * Registry for managing and accessing GraphQL fragments.
 *
 * @example
 * ```typescript
 * const fragments = new FragmentRegistry();
 *
 * // Use predefined fragments
 * const assetFragment = fragments.asset('full');
 *
 * // Register custom fragments
 * fragments.register('myCustomAsset',
 *   FragmentBuilder.for('FairuAsset')
 *     .select(['id', 'name', 'custom_field'])
 * );
 *
 * // Get custom fragment
 * const custom = fragments.get('myCustomAsset');
 * ```
 */
export class FragmentRegistry {
  private customFragments: Map<string, FragmentInterface> = new Map();

  /**
   * Get an asset fragment by variant.
   */
  asset(variant: FragmentVariant = 'default'): FragmentInterface {
    return assetFragments.get(variant);
  }

  /**
   * Get an asset fragment with custom URL options.
   */
  assetWithUrls(options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'jpg' | 'jpeg' | 'png' | 'webp';
    fit?: 'cover' | 'contain';
    withStoredFocalPoint?: boolean;
  }): FragmentInterface {
    return assetFragments.withUrls(options);
  }

  /**
   * Get a folder fragment by variant.
   */
  folder(variant: FragmentVariant = 'default'): FragmentInterface {
    return folderFragments.get(variant);
  }

  /**
   * Get a folder fragment with content.
   */
  folderWithContent(): FragmentInterface {
    return folderFragments.withContent();
  }

  /**
   * Get a gallery fragment by variant.
   */
  gallery(variant: FragmentVariant = 'default'): FragmentInterface {
    return galleryFragments.get(variant);
  }

  /**
   * Get a copyright fragment by variant.
   */
  copyright(variant: FragmentVariant = 'default'): FragmentInterface {
    return copyrightFragments.get(variant);
  }

  /**
   * Get a license fragment by variant.
   */
  license(variant: FragmentVariant = 'default'): FragmentInterface {
    return licenseFragments.get(variant);
  }

  /**
   * Register a custom fragment.
   */
  register(name: string, fragment: FragmentInterface): this {
    this.customFragments.set(name, fragment);
    return this;
  }

  /**
   * Get a custom fragment by name.
   */
  get(name: string): FragmentInterface | undefined {
    return this.customFragments.get(name);
  }

  /**
   * Check if a custom fragment exists.
   */
  has(name: string): boolean {
    return this.customFragments.has(name);
  }

  /**
   * Remove a custom fragment.
   */
  remove(name: string): boolean {
    return this.customFragments.delete(name);
  }

  /**
   * Clear all custom fragments.
   */
  clear(): void {
    this.customFragments.clear();
  }

  /**
   * Get all custom fragment names.
   */
  getCustomFragmentNames(): string[] {
    return Array.from(this.customFragments.keys());
  }

  /**
   * Create a new FragmentBuilder.
   */
  builder(typeName: string): FragmentBuilder {
    return FragmentBuilder.for(typeName);
  }
}

/**
 * Default fragment registry instance.
 */
export const fragments = new FragmentRegistry();
