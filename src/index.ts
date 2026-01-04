/**
 * @fairu/sdk - TypeScript SDK for Fairu GraphQL API
 *
 * @example
 * ```typescript
 * import { createFairuClient, FairuProvider, useAsset } from '@fairu/sdk';
 *
 * const client = createFairuClient({
 *   url: 'https://fairu.app/graphql',
 *   token: 'your-token',
 * });
 * ```
 */

// Client
export {
  createFairuClient,
  FairuProvider,
  useFairuContext,
  useFairuClient,
  useFragments,
  useFileProxyUrl as useFileProxyBaseUrl,
  createCacheExchange,
  DEFAULT_CONFIG,
  type Client,
  type FairuClientConfig,
  type FairuProviderProps,
  type CacheConfig,
  type RetryConfig,
} from './client';

// Fragments
export {
  FragmentBuilder,
  FragmentRegistry,
  fragments,
  assetFragments,
  folderFragments,
  galleryFragments,
  copyrightFragments,
  licenseFragments,
  type FragmentInterface,
  type FragmentVariant,
  type FragmentCallback,
} from './fragments';

// Errors
export {
  FairuError,
  GraphQLError,
  AuthenticationError,
  ValidationError,
  UploadError,
  type UploadErrorCode,
} from './errors';

// Generated Types
export type * from './generated/graphql';
