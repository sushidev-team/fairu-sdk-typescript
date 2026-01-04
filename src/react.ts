/**
 * React hooks and components for @fairu/sdk
 *
 * @example
 * ```tsx
 * import { FairuProvider, useAsset, useUpload } from '@fairu/sdk/react';
 *
 * function App() {
 *   return (
 *     <FairuProvider url="https://fairu.app/graphql" token="your-token">
 *       <YourApp />
 *     </FairuProvider>
 *   );
 * }
 * ```
 */

// Provider and Context
export {
  FairuProvider,
  useFairuContext,
  useFairuClient,
  useFragments,
  useFileProxyUrl as useFileProxyBaseUrl,
  type FairuProviderProps,
} from './client';

// Query Hooks
export {
  // Asset hooks
  useAsset,
  useAssetByPath,
  useAssets,
  useSearch,
  useMultipleAssets,
  type UseAssetOptions,
  type UseAssetResult,
  type UseAssetsOptions,
  type UseAssetsResult,
  type UseSearchOptions,
  // Folder hooks
  useFolder,
  useFolderByPath,
  type UseFolderOptions,
  type UseFolderResult,
  type UseFolderByPathOptions,
  type UseFolderByPathResult,
  // Gallery hooks
  useGallery,
  useGalleries,
  useGalleryItems,
  type UseGalleryOptions,
  type UseGalleryResult,
  type UseGalleriesOptions,
  type UseGalleriesResult,
  type UseGalleryItemsOptions,
  type UseGalleryItemsResult,
  // Copyright hooks
  useCopyright,
  useCopyrights,
  type UseCopyrightOptions,
  type UseCopyrightResult,
  type UseCopyrightsOptions,
  type UseCopyrightsResult,
  // License hooks
  useLicense,
  useLicenses,
  type UseLicenseOptions,
  type UseLicenseResult,
  type UseLicensesOptions,
  type UseLicensesResult,
  // Tenant hooks
  useTenant,
  useHealthCheck,
  useSupportedDomains,
  type UseTenantOptions,
  type UseTenantResult,
  type UseHealthCheckResult,
  type UseSupportedDomainsResult,
} from './hooks/queries';

// Mutation Hooks
export {
  useUpdateAsset,
  useDeleteAsset,
  type UseUpdateAssetResult,
  type UseDeleteAssetResult,
} from './hooks/mutations';

// Upload Hooks
export {
  useUpload,
  useMultipartUpload,
  type UseUploadState,
  type UseUploadResult,
  type UseMultipartUploadState,
  type UseMultipartUploadResult,
  type UploadStatus,
  type UploadProgress,
  type UploadOptions,
  type MultipartUploadOptions,
  type UploadResult,
} from './upload';

// FileProxy Hook
export {
  useFileProxyUrl,
  useResponsiveImageUrl,
  type UseFileProxyUrlOptions,
} from './fileproxy';
