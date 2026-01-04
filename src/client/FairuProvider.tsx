import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from 'react';
import { Provider, type Client } from 'urql';
import { createFairuClient } from './FairuClient';
import { DEFAULT_CONFIG, type FairuClientConfig } from './config';
import type { FragmentRegistry } from '../fragments/FragmentRegistry';

/**
 * Context value for Fairu SDK.
 */
interface FairuContextValue {
  /**
   * The urql client instance.
   */
  client: Client;

  /**
   * Fragment registry for custom and predefined fragments.
   */
  fragments: FragmentRegistry | null;

  /**
   * FileProxy base URL.
   */
  fileProxyUrl: string;
}

const FairuContext = createContext<FairuContextValue | null>(null);

/**
 * Props for the FairuProvider component.
 */
export interface FairuProviderProps extends FairuClientConfig {
  /**
   * Child components.
   */
  children: ReactNode;

  /**
   * Custom fragment registry instance.
   */
  fragmentRegistry?: FragmentRegistry;

  /**
   * Existing urql client to use instead of creating a new one.
   */
  client?: Client;
}

/**
 * React provider for Fairu SDK functionality.
 *
 * @example
 * ```tsx
 * import { FairuProvider } from '@fairu/sdk/react';
 *
 * function App() {
 *   return (
 *     <FairuProvider
 *       url="https://fairu.app/graphql"
 *       token={process.env.FAIRU_TOKEN}
 *     >
 *       <YourApp />
 *     </FairuProvider>
 *   );
 * }
 * ```
 */
export function FairuProvider({
  children,
  fragmentRegistry,
  client: existingClient,
  ...clientConfig
}: FairuProviderProps) {
  // Create or use existing client
  const client = useMemo(() => {
    if (existingClient) {
      return existingClient;
    }
    return createFairuClient(clientConfig);
  }, [existingClient, clientConfig.url, clientConfig.token]);

  // Get fileProxy URL
  const fileProxyUrl =
    clientConfig.fileProxyUrl ?? DEFAULT_CONFIG.fileProxyUrl;

  // Context value
  const contextValue: FairuContextValue = useMemo(
    () => ({
      client,
      fragments: fragmentRegistry ?? null,
      fileProxyUrl,
    }),
    [client, fragmentRegistry, fileProxyUrl]
  );

  return (
    <FairuContext.Provider value={contextValue}>
      <Provider value={client}>{children}</Provider>
    </FairuContext.Provider>
  );
}

/**
 * Hook to access the Fairu context.
 *
 * @throws Error if used outside of FairuProvider
 */
export function useFairuContext(): FairuContextValue {
  const context = useContext(FairuContext);

  if (!context) {
    throw new Error('useFairuContext must be used within a FairuProvider');
  }

  return context;
}

/**
 * Hook to access the fragment registry.
 */
export function useFragments(): FragmentRegistry | null {
  return useFairuContext().fragments;
}

/**
 * Hook to get the FileProxy base URL.
 */
export function useFileProxyUrl(): string {
  return useFairuContext().fileProxyUrl;
}

/**
 * Hook to access the urql client directly.
 */
export function useFairuClient(): Client {
  return useFairuContext().client;
}
