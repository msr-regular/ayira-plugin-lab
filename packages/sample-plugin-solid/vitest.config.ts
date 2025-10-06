/**
 * @file Vitest configuration for the Solid sample plugin.
 */
import { defineConfig } from 'vitest/config';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.spec.tsx']
  }
});
