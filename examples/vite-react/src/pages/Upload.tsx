import { useRef, useState, useCallback } from 'react';
import { useUpload, useMultipartUpload } from '@fairu/sdk/react';

function Upload() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Simple upload for files < 50MB
  const simpleUpload = useUpload();

  // Multipart upload for large files
  const multipartUpload = useMultipartUpload();

  // Choose upload strategy based on file size
  const MULTIPART_THRESHOLD = 50 * 1024 * 1024; // 50MB
  const useMultipart = selectedFile && selectedFile.size > MULTIPART_THRESHOLD;
  const upload = useMultipart ? multipartUpload : simpleUpload;

  const handleFileSelect = (files: FileList | null) => {
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  }, []);

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      const result = await upload.upload(selectedFile, {
        alt: `Uploaded via SDK demo: ${selectedFile.name}`,
      });

      alert(`Upload complete! Asset ID: ${result.id}`);
      setSelectedFile(null);
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  const handleCancel = () => {
    upload.cancel();
    setSelectedFile(null);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
  };

  return (
    <div>
      <h1>Upload Files</h1>

      <div className="card">
        <h2>Upload a File</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
          Files under 50MB use simple upload. Larger files use multipart upload.
        </p>

        <div
          className={`upload-zone ${isDragging ? 'active' : ''}`}
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            onChange={(e) => handleFileSelect(e.target.files)}
          />
          {selectedFile ? (
            <div>
              <p><strong>{selectedFile.name}</strong></p>
              <p style={{ color: 'var(--color-text-muted)' }}>
                {formatFileSize(selectedFile.size)}
                {useMultipart && ' (multipart upload)'}
              </p>
            </div>
          ) : (
            <p>Click or drag a file here to upload</p>
          )}
        </div>

        {upload.error && (
          <div className="error" style={{ marginTop: '1rem' }}>
            {upload.error.message}
          </div>
        )}

        {upload.status === 'uploading' && (
          <div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${upload.progress.percentage}%` }}
              />
            </div>
            <p style={{ marginTop: '0.5rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>
              {upload.progress.percentage}% uploaded
              {upload.progress.bytesUploaded > 0 && (
                <> ({formatFileSize(upload.progress.bytesUploaded)} / {formatFileSize(upload.progress.totalBytes)})</>
              )}
            </p>
          </div>
        )}

        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
          <button
            className="btn btn-primary"
            onClick={handleUpload}
            disabled={!selectedFile || upload.status === 'uploading'}
          >
            {upload.status === 'uploading' ? 'Uploading...' : 'Upload'}
          </button>

          {upload.status === 'uploading' && (
            <button className="btn" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </div>

      <div className="card">
        <h2>Upload Status</h2>
        <dl style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.5rem 1rem' }}>
          <dt>Status:</dt>
          <dd>{upload.status}</dd>

          <dt>Progress:</dt>
          <dd>{upload.progress.percentage}%</dd>

          {upload.result && (
            <>
              <dt>Asset ID:</dt>
              <dd><code>{upload.result.id}</code></dd>
            </>
          )}
        </dl>
      </div>
    </div>
  );
}

export default Upload;
