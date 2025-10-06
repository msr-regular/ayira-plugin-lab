/**
 * @file Vite configuration for the Svelte sample plugin.
 * @description Registers the Svelte plugin and ensures build artifacts match Ayira expectations.
 */
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: { outDir: 'dist', emptyOutDir: true },
  publicDir: 'public',
  server: {
    host: true,        // 0.0.0.0 (LAN access)
    port: 8096,        // custom port
    strictPort: true,  // fail instead of picking a random free port
    open: false
  },
  preview: {
    host: true,
    port: 8096,        // custom preview port
    strictPort: true
  }
});
