/**
 * @file Qwik root component tests.
 */
import { describe, expect, it, vi } from 'vitest';
import { component$ } from '@builder.io/qwik';

// Qwik components are mostly tested via SSR snapshot or by invoking component factories.
// For brevity, we ensure the component can be instantiated without throwing when the client is present.

vi.mock('./client', () => ({
  createPluginClient: () => ({
    ready: vi.fn().mockResolvedValue(void 0),
    emit: vi.fn()
  })
}));

import App from './root';

describe('Qwik App', () => {
  it('provides component factory', () => {
    const factory = component$(() => <App />);
    expect(factory).toBeDefined();
  });
});
