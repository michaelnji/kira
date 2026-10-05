---
paths:
  - "**/composables/**"
---

# Composables

## Structure

- File and function names start with `use`. Named exports.
- A composable must do one thing and one thing alone, its code MUST be DRY (Do not Repeat Yourself).
- One composable per file, named after the composable: `useOrders.ts` exports `useOrders`.
- Group by domain, not by type. `useOrders`, `useCart`, not `useFetchers`.

## Reactivity and state

- Return refs and functions, not unwrapped values, to keep reactivity.
- Accept `MaybeRefOrGetter` params when the input can change, and read them with `toValue()`.
- Use `useState` for shared SSR-safe state. No module-level mutable state.
- Use `computed` for derived values. Do not store what you can compute.
- Clean up side effects (listeners, timers, subscriptions) with `onScopeDispose` or `onUnmounted`.
- Guard browser-only code with `import.meta.client`.

## Types and docs

- Fully typed params and return values.
- If a composable's types are too complex and/or is reusable, move it to the `types` folder.
- Leave JSDoc type comments so that the composables have better intellisense.
- Keep JSDoc short: one line of purpose, plus `@param` and `@returns` only when they add information.

## Reuse

- Utility and/or reusable functions MUST be moved to the `utils` folder.
- Reuse existing utility functions. Check the `utils` folder for reusable functions before writing a new one.
- Check for an existing composable before writing a new one. Reuse or extend it.
- Do not duplicate fetch calls or state across composables. Share through one composable.

## Data fetching

- Use `useFetch` or `useAsyncData` for data loaded with a page or component. Use `$fetch` inside actions triggered by the user.
- Use a stable, unique key for `useAsyncData`.
- Do not fetch in a composable that is called at module level or outside a setup context.

## Errors

- Read [errors](errors.md) before writing error code. Actions that can fail (submit, save, delete) return `Promise<Result<T>>`. Do not throw for expected failures, and do not show UI from a composable.

## Testing

- If testing is set up in the repo, write a test for a composable only when the user requests one, and write at most 1 test for it.

## Simplicity

- Keep composables small and readable. Most are a few refs, one or two functions, and a return.
- Do not create a composable for logic used in one place. Keep it in the component until it is reused.
- Do not wrap a single `useFetch` or `ref` in a composable.
- Do not add options, flags, or generic parameters for cases that do not exist yet.
- Inline simple logic instead of extracting helpers.
- Prefer plain `if` and early returns over clever patterns.
- Return only what callers use. Do not expose internal state "just in case".
- If a composable grows past ~80 lines or does two jobs, split it into smaller composables.
