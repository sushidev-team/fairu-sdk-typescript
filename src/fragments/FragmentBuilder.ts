import type { FragmentInterface, FragmentCallback } from './types';

/**
 * Fluent builder for creating GraphQL fragments.
 *
 * @example
 * ```typescript
 * const fragment = FragmentBuilder.for('FairuAsset')
 *   .name('AssetWithCopyrights')
 *   .select(['id', 'name', 'url'])
 *   .with('copyrights', (f) => f.select(['id', 'name']))
 *   .build();
 *
 * console.log(fragment.toGraphQL());
 * // { id name url copyrights { id name } }
 * ```
 */
export class FragmentBuilder implements FragmentInterface {
  private fields: string[] = [];
  private relations: Map<string, FragmentBuilder | string[]> = new Map();
  private fragmentName?: string;

  private constructor(private readonly typeName: string) {}

  /**
   * Create a new FragmentBuilder for a GraphQL type.
   */
  static for(typeName: string): FragmentBuilder {
    return new FragmentBuilder(typeName);
  }

  /**
   * Set a custom name for the fragment.
   */
  name(name: string): this {
    this.fragmentName = name;
    return this;
  }

  /**
   * Select multiple fields.
   */
  select(fields: string[]): this {
    this.fields = [...this.fields, ...fields];
    return this;
  }

  /**
   * Add a single field.
   */
  field(field: string): this {
    this.fields.push(field);
    return this;
  }

  /**
   * Add a relation with nested fields.
   *
   * @param relation - The relation name
   * @param definition - Either a callback, array of fields, or a FragmentInterface
   */
  with(
    relation: string,
    definition: FragmentCallback | FragmentInterface | string[]
  ): this {
    if (typeof definition === 'function') {
      const builder = new FragmentBuilder(relation);
      definition(builder);
      this.relations.set(relation, builder);
    } else if (Array.isArray(definition)) {
      const builder = new FragmentBuilder(relation);
      builder.select(definition);
      this.relations.set(relation, builder);
    } else {
      // FragmentInterface - wrap in a builder
      const builder = new FragmentBuilder(definition.getTypeName());
      builder.select(definition.getFields());
      this.relations.set(relation, builder);
    }
    return this;
  }

  /**
   * Add a relation with arguments.
   *
   * @param relation - The relation name
   * @param args - Arguments to pass to the field
   * @param definition - Either a callback, array of fields, or empty for scalar result
   */
  withArguments(
    relation: string,
    args: Record<string, unknown>,
    definition: FragmentCallback | FragmentInterface | string[] = []
  ): this {
    const fieldWithArgs = this.buildFieldWithArgs(relation, args);

    if (Array.isArray(definition) && definition.length === 0) {
      // Scalar field with arguments
      this.fields.push(fieldWithArgs);
    } else {
      this.with(fieldWithArgs, definition);
    }

    return this;
  }

  /**
   * Build a field string with arguments.
   */
  private buildFieldWithArgs(
    field: string,
    args: Record<string, unknown>
  ): string {
    const nonNullArgs = Object.entries(args).filter(
      ([, value]) => value !== undefined && value !== null
    );

    if (nonNullArgs.length === 0) {
      return field;
    }

    const argsString = nonNullArgs
      .map(([key, value]) => {
        if (typeof value === 'boolean') {
          return `${key}: ${value}`;
        }
        if (typeof value === 'number') {
          return `${key}: ${value}`;
        }
        if (typeof value === 'string') {
          return `${key}: "${value}"`;
        }
        // Arrays and objects
        return `${key}: ${JSON.stringify(value)}`;
      })
      .join(', ');

    return `${field}(${argsString})`;
  }

  /**
   * Get the fragment name.
   */
  getName(): string {
    return this.fragmentName ?? `${this.typeName}Fragment`;
  }

  /**
   * Get the GraphQL type name.
   */
  getTypeName(): string {
    return this.typeName;
  }

  /**
   * Get the selected fields.
   */
  getFields(): string[] {
    return [...this.fields];
  }

  /**
   * Get the relations.
   */
  getRelations(): Map<string, FragmentBuilder | string[]> {
    return new Map(this.relations);
  }

  /**
   * Convert to a GraphQL selection set.
   */
  toGraphQL(): string {
    return this.buildSelection();
  }

  /**
   * Convert to a named fragment definition.
   */
  toFragmentDefinition(): string {
    const selection = this.buildSelection();
    return `fragment ${this.getName()} on ${this.typeName} ${selection}`;
  }

  /**
   * Convert to an inline fragment.
   */
  toInlineFragment(): string {
    return this.buildSelection();
  }

  /**
   * Build the selection set string.
   */
  private buildSelection(): string {
    const lines: string[] = [...this.fields];

    this.relations.forEach((builder, relation) => {
      if (builder instanceof FragmentBuilder) {
        const nestedSelection = builder.toGraphQL();
        lines.push(`${relation} ${nestedSelection}`);
      }
    });

    if (lines.length === 0) {
      return '{ id }';
    }

    return `{\n  ${lines.join('\n  ')}\n}`;
  }

  /**
   * Build and return this fragment (returns self for chaining).
   */
  build(): this {
    return this;
  }

  /**
   * Convert to string (alias for toGraphQL).
   */
  toString(): string {
    return this.toGraphQL();
  }

  /**
   * Clone this builder.
   */
  clone(): FragmentBuilder {
    const cloned = new FragmentBuilder(this.typeName);
    cloned.fragmentName = this.fragmentName;
    cloned.fields = [...this.fields];
    cloned.relations = new Map(this.relations);
    return cloned;
  }

  /**
   * Merge another fragment's fields into this one.
   */
  merge(other: FragmentInterface): this {
    this.fields = [...this.fields, ...other.getFields()];
    return this;
  }
}
