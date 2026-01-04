# Fairu SDK - Vite React Example

This example demonstrates how to use the Fairu SDK with Vite and React.

## Features Demonstrated

- **FairuProvider** - Setting up the SDK provider
- **useAssets** - Fetching and displaying assets with pagination
- **useFolder** - Browsing folder contents
- **useSearch** - Searching for assets
- **useGalleries** - Fetching gallery list
- **useGalleryItems** - Fetching gallery items with pagination
- **useTenant** - Getting current tenant info
- **useUpload** - Simple file upload with progress
- **useMultipartUpload** - Large file upload with chunked transfer
- **fileProxy** - Building optimized image URLs

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy the example environment file and add your API token:

```bash
cp .env.example .env
```

Edit `.env` with your Fairu API token:

```
VITE_FAIRU_URL=https://fairu.app/graphql
VITE_FAIRU_TOKEN=your-token-here
```

### 3. Start development server

```bash
npm run dev
```

The app will be available at http://localhost:5173

## Project Structure

```
src/
├── main.tsx           # App entry with FairuProvider setup
├── App.tsx            # Router configuration
├── components/
│   └── AssetCard.tsx  # Reusable asset display component
├── pages/
│   ├── Dashboard.tsx  # Overview with stats and recent items
│   ├── Assets.tsx     # Asset browser with search
│   ├── Galleries.tsx  # Gallery list and viewer
│   └── Upload.tsx     # File upload demo
└── styles/
    └── globals.css    # Application styles
```

## Code Examples

### Setting up the Provider

```tsx
import { FairuProvider } from '@fairu/sdk/react';

function App() {
  return (
    <FairuProvider
      url="https://fairu.app/graphql"
      token={import.meta.env.VITE_FAIRU_TOKEN}
    >
      <YourApp />
    </FairuProvider>
  );
}
```

### Fetching Assets

```tsx
import { useAssets } from '@fairu/sdk/react';

function AssetList() {
  const { assets, fetching, error, hasMore, refetch } = useAssets({
    page: 1,
    perPage: 20,
  });

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {assets.map(asset => (
        <div key={asset.id}>{asset.name}</div>
      ))}
    </div>
  );
}
```

### Uploading Files

```tsx
import { useUpload } from '@fairu/sdk/react';

function FileUploader() {
  const { upload, progress, status, error } = useUpload();

  const handleUpload = async (file: File) => {
    const result = await upload(file, {
      alt: 'My uploaded file',
    });
    console.log('Uploaded:', result.id);
  };

  return (
    <div>
      <input type="file" onChange={(e) => {
        if (e.target.files?.[0]) handleUpload(e.target.files[0]);
      }} />
      {status === 'uploading' && <p>Progress: {progress.percentage}%</p>}
    </div>
  );
}
```

### Building Image URLs

```tsx
import { fileProxy } from '@fairu/sdk/fileproxy';

function OptimizedImage({ asset }) {
  const url = fileProxy(asset.id, asset.name)
    .width(800)
    .height(600)
    .format('webp')
    .quality(85)
    .build();

  return <img src={url} alt={asset.alt} />;
}
```

## Learn More

- [Fairu SDK Documentation](https://github.com/fairu/fairu-sdk-typescript)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
