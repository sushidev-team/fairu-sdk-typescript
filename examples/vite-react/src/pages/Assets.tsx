import { useState } from 'react';
import { useFolder, useSearch } from '@fairu/sdk/react';
import { fileProxy } from '@fairu/sdk/fileproxy';
import AssetCard from '../components/AssetCard';

function Assets() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Use search hook when there's a search query, otherwise use folder hook
  const folderResult = useFolder({
    page,
    perPage: 12,
    pause: !!searchQuery,
  });

  const searchResult = useSearch(searchQuery, {
    page,
    perPage: 12,
    pause: !searchQuery,
  });

  const { entries, pagination, fetching, error, hasMore } = searchQuery
    ? { ...searchResult, entries: searchResult.assets }
    : { ...folderResult, entries: folderResult.entries };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(search);
    setPage(1);
  };

  const clearSearch = () => {
    setSearch('');
    setSearchQuery('');
    setPage(1);
  };

  return (
    <div>
      <h1>Assets</h1>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search assets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {searchQuery && (
          <button type="button" onClick={clearSearch} className="btn" style={{ marginLeft: 8 }}>
            Clear
          </button>
        )}
      </form>

      {error && <div className="error">{error.message}</div>}

      {fetching ? (
        <div className="loading">Loading assets...</div>
      ) : entries.length === 0 ? (
        <p>{searchQuery ? 'No assets match your search.' : 'No assets yet.'}</p>
      ) : (
        <>
          <div className="grid">
            {entries.map((entry) => {
              // Handle both assets and folders from useFolder
              if (entry.__typename === 'FairuFolder') {
                return (
                  <div key={entry.id} className="asset-card">
                    <div style={{ height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', fontSize: '2rem' }}>
                      📁
                    </div>
                    <div className="asset-card-content">
                      <div className="asset-card-name">{entry.name}</div>
                      <div className="asset-card-meta">Folder</div>
                    </div>
                  </div>
                );
              }

              // It's an asset
              const asset = entry;
              const thumbnailUrl = asset.id && asset.name
                ? fileProxy(asset.id, asset.name)
                    .width(400)
                    .height(300)
                    .format('webp')
                    .quality(80)
                    .build()
                : asset.url;

              return (
                <AssetCard
                  key={asset.id}
                  id={asset.id}
                  name={asset.name}
                  mime={asset.mime}
                  url={thumbnailUrl}
                  width={asset.width}
                  height={asset.height}
                />
              );
            })}
          </div>

          <div className="pagination">
            <button
              className="btn btn-primary"
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
              className="btn btn-primary"
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

export default Assets;
