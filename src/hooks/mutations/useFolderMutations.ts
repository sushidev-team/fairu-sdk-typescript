import { useCallback, useMemo } from 'react';
import { useMutation } from 'urql';
import {
  CreateFairuFolderDocument,
  UpdateFairuFolderDocument,
  DeleteFairuFolderDocument,
  RenameFairuFolderDocument,
  MoveFairuFolderDocument,
  type CreateFairuFolderMutation,
  type UpdateFairuFolderMutation,
  type DeleteFairuFolderMutation,
  type RenameFairuFolderMutation,
  type MoveFairuFolderMutation,
  type FairuFolderDto,
  type FairuFolder,
} from '../../generated/graphql';
import { FairuError } from '../../errors';

// ============================================================================
// useCreateFolder
// ============================================================================

export interface UseCreateFolderResult {
  createFolder: (data: FairuFolderDto) => Promise<FairuFolder>;
  fetching: boolean;
  error: FairuError | null;
}

/**
 * Hook for creating a new folder.
 *
 * @example
 * ```tsx
 * function CreateFolderButton({ parentId }: { parentId?: string }) {
 *   const { createFolder, fetching } = useCreateFolder();
 *
 *   const handleCreate = async () => {
 *     const folder = await createFolder({
 *       name: 'New Folder',
 *       parent: parentId,
 *     });
 *     console.log('Created folder:', folder.id);
 *   };
 *
 *   return (
 *     <button onClick={handleCreate} disabled={fetching}>
 *       {fetching ? 'Creating...' : 'New Folder'}
 *     </button>
 *   );
 * }
 * ```
 */
export function useCreateFolder(): UseCreateFolderResult {
  const [result, executeMutation] =
    useMutation<CreateFairuFolderMutation>(CreateFairuFolderDocument);

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const createFolder = useCallback(
    async (data: FairuFolderDto): Promise<FairuFolder> => {
      const response = await executeMutation({ data });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      if (!response.data?.createFairuFolder) {
        throw new FairuError('Failed to create folder');
      }

      return response.data.createFairuFolder as FairuFolder;
    },
    [executeMutation]
  );

  return { createFolder, fetching: result.fetching, error };
}

// ============================================================================
// useUpdateFolder
// ============================================================================

export interface UseUpdateFolderResult {
  updateFolder: (data: FairuFolderDto) => Promise<FairuFolder>;
  fetching: boolean;
  error: FairuError | null;
}

/**
 * Hook for updating a folder.
 */
export function useUpdateFolder(): UseUpdateFolderResult {
  const [result, executeMutation] =
    useMutation<UpdateFairuFolderMutation>(UpdateFairuFolderDocument);

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const updateFolder = useCallback(
    async (data: FairuFolderDto): Promise<FairuFolder> => {
      const response = await executeMutation({ data });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      if (!response.data?.updateFairuFolder) {
        throw new FairuError('Failed to update folder');
      }

      return response.data.updateFairuFolder as FairuFolder;
    },
    [executeMutation]
  );

  return { updateFolder, fetching: result.fetching, error };
}

// ============================================================================
// useDeleteFolder
// ============================================================================

export interface UseDeleteFolderResult {
  deleteFolder: (id: string) => Promise<boolean>;
  fetching: boolean;
  error: FairuError | null;
}

/**
 * Hook for deleting a folder.
 */
export function useDeleteFolder(): UseDeleteFolderResult {
  const [result, executeMutation] =
    useMutation<DeleteFairuFolderMutation>(DeleteFairuFolderDocument);

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const deleteFolder = useCallback(
    async (id: string): Promise<boolean> => {
      const response = await executeMutation({ id });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      return response.data?.deleteFairuFolder ?? false;
    },
    [executeMutation]
  );

  return { deleteFolder, fetching: result.fetching, error };
}

// ============================================================================
// useRenameFolder
// ============================================================================

export interface UseRenameFolderResult {
  renameFolder: (id: string, name: string) => Promise<FairuFolder>;
  fetching: boolean;
  error: FairuError | null;
}

/**
 * Hook for renaming a folder.
 */
export function useRenameFolder(): UseRenameFolderResult {
  const [result, executeMutation] =
    useMutation<RenameFairuFolderMutation>(RenameFairuFolderDocument);

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const renameFolder = useCallback(
    async (id: string, name: string): Promise<FairuFolder> => {
      const response = await executeMutation({ id, name });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      if (!response.data?.renameFairuFolder) {
        throw new FairuError('Failed to rename folder');
      }

      return response.data.renameFairuFolder as FairuFolder;
    },
    [executeMutation]
  );

  return { renameFolder, fetching: result.fetching, error };
}

// ============================================================================
// useMoveFolder
// ============================================================================

export interface UseMoveFolderResult {
  moveFolder: (id: string, parentId?: string | null) => Promise<boolean>;
  fetching: boolean;
  error: FairuError | null;
}

/**
 * Hook for moving a folder to a different parent.
 */
export function useMoveFolder(): UseMoveFolderResult {
  const [result, executeMutation] =
    useMutation<MoveFairuFolderMutation>(MoveFairuFolderDocument);

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const moveFolder = useCallback(
    async (id: string, parent?: string | null): Promise<boolean> => {
      const response = await executeMutation({ id, parent });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      return response.data?.moveFairuFolder ?? false;
    },
    [executeMutation]
  );

  return { moveFolder, fetching: result.fetching, error };
}
