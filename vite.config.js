import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        restaurant: resolve(__dirname, 'src/restaurant.html'),
        hotel: resolve(__dirname, 'src/hotel.html'),
        room: resolve(__dirname, 'src/room2lx.html'),
        nested: resolve(__dirname, 'src/room2.html')
      },
    },
    outDir: '../dist',
  },
  plugins: [injectHTML()],
});
