/**
 * @file Host client helper for Qwik sample plugin.
 */
import { createHostClient } from '@ayira/plugin-sdk';

export type PluginClient = ReturnType<typeof createHostClient> | null;

export function createPluginClient(): PluginClient {
  if (typeof window === 'undefined') {
    return null;
  }

  return createHostClient();
}
