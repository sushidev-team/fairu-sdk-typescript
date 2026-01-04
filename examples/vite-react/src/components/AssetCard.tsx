interface AssetCardProps {
  id: string;
  name: string;
  mime: string | null;
  url: string | null;
  width?: number | null;
  height?: number | null;
}

function AssetCard({ id, name, mime, url, width, height }: AssetCardProps) {
  const isImage = mime?.startsWith('image/');
  const isVideo = mime?.startsWith('video/');
  const fileType = mime?.split('/')[1]?.toUpperCase() || 'FILE';

  return (
    <div className="asset-card">
      {isImage && url ? (
        <img src={url} alt={name} loading="lazy" />
      ) : isVideo && url ? (
        <video src={url} style={{ width: '100%', height: 150, objectFit: 'cover' }} muted />
      ) : (
        <div style={{ height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b' }}>{fileType}</span>
        </div>
      )}
      <div className="asset-card-content">
        <div className="asset-card-name" title={name}>{name}</div>
        <div className="asset-card-meta">
          {width && height ? `${width} × ${height}` : fileType}
        </div>
      </div>
    </div>
  );
}

export default AssetCard;
