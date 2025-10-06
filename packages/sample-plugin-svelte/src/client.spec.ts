/**
 * @file Unit tests for the Svelte host client helper.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const createHostClientMock = vi.fn(() => ({
  ready: vi.fn().mockResolvedValue(void 0),
  emit: vi.fn()
}));

vi.mock('@ayira/plugin-sdk', () => ({
  createHostClient: createHostClientMock
}));

import { createPluginClient } from './client';

describe('createPluginClient (svelte)', () => {
  const originalWindow = (globalThis as Record<string, unknown>).window;

  beforeEach(() => {
    createHostClientMock.mockClear();
    if (originalWindow === undefined) {
      delete (globalThis as Record<string, unknown>).window;
    } else {
      (globalThis as Record<string, unknown>).window = originalWindow;
    }
  });

  afterEach(() => {
    if (originalWindow === undefined) {
      delete (globalThis as Record<string, unknown>).window;
    } else {
      (globalThis as Record<string, unknown>).window = originalWindow;
    }
  });

  it('returns null when window is undefined', () => {
    expect(createPluginClient()).toBeNull();
    expect(createHostClientMock).not.toHaveBeenCalled();
  });

  it('creates a host client when window is defined', () => {
    (globalThis as Record<string, unknown>).window = {};

    const client = createPluginClient();
    expect(client).not.toBeNull();
    expect(createHostClientMock).toHaveBeenCalledTimes(1);
  });
});
