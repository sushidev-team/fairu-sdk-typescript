'use client';

import { useRef, useState, useCallback } from 'react';
import { useUpload, useMultipartUpload } from '@fairu/sdk/react';

const MULTIPART_THRESHOLD = 50 * 1024 * 1024; // 50MB

export default function FileUploadZone() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const simpleUpload = useUpload();
  const multipartUpload = useMultipartUpload();

  const useMultipart = selectedFile && selectedFile.size > MULTIPART_THRESHOLD;
  const upload = useMultipart ? multipartUpload : simpleUpload;

  const handleFileSelect = (files: FileList | null) => {
    if (files?.[0]) {
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
        alt: `Uploaded via Next.js demo: ${selectedFile.name}`,
      });
      alert(`Upload complete! Asset ID: ${result.id}`);
      setSelectedFile(null);
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
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
          style={{ display: 'none' }}
          onChange={(e) => handleFileSelect(e.target.files)}
        />
        {selectedFile ? (
          <div>
            <p style={{ fontWeight: 600 }}>{selectedFile.name}</p>
            <p style={{ color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
              {formatSize(selectedFile.size)}
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
          <p
            style={{
              marginTop: '0.5rem',
              textAlign: 'center',
              color: 'var(--color-text-muted)',
              fontSize: '0.875rem',
            }}
          >
            {upload.progress.percentage}% uploaded
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
          <button className="btn btn-secondary" onClick={upload.cancel}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
