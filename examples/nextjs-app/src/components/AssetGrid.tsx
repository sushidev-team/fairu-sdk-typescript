'use client';

import { fileProxy } from '@fairu/sdk/fileproxy';
import Image from 'next/image';

interface Asset {
  id: string;
  name: string;
  mime: string | null;
  url: string | null;
  width?: number | null;
  height?: number | null;
}

interface AssetGridProps {
  assets: Asset[];
}

export default function AssetGrid({ assets }: AssetGridProps) {
  if (assets.length === 0) {
    return <div className="empty-state">No assets found</div>;
  }

  return (
    <div className="grid">
      {assets.map((asset) => {
        const isImage = asset.mime?.startsWith('image/');
        const thumbnailUrl = isImage
          ? fileProxy(asset.id, asset.name)
              .width(440)
              .height(320)
              .format('webp')
              .quality(80)
              .build()
          : null;

        return (
          <div key={asset.id} className="asset-card">
            {thumbnailUrl ? (
              <Image
                src={thumbnailUrl}
                alt={asset.name}
                width={220}
                height={160}
                style={{ width: '100%', height: 160, objectFit: 'cover' }}
              />
            ) : (
              <div
                style={{
                  height: 160,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f5f5f5',
                  color: '#666',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              >
                {asset.mime?.split('/')[1]?.toUpperCase() || 'FILE'}
              </div>
            )}
            <div className="asset-card-content">
              <div className="asset-card-name" title={asset.name}>
                {asset.name}
              </div>
              <div className="asset-card-meta">
                {asset.width && asset.height
                  ? `${asset.width} × ${asset.height}`
                  : asset.mime?.split('/')[1]?.toUpperCase() || 'FILE'}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
