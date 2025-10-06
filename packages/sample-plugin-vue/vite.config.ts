import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  publicDir: 'public',
  server: {
    host: true,        // 0.0.0.0 (LAN access)
    port: 8097,        // custom port
    strictPort: true,  // fail instead of picking a random free port
    open: false
  },
  preview: {
    host: true,
    port: 8097,        // custom preview port
    strictPort: true
  }
});
