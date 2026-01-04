/**
 * Fragment variant types for predefined fragments.
 */
export type FragmentVariant = 'minimal' | 'default' | 'full';

/**
 * Interface for fragment implementations.
 */
export interface FragmentInterface {
  /**
   * Get the fragment name.
   */
  getName(): string;

  /**
   * Get the GraphQL type name this fragment applies to.
   */
  getTypeName(): string;

  /**
   * Get the list of selected fields.
   */
  getFields(): string[];

  /**
   * Convert to a GraphQL selection set string.
   */
  toGraphQL(): string;

  /**
   * Convert to a named fragment definition.
   */
  toFragmentDefinition(): string;

  /**
   * Convert to an inline fragment.
   */
  toInlineFragment(): string;
}

/**
 * Callback function for defining nested relations.
 */
export type FragmentCallback<T = FragmentBuilder> = (builder: T) => void;

/**
 * Field with arguments for GraphQL queries.
 */
export interface FieldWithArgs {
  name: string;
  args: Record<string, unknown>;
}

// Forward declaration to avoid circular import
import type { FragmentBuilder } from './FragmentBuilder';
