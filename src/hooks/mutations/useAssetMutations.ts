import { useCallback, useMemo } from 'react';
import { useMutation } from 'urql';
import {
  DeleteFairuFileDocument,
  BlockFairuFileDocument,
  UnblockFairuFileDocument,
  RenameFairuFileDocument,
  MoveFairuFileDocument,
  DuplicateFairuFileDocument,
  ReplaceFairuFileDocument,
  type DeleteFairuFileMutation,
  type BlockFairuFileMutation,
  type UnblockFairuFileMutation,
  type RenameFairuFileMutation,
  type MoveFairuFileMutation,
  type DuplicateFairuFileMutation,
  type ReplaceFairuFileMutation,
  type FairuAsset,
  type FairuUploadLink,
} from '../../generated/graphql';
import { FairuError } from '../../errors';

// ============================================================================
// useDeleteAsset
// ============================================================================

export interface UseDeleteAssetResult {
  deleteAsset: (id: string) => Promise<boolean>;
  fetching: boolean;
  error: FairuError | null;
}

/**
 * Hook for deleting an asset.
 */
export function useDeleteAsset(): UseDeleteAssetResult {
  const [result, executeMutation] =
    useMutation<DeleteFairuFileMutation>(DeleteFairuFileDocument);

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const deleteAsset = useCallback(
    async (id: string): Promise<boolean> => {
      const response = await executeMutation({ id });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      return response.data?.deleteFairuFile ?? false;
    },
    [executeMutation]
  );

  return { deleteAsset, fetching: result.fetching, error };
}

// ============================================================================
// useBlockAsset
// ============================================================================

export interface UseBlockAssetResult {
  blockAsset: (id: string) => Promise<boolean>;
  fetching: boolean;
  error: FairuError | null;
}

/**
 * Hook for blocking an asset.
 */
export function useBlockAsset(): UseBlockAssetResult {
  const [result, executeMutation] =
    useMutation<BlockFairuFileMutation>(BlockFairuFileDocument);

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const blockAsset = useCallback(
    async (id: string): Promise<boolean> => {
      const response = await executeMutation({ id });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      return response.data?.blockFairuFile ?? false;
    },
    [executeMutation]
  );

  return { blockAsset, fetching: result.fetching, error };
}

// ============================================================================
// useUnblockAsset
// ============================================================================

export interface UseUnblockAssetResult {
  unblockAsset: (id: string) => Promise<boolean>;
  fetching: boolean;
  error: FairuError | null;
}

/**
 * Hook for unblocking an asset.
 */
export function useUnblockAsset(): UseUnblockAssetResult {
  const [result, executeMutation] =
    useMutation<UnblockFairuFileMutation>(UnblockFairuFileDocument);

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const unblockAsset = useCallback(
    async (id: string): Promise<boolean> => {
      const response = await executeMutation({ id });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      return response.data?.unblockFairuFile ?? false;
    },
    [executeMutation]
  );

  return { unblockAsset, fetching: result.fetching, error };
}

// ============================================================================
// useRenameAsset
// ============================================================================

export interface UseRenameAssetResult {
  renameAsset: (id: string, name: string) => Promise<FairuAsset>;
  fetching: boolean;
  error: FairuError | null;
}

/**
 * Hook for renaming an asset.
 */
export function useRenameAsset(): UseRenameAssetResult {
  const [result, executeMutation] =
    useMutation<RenameFairuFileMutation>(RenameFairuFileDocument);

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const renameAsset = useCallback(
    async (id: string, name: string): Promise<FairuAsset> => {
      const response = await executeMutation({ id, name });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      if (!response.data?.renameFairuFile) {
        throw new FairuError('Failed to rename asset');
      }

      return response.data.renameFairuFile as FairuAsset;
    },
    [executeMutation]
  );

  return { renameAsset, fetching: result.fetching, error };
}

// ============================================================================
// useMoveAsset
// ============================================================================

export interface UseMoveAssetResult {
  moveAsset: (id: string, parentId?: string | null) => Promise<boolean>;
  fetching: boolean;
  error: FairuError | null;
}

/**
 * Hook for moving an asset to a different folder.
 */
export function useMoveAsset(): UseMoveAssetResult {
  const [result, executeMutation] =
    useMutation<MoveFairuFileMutation>(MoveFairuFileDocument);

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const moveAsset = useCallback(
    async (id: string, parent?: string | null): Promise<boolean> => {
      const response = await executeMutation({ id, parent });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      return response.data?.moveFairuFile ?? false;
    },
    [executeMutation]
  );

  return { moveAsset, fetching: result.fetching, error };
}

// ============================================================================
// useDuplicateAsset
// ============================================================================

export interface UseDuplicateAssetResult {
  duplicateAsset: (id: string, parentId?: string | null) => Promise<boolean>;
  fetching: boolean;
  error: FairuError | null;
}

/**
 * Hook for duplicating an asset.
 */
export function useDuplicateAsset(): UseDuplicateAssetResult {
  const [result, executeMutation] =
    useMutation<DuplicateFairuFileMutation>(DuplicateFairuFileDocument);

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const duplicateAsset = useCallback(
    async (id: string, parent?: string | null): Promise<boolean> => {
      const response = await executeMutation({ id, parent });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      return response.data?.duplicateFairuFile ?? false;
    },
    [executeMutation]
  );

  return { duplicateAsset, fetching: result.fetching, error };
}

// ============================================================================
// useReplaceAsset
// ============================================================================

export interface UseReplaceAssetResult {
  replaceAsset: (id: string) => Promise<FairuUploadLink>;
  fetching: boolean;
  error: FairuError | null;
}

/**
 * Hook for replacing an asset file (returns upload link).
 */
export function useReplaceAsset(): UseReplaceAssetResult {
  const [result, executeMutation] =
    useMutation<ReplaceFairuFileMutation>(ReplaceFairuFileDocument);

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const replaceAsset = useCallback(
    async (id: string): Promise<FairuUploadLink> => {
      const response = await executeMutation({ id });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      if (!response.data?.replaceFairuFile) {
        throw new FairuError('Failed to get replace upload link');
      }

      return response.data.replaceFairuFile;
    },
    [executeMutation]
  );

  return { replaceAsset, fetching: result.fetching, error };
}
