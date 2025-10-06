/**
 * @file Vite configuration for the Solid sample plugin.
 */
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
  build: { outDir: 'dist', emptyOutDir: true },
  publicDir: 'public',
  server: {
    host: true,        // 0.0.0.0 (LAN access)
    port: 8095,        // custom port
    strictPort: true,  // fail instead of picking a random free port
    open: false
  },
  preview: {
    host: true,
    port: 8095,        // custom preview port
    strictPort: true
  }
});
