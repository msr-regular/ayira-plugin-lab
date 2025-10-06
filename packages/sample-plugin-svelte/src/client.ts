/**
 * @file Svelte plugin host bridge utilities.
 * @description Provides a safe helper to access the Ayira host client when a browser window is present.
 */
import { createHostClient } from '@ayira/plugin-sdk';

export type PluginClient = ReturnType<typeof createHostClient> | null;

/**
 * Creates a new host client only when running inside a browser window.
 */
export function createPluginClient(): PluginClient {
  if (typeof window === 'undefined') {
    return null;
  }

  return createHostClient();
}
