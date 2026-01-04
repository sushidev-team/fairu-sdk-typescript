import { useMemo } from 'react';
import { useQuery, type UseQueryArgs } from 'urql';
import {
  FairuGalleryDocument,
  FairuGalleriesDocument,
  FairuGalleryItemsPaginatedDocument,
  type FairuGalleryQuery,
  type FairuGalleriesQuery,
  type FairuGalleryItemsPaginatedQuery,
} from '../../generated/graphql';
import { FairuError } from '../../errors';

/**
 * Gallery data from query.
 */
export type GalleryData = NonNullable<FairuGalleryQuery['fairuGallery']>;

/**
 * Gallery list item data.
 */
export type GalleryListData = NonNullable<
  NonNullable<FairuGalleriesQuery['fairuGalleries']>['data']
>[number];

/**
 * Gallery pagination data.
 */
export type GalleryPaginationData = NonNullable<
  NonNullable<FairuGalleriesQuery['fairuGalleries']>['paginatorInfo']
>;

/**
 * Options for the useGallery hook.
 */
export interface UseGalleryOptions {
  pause?: boolean;
  requestPolicy?: UseQueryArgs['requestPolicy'];
}

/**
 * Result of the useGallery hook.
 */
export interface UseGalleryResult {
  gallery: GalleryData | null;
  fetching: boolean;
  error: FairuError | null;
  stale: boolean;
  refetch: () => void;
}

/**
 * Hook for fetching a single gallery by ID.
 */
export function useGallery(
  id: string | null | undefined,
  options: UseGalleryOptions = {}
): UseGalleryResult {
  const { pause = false, requestPolicy = 'cache-first' } = options;

  const [result, reexecute] = useQuery<FairuGalleryQuery>({
    query: FairuGalleryDocument,
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
    gallery: result.data?.fairuGallery ?? null,
    fetching: result.fetching,
    error,
    stale: result.stale,
    refetch: () => reexecute({ requestPolicy: 'network-only' }),
  };
}

/**
 * Options for the useGalleries hook.
 */
export interface UseGalleriesOptions {
  tenants: string[];
  page?: number;
  perPage?: number;
  from?: string;
  until?: string;
  search?: string;
  orderBy?: string;
  orderDirection?: string;
  pause?: boolean;
  requestPolicy?: UseQueryArgs['requestPolicy'];
}

/**
 * Result of the useGalleries hook.
 */
export interface UseGalleriesResult {
  galleries: GalleryListData[];
  pagination: GalleryPaginationData | null;
  fetching: boolean;
  error: FairuError | null;
  stale: boolean;
  hasMore: boolean;
  total: number;
  refetch: () => void;
}

/**
 * Hook for fetching a paginated list of galleries.
 */
export function useGalleries(options: UseGalleriesOptions): UseGalleriesResult {
  const {
    tenants,
    page = 1,
    perPage = 20,
    from,
    until,
    search,
    orderBy,
    orderDirection,
    pause = false,
    requestPolicy = 'cache-first',
  } = options;

  const [result, reexecute] = useQuery<FairuGalleriesQuery>({
    query: FairuGalleriesDocument,
    variables: {
      tenants,
      page,
      perPage,
      from,
      until,
      search,
      orderBy,
      orderDirection,
    },
    pause: pause || !tenants.length,
    requestPolicy,
  });

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const pagination = result.data?.fairuGalleries?.paginatorInfo ?? null;

  return {
    galleries: result.data?.fairuGalleries?.data ?? [],
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
 * Gallery item data.
 */
export type GalleryItemData = NonNullable<
  NonNullable<
    NonNullable<
      FairuGalleryItemsPaginatedQuery['fairuGallery']
    >['itemsPaginated']
  >['data']
>[number];

/**
 * Options for the useGalleryItems hook.
 */
export interface UseGalleryItemsOptions {
  page?: number;
  perPage?: number;
  orderBy?: string;
  orderDirection?: string;
  pause?: boolean;
  requestPolicy?: UseQueryArgs['requestPolicy'];
}

/**
 * Result of the useGalleryItems hook.
 */
export interface UseGalleryItemsResult {
  galleryName: string | null;
  items: GalleryItemData[];
  pagination: GalleryPaginationData | null;
  fetching: boolean;
  error: FairuError | null;
  hasMore: boolean;
  total: number;
  refetch: () => void;
}

/**
 * Hook for fetching paginated gallery items.
 */
export function useGalleryItems(
  id: string | null | undefined,
  options: UseGalleryItemsOptions = {}
): UseGalleryItemsResult {
  const {
    page = 1,
    perPage = 50,
    orderBy,
    orderDirection,
    pause = false,
    requestPolicy = 'cache-first',
  } = options;

  const [result, reexecute] = useQuery<FairuGalleryItemsPaginatedQuery>({
    query: FairuGalleryItemsPaginatedDocument,
    variables: { id: id ?? '', page, perPage, orderBy, orderDirection },
    pause: pause || !id,
    requestPolicy,
  });

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  const pagination =
    result.data?.fairuGallery?.itemsPaginated?.paginatorInfo ?? null;

  return {
    galleryName: result.data?.fairuGallery?.name ?? null,
    items: result.data?.fairuGallery?.itemsPaginated?.data ?? [],
    pagination,
    fetching: result.fetching,
    error,
    hasMore: pagination?.hasMorePages ?? false,
    total: pagination?.total ?? 0,
    refetch: () => reexecute({ requestPolicy: 'network-only' }),
  };
}
