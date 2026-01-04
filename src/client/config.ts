/**
 * Configuration options for the Fairu client.
 */
export interface FairuClientConfig {
  /**
   * The GraphQL API URL.
   * @default 'https://fairu.app/graphql'
   */
  url?: string;

  /**
   * Static API token for authentication.
   */
  token?: string;

  /**
   * Function to dynamically get the API token.
   * Useful for token refresh or async token retrieval.
   */
  getToken?: () => string | null | Promise<string | null>;

  /**
   * Cache configuration options.
   */
  cache?: CacheConfig;

  /**
   * Retry configuration for failed requests.
   */
  retry?: RetryConfig;

  /**
   * Callback for handling errors globally.
   */
  onError?: (error: Error) => void;

  /**
   * FileProxy base URL for image transformations.
   * @default 'https://files.fairu.app'
   */
  fileProxyUrl?: string;
}

/**
 * Cache configuration options.
 */
export interface CacheConfig {
  /**
   * Whether caching is enabled.
   * @default true
   */
  enabled?: boolean;

  /**
   * Custom entity keys for cache normalization.
   */
  keys?: Record<string, (data: unknown) => string | null>;
}

/**
 * Retry configuration options.
 */
export interface RetryConfig {
  /**
   * Maximum number of retry attempts.
   * @default 3
   */
  maxAttempts?: number;

  /**
   * Delay between retries in milliseconds.
   * @default 1000
   */
  delayMs?: number;

  /**
   * Function to determine if an error should trigger a retry.
   */
  retryIf?: (error: Error) => boolean;
}

/**
 * Default configuration values.
 */
export const DEFAULT_CONFIG: Required<
  Pick<FairuClientConfig, 'url' | 'fileProxyUrl'>
> & {
  retry: Required<RetryConfig>;
  cache: Required<CacheConfig>;
} = {
  url: 'https://fairu.app/graphql',
  fileProxyUrl: 'https://files.fairu.app',
  retry: {
    maxAttempts: 3,
    delayMs: 1000,
    retryIf: (error: Error) => {
      // Only retry network errors by default
      return error.message.includes('Network') || error.message.includes('fetch');
    },
  },
  cache: {
    enabled: true,
    keys: {},
  },
};
