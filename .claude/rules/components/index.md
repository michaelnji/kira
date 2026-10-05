---
paths:
  - "**/components/**/*.vue"
---

# Components

## Structure

- Components should be folders with the `.vue` file for the component and a `.ts` file for types.

```
components/
  UserCard/
    UserCard.vue
    UserCard.types.ts
```

- PascalCase file names. Nested dirs prefix the auto-imported name.
- One component per file.
- Name components by what they are or do: `OrderSummary`, not `Box` or `Item`. Multi-word names only.

## Script

- Use `<script setup lang="ts">`.
- Order inside the file: `<script setup>`, `<template>`, then `<style>`.
- Inside the script: imports, props and emits, state, computed, functions, lifecycle.

## Props and emits

- Type props with `defineProps<{...}>()`, emits with `defineEmits<{...}>()`.
- Set defaults with `withDefaults` or destructured defaults. Do not rely on `undefined`.
- Do not mutate props. Emit an event or use `defineModel` for two-way binding.
- Keep the props list short. If a component needs many props, split it or use slots.
- Use slots for flexible content instead of many content props.

## Types

- If the types are minimal, do it in the component.
- If the component has its own larger types, put them in the component folder's `.ts` file.
- If the types are reusable, move it to the `types` folder.

## Logic and data

- Keep components small and presentational. Move logic to composables.
- No data fetching in leaf components. Pass data via props.
- Components do not hold business logic. They show data and emit events.
- Read [errors](../errors.md) before writing error code. Check the `Result` from a composable and show `result.error.message`. Do not wrap `$fetch` in `try/catch` here.

## Template

- Use stable, unique `:key` values in `v-for`. Never use the index when items can reorder.
- Do not combine `v-if` and `v-for` on the same element.
- Keep template expressions simple. Move anything non-trivial to `computed` or a function.
- Use `<NuxtLink>` for internal links and `<NuxtImg>` for images when the modules are installed.

## Styling

- Follow [css](../css.md) for styling.
- Use scoped styles or utility classes. No global styles from a component.

## Accessibility

- Use semantic elements: `<button>` for actions, `<a>` / `<NuxtLink>` for navigation, labels for inputs.
- Interactive elements must work with the keyboard and have a visible focus state.
- Images need `alt` text. Icon-only buttons need an `aria-label`.

## Simplicity

- Keep components lean. A component is mostly template with a few lines of script.
- Do not create a component for markup used once. Inline it until it is reused or grows large.
- Do not add props, slots, variants, or options for cases that do not exist yet.
- Do not build generic "config-driven" components when two plain components are clearer.
- Inline simple logic instead of extracting helpers.
- Prefer `v-if` / `v-else` over nested ternaries or computed render maps.
- If a template grows past ~100 lines or a component does two jobs, split it into smaller components.
