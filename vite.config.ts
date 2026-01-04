import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        react: path.resolve(__dirname, 'src/react.ts'),
        vanilla: path.resolve(__dirname, 'src/vanilla.ts'),
        fragments: path.resolve(__dirname, 'src/fragments/index.ts'),
        upload: path.resolve(__dirname, 'src/upload/index.ts'),
        fileproxy: path.resolve(__dirname, 'src/fileproxy/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'urql',
        '@urql/core',
        '@urql/exchange-graphcache',
        '@urql/exchange-auth',
        '@urql/exchange-retry',
        '@graphql-typed-document-node/core',
        'graphql',
        'wonka',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          urql: 'urql',
          '@urql/core': 'urqlCore',
          '@urql/exchange-graphcache': 'graphcache',
          graphql: 'graphql',
          wonka: 'wonka',
        },
      },
    },
    sourcemap: true,
    minify: false,
  },
});
