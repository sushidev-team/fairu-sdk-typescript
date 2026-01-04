import { cacheExchange as graphcacheExchange } from '@urql/exchange-graphcache';
import type { CacheConfig } from './config';

/**
 * Entity key extractors for Fairu types.
 */
const DEFAULT_KEYS: Record<string, (data: unknown) => string | null> = {
  FairuAsset: (data) => (data as { id: string }).id,
  FairuFolder: (data) => (data as { id: string }).id,
  FairuGallery: (data) => (data as { id: string }).id,
  FairuCopyright: (data) => (data as { id: string }).id,
  FairuLicense: (data) => (data as { id: string }).id,
  FairuWorkflow: (data) => (data as { id: string }).id,
  FairuUser: (data) => (data as { id: string }).id,
  FairuRole: (data) => (data as { id: string }).id,
  FairuDisk: (data) => (data as { id: string }).id,
  FairuTenant: (data) => (data as { id: string }).id,
  FairuDmca: (data) => (data as { id: string }).id,
  FairuRakuCredential: (data) => (data as { id: string }).id,
  // Don't cache paginator info as entity
  DefaultPaginator: () => null,
  PaginatorInfo: () => null,
};

/**
 * Create a Graphcache exchange with Fairu-specific configuration.
 */
export function createCacheExchange(config: CacheConfig = {}) {
  return graphcacheExchange({
    keys: {
      ...DEFAULT_KEYS,
      ...config.keys,
    },

    resolvers: {
      Query: {
        // Resolve single entity queries from cache
        fairuFile: (_, args) => ({
          __typename: 'FairuAsset',
          id: args.id as string,
        }),
        fairuFolder: (_, args) => ({
          __typename: 'FairuFolder',
          id: args.id as string,
        }),
        fairuGallery: (_, args) => ({
          __typename: 'FairuGallery',
          id: args.id as string,
        }),
        fairuCopyright: (_, args) => ({
          __typename: 'FairuCopyright',
          id: args.id as string,
        }),
        fairuLicense: (_, args) => ({
          __typename: 'FairuLicense',
          id: args.id as string,
        }),
        fairuWorkflow: (_, args) => ({
          __typename: 'FairuWorkflow',
          id: args.id as string,
        }),
        fairuUser: (_, args) => ({
          __typename: 'FairuUser',
          id: args.id as string,
        }),
        fairuRole: (_, args) => ({
          __typename: 'FairuRole',
          id: args.id as string,
        }),
        fairuDisk: (_, args) => ({
          __typename: 'FairuDisk',
          id: args.id as string,
        }),
        fairuDmca: (_, args) => ({
          __typename: 'FairuDmca',
          id: args.id as string,
        }),
      },
    },

    updates: {
      Mutation: {
        // Asset mutations
        updateFairuFile: (_result, _args, _cache) => {
          // Graphcache automatically updates matching entities
        },

        deleteFairuFile: (result, args, cache) => {
          if (result.deleteFairuFile) {
            cache.invalidate({
              __typename: 'FairuAsset',
              id: args.id as string,
            });
          }
        },

        blockFairuFile: (_result, _args, _cache) => {
          // Entity is automatically updated
        },

        unblockFairuFile: (_result, _args, _cache) => {
          // Entity is automatically updated
        },

        // Folder mutations
        createFairuFolder: (_result, _args, cache) => {
          // Invalidate folder list queries to refetch
          cache.invalidate('Query', 'fairuFolders');
        },

        updateFairuFolder: (_result, _args, _cache) => {
          // Entity is automatically updated
        },

        deleteFairuFolder: (result, args, cache) => {
          if (result.deleteFairuFolder) {
            cache.invalidate({
              __typename: 'FairuFolder',
              id: args.id as string,
            });
            cache.invalidate('Query', 'fairuFolders');
          }
        },

        // Gallery mutations
        createFairuGallery: (_result, _args, cache) => {
          cache.invalidate('Query', 'fairuGalleries');
        },

        deleteFairuGallery: (result, args, cache) => {
          if (result.deleteFairuGallery) {
            cache.invalidate({
              __typename: 'FairuGallery',
              id: args.id as string,
            });
            cache.invalidate('Query', 'fairuGalleries');
          }
        },

        // Copyright mutations
        createFairuCopyright: (_result, _args, cache) => {
          cache.invalidate('Query', 'fairuCopyrights');
        },

        deleteFairuCopyright: (result, args, cache) => {
          if (result.deleteFairuCopyright) {
            cache.invalidate({
              __typename: 'FairuCopyright',
              id: args.id as string,
            });
            cache.invalidate('Query', 'fairuCopyrights');
          }
        },

        // License mutations
        createFairuLicense: (_result, _args, cache) => {
          cache.invalidate('Query', 'fairuLicenses');
        },

        deleteFairuLicense: (result, args, cache) => {
          if (result.deleteFairuLicense) {
            cache.invalidate({
              __typename: 'FairuLicense',
              id: args.id as string,
            });
            cache.invalidate('Query', 'fairuLicenses');
          }
        },

        // Upload mutations
        completeFairuMultipartUpload: (_result, _args, cache) => {
          // Invalidate file list to show new upload
          cache.invalidate('Query', 'fairuFiles');
        },

        // Workflow mutations
        createFairuWorkflow: (_result, _args, cache) => {
          cache.invalidate('Query', 'fairuWorkflows');
        },

        deleteFairuWorkflow: (result, args, cache) => {
          if (result.deleteFairuWorkflow) {
            cache.invalidate({
              __typename: 'FairuWorkflow',
              id: args.id as string,
            });
            cache.invalidate('Query', 'fairuWorkflows');
          }
        },

        // User mutations
        deleteFairuUser: (result, args, cache) => {
          if (result.deleteFairuUser) {
            cache.invalidate({
              __typename: 'FairuUser',
              id: args.id as string,
            });
            cache.invalidate('Query', 'fairuUsers');
          }
        },

        // Role mutations
        createFairuRole: (_result, _args, cache) => {
          cache.invalidate('Query', 'fairuRoles');
        },

        deleteFairuRole: (result, args, cache) => {
          if (result.deleteFairuRole) {
            cache.invalidate({
              __typename: 'FairuRole',
              id: args.id as string,
            });
            cache.invalidate('Query', 'fairuRoles');
          }
        },

        // Disk mutations
        createFairuDisk: (_result, _args, cache) => {
          cache.invalidate('Query', 'fairuDisks');
        },

        deleteFairuDisk: (result, args, cache) => {
          if (result.deleteFairuDisk) {
            cache.invalidate({
              __typename: 'FairuDisk',
              id: args.id as string,
            });
            cache.invalidate('Query', 'fairuDisks');
          }
        },
      },
    },

    optimistic: {
      // Optimistic updates for better UX
      blockFairuFile: (variables) => {
        return {
          __typename: 'FairuAsset',
          id: variables.id as string,
          blocked: true,
        };
      },

      unblockFairuFile: (variables) => {
        return {
          __typename: 'FairuAsset',
          id: variables.id as string,
          blocked: false,
        };
      },
    },
  });
}
