# Madelynn Paulsen — Lumora site

Source for [madelynn-paulsen](https://github.com/bahaaaldin214/madelynn-paulsen) (GitHub Pages on `gh-pages`).

This repo is **not** part of the [Lumora](https://github.com/bahaaaldin214/lumora) monorepo. It vendors Lumora shared packages via the `lumora/` git submodule.

## Setup

```bash
git submodule update --init --recursive
pnpm install
pnpm dev
```

## Deploy

Built output is published to the `gh-pages` branch (see Lumora `scripts/deploy-all.mjs` or site CI).
