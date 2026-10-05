---
paths:
  - "**/pages/**/*.vue"
---

# Pages

## Role

- Pages are route entry points. Compose components, do not hold heavy UI.
- Do not write business logic here. Put it in composables or the server.
- Use `<script setup lang="ts">`.
- A page wires together data, layout, and components. Nothing more.

## Routing

- File names follow routes. Use `[param]` for dynamic segments, `[[param]]` for optional ones, and `[...slug]` for catch-all.
- Use `index.vue` for a directory's root route.
- Read params with `useRoute()`. Validate them (for example with `definePageMeta({ validate })`) before use.
- Navigate with `<NuxtLink>` or `navigateTo()`. Never use plain `<a>` for internal links.
- Use `definePageMeta` for layout, middleware, and page transitions.
- Put auth and redirect checks in route middleware, not in the page body.

## Data fetching

- Fetch data with `useFetch` or `useAsyncData`. Do not call `$fetch` at the top level of `<script setup>`, because it fetches twice (server and client).
- Use `$fetch` for user actions only (submit, delete, click handlers).
- Always handle loading, error, and empty states.
- Use a stable, unique key for `useAsyncData`. Include route params so data refetches when they change.
- Fetch in the page and pass data down as props. Do not fetch in leaf components.

## SEO

- Set SEO with `useSeoMeta`. Every page needs at least a title and description.
- Make titles and descriptions unique per page. Use dynamic data for dynamic routes.
- Use one `<h1>` per page.

## State

- Keep page state local with `ref` and `computed`.
- Share state across pages with `useState` or a store, not module-level variables.
- Keep filters and pagination in the URL query so pages are linkable and refresh-safe.

## Simplicity

- Keep pages lean. A page is mostly template and a few lines of setup.
- Do not create a component for markup used once. Inline it until it is reused or grows large.
- Avoid unnecessary abstractions: no wrapper composables for a single `useFetch` call.
- Inline simple logic instead of extracting helpers.
- Prefer straightforward `v-if` / `v-else` over nested ternaries or computed render maps.
- If a page grows beyond ~100 lines of template, extract sections into components rather than adding logic layers.
- Do not add props, options, or flags for cases that do not exist yet.

## Errors

- Read [errors](errors.md) before writing error code. Check the `Result` returned by composable actions and show `result.error.message`. Use the `error` ref from `useFetch` / `useAsyncData` for page-load failures.
