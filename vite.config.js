import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-inject';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        nested: resolve(__dirname, 'src/restaurant.html'),
        nested: resolve(__dirname, 'src/hotel.html'),
        nested: resolve(__dirname, 'src/room2lx.html'),
        nested: resolve(__dirname, 'src/room2.html'),
        nested: resolve(__dirname, 'src/room3.html'),
      },
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});
