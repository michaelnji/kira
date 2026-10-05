# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

Nuxt 4 (Vue 3, `app/` srcDir) with Pinia, Tailwind CSS v4 (via `@tailwindcss/vite`, tokens in `app/assets/css/tailwind.css`), and shadcn-vue (`shadcn-nuxt`, new-york style, components in `app/components/ui`, no prefix). Package manager is **bun**. Early-stage: `app/app.vue` is still a placeholder and there is no `pages/` or `server/` yet.

## Commands

```bash
bun run dev            # dev server on :3000
bun run build          # production build
bun run lint           # oxlint (use lint:fix to autofix)
bun run format         # oxfmt (format:check to verify)
bun run typecheck      # nuxt typecheck (vue-tsc)
bun run test           # vitest run
bunx vitest run tests/counter.test.ts   # single test file
bunx vitest run -t "name"               # single test by name
```

Pre-commit hook (simple-git-hooks) runs `lint-staged`: `oxlint --fix` + `oxfmt` on staged files. Formatting: no semicolons, single quotes. `app/components/ui` (shadcn output) is excluded from lint and format; don't hand-format it.

Tests live in `tests/**/*.test.ts` and run in the `nuxt` Vitest environment (`@nuxt/test-utils`), so auto-imports and Nuxt context work in tests.

## Project rules

ALWAYS USE CLAUDE'S TOOLS, NOT BASH.

Detailed conventions are in `.claude/rules/*.md`. Several are path-scoped (composables, css, lib, middleware, pages, server, types, utils) and load when you touch those paths. Read `general.md` and `errors.md` first; they apply everywhere. Key points that are easy to miss:

- **Result pattern for errors** (`errors.md`): expected failures return `Result<T, AppError>` (`ok()` / `err()` / `attempt()` from `shared/utils/result.ts`), they don't throw. Only server handlers convert an `Err` to an HTTP error via `unwrapOrThrow`. Never send `cause` or stacks to the client. If the project has no `shared/` folder when you need these helpers, ask before choosing a location.
- **Types**: types live in `types/`, no runtime code there, no enums (use string-literal unions), no `any`, prefer `interface` for object shapes.
- **`lib/`** wraps third-party SDKs behind a small typed API, returns `Result`, and must not rely on auto-imports or Nuxt APIs. (Note: `app/lib/utils.ts` is the shadcn `cn` helper alias `@/lib/utils`.)
- **CSS**: Tailwind classes first; use theme tokens, no arbitrary values when a token exists; support dark mode through theme variables.
- **Scope**: do only what was asked, keep things simple, no speculative abstractions, comments only where they explain why.
