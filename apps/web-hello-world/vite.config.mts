import { defineConfig } from '@solidjs/start/config';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/web-hello-world',
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  plugins: [
    viteTsConfigPaths({
      root: '../../',
    })
  ],
});