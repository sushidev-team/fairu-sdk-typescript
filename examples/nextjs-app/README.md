# Fairu SDK - Next.js App Router Example

This example demonstrates how to use the Fairu SDK with Next.js 15 and the App Router.

## Features Demonstrated

- **FairuProvider** - Setting up the SDK provider with App Router
- **Client Components** - Using hooks in `'use client'` components
- **useAssets** - Fetching and displaying assets with pagination
- **useGalleries** - Fetching gallery list
- **useGalleryItems** - Fetching gallery items
- **useTenant** - Getting current tenant info
- **useUpload** - Simple file upload with progress
- **useMultipartUpload** - Large file upload with chunked transfer
- **fileProxy** - Building optimized image URLs
- **Next.js Image** - Using optimized images with fileProxy URLs

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Fairu API token:

```
NEXT_PUBLIC_FAIRU_URL=https://fairu.app/graphql
NEXT_PUBLIC_FAIRU_TOKEN=your-token-here
```

### 3. Start development server

```bash
npm run dev
```

The app will be available at http://localhost:3000

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with FairuProvider
│   ├── page.tsx          # Dashboard page
│   ├── providers.tsx     # Client-side providers
│   ├── globals.css       # Global styles
│   ├── assets/
│   │   └── page.tsx      # Assets list page
│   ├── galleries/
│   │   └── page.tsx      # Galleries list and viewer
│   └── upload/
│       └── page.tsx      # Upload page
├── components/
│   ├── Navigation.tsx    # Navigation component
│   ├── AssetGrid.tsx     # Asset grid display
│   └── FileUploadZone.tsx # Upload component
└── lib/
    └── fairu.ts          # Client singleton
```

## Code Examples

### Setting up with App Router

```tsx
// app/providers.tsx
'use client';

import { FairuProvider } from '@fairu/sdk/react';

export function Providers({ children }) {
  return (
    <FairuProvider
      url={process.env.NEXT_PUBLIC_FAIRU_URL}
      token={process.env.NEXT_PUBLIC_FAIRU_TOKEN}
    >
      {children}
    </FairuProvider>
  );
}

// app/layout.tsx
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

### Using Hooks in Client Components

```tsx
'use client';

import { useAssets } from '@fairu/sdk/react';

export default function AssetsPage() {
  const { assets, fetching, error, hasMore } = useAssets({
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

### Using with Next.js Image

```tsx
import Image from 'next/image';
import { fileProxy } from '@fairu/sdk/fileproxy';

function OptimizedAssetImage({ asset }) {
  const src = fileProxy(asset.id, asset.name)
    .width(800)
    .height(600)
    .format('webp')
    .build();

  return (
    <Image
      src={src}
      alt={asset.alt || asset.name}
      width={400}
      height={300}
    />
  );
}
```

## Important Notes

### Client Components

All Fairu SDK hooks require client-side rendering. Make sure to add `'use client'` to any component using SDK hooks.

### Environment Variables

For Next.js, environment variables must be prefixed with `NEXT_PUBLIC_` to be available in the browser.

### Image Optimization

The `next.config.js` includes the Fairu files domain for Next.js Image optimization:

```js
module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'files.fairu.app' },
    ],
  },
};
```

## Learn More

- [Fairu SDK Documentation](https://github.com/fairu/fairu-sdk-typescript)
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
