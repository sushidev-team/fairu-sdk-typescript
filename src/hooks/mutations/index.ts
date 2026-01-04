// Asset mutations
export { useUpdateAsset, type UseUpdateAssetResult } from './useUpdateAsset';

export {
  useDeleteAsset,
  useBlockAsset,
  useUnblockAsset,
  useRenameAsset,
  useMoveAsset,
  useDuplicateAsset,
  useReplaceAsset,
  type UseDeleteAssetResult,
  type UseBlockAssetResult,
  type UseUnblockAssetResult,
  type UseRenameAssetResult,
  type UseMoveAssetResult,
  type UseDuplicateAssetResult,
  type UseReplaceAssetResult,
} from './useAssetMutations';

// Folder mutations
export {
  useCreateFolder,
  useUpdateFolder,
  useDeleteFolder,
  useRenameFolder,
  useMoveFolder,
  type UseCreateFolderResult,
  type UseUpdateFolderResult,
  type UseDeleteFolderResult,
  type UseRenameFolderResult,
  type UseMoveFolderResult,
} from './useFolderMutations';

// Gallery mutations
export {
  useCreateGallery,
  useUpdateGallery,
  useDeleteGallery,
  useCreateGalleryShareLink,
  type UseCreateGalleryResult,
  type UseUpdateGalleryResult,
  type UseDeleteGalleryResult,
  type UseCreateGalleryShareLinkResult,
} from './useGalleryMutations';
