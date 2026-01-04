import { useMemo } from 'react';
import { useQuery, type UseQueryArgs } from 'urql';
import {
  FairuFolderDocument,
  FairuFolderByPathDocument,
  type FairuFolderQuery,
  type FairuFolderByPathQuery,
  type FairuSortingDirection,
} from '../../generated/graphql';
import { FairuError } from '../../errors';

/**
 * Entry data from folder query (asset or folder).
 */
export type FolderEntryData = NonNullable<
  NonNullable<FairuFolderQuery['fairuFolder']>['data']
>[number];

/**
 * Pagination data.
 */
export type FolderPaginationData = NonNullable<
  NonNullable<FairuFolderQuery['fairuFolder']>['paginatorInfo']
>;

/**
 * Options for the useFolder hook.
 */
export interface UseFolderOptions {
  folder?: string | null;
  search?: string | null;
  globalSearch?: boolean;
  orderBy?: string;
  orderDirection?: FairuSortingDirection;
  onlyFolder?: boolean;
  page?: number;
  perPage?: number;
  pause?: boolean;
  requestPolicy?: UseQueryArgs['requestPolicy'];
}

/**
 * Result of the useFolder hook.
 */
export interface UseFolderResult {
  entries: FolderEntryData[];
  pagination: FolderPaginationData | null;
  fetching: boolean;
  error: FairuError | null;
  stale: boolean;
  hasMore: boolean;
  total: number;
  refetch: () => void;
}

/**
 * Hook for fetching folder contents (assets and subfolders).
 *
 * @example
 * ```tsx
 * function FolderBrowser({ folderId }: { folderId?: string }) {
 *   const { entries, pagination, fetching, error } = useFolder({
 *     folder: folderId,
 *     page: 1,
 *     perPage: 50,
 *   });
 *
 *   if (fetching) return <div>Loading...</div>;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <div>
 *       {entries.map(entry => (
 *         <div key={entry.id}>
 *           {entry.__typename === 'FairuFolder' ? '📁' : '📄'} {entry.name}
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 */
export function useFolder(options: UseFolderOptions = {}): UseFolderResult {
  const {
    folder,
    search,
    globalSearch,
    orderBy,
    orderDirection,
    onlyFolder,
    page = 1,
    perPage = 50,
    pause = false,
    requestPolicy = 'cache-first',
  } = options;

  const [result, reexecute] = useQuery<FairuFolderQuery>({
    query: FairuFolderDocument,
    variables: {
      folder,
      search,
      globalSearch,
      orderBy,
      orderDirection,
      onlyFolder,
      page,
      perPage,
    },
    pause,
    requestPolicy,
  });

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const pagination = result.data?.fairuFolder?.paginatorInfo ?? null;

  return {
    entries: result.data?.fairuFolder?.data ?? [],
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
 * Folder data from path query.
 */
export type FolderByPathData = NonNullable<
  FairuFolderByPathQuery['fairuFolderByPath']
>;

/**
 * Options for the useFolderByPath hook.
 */
export interface UseFolderByPathOptions {
  pause?: boolean;
  requestPolicy?: UseQueryArgs['requestPolicy'];
}

/**
 * Result of the useFolderByPath hook.
 */
export interface UseFolderByPathResult {
  folder: FolderByPathData | null;
  fetching: boolean;
  error: FairuError | null;
  stale: boolean;
  refetch: () => void;
}

/**
 * Hook for fetching a folder by its path.
 */
export function useFolderByPath(
  path: string | null | undefined,
  options: UseFolderByPathOptions = {}
): UseFolderByPathResult {
  const { pause = false, requestPolicy = 'cache-first' } = options;

  const [result, reexecute] = useQuery<FairuFolderByPathQuery>({
    query: FairuFolderByPathDocument,
    variables: { path: path ?? '' },
    pause: pause || path === null || path === undefined,
    requestPolicy,
  });

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  return {
    folder: result.data?.fairuFolderByPath ?? null,
    fetching: result.fetching,
    error,
    stale: result.stale,
    refetch: () => reexecute({ requestPolicy: 'network-only' }),
  };
}
