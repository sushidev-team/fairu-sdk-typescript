import { useCallback, useMemo } from 'react';
import { useMutation } from 'urql';
import {
  UpdateFairuFileDocument,
  type UpdateFairuFileMutation,
  type FairuFileDto,
  type FairuAsset,
} from '../../generated/graphql';
import { FairuError } from '../../errors';

export interface UseUpdateAssetResult {
  /**
   * Update an asset.
   */
  updateAsset: (data: FairuFileDto) => Promise<FairuAsset>;

  /**
   * The last updated asset.
   */
  data: FairuAsset | null;

  /**
   * Whether the mutation is currently executing.
   */
  fetching: boolean;

  /**
   * Error if the mutation failed.
   */
  error: FairuError | null;
}

/**
 * Hook for updating an asset.
 *
 * @example
 * ```tsx
 * function AssetEditor({ assetId }: { assetId: string }) {
 *   const { updateAsset, fetching, error } = useUpdateAsset();
 *
 *   const handleSave = async () => {
 *     try {
 *       const updated = await updateAsset({
 *         id: assetId,
 *         alt: 'New alt text',
 *       });
 *       console.log('Updated:', updated);
 *     } catch (err) {
 *       console.error('Failed to update:', err);
 *     }
 *   };
 *
 *   return (
 *     <button onClick={handleSave} disabled={fetching}>
 *       {fetching ? 'Saving...' : 'Save'}
 *     </button>
 *   );
 * }
 * ```
 */
export function useUpdateAsset(): UseUpdateAssetResult {
  const [result, executeMutation] = useMutation<UpdateFairuFileMutation>(
    UpdateFairuFileDocument
  );

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const updateAsset = useCallback(
    async (data: FairuFileDto): Promise<FairuAsset> => {
      const response = await executeMutation({ data });

      if (response.error) {
        throw FairuError.fromCombinedError(response.error);
      }

      if (!response.data?.updateFairuFile) {
        throw new FairuError('Failed to update asset');
      }

      return response.data.updateFairuFile as FairuAsset;
    },
    [executeMutation]
  );

  return {
    updateAsset,
    data: (result.data?.updateFairuFile as FairuAsset) ?? null,
    fetching: result.fetching,
    error,
  };
}
