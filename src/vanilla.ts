/**
 * Vanilla TypeScript client for @fairu/sdk (no React dependency)
 *
 * @example
 * ```typescript
 * import { createVanillaClient } from '@fairu/sdk/vanilla';
 *
 * const client = createVanillaClient({
 *   url: 'https://fairu.app/graphql',
 *   token: 'your-token',
 * });
 *
 * // Fetch an asset
 * const asset = await client.assets.find('asset-id');
 *
 * // Upload a file
 * const result = await client.upload.simple(file, { folderId: 'folder-id' });
 * ```
 */

import { Client } from '@urql/core';
import { createFairuClient, type FairuClientConfig } from './client';
import { FragmentBuilder } from './fragments';
import { FairuError } from './errors';
import type {
  FairuAsset,
  FairuFolder,
  FairuFileDto,
} from './generated/graphql';

/**
 * Asset operations for vanilla client.
 */
class AssetOperations {
  constructor(private client: Client) {}

  /**
   * Find an asset by ID.
   */
  async find(id: string, fragment?: FragmentBuilder): Promise<FairuAsset | null> {
    const frag = fragment ?? FragmentBuilder.for('FairuAsset')
      .select(['id', 'name', 'mime', 'alt', 'url', 'width', 'height', 'blurhash']);

    const query = `
      query FairuFile($id: ID!) {
        fairuFile(id: $id) ${frag.toGraphQL()}
      }
    `;

    const result = await this.client.query(query, { id }).toPromise();

    if (result.error) {
      throw FairuError.fromCombinedError(result.error);
    }

    return result.data?.fairuFile ?? null;
  }

  /**
   * List assets with pagination.
   */
  async list(options: {
    page?: number;
    perPage?: number;
    folderId?: string;
    fragment?: FragmentBuilder;
  } = {}): Promise<{ data: FairuAsset[]; paginatorInfo: unknown }> {
    const { page = 1, perPage = 20, folderId, fragment } = options;
    const frag = fragment ?? FragmentBuilder.for('FairuAsset')
      .select(['id', 'name', 'mime', 'url', 'width', 'height']);

    const query = `
      query FairuFiles($page: Int, $perPage: Int, $folder: ID) {
        fairuFiles(page: $page, first: $perPage, folder: $folder) {
          data ${frag.toGraphQL()}
          paginatorInfo {
            currentPage
            lastPage
            perPage
            total
            hasMorePages
          }
        }
      }
    `;

    const result = await this.client.query(query, { page, perPage, folder: folderId }).toPromise();

    if (result.error) {
      throw FairuError.fromCombinedError(result.error);
    }

    return result.data?.fairuFiles ?? { data: [], paginatorInfo: null };
  }

  /**
   * Update an asset.
   */
  async update(data: FairuFileDto): Promise<FairuAsset> {
    const mutation = `
      mutation UpdateFairuFile($data: FairuFileDTO!) {
        updateFairuFile(data: $data) {
          id name mime alt caption description url blocked updated_at
        }
      }
    `;

    const result = await this.client.mutation(mutation, { data }).toPromise();

    if (result.error) {
      throw FairuError.fromCombinedError(result.error);
    }

    if (!result.data?.updateFairuFile) {
      throw new FairuError('Failed to update asset');
    }

    return result.data.updateFairuFile;
  }

  /**
   * Delete an asset.
   */
  async delete(id: string): Promise<boolean> {
    const mutation = `
      mutation DeleteFairuFile($id: ID!) {
        deleteFairuFile(id: $id)
      }
    `;

    const result = await this.client.mutation(mutation, { id }).toPromise();

    if (result.error) {
      throw FairuError.fromCombinedError(result.error);
    }

    return result.data?.deleteFairuFile ?? false;
  }
}

/**
 * Folder operations for vanilla client.
 */
class FolderOperations {
  constructor(private client: Client) {}

  async find(id: string): Promise<FairuFolder | null> {
    const query = `
      query FairuFolder($id: ID!) {
        fairuFolder(id: $id) {
          id name parent_id created_at updated_at
        }
      }
    `;

    const result = await this.client.query(query, { id }).toPromise();

    if (result.error) {
      throw FairuError.fromCombinedError(result.error);
    }

    return result.data?.fairuFolder ?? null;
  }
}

/**
 * Upload operations for vanilla client.
 */
class UploadOperations {
  constructor(private client: Client) {}

  /**
   * Simple file upload.
   */
  async simple(
    file: File,
    options: {
      folderId?: string;
      alt?: string;
      onProgress?: (percentage: number) => void;
    } = {}
  ): Promise<{ id: string; url: string }> {
    // Create upload link
    const createLinkMutation = `
      mutation CreateFairuUploadLink($type: FairuUploadType!, $filename: String!, $folder: ID, $alt: String) {
        createFairuUploadLink(type: $type, filename: $filename, folder: $folder, alt: $alt) {
          id url
        }
      }
    `;

    const linkResult = await this.client.mutation(createLinkMutation, {
      type: 'STANDARD',
      filename: file.name,
      folder: options.folderId,
      alt: options.alt,
    }).toPromise();

    if (linkResult.error || !linkResult.data?.createFairuUploadLink) {
      throw new FairuError('Failed to create upload link');
    }

    const { id, url } = linkResult.data.createFairuUploadLink;

    // Upload file
    await this.uploadToUrl(url, file, options.onProgress);

    return { id, url };
  }

  private uploadToUrl(
    url: string,
    file: File,
    onProgress?: (percentage: number) => void
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (onProgress) {
        xhr.upload.addEventListener('progress', (e) => {
          if (e.lengthComputable) {
            onProgress(Math.round((e.loaded / e.total) * 100));
          }
        });
      }

      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve();
        } else {
          reject(new FairuError(`Upload failed with status ${xhr.status}`));
        }
      });

      xhr.addEventListener('error', () => reject(new FairuError('Upload failed')));
      xhr.open('PUT', url);
      xhr.setRequestHeader('Content-Type', file.type || 'application/octet-stream');
      xhr.send(file);
    });
  }
}

/**
 * Vanilla Fairu client.
 */
export class VanillaFairuClient {
  private client: Client;

  public readonly assets: AssetOperations;
  public readonly folders: FolderOperations;
  public readonly upload: UploadOperations;

  constructor(config: FairuClientConfig) {
    this.client = createFairuClient(config);
    this.assets = new AssetOperations(this.client);
    this.folders = new FolderOperations(this.client);
    this.upload = new UploadOperations(this.client);
  }

  /**
   * Get the underlying urql client.
   */
  getClient(): Client {
    return this.client;
  }

  /**
   * Execute a raw GraphQL query.
   */
  async query<T = unknown>(
    query: string,
    variables?: Record<string, unknown>
  ): Promise<T> {
    const result = await this.client.query(query, variables).toPromise();

    if (result.error) {
      throw FairuError.fromCombinedError(result.error);
    }

    return result.data as T;
  }

  /**
   * Execute a raw GraphQL mutation.
   */
  async mutate<T = unknown>(
    mutation: string,
    variables?: Record<string, unknown>
  ): Promise<T> {
    const result = await this.client.mutation(mutation, variables).toPromise();

    if (result.error) {
      throw FairuError.fromCombinedError(result.error);
    }

    return result.data as T;
  }
}

/**
 * Create a vanilla Fairu client.
 */
export function createVanillaClient(config: FairuClientConfig): VanillaFairuClient {
  return new VanillaFairuClient(config);
}

// Re-export types and utilities
export { FragmentBuilder } from './fragments';
export { fileProxy, fileProxyUtils, type FileProxyParams } from './fileproxy';
export { FairuError, GraphQLError, ValidationError, AuthenticationError } from './errors';
export type { FairuClientConfig } from './client';
export type * from './generated/graphql';
