import { useMemo } from 'react';
import { useQuery, type UseQueryArgs } from 'urql';
import {
  FairuFilesDocument,
  FairuSearchDocument,
  FairuMultipleFilesDocument,
  type FairuFilesQuery,
  type FairuSearchQuery,
  type FairuMultipleFilesQuery,
  type FairuSortingDirection,
} from '../../generated/graphql';
import { FairuError } from '../../errors';

/**
 * Asset data from list query.
 */
export type AssetListData = NonNullable<
  NonNullable<FairuFilesQuery['fairuFiles']>['data']
>[number];

/**
 * Pagination data.
 */
export type PaginationData = NonNullable<
  NonNullable<FairuFilesQuery['fairuFiles']>['paginatorInfo']
>;

/**
 * Options for the useAssets hook.
 */
export interface UseAssetsOptions {
  folder?: string | null;
  page?: number;
  perPage?: number;
  pause?: boolean;
  requestPolicy?: UseQueryArgs['requestPolicy'];
}

/**
 * Result of the useAssets hook.
 */
export interface UseAssetsResult {
  assets: AssetListData[];
  pagination: PaginationData | null;
  fetching: boolean;
  error: FairuError | null;
  stale: boolean;
  hasMore: boolean;
  total: number;
  refetch: () => void;
}

/**
 * Hook for fetching a paginated list of assets.
 */
export function useAssets(options: UseAssetsOptions = {}): UseAssetsResult {
  const {
    folder,
    page = 1,
    perPage = 20,
    pause = false,
    requestPolicy = 'cache-first',
  } = options;

  const [result, reexecute] = useQuery<FairuFilesQuery>({
    query: FairuFilesDocument,
    variables: { page, perPage, folder },
    pause,
    requestPolicy,
  });

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const pagination = result.data?.fairuFiles?.paginatorInfo ?? null;

  return {
    assets: result.data?.fairuFiles?.data ?? [],
    pagination,
    fetching: result.fetching,
    error,
    stale: result.stale,
    hasMore: pagination?.hasMorePages ?? false,
    total: pagination?.total ?? 0,
    refetch: () => reexecute({ requestPolicy: 'network-only' }),
  };
}

/**
 * Options for the useSearch hook.
 */
export interface UseSearchOptions {
  page?: number;
  perPage?: number;
  orderBy?: string;
  orderDirection?: FairuSortingDirection;
  pause?: boolean;
  requestPolicy?: UseQueryArgs['requestPolicy'];
}

/**
 * Hook for searching assets.
 */
export function useSearch(
  search: string | null | undefined,
  options: UseSearchOptions = {}
): UseAssetsResult {
  const {
    page = 1,
    perPage = 20,
    orderBy,
    orderDirection,
    pause = false,
    requestPolicy = 'cache-first',
  } = options;

  const [result, reexecute] = useQuery<FairuSearchQuery>({
    query: FairuSearchDocument,
    variables: { search: search ?? '', page, perPage, orderBy, orderDirection },
    pause: pause || !search,
    requestPolicy,
  });

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const pagination = result.data?.fairuSearch?.paginatorInfo ?? null;

  return {
    assets: result.data?.fairuSearch?.data ?? [],
    pagination,
    fetching: result.fetching,
    error,
    stale: result.stale,
    hasMore: pagination?.hasMorePages ?? false,
    total: pagination?.total ?? 0,
    refetch: () => reexecute({ requestPolicy: 'network-only' }),
  };
}

/**
 * Hook for fetching multiple assets by their IDs.
 */
export function useMultipleAssets(
  ids: string[] | null | undefined,
  options: Pick<UseAssetsOptions, 'pause' | 'requestPolicy'> = {}
): Omit<UseAssetsResult, 'pagination' | 'hasMore' | 'total'> {
  const { pause = false, requestPolicy = 'cache-first' } = options;

  const [result, reexecute] = useQuery<FairuMultipleFilesQuery>({
    query: FairuMultipleFilesDocument,
    variables: { ids: ids ?? [] },
    pause: pause || !ids?.length,
    requestPolicy,
  });

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  // Filter out nulls from the result
  const assets = (result.data?.fairuMultipleFiles ?? []).filter(
    (a): a is NonNullable<typeof a> => a !== null
  );

  return {
    assets,
    fetching: result.fetching,
    error,
    stale: result.stale,
    refetch: () => reexecute({ requestPolicy: 'network-only' }),
  };
}
