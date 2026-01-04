import { useMemo } from 'react';
import { useQuery, type UseQueryArgs } from 'urql';
import {
  FairuTenantDocument,
  FairuHealthCheckDocument,
  FairuSupportedDomainsDocument,
  type FairuTenantQuery,
  type FairuHealthCheckQuery,
  type FairuSupportedDomainsQuery,
} from '../../generated/graphql';
import { FairuError } from '../../errors';

/**
 * Tenant data from query.
 */
export type TenantData = NonNullable<FairuTenantQuery['fairuTenant']>;

/**
 * Health status data from query.
 */
export type HealthStatusData = NonNullable<FairuHealthCheckQuery['fairuHealthCheck']>;

/**
 * Options for tenant hooks.
 */
export interface UseTenantOptions {
  pause?: boolean;
  requestPolicy?: UseQueryArgs['requestPolicy'];
}

/**
 * Result of the useTenant hook.
 */
export interface UseTenantResult {
  tenant: TenantData | null;
  fetching: boolean;
  error: FairuError | null;
  stale: boolean;
  refetch: () => void;
}

/**
 * Hook for fetching the current tenant.
 *
 * @example
 * ```tsx
 * function TenantInfo() {
 *   const { tenant, fetching, error } = useTenant();
 *
 *   if (fetching) return <div>Loading...</div>;
 *   if (error) return <div>Error: {error.message}</div>;
 *   if (!tenant) return <div>Not authenticated</div>;
 *
 *   return (
 *     <div>
 *       <h1>{tenant.name}</h1>
 *       <p>AI enabled: {tenant.use_ai ? 'Yes' : 'No'}</p>
 *     </div>
 *   );
 * }
 * ```
 */
export function useTenant(options: UseTenantOptions = {}): UseTenantResult {
  const { pause = false, requestPolicy = 'cache-first' } = options;

  const [result, reexecute] = useQuery<FairuTenantQuery>({
    query: FairuTenantDocument,
    pause,
    requestPolicy,
  });

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  return {
    tenant: result.data?.fairuTenant ?? null,
    fetching: result.fetching,
    error,
    stale: result.stale,
    refetch: () => reexecute({ requestPolicy: 'network-only' }),
  };
}

/**
 * Result of the useHealthCheck hook.
 */
export interface UseHealthCheckResult {
  health: HealthStatusData | null;
  fetching: boolean;
  error: FairuError | null;
  refetch: () => void;
}

/**
 * Hook for checking API health status.
 *
 * @example
 * ```tsx
 * function HealthIndicator() {
 *   const { health, fetching } = useHealthCheck();
 *
 *   if (fetching) return <span>Checking...</span>;
 *   if (!health?.healthy) return <span className="error">API Down</span>;
 *
 *   return <span className="success">API v{health.version}</span>;
 * }
 * ```
 */
export function useHealthCheck(
  options: UseTenantOptions = {}
): UseHealthCheckResult {
  const { pause = false, requestPolicy = 'cache-first' } = options;

  const [result, reexecute] = useQuery<FairuHealthCheckQuery>({
    query: FairuHealthCheckDocument,
    pause,
    requestPolicy,
  });

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  return {
    health: result.data?.fairuHealthCheck ?? null,
    fetching: result.fetching,
    error,
    refetch: () => reexecute({ requestPolicy: 'network-only' }),
  };
}

/**
 * Result of the useSupportedDomains hook.
 */
export interface UseSupportedDomainsResult {
  domains: string[];
  fetching: boolean;
  error: FairuError | null;
  refetch: () => void;
}

/**
 * Hook for fetching supported custom domains.
 */
export function useSupportedDomains(
  options: UseTenantOptions = {}
): UseSupportedDomainsResult {
  const { pause = false, requestPolicy = 'cache-first' } = options;

  const [result, reexecute] = useQuery<FairuSupportedDomainsQuery>({
    query: FairuSupportedDomainsDocument,
    pause,
    requestPolicy,
  });

  const error = useMemo(() => {
    if (result.error) {
      return FairuError.fromCombinedError(result.error);
    }
    return null;
  }, [result.error]);

  return {
    domains: result.data?.fairuSupportedDomains ?? [],
    fetching: result.fetching,
    error,
    refetch: () => reexecute({ requestPolicy: 'network-only' }),
  };
}
