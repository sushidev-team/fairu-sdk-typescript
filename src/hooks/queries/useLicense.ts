import { useMemo } from 'react';
import { useQuery, type UseQueryArgs } from 'urql';
import {
  FairuLicenseDocument,
  FairuLicensesDocument,
  type FairuLicenseQuery,
  type FairuLicensesQuery,
} from '../../generated/graphql';
import { FairuError } from '../../errors';

/**
 * License data from query.
 */
export type LicenseData = NonNullable<FairuLicenseQuery['fairuLicense']>;

/**
 * License list item data.
 */
export type LicenseListData = NonNullable<
  NonNullable<FairuLicensesQuery['fairuLicenses']>['data']
>[number];

/**
 * License pagination data.
 */
export type LicensePaginationData = NonNullable<
  NonNullable<FairuLicensesQuery['fairuLicenses']>['paginatorInfo']
>;

/**
 * Options for the useLicense hook.
 */
export interface UseLicenseOptions {
  pause?: boolean;
  requestPolicy?: UseQueryArgs['requestPolicy'];
}

/**
 * Result of the useLicense hook.
 */
export interface UseLicenseResult {
  license: LicenseData | null;
  fetching: boolean;
  error: FairuError | null;
  stale: boolean;
  refetch: () => void;
}

/**
 * Hook for fetching a single license by ID.
 */
export function useLicense(
  id: string | null | undefined,
  options: UseLicenseOptions = {}
): UseLicenseResult {
  const { pause = false, requestPolicy = 'cache-first' } = options;

  const [result, reexecute] = useQuery<FairuLicenseQuery>({
    query: FairuLicenseDocument,
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
    license: result.data?.fairuLicense ?? null,
    fetching: result.fetching,
    error,
    stale: result.stale,
    refetch: () => reexecute({ requestPolicy: 'network-only' }),
  };
}

/**
 * Options for the useLicenses hook.
 */
export interface UseLicensesOptions {
  page?: number;
  perPage?: number;
  pause?: boolean;
  requestPolicy?: UseQueryArgs['requestPolicy'];
}

/**
 * Result of the useLicenses hook.
 */
export interface UseLicensesResult {
  licenses: LicenseListData[];
  pagination: LicensePaginationData | null;
  fetching: boolean;
  error: FairuError | null;
  stale: boolean;
  hasMore: boolean;
  total: number;
  refetch: () => void;
}

/**
 * Hook for fetching a paginated list of licenses.
 */
export function useLicenses(
  options: UseLicensesOptions = {}
): UseLicensesResult {
  const {
    page = 1,
    perPage = 20,
    pause = false,
    requestPolicy = 'cache-first',
  } = options;

  const [result, reexecute] = useQuery<FairuLicensesQuery>({
    query: FairuLicensesDocument,
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

  const pagination = result.data?.fairuLicenses?.paginatorInfo ?? null;

  return {
    licenses: result.data?.fairuLicenses?.data ?? [],
    pagination,
    fetching: result.fetching,
    error,
    stale: result.stale,
    hasMore: pagination?.hasMorePages ?? false,
    total: pagination?.total ?? 0,
    refetch: () => reexecute({ requestPolicy: 'network-only' }),
  };
}
