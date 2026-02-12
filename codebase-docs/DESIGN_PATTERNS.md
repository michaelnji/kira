# Design Patterns

## Table of Contents

- [Architectural Patterns](#architectural-patterns)
- [Design Patterns](#design-patterns)
- [Middleware/Event Systems](#middlewareevent-systems)
- [Dependency Injection](#dependency-injection)
- [State Management](#state-management)
- [References](#references)

## Architectural Patterns

- Client-only SPA using Nuxt 4.
- Configuration-driven architecture: modules and plugins declared centrally ([nuxt.config.ts](file:///Users/michaelnji/Projects/kira/nuxt.config.ts#L3-L25)).
- Utility-first styling: Tailwind v4 guiding layout with semantic tokens in CSS variables ([app.css](file:///Users/michaelnji/Projects/kira/app/assets/css/app.css)).

## Design Patterns

- Theme via CSS custom properties: semantic tokens defined in `:root` and `.dark` ([app.css](file:///Users/michaelnji/Projects/kira/app/assets/css/app.css#L43-L105)).
- Composition API with script setup: lean component definition ([app.vue](file:///Users/michaelnji/Projects/kira/app/app.vue)).
- Unstyled component library: PrimeVue components styled via Tailwind utilities and per-instance `pt` props.
- Convention-based module usage: Icons, fonts available through Nuxt modules without explicit wiring in components.

## Middleware/Event Systems

- None detected in the repository.

## Dependency Injection

- Not used directly; Nuxt provides module-level capabilities and auto-registered components.

## State Management

- Minimal local state via Vue refs/computed (theme toggle, dialog, toasts, tabs, form inputs).

## References

- [nuxt.config.ts](file:///Users/michaelnji/Projects/kira/nuxt.config.ts)
- [app.css](file:///Users/michaelnji/Projects/kira/app/assets/css/app.css)
- [app.vue](file:///Users/michaelnji/Projects/kira/app/app.vue)
