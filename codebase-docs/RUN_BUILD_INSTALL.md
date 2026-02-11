# Run, Build & Install

## Table of Contents
- [Install](#install)
- [Run Dev](#run-dev)
- [Build](#build)
- [Generate Static](#generate-static)
- [Preview](#preview)
- [Lint & Format](#lint--format)
- [Git Hooks](#git-hooks)
- [Tests](#tests)
- [Migrations / Database](#migrations--database)
- [Docker](#docker)
- [Environment Variables](#environment-variables)
- [Sources](#sources)

## Install
Use any package manager (as per README):
- npm: `npm install`
- pnpm: `pnpm install`
- yarn: `yarn install`
- bun: `bun install`

## Run Dev
- `npm run dev` / `pnpm dev` / `yarn dev` / `bun run dev`
- Starts Nuxt dev server (default: http://localhost:3000)

## Build
- `npm run build` / `pnpm build` / `yarn build` / `bun run build`
- Runs `nuxt build` ([package.json](file:///Users/michaelnji/Projects/kira/package.json#L5-L13))

## Generate Static
- `npm run generate` / `pnpm generate` / `yarn generate`
- Runs `nuxt generate` ([package.json](file:///Users/michaelnji/Projects/kira/package.json#L5-L13))

## Preview
- `npm run preview` / `pnpm preview` / `yarn preview` / `bun run preview`
- Serves built project locally ([README.md](file:///Users/michaelnji/Projects/kira/README.md#L59-L73))

## Lint & Format
- Lint: `npm run lint` → `eslint .` ([package.json](file:///Users/michaelnji/Projects/kira/package.json#L11-L11))
- Format: `npm run format` → `biome format . --write` ([package.json](file:///Users/michaelnji/Projects/kira/package.json#L12-L12))

## Git Hooks
- On `postinstall`: `nuxt prepare && simple-git-hooks`
- `pre-commit`: `lint-staged` ([package.json](file:///Users/michaelnji/Projects/kira/package.json#L10-L47))

## Tests
- No test scripts or frameworks detected.

## Migrations / Database
- No database or migration tooling detected.

## Docker
- No Dockerfile or compose configuration detected.

## Environment Variables
- No `.env` or `.env.example` detected; application does not currently rely on environment variables.

## Sources
- [README.md](file:///Users/michaelnji/Projects/kira/README.md)
- [package.json](file:///Users/michaelnji/Projects/kira/package.json)
- [nuxt.config.ts](file:///Users/michaelnji/Projects/kira/nuxt.config.ts)

