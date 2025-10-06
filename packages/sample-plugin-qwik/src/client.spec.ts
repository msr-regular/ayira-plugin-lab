/**
 * @file Unit tests for Qwik host client helper.
 */
import { describe, expect, it, vi, beforeEach } from 'vitest';

const createHostClientMock = vi.fn(() => ({ ready: vi.fn().mockResolvedValue(void 0), emit: vi.fn() }));

vi.mock('@ayira/plugin-sdk', () => ({
  createHostClient: createHostClientMock
}));

import { createPluginClient } from './client';

describe('createPluginClient (qwik)', () => {
  const originalWindow = (globalThis as Record<string, unknown>).window;

  beforeEach(() => {
    createHostClientMock.mockClear();
    if (originalWindow === undefined) {
      delete (globalThis as Record<string, unknown>).window;
    } else {
      (globalThis as Record<string, unknown>).window = originalWindow;
    }
  });

  it('returns null without window', () => {
    expect(createPluginClient()).toBeNull();
    expect(createHostClientMock).not.toHaveBeenCalled();
  });

  it('creates client when window exists', () => {
    (globalThis as Record<string, unknown>).window = {};

    const client = createPluginClient();
    expect(client).not.toBeNull();
    expect(createHostClientMock).toHaveBeenCalledTimes(1);
  });
});
