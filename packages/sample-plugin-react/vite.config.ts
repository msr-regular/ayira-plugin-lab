import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist', emptyOutDir: true },
  publicDir: 'public',
  server: {
    host: true,        // 0.0.0.0 (LAN access)
    port: 8094,        // custom port
    strictPort: true,  // fail instead of picking a random free port
    open: false
  },
  preview: {
    host: true,
    port: 8094,        // custom preview port
    strictPort: true
  }
});
