import { describe, it, expect } from 'vitest';
import { FragmentBuilder } from '../../../src/fragments/FragmentBuilder';

describe('FragmentBuilder', () => {
  describe('basic functionality', () => {
    it('creates a fragment for a type', () => {
      const fragment = FragmentBuilder.for('FairuAsset');

      expect(fragment.getTypeName()).toBe('FairuAsset');
      expect(fragment.getName()).toBe('FairuAssetFragment');
    });

    it('allows setting a custom name', () => {
      const fragment = FragmentBuilder.for('FairuAsset').name('CustomName');

      expect(fragment.getName()).toBe('CustomName');
    });

    it('selects multiple fields', () => {
      const fragment = FragmentBuilder.for('FairuAsset').select(['id', 'name', 'url']);

      expect(fragment.getFields()).toEqual(['id', 'name', 'url']);
    });

    it('adds single fields', () => {
      const fragment = FragmentBuilder.for('FairuAsset')
        .field('id')
        .field('name');

      expect(fragment.getFields()).toEqual(['id', 'name']);
    });
  });

  describe('GraphQL generation', () => {
    it('generates valid GraphQL selection set', () => {
      const fragment = FragmentBuilder.for('FairuAsset').select(['id', 'name']);

      const graphql = fragment.toGraphQL();

      expect(graphql).toContain('id');
      expect(graphql).toContain('name');
      expect(graphql).toMatch(/^\{/);
      expect(graphql).toMatch(/\}$/);
    });

    it('generates fragment definition', () => {
      const fragment = FragmentBuilder.for('FairuAsset')
        .name('AssetFields')
        .select(['id', 'name']);

      const definition = fragment.toFragmentDefinition();

      expect(definition).toContain('fragment AssetFields on FairuAsset');
      expect(definition).toContain('id');
      expect(definition).toContain('name');
    });

    it('defaults to { id } when no fields selected', () => {
      const fragment = FragmentBuilder.for('FairuAsset');

      const graphql = fragment.toGraphQL();

      expect(graphql).toBe('{ id }');
    });
  });

  describe('nested relations', () => {
    it('handles nested relations with callback', () => {
      const fragment = FragmentBuilder.for('FairuAsset')
        .select(['id', 'name'])
        .with('copyrights', (f) => f.select(['id', 'name']));

      const graphql = fragment.toGraphQL();

      expect(graphql).toContain('copyrights');
      expect(graphql).toContain('id');
      expect(graphql).toContain('name');
    });

    it('handles nested relations with array', () => {
      const fragment = FragmentBuilder.for('FairuAsset')
        .select(['id'])
        .with('copyrights', ['id', 'name', 'email']);

      const graphql = fragment.toGraphQL();

      expect(graphql).toContain('copyrights');
    });

    it('handles deeply nested relations', () => {
      const fragment = FragmentBuilder.for('FairuFolder')
        .select(['id', 'name'])
        .with('assets', (f) =>
          f.select(['id', 'name']).with('copyrights', ['id', 'name'])
        );

      const graphql = fragment.toGraphQL();

      expect(graphql).toContain('assets');
      expect(graphql).toContain('copyrights');
    });
  });

  describe('field arguments', () => {
    it('handles withArguments', () => {
      const fragment = FragmentBuilder.for('FairuAsset')
        .select(['id'])
        .withArguments('url', { width: 100, height: 100 }, []);

      const graphql = fragment.toGraphQL();

      expect(graphql).toContain('url(width: 100, height: 100)');
    });

    it('handles string arguments', () => {
      const fragment = FragmentBuilder.for('FairuAsset')
        .select(['id'])
        .withArguments('url', { format: 'webp' }, []);

      const graphql = fragment.toGraphQL();

      expect(graphql).toContain('url(format: "webp")');
    });

    it('handles boolean arguments', () => {
      const fragment = FragmentBuilder.for('FairuAsset')
        .select(['id'])
        .withArguments('url', { withStoredFocalPoint: true }, []);

      const graphql = fragment.toGraphQL();

      expect(graphql).toContain('withStoredFocalPoint: true');
    });

    it('skips null and undefined arguments', () => {
      const fragment = FragmentBuilder.for('FairuAsset')
        .select(['id'])
        .withArguments('url', { width: 100, height: undefined, format: null }, []);

      const graphql = fragment.toGraphQL();

      expect(graphql).toContain('width: 100');
      expect(graphql).not.toContain('height');
      expect(graphql).not.toContain('format');
    });
  });

  describe('utility methods', () => {
    it('converts to string', () => {
      const fragment = FragmentBuilder.for('FairuAsset').select(['id']);

      expect(String(fragment)).toContain('id');
    });

    it('clones correctly', () => {
      const original = FragmentBuilder.for('FairuAsset')
        .name('Original')
        .select(['id', 'name']);

      const cloned = original.clone();
      cloned.name('Cloned');
      cloned.field('url');

      expect(original.getName()).toBe('Original');
      expect(original.getFields()).toEqual(['id', 'name']);
      expect(cloned.getName()).toBe('Cloned');
      expect(cloned.getFields()).toEqual(['id', 'name', 'url']);
    });

    it('builds and returns self', () => {
      const fragment = FragmentBuilder.for('FairuAsset').select(['id']).build();

      expect(fragment).toBeInstanceOf(FragmentBuilder);
    });
  });
});
