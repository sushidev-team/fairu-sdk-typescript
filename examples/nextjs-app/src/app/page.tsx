'use client';

import { useAssets, useGalleries, useTenant } from '@fairu/sdk/react';
import Link from 'next/link';

export default function Dashboard() {
  const { total: totalAssets, fetching: assetsFetching } = useAssets({ perPage: 1 });
  const { total: totalGalleries, fetching: galleriesFetching } = useGalleries({
    tenants: ['default'],
    perPage: 1,
  });
  const { tenant, fetching: tenantFetching } = useTenant();

  const isLoading = assetsFetching || galleriesFetching || tenantFetching;

  return (
    <div>
      <h1>Dashboard</h1>

      {tenant && (
        <div className="card">
          <h2>Welcome to {tenant.name}</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>
            AI Features: {tenant.use_ai ? 'Enabled' : 'Disabled'}
          </p>
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
        <h2>Quick Links</h2>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Link href="/assets" className="btn btn-primary">
            Browse Assets
          </Link>
          <Link href="/galleries" className="btn btn-secondary">
            View Galleries
          </Link>
          <Link href="/upload" className="btn btn-secondary">
            Upload Files
          </Link>
        </div>
      </div>
    </div>
  );
}
