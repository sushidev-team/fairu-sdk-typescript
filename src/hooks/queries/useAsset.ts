import { useMemo } from 'react';
import { useQuery, type UseQueryArgs } from 'urql';
import {
  FairuFileDocument,
  FairuFileByPathDocument,
  type FairuFileQuery,
  type FairuFileByPathQuery,
} from '../../generated/graphql';
import { FairuError } from '../../errors';

/**
 * Asset data returned from query (subset of full FairuAsset).
 */
export type AssetData = NonNullable<FairuFileQuery['fairuFile']>;

/**
 * Options for the useAsset hook.
 */
export interface UseAssetOptions {
  pause?: boolean;
  requestPolicy?: UseQueryArgs['requestPolicy'];
}

/**
 * Result of the useAsset hook.
 */
export interface UseAssetResult {
  asset: AssetData | null;
  fetching: boolean;
  error: FairuError | null;
  stale: boolean;
  refetch: () => void;
}

/**
 * Hook for fetching a single asset by ID.
 *
 * @example
 * ```tsx
 * function AssetDetail({ id }: { id: string }) {
 *   const { asset, fetching, error } = useAsset(id);
 *
 *   if (fetching) return <div>Loading...</div>;
 *   if (error) return <div>Error: {error.message}</div>;
 *   if (!asset) return <div>Not found</div>;
 *
 *   return <img src={asset.url ?? ''} alt={asset.alt ?? ''} />;
 * }
 * ```
 */
export function useAsset(
  id: string | null | undefined,
  options: UseAssetOptions = {}
): UseAssetResult {
  const { pause = false, requestPolicy = 'cache-first' } = options;

  const [result, reexecute] = useQuery<FairuFileQuery>({
    query: FairuFileDocument,
    variables: { id: id ?? '' },
    pause: pause || !id,
    requestPolicy,
  });

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  return {
    asset: result.data?.fairuFile ?? null,
    fetching: result.fetching,
    error,
    stale: result.stale,
    refetch: () => reexecute({ requestPolicy: 'network-only' }),
  };
}

/**
 * Hook for fetching a single asset by path.
 */
export function useAssetByPath(
  path: string | null | undefined,
  options: UseAssetOptions = {}
): UseAssetResult {
  const { pause = false, requestPolicy = 'cache-first' } = options;

  const [result, reexecute] = useQuery<FairuFileByPathQuery>({
    query: FairuFileByPathDocument,
    variables: { path: path ?? '' },
    pause: pause || !path,
    requestPolicy,
  });

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  return {
    asset: result.data?.fairuFileByPath ?? null,
    fetching: result.fetching,
    error,
    stale: result.stale,
    refetch: () => reexecute({ requestPolicy: 'network-only' }),
  };
}
