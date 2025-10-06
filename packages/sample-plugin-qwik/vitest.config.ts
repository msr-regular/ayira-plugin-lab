/**
 * @file Vitest configuration for Qwik sample plugin.
 */
import { defineConfig } from 'vitest/config';
import { qwikVite } from '@builder.io/qwik/optimizer';

export default defineConfig({
  plugins: [qwikVite()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.spec.ts', 'src/**/*.spec.tsx']
  }
});
