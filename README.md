# Ayira Plugin Lab

A multi-framework playground for building Ayira platform plugins. This workspace ships ready-made sample plugins for Angular, React, Vue, Svelte, Solid, Qwik, and Lit so you can explore the host SDK and scaffold new experiences quickly.

## Prerequisites

- **Node.js**: v18.17 or newer (matches the engines field in `package.json`).
- **pnpm**: v8+ (`npm install -g pnpm` if you do not already have it).

## Getting Started

```bash
pnpm install        # install root + workspace dependencies
pnpm run start      # launch every plugin dev server in parallel
```

`pnpm run start` fans out to every workspace package with a `dev` script. Each plugin listens on a fixed port so you can open them all side by side without conflicts:

| Plugin Package | Framework | Dev Port |
| -------------- | ---------- | ------- |
| `@ayira-lab/sample-plugin-angular` | Angular | `8091` |
| `@ayira-lab/sample-plugin-lit` | Lit | `8092` |
| `@ayira-lab/sample-plugin-qwik` | Qwik | `8093` |
| `@ayira-lab/sample-plugin-react` | React | `8094` |
| `@ayira-lab/sample-plugin-solid` | Solid | `8095` |
| `@ayira-lab/sample-plugin-svelte` | Svelte | `8096` |
| `@ayira-lab/sample-plugin-vue` | Vue | `8097` |

> Each Vite config sets `server.host = true` so the dev server binds to all interfaces. Access them from another device on the same network if needed.

To focus on a single plugin, filter the command you need, e.g.:

```bash
pnpm --filter @ayira-lab/sample-plugin-qwik run dev
pnpm --filter @ayira-lab/sample-plugin-svelte run test
```

## Building & Previewing

```bash
pnpm run build   # build every plugin then collect artifacts under ./builds
pnpm run preview # start all Vite preview servers (same port mapping as dev)
```

Builds land in each package’s `dist/` folder. Afterwards, `scripts/collect-dist.mjs` copies those artifacts into `./builds/<package>` for quick distribution.

## Testing

Every plugin exposes Vitest scripts. Run them all at once or per package:

```bash
pnpm -r run test                          # run tests for every package
pnpm --filter @ayira-lab/sample-plugin-lit run test  # run lit-only tests
```

## Cleaning

Use the composite clean command when you want a fresh workspace:

```bash
pnpm run clean
```

That removes per-package build/test outputs (`dist`, `coverage`, `.turbo`, `.vite`) and clears the shared `builds` directory. If you only need the package artifacts gone, run `pnpm run clean:packages`.

## Project Layout

```
packages/
  sample-plugin-angular/  # Analog JS + Vite configuration
  sample-plugin-lit/      # LitElement widget with host client guard
  sample-plugin-qwik/     # Qwik client with dev/SSR entries
  sample-plugin-react/    # React + Vite sample
  sample-plugin-solid/    # SolidJS sample plugin
  sample-plugin-svelte/   # Svelte sample plugin
  sample-plugin-vue/      # Vue 3 sample plugin
scripts/
  collect-dist.mjs        # Copies per-package dist builds into ./builds
```

Each plugin demonstrates how to bootstrap the `@ayira/plugin-sdk` client safely in a browser-only environment and expose a simple `demo:clicked` emitter.

## Creating New Plugins

1. Copy one of the existing packages in `packages/` (Svelte or React make good starting points).
2. Update the `name`, manifest, and framework-specific files.
3. Register a new port in the package’s `vite.config.ts` to avoid clashes.
4. Add a manifest entry under `public/manifest.json` and update the changelog.

## Troubleshooting

- **Port already in use**: Update the `port` inside the plugin’s `vite.config.ts` or stop any lingering dev server processes.
- **Missing typings**: rerun `pnpm install` to ensure the workspace `node_modules/` is up to date.
- **Collect dist output missing**: ensure `pnpm run build` succeeded; the copy step only runs after every package build completes.

Happy hacking with Ayira plugins!
