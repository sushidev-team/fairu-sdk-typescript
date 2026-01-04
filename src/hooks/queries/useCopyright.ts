import { useMemo } from 'react';
import { useQuery, type UseQueryArgs } from 'urql';
import {
  FairuCopyrightDocument,
  FairuCopyrightsDocument,
  type FairuCopyrightQuery,
  type FairuCopyrightsQuery,
  type FairuCopyright,
  type DefaultPaginator,
} from '../../generated/graphql';
import { FairuError } from '../../errors';

/**
 * Options for the useCopyright hook.
 */
export interface UseCopyrightOptions {
  pause?: boolean;
  requestPolicy?: UseQueryArgs['requestPolicy'];
}

/**
 * Result of the useCopyright hook.
 */
export interface UseCopyrightResult {
  copyright: FairuCopyright | null;
  fetching: boolean;
  error: FairuError | null;
  stale: boolean;
  refetch: () => void;
}

/**
 * Hook for fetching a single copyright by ID.
 */
export function useCopyright(
  id: string | null | undefined,
  options: UseCopyrightOptions = {}
): UseCopyrightResult {
  const { pause = false, requestPolicy = 'cache-first' } = options;

  const [result, reexecute] = useQuery<FairuCopyrightQuery>({
    query: FairuCopyrightDocument,
    variables: { id },
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
    copyright: result.data?.fairuCopyright ?? null,
    fetching: result.fetching,
    error,
    stale: result.stale,
    refetch: () => reexecute({ requestPolicy: 'network-only' }),
  };
}

/**
 * Options for the useCopyrights hook.
 */
export interface UseCopyrightsOptions {
  page?: number;
  perPage?: number;
  pause?: boolean;
  requestPolicy?: UseQueryArgs['requestPolicy'];
}

/**
 * Result of the useCopyrights hook.
 */
export interface UseCopyrightsResult {
  copyrights: FairuCopyright[];
  pagination: DefaultPaginator | null;
  fetching: boolean;
  error: FairuError | null;
  stale: boolean;
  hasMore: boolean;
  total: number;
  refetch: () => void;
}

/**
 * Hook for fetching a paginated list of copyrights.
 */
export function useCopyrights(
  options: UseCopyrightsOptions = {}
): UseCopyrightsResult {
  const {
    page = 1,
    perPage = 20,
    pause = false,
    requestPolicy = 'cache-first',
  } = options;

  const [result, reexecute] = useQuery<FairuCopyrightsQuery>({
    query: FairuCopyrightsDocument,
    variables: { page, perPage },
    pause,
    requestPolicy,
  });

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const pagination = result.data?.fairuCopyrights?.paginatorInfo ?? null;

  return {
    copyrights: (result.data?.fairuCopyrights?.data ?? []) as FairuCopyright[],
    pagination,
    fetching: result.fetching,
    error,
    stale: result.stale,
    hasMore: pagination?.hasMorePages ?? false,
    total: pagination?.total ?? 0,
    refetch: () => reexecute({ requestPolicy: 'network-only' }),
  };
}
