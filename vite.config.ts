import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep small images as separate files so they stay cacheable.
    assetsInlineLimit: 2048,
  },
});
