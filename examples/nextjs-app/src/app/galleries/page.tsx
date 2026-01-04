'use client';

import { useState } from 'react';
import { useGalleries, useGalleryItems } from '@fairu/sdk/react';
import { fileProxy } from '@fairu/sdk/fileproxy';
import Image from 'next/image';

export default function GalleriesPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { galleries, fetching, error } = useGalleries({
    tenants: ['default'],
    perPage: 20,
  });

  const { galleryName, items, fetching: itemsFetching } = useGalleryItems(selectedId, {
    perPage: 50,
  });

  if (selectedId) {
    return (
      <div>
        <button
          className="btn btn-secondary"
          onClick={() => setSelectedId(null)}
          style={{ marginBottom: '1rem' }}
        >
          ← Back to Galleries
        </button>

        <h1>{galleryName || 'Loading...'}</h1>

        {itemsFetching ? (
          <div className="loading">Loading gallery items...</div>
        ) : items.length === 0 ? (
          <div className="empty-state">This gallery is empty</div>
        ) : (
          <div className="grid">
            {items.map((item) => {
              const thumbnailUrl = fileProxy(item.id, item.name)
                .width(440)
                .height(320)
                .format('webp')
                .quality(80)
                .build();

              return (
                <div key={item.id} className="asset-card">
                  <Image
                    src={thumbnailUrl}
                    alt={item.alt || item.name}
                    width={220}
                    height={160}
                    style={{ width: '100%', height: 160, objectFit: 'cover' }}
                  />
                  <div className="asset-card-content">
                    <div className="asset-card-name">{item.name}</div>
                    {item.caption && (
                      <div className="asset-card-meta">{item.caption}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <h1>Galleries</h1>

      {error && <div className="error">{error.message}</div>}

      {fetching ? (
        <div className="loading">Loading galleries...</div>
      ) : galleries.length === 0 ? (
        <div className="empty-state">No galleries found</div>
      ) : (
        <div className="grid">
          {galleries.map((gallery) => (
            <div
              key={gallery.id}
              className="asset-card"
              onClick={() => setSelectedId(gallery.id)}
              style={{ cursor: 'pointer' }}
            >
              {gallery.cover_image?.url ? (
                <Image
                  src={gallery.cover_image.url}
                  alt={gallery.name}
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
                    fontSize: '2rem',
                  }}
                >
                  🖼️
                </div>
              )}
              <div className="asset-card-content">
                <div className="asset-card-name">{gallery.name}</div>
                {gallery.description && (
                  <div className="asset-card-meta">{gallery.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
