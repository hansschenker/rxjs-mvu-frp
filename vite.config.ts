import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,           // clearly define dev-server port
  },
  build: {
    outDir: 'dist',       // explicit build output directory
    sourcemap: true,      // source maps enabled for debugging
  },
});
