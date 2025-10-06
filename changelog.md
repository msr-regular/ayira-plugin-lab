# Changelog

## 2025-10-06
- Feature (plugins:sample-plugin-svelte): Added Svelte sample plugin with guarded host client helper, dedicated Vitest config, and manifest assets.
- Feature (plugins:sample-plugin-solid): Introduced SolidJS sample plugin that reuses the shared host client helper and ships with unit tests.
- Feature (plugins:sample-plugin-qwik): Delivered Qwik showcase plugin including dev/SSR entries and updated root component wiring to avoid missing entry imports.
- Feature (plugins:sample-plugin-lit): Shipped Lit-based plugin with custom element wrapper and safe host client bootstrapping.
- Enhancement (config): Standardised Vite dev/preview ports (8091-8097) across all plugins to support parallel startup.
- Enhancement (docs): Authored repository README with setup, build, test, and troubleshooting guidance.
