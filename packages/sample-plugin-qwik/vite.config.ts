/**
 * @file Vite configuration for the Qwik sample plugin.
 */
import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';

export default defineConfig({
  plugins: [qwikVite()],
  build: { outDir: 'dist', emptyOutDir: true },
  publicDir: 'public',
  server: {
    host: true,        // 0.0.0.0 (LAN access)
    port: 8093,        // custom port
    strictPort: true,  // fail instead of picking a random free port
    open: false
  },
  preview: {
    host: true,
    port: 8093,        // custom preview port
    strictPort: true
  }
});
