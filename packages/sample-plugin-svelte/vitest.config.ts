/**
 * @file Vitest configuration for the Svelte sample plugin.
 * @description Enables jsdom environment and reuses the Svelte Vite plugin for component transpilation.
 */
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.spec.ts']
  }
});
