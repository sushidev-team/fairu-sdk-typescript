import {
  Client,
  fetchExchange,
  cacheExchange,
  type Exchange,
  type OperationResult,
  type Operation,
  mapExchange,
} from '@urql/core';
import { map, pipe } from 'wonka';
import { DEFAULT_CONFIG, type FairuClientConfig } from './config';
import { FairuError } from '../errors';

/**
 * Create an error handling exchange.
 */
function createErrorExchange(onError?: (error: Error) => void): Exchange {
  return mapExchange({
    onResult: (result: OperationResult) => {
      if (result.error && onError) {
        const fairuError = FairuError.fromCombinedError(result.error);
        onError(fairuError);
      }
      return result;
    },
  });
}

/**
 * Create an authentication exchange that adds Bearer token to requests.
 */
function createAuthExchange(config: FairuClientConfig): Exchange {
  return ({ forward }) => {
    return (operations$) => {
      return pipe(
        operations$,
        map((operation: Operation) => {
          let token: string | null = null;

          if (config.token) {
            token = config.token;
          } else if (config.getToken) {
            const result = config.getToken();
            if (typeof result === 'string' || result === null) {
              token = result;
            }
          }

          if (!token) {
            return operation;
          }

          const fetchOptions =
            typeof operation.context.fetchOptions === 'object'
              ? operation.context.fetchOptions
              : {};

          return {
            ...operation,
            context: {
              ...operation.context,
              fetchOptions: {
                ...fetchOptions,
                headers: {
                  ...(fetchOptions as Record<string, unknown>).headers as Record<string, string>,
                  Authorization: `Bearer ${token}`,
                },
              },
            },
          };
        }),
        forward
      );
    };
  };
}

/**
 * Create a urql client configured for the Fairu GraphQL API.
 */
export function createFairuClient(config: FairuClientConfig = {}): Client {
  const url = config.url ?? DEFAULT_CONFIG.url;
  const cacheConfig = { ...DEFAULT_CONFIG.cache, ...config.cache };

  const exchanges: Exchange[] = [];

  // Auth exchange (adds Bearer token)
  if (config.token || config.getToken) {
    exchanges.push(createAuthExchange(config));
  }

  // Cache exchange (if enabled)
  if (cacheConfig.enabled) {
    exchanges.push(cacheExchange);
  }

  // Error exchange
  if (config.onError) {
    exchanges.push(createErrorExchange(config.onError));
  }

  // Fetch exchange (must be last)
  exchanges.push(fetchExchange);

  return new Client({
    url,
    exchanges,
    requestPolicy: 'cache-first',
  });
}

export type { Client };
