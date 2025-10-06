/**
 * @file Vite configuration for the Lit sample plugin showcase.
 * @description Emits assets into `dist` so the host can bundle the plugin output.
 */
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  publicDir: 'public',
  server: {
    host: true,        // 0.0.0.0 (LAN access)
    port: 8092,        // custom port
    strictPort: true,  // fail instead of picking a random free port
    open: false
  },
  preview: {
    host: true,
    port: 8092,        // custom preview port
    strictPort: true
  }
});
