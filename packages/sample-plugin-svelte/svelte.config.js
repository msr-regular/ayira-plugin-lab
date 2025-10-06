/**
 * @file Svelte configuration for the Ayira sample plugin showcase.
 * @description Enables Vite preprocessing so TypeScript and modern Svelte syntax compile correctly.
 */
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: [vitePreprocess()]
};

export default config;
