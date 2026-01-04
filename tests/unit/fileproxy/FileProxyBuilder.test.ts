import { describe, it, expect } from 'vitest';
import { FileProxyBuilder, fileProxy, fileProxyUtils } from '../../../src/fileproxy';

describe('FileProxyBuilder', () => {
  const testId = 'test-asset-uuid';
  const testName = 'image.jpg';

  describe('basic URL building', () => {
    it('builds a simple URL', () => {
      const url = new FileProxyBuilder(testId, testName).build();

      expect(url).toBe(`https://files.fairu.app/${testId}/image.jpg`);
    });

    it('uses custom base URL', () => {
      const url = new FileProxyBuilder(testId, testName, 'https://custom.cdn.com').build();

      expect(url).toBe(`https://custom.cdn.com/${testId}/image.jpg`);
    });

    it('encodes filename with special characters', () => {
      const url = new FileProxyBuilder(testId, 'my file (1).jpg').build();

      expect(url).toContain('my%20file%20(1).jpg');
    });
  });

  describe('dimension parameters', () => {
    it('adds width parameter', () => {
      const url = fileProxy(testId, testName).width(800).build();

      expect(url).toContain('width=800');
    });

    it('adds height parameter', () => {
      const url = fileProxy(testId, testName).height(600).build();

      expect(url).toContain('height=600');
    });

    it('adds both dimensions', () => {
      const url = fileProxy(testId, testName).dimensions(800, 600).build();

      expect(url).toContain('width=800');
      expect(url).toContain('height=600');
    });

    it('validates width range', () => {
      expect(() => fileProxy(testId, testName).width(0)).toThrow();
      expect(() => fileProxy(testId, testName).width(6001)).toThrow();
    });

    it('validates height range', () => {
      expect(() => fileProxy(testId, testName).height(0)).toThrow();
      expect(() => fileProxy(testId, testName).height(6001)).toThrow();
    });
  });

  describe('quality parameter', () => {
    it('adds quality parameter', () => {
      const url = fileProxy(testId, testName).quality(85).build();

      expect(url).toContain('quality=85');
    });

    it('validates quality range', () => {
      expect(() => fileProxy(testId, testName).quality(0)).toThrow();
      expect(() => fileProxy(testId, testName).quality(101)).toThrow();
    });
  });

  describe('format parameter', () => {
    it('adds format parameter', () => {
      const url = fileProxy(testId, testName).format('webp').build();

      expect(url).toContain('format=webp');
    });

    it('supports all formats', () => {
      const formats = ['jpg', 'jpeg', 'png', 'webp'] as const;

      for (const format of formats) {
        const url = fileProxy(testId, testName).format(format).build();
        expect(url).toContain(`format=${format}`);
      }
    });
  });

  describe('fit parameter', () => {
    it('adds fit=cover parameter', () => {
      const url = fileProxy(testId, testName).fit('cover').build();

      expect(url).toContain('fit=cover');
    });

    it('adds fit=contain parameter', () => {
      const url = fileProxy(testId, testName).fit('contain').build();

      expect(url).toContain('fit=contain');
    });
  });

  describe('focal point', () => {
    it('adds focal parameter', () => {
      const url = fileProxy(testId, testName).focal(50, 30, 1.5).build();

      expect(url).toContain('focal=50-30-1.5');
    });

    it('defaults zoom to 1', () => {
      const url = fileProxy(testId, testName).focal(50, 50).build();

      expect(url).toContain('focal=50-50-1');
    });

    it('validates focal x range', () => {
      expect(() => fileProxy(testId, testName).focal(-1, 50)).toThrow();
      expect(() => fileProxy(testId, testName).focal(101, 50)).toThrow();
    });

    it('validates focal y range', () => {
      expect(() => fileProxy(testId, testName).focal(50, -1)).toThrow();
      expect(() => fileProxy(testId, testName).focal(50, 101)).toThrow();
    });

    it('parses focal from comma-separated string', () => {
      const url = fileProxy(testId, testName).focalFromString('50,30').build();

      expect(url).toContain('focal=50-30-1');
    });

    it('parses focal from dash-separated string', () => {
      const url = fileProxy(testId, testName).focalFromString('50-30-1.5').build();

      expect(url).toContain('focal=50-30-1.5');
    });

    it('handles null/undefined focal string', () => {
      const builder = fileProxy(testId, testName);

      builder.focalFromString(null);
      builder.focalFromString(undefined);

      const url = builder.build();
      expect(url).not.toContain('focal=');
    });
  });

  describe('special flags', () => {
    it('adds raw parameter', () => {
      const url = fileProxy(testId, testName).raw().build();

      expect(url).toContain('raw=true');
    });

    it('adds process_svg parameter', () => {
      const url = fileProxy(testId, testName).processSvg().build();

      expect(url).toContain('process_svg=true');
    });
  });

  describe('video parameters', () => {
    it('adds version parameter', () => {
      const url = fileProxy(testId, 'video.mp4').version('high').build();

      expect(url).toContain('version=high');
    });

    it('adds timestamp parameter', () => {
      const url = fileProxy(testId, 'video.mp4').timestamp('00:01:30.500').build();

      expect(url).toContain('timestamp=00%3A01%3A30.500');
    });

    it('converts seconds to timestamp', () => {
      const url = fileProxy(testId, 'video.mp4').timestampFromSeconds(90.5).build();

      expect(url).toContain('timestamp=00%3A01%3A30.500');
    });
  });

  describe('chaining', () => {
    it('chains multiple parameters', () => {
      const url = fileProxy(testId, testName)
        .width(800)
        .height(600)
        .quality(85)
        .format('webp')
        .fit('cover')
        .focal(50, 50, 1)
        .build();

      expect(url).toContain('width=800');
      expect(url).toContain('height=600');
      expect(url).toContain('quality=85');
      expect(url).toContain('format=webp');
      expect(url).toContain('fit=cover');
      expect(url).toContain('focal=50-50-1');
    });
  });

  describe('utility methods', () => {
    it('converts to string', () => {
      const url = fileProxy(testId, testName).width(800).toString();

      expect(url).toContain('width=800');
    });

    it('gets current params', () => {
      const builder = fileProxy(testId, testName).width(800).quality(85);
      const params = builder.getParams();

      expect(params.width).toBe(800);
      expect(params.quality).toBe(85);
    });
  });
});

describe('fileProxyUtils', () => {
  it('builds meta URL', () => {
    const url = fileProxyUtils.meta('asset-id');

    expect(url).toBe('https://files.fairu.app/meta/asset-id');
  });

  it('builds HLS URL', () => {
    const url = fileProxyUtils.hls('tenant-id', 'asset-id', 'playlist.m3u8');

    expect(url).toBe('https://files.fairu.app/hls/tenant-id/asset-id/playlist.m3u8');
  });

  it('builds HLS key URL', () => {
    const url = fileProxyUtils.hlsKey('asset-id', 'high', 'key.bin');

    expect(url).toBe('https://files.fairu.app/hls/key/asset-id/high/key.bin');
  });

  it('uses custom base URL', () => {
    const url = fileProxyUtils.meta('asset-id', 'https://custom.cdn.com');

    expect(url).toBe('https://custom.cdn.com/meta/asset-id');
  });
});
