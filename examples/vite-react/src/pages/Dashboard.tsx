import { useAssets, useGalleries, useTenant } from '@fairu/sdk/react';

function Dashboard() {
  const { assets, total: totalAssets, fetching: assetsFetching } = useAssets({ perPage: 5 });
  const { galleries, total: totalGalleries, fetching: galleriesFetching } = useGalleries({
    tenants: ['default'],
    perPage: 5,
  });
  const { tenant, fetching: tenantFetching } = useTenant();

  const isLoading = assetsFetching || galleriesFetching || tenantFetching;

  return (
    <div>
      <h1>Dashboard</h1>

      {tenant && (
        <div className="card">
          <h2>Welcome, {tenant.name}</h2>
          <p>AI Features: {tenant.use_ai ? 'Enabled' : 'Disabled'}</p>
        </div>
      )}

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{isLoading ? '...' : totalAssets}</div>
          <div className="stat-label">Total Assets</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{isLoading ? '...' : totalGalleries}</div>
          <div className="stat-label">Galleries</div>
        </div>
      </div>

      <div className="card">
        <h2>Recent Assets</h2>
        {assetsFetching ? (
          <div className="loading">Loading assets...</div>
        ) : assets.length === 0 ? (
          <p>No assets yet. Upload some files to get started.</p>
        ) : (
          <div className="grid">
            {assets.map((asset) => (
              <AssetPreview key={asset.id} asset={asset} />
            ))}
          </div>
        )}
      </div>

      <div className="card">
        <h2>Recent Galleries</h2>
        {galleriesFetching ? (
          <div className="loading">Loading galleries...</div>
        ) : galleries.length === 0 ? (
          <p>No galleries yet.</p>
        ) : (
          <ul>
            {galleries.map((gallery) => (
              <li key={gallery.id}>
                {gallery.name} {gallery.description && `- ${gallery.description}`}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function AssetPreview({ asset }: { asset: { id: string; name: string; url: string | null; mime: string | null } }) {
  const isImage = asset.mime?.startsWith('image/');

  return (
    <div className="asset-card">
      {isImage && asset.url ? (
        <img src={asset.url} alt={asset.name} loading="lazy" />
      ) : (
        <div style={{ height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9' }}>
          {asset.mime?.split('/')[1]?.toUpperCase() || 'FILE'}
        </div>
      )}
      <div className="asset-card-content">
        <div className="asset-card-name">{asset.name}</div>
      </div>
    </div>
  );
}

export default Dashboard;
