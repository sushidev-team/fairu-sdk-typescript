import { useCallback, useMemo } from 'react';
import { useMutation } from 'urql';
import {
  CreateFairuGalleryDocument,
  UpdateFairuGalleryDocument,
  DeleteFairuGalleryDocument,
  CreateFairuGalleryShareLinkDocument,
  type CreateFairuGalleryMutation,
  type UpdateFairuGalleryMutation,
  type DeleteFairuGalleryMutation,
  type CreateFairuGalleryShareLinkMutation,
  type FairuGalleryDto,
  type FairuGallery,
} from '../../generated/graphql';
import { FairuError } from '../../errors';

// ============================================================================
// useCreateGallery
// ============================================================================

export interface UseCreateGalleryResult {
  createGallery: (data: FairuGalleryDto) => Promise<FairuGallery>;
  fetching: boolean;
  error: FairuError | null;
}

/**
 * Hook for creating a new gallery.
 */
export function useCreateGallery(): UseCreateGalleryResult {
  const [result, executeMutation] =
    useMutation<CreateFairuGalleryMutation>(CreateFairuGalleryDocument);

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const createGallery = useCallback(
    async (data: FairuGalleryDto): Promise<FairuGallery> => {
      const response = await executeMutation({ data });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      if (!response.data?.createFairuGallery) {
        throw new FairuError('Failed to create gallery');
      }

      return response.data.createFairuGallery as FairuGallery;
    },
    [executeMutation]
  );

  return { createGallery, fetching: result.fetching, error };
}

// ============================================================================
// useUpdateGallery
// ============================================================================

export interface UseUpdateGalleryResult {
  updateGallery: (data: FairuGalleryDto) => Promise<FairuGallery>;
  fetching: boolean;
  error: FairuError | null;
}

/**
 * Hook for updating a gallery.
 */
export function useUpdateGallery(): UseUpdateGalleryResult {
  const [result, executeMutation] =
    useMutation<UpdateFairuGalleryMutation>(UpdateFairuGalleryDocument);

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const updateGallery = useCallback(
    async (data: FairuGalleryDto): Promise<FairuGallery> => {
      const response = await executeMutation({ data });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      if (!response.data?.updateFairuGallery) {
        throw new FairuError('Failed to update gallery');
      }

      return response.data.updateFairuGallery as FairuGallery;
    },
    [executeMutation]
  );

  return { updateGallery, fetching: result.fetching, error };
}

// ============================================================================
// useDeleteGallery
// ============================================================================

export interface UseDeleteGalleryResult {
  deleteGallery: (id: string) => Promise<boolean>;
  fetching: boolean;
  error: FairuError | null;
}

/**
 * Hook for deleting a gallery.
 */
export function useDeleteGallery(): UseDeleteGalleryResult {
  const [result, executeMutation] =
    useMutation<DeleteFairuGalleryMutation>(DeleteFairuGalleryDocument);

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const deleteGallery = useCallback(
    async (id: string): Promise<boolean> => {
      const response = await executeMutation({ id });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      return response.data?.deleteFairuGallery ?? false;
    },
    [executeMutation]
  );

  return { deleteGallery, fetching: result.fetching, error };
}

// ============================================================================
// useCreateGalleryShareLink
// ============================================================================

export interface UseCreateGalleryShareLinkResult {
  createShareLink: (id: string) => Promise<string>;
  fetching: boolean;
  error: FairuError | null;
}

/**
 * Hook for creating a gallery share link.
 */
export function useCreateGalleryShareLink(): UseCreateGalleryShareLinkResult {
  const [result, executeMutation] =
    useMutation<CreateFairuGalleryShareLinkMutation>(
      CreateFairuGalleryShareLinkDocument
    );

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const createShareLink = useCallback(
    async (id: string): Promise<string> => {
      const response = await executeMutation({ id });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      if (!response.data?.createFairuGalleryShareLink) {
        throw new FairuError('Failed to create share link');
      }

      return response.data.createFairuGalleryShareLink;
    },
    [executeMutation]
  );

  return { createShareLink, fetching: result.fetching, error };
}
