import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import netlify from 'solid-start-netlify';

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
    }),
    solid({
      adapter: netlify({ edge: true }),
    }),
  ],
});
