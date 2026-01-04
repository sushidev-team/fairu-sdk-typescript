import { useState } from 'react';
import { useGalleries, useGalleryItems } from '@fairu/sdk/react';
import { fileProxy } from '@fairu/sdk/fileproxy';

function Galleries() {
  const [selectedGalleryId, setSelectedGalleryId] = useState<string | null>(null);

  const { galleries, fetching, error, total } = useGalleries({
    tenants: ['default'],
    perPage: 20,
  });

  const { galleryName, items, fetching: itemsFetching } = useGalleryItems(
    selectedGalleryId,
    { perPage: 50 }
  );

  return (
    <div>
      <h1>Galleries</h1>

      {error && <div className="error">{error.message}</div>}

      {selectedGalleryId ? (
        <div>
          <button className="btn" onClick={() => setSelectedGalleryId(null)} style={{ marginBottom: '1rem' }}>
            ← Back to Galleries
          </button>
          <h2>{galleryName || 'Loading...'}</h2>

          {itemsFetching ? (
            <div className="loading">Loading gallery items...</div>
          ) : items.length === 0 ? (
            <p>This gallery is empty.</p>
          ) : (
            <div className="grid">
              {items.map((item) => {
                const thumbnailUrl = fileProxy(item.id, item.name)
                  .width(400)
                  .height(300)
                  .format('webp')
                  .quality(80)
                  .build();

                return (
                  <div key={item.id} className="asset-card">
                    <img src={thumbnailUrl} alt={item.alt || item.name} loading="lazy" />
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
      ) : (
        <>
          <p style={{ marginBottom: '1rem' }}>{total} galleries found</p>

          {fetching ? (
            <div className="loading">Loading galleries...</div>
          ) : galleries.length === 0 ? (
            <p>No galleries yet.</p>
          ) : (
            <div className="grid">
              {galleries.map((gallery) => (
                <div
                  key={gallery.id}
                  className="asset-card"
                  onClick={() => setSelectedGalleryId(gallery.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {gallery.cover_image?.url ? (
                    <img
                      src={gallery.cover_image.url}
                      alt={gallery.name}
                      loading="lazy"
                    />
                  ) : (
                    <div style={{ height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', fontSize: '2rem' }}>
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
        </>
      )}
    </div>
  );
}

export default Galleries;
