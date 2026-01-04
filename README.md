# @fairu/sdk

TypeScript SDK for the Fairu GraphQL API with React hooks and vanilla client support.

## Features

- **React Hooks** for all GraphQL operations (assets, folders, galleries, copyrights, licenses, users, roles, etc.)
- **Vanilla Client** for Node.js and non-React frameworks
- **Fragment System** with fluent builder API
- **Upload Hooks** with progress tracking (simple + multipart)
- **FileProxy URL Builder** for image transformations
- **Graphcache** for normalized caching
- **Full TypeScript support** with generated types from the GraphQL schema
- **Dynamic Base URL** configuration with environment variable support

## Installation

```bash
npm install @fairu/sdk urql graphql
```

For React applications:
```bash
npm install @fairu/sdk urql graphql react react-dom
```

## Quick Start

### React

```tsx
import { FairuProvider, useAssets, useUpload } from '@fairu/sdk/react';

function App() {
  return (
    <FairuProvider
      url="https://fairu.app/graphql"
      token={process.env.FAIRU_TOKEN}
    >
      <AssetGallery />
    </FairuProvider>
  );
}

function AssetGallery() {
  const { assets, fetching, error, hasMore, total } = useAssets({
    page: 1,
    perPage: 20
  });
  const { upload, progress, status } = useUpload();

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <p>{total} assets found</p>
      {assets.map((asset) => (
        <img key={asset.id} src={asset.url} alt={asset.alt} />
      ))}
    </div>
  );
}
```

### Vanilla TypeScript

```typescript
import { createVanillaClient } from '@fairu/sdk/vanilla';

const client = createVanillaClient({
  url: 'https://fairu.app/graphql',
  token: 'your-token',
});

// Fetch an asset
const asset = await client.assets.find('asset-id');

// List assets with pagination
const { data, paginatorInfo } = await client.assets.list({
  page: 1,
  perPage: 20,
  folderId: 'folder-id',
});

// Upload a file
const result = await client.upload.simple(file, {
  folderId: 'folder-id',
  alt: 'My image',
});
```

## Examples

Check out the complete example applications:

- **[Vite + React Example](./examples/vite-react/)** - Full-featured example with asset browser, gallery viewer, search, and file uploads
- **[Next.js App Router Example](./examples/nextjs-app/)** - Example using Next.js 15 with App Router and optimized images

## API Reference

### React Hooks

#### Asset Hooks

```tsx
import { useAsset, useAssets, useSearch, useMultipleAssets } from '@fairu/sdk/react';

// Fetch single asset by ID
const { asset, fetching, error, refetch } = useAsset('asset-id');

// Fetch asset by path
const { asset } = useAssetByPath('/folder/image.jpg');

// Fetch paginated assets
const { assets, pagination, hasMore, total, refetch } = useAssets({
  page: 1,
  perPage: 20,
  folder: 'folder-id',
});

// Search assets
const { assets, pagination, hasMore } = useSearch('search query', {
  page: 1,
  perPage: 20,
  orderBy: 'created_at',
  orderDirection: 'DESC',
});

// Fetch multiple assets by IDs
const { assets, fetching } = useMultipleAssets(['id1', 'id2', 'id3']);
```

#### Folder Hooks

```tsx
import { useFolder, useFolderByPath } from '@fairu/sdk/react';

// Browse folder contents (assets + subfolders)
const { entries, pagination, hasMore } = useFolder({
  folder: 'folder-id',
  page: 1,
  perPage: 50,
  search: 'optional search',
  orderBy: 'name',
  orderDirection: 'ASC',
});

// Get folder by path
const { folder } = useFolderByPath('/path/to/folder');
```

#### Gallery Hooks

```tsx
import { useGallery, useGalleries, useGalleryItems } from '@fairu/sdk/react';

// Fetch single gallery
const { gallery, fetching, error } = useGallery('gallery-id');

// Fetch galleries list
const { galleries, pagination, hasMore, total } = useGalleries({
  tenants: ['tenant-id'],
  page: 1,
  perPage: 20,
  search: 'optional search',
});

// Fetch gallery items with pagination
const { galleryName, items, pagination, hasMore } = useGalleryItems('gallery-id', {
  page: 1,
  perPage: 50,
});
```

#### Additional Hooks

```tsx
import {
  useCopyright, useCopyrights,
  useLicense, useLicenses,
  useTenant, useHealthCheck, useSupportedDomains,
} from '@fairu/sdk/react';

// Copyrights
const { copyright } = useCopyright('copyright-id');
const { copyrights, pagination } = useCopyrights({ page: 1, perPage: 20 });

// Licenses
const { license } = useLicense('license-id');
const { licenses, pagination } = useLicenses({ page: 1, perPage: 20 });

// Tenant info
const { tenant, fetching } = useTenant();

// Health check
const { health } = useHealthCheck();

// Supported domains
const { domains } = useSupportedDomains();
```

#### Mutation Hooks

```tsx
import { useUpdateAsset, useDeleteAsset } from '@fairu/sdk/react';

// Update asset
const { updateAsset, fetching } = useUpdateAsset();
await updateAsset({
  id: 'asset-id',
  alt: 'New alt text',
  caption: 'New caption',
  description: 'New description',
});

// Delete asset
const { deleteAsset, fetching } = useDeleteAsset();
const success = await deleteAsset('asset-id');
```

#### Upload Hooks

```tsx
import { useUpload, useMultipartUpload } from '@fairu/sdk/react';

// Simple upload (for files < 50MB)
const { upload, progress, status, error, cancel, reset } = useUpload();

const result = await upload(file, {
  folderId: 'folder-id',
  alt: 'Description',
});

console.log('Upload progress:', progress.percentage, '%');
console.log('Status:', status); // 'idle' | 'uploading' | 'success' | 'error'

// Multipart upload (for large files)
const { upload, progress, partsCompleted, totalParts, cancel } = useMultipartUpload();

await upload(largeFile, {
  folderId: 'folder-id',
  chunkSize: 10 * 1024 * 1024, // 10MB chunks
  concurrency: 3, // Upload 3 chunks in parallel
});
```

### FileProxy URL Builder

```typescript
import { fileProxy, useFileProxyUrl, useResponsiveImageUrl } from '@fairu/sdk/fileproxy';

// Build URLs programmatically
const url = fileProxy('asset-id', 'image.jpg')
  .width(800)
  .height(600)
  .quality(85)
  .format('webp')
  .fit('cover')
  .focal(50, 30, 1.5)
  .build();

// React hook for single image
function AssetImage({ asset }) {
  const url = useFileProxyUrl(asset.id, asset.name, {
    width: 800,
    format: 'webp',
    quality: 85,
    focal: asset.focal_point,
  });

  return <img src={url} alt={asset.alt} />;
}

// Responsive images with srcSet
function ResponsiveImage({ asset }) {
  const { src, srcSet, sizes } = useResponsiveImageUrl(
    asset.id,
    asset.name,
    {
      widths: [400, 800, 1200, 1600],
      sizes: '(max-width: 600px) 100vw, 50vw',
      format: 'webp',
      quality: 80,
    }
  );

  return <img src={src} srcSet={srcSet} sizes={sizes} alt={asset.alt} />;
}
```

### Fragment System

```typescript
import { FragmentBuilder, fragments } from '@fairu/sdk/fragments';

// Use predefined fragments
const minimalFragment = fragments.asset('minimal');
const fullFragment = fragments.asset('full');

// Build custom fragments
const customFragment = FragmentBuilder.for('FairuAsset')
  .name('MyAssetFragment')
  .select(['id', 'name', 'url', 'width', 'height', 'blurhash'])
  .with('copyrights', (f) => f.select(['id', 'name', 'email']))
  .build();

// Use with hooks
const { asset } = useAsset('id', { fragment: customFragment });
```

### Error Handling

```typescript
import { FairuError, ValidationError, AuthenticationError, GraphQLError } from '@fairu/sdk';

try {
  await updateAsset({ id: 'invalid' });
} catch (error) {
  if (error instanceof ValidationError) {
    console.log('Validation errors:', error.validationErrors);
    // { field: ['error message'] }
  } else if (error instanceof AuthenticationError) {
    console.log('Authentication failed - check your token');
  } else if (error instanceof GraphQLError) {
    console.log('GraphQL error:', error.message);
  } else if (error instanceof FairuError) {
    console.log('General error:', error.message, error.code);
  }
}
```

## Configuration

### React Provider

```tsx
import { FairuProvider } from '@fairu/sdk/react';

<FairuProvider
  // GraphQL endpoint (required)
  url="https://fairu.app/graphql"

  // API token - can be static string or getter function
  token="your-api-token"
  // OR: getToken={() => localStorage.getItem('token')}

  // FileProxy base URL (optional, default: https://files.fairu.app)
  fileProxyUrl="https://files.fairu.app"

  // Cache configuration (optional)
  cache={{
    enabled: true,
  }}

  // Global error handler (optional)
  onError={(error) => {
    console.error('GraphQL Error:', error);
    // Send to error tracking service, show notification, etc.
  }}
>
  <App />
</FairuProvider>
```

### Environment Variables

The SDK supports environment variables for configuration:

```bash
# Vite
VITE_FAIRU_URL=https://fairu.app/graphql
VITE_FAIRU_TOKEN=your-token

# Next.js
NEXT_PUBLIC_FAIRU_URL=https://fairu.app/graphql
NEXT_PUBLIC_FAIRU_TOKEN=your-token

# Node.js
FAIRU_URL=https://fairu.app/graphql
FAIRU_TOKEN=your-token
```

## TypeScript

All types are exported from the package:

```typescript
import type {
  // Entity types
  FairuAsset,
  FairuFolder,
  FairuGallery,
  FairuCopyright,
  FairuLicense,
  FairuUser,
  FairuRole,
  FairuTenant,

  // Input types
  FairuFileDto,
  FairuFolderDto,
  FairuGalleryDto,

  // Enum types
  FairuLicenseType,
  FairuSortingDirection,
  FairuUploadType,

  // Query/Hook result types
  AssetData,
  AssetListData,
  GalleryData,
  FolderEntryData,
} from '@fairu/sdk';
```

## Package Exports

```typescript
// Main exports (types, errors, core utilities)
import { FairuError, ValidationError } from '@fairu/sdk';

// React hooks and provider
import {
  FairuProvider,
  useAsset,
  useAssets,
  useUpload
} from '@fairu/sdk/react';

// Vanilla client (no React dependency)
import { createVanillaClient } from '@fairu/sdk/vanilla';

// FileProxy utilities
import { fileProxy, FileProxyBuilder } from '@fairu/sdk/fileproxy';

// Fragment system
import { FragmentBuilder, fragments } from '@fairu/sdk/fragments';

// Upload utilities
import { UploadError } from '@fairu/sdk/upload';
```

## License

MIT
