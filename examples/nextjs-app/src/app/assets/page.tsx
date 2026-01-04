'use client';

import { useState } from 'react';
import { useAssets } from '@fairu/sdk/react';
import AssetGrid from '@/components/AssetGrid';

export default function AssetsPage() {
  const [page, setPage] = useState(1);
  const { assets, pagination, fetching, error, hasMore } = useAssets({
    page,
    perPage: 12,
  });

  return (
    <div>
      <h1>Assets</h1>

      {error && <div className="error">{error.message}</div>}

      {fetching ? (
        <div className="loading">Loading assets...</div>
      ) : (
        <>
          <AssetGrid assets={assets} />

          <div className="pagination">
            <button
              className="btn btn-secondary"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </button>
            <span className="pagination-info">
              Page {pagination?.currentPage ?? page} of {pagination?.lastPage ?? 1}
              {' '}({pagination?.total ?? 0} total)
            </span>
            <button
              className="btn btn-secondary"
              onClick={() => setPage((p) => p + 1)}
              disabled={!hasMore}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
