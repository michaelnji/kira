# Configuration Reference

## Table of Contents

- [Nuxt Configuration](#nuxt-configuration)
- [Vite & Tailwind v4](#vite--tailwind-v4)
- [Theme Tokens](#theme-tokens)
- [PrimeVue](#primevue)
- [Fonts](#fonts)
- [Icons](#icons)
- [Animations](#animations)
- [ESLint](#eslint)
- [TypeScript](#typescript)
- [Feature Flags & Integrations](#feature-flags--integrations)

## Nuxt Configuration

File: [nuxt.config.ts](file:///Users/michaelnji/Projects/kira/nuxt.config.ts#L3-L25)

- `compatibilityDate: "2025-07-15"`
- `devtools: { enabled: true }`
- `vite.plugins: [tailwindcss()]`
- `css: ["~/assets/css/app.css"]`
- `modules: [@nuxt/fonts, @nuxt/icon, @nuxt/image, @vueuse/nuxt, @formkit/auto-animate/nuxt]`
- `icon.serverBundle.collections: ["solar"]`
- `fonts.provider: "local"`

## Vite & Tailwind v4

- Tailwind v4 is enabled via Vite plugin in Nuxt config ([nuxt.config.ts](file:///Users/michaelnji/Projects/kira/nuxt.config.ts#L6-L9)).
- Global CSS imports Tailwind and PrimeIcons, and defines theme tokens and utility classes ([app.css](file:///Users/michaelnji/Projects/kira/app/assets/css/app.css#L1-L135)).

## Theme Tokens

File: [app.css](file:///Users/michaelnji/Projects/kira/app/assets/css/app.css#L43-L105)

- Semantic tokens are defined as CSS custom properties.
- Light/dark variants are toggled by the `dark` class on `<html>`.
- Required semantics: primary, secondary, accent, neutral, info, success, warning, error.

## PrimeVue

- Plugin: [primevue.ts](file:///Users/michaelnji/Projects/kira/app/plugins/primevue.ts)
- Configured in styled mode via `@primeuix/themes` preset + semantic tokens.

## Fonts

File: [app.css](file:///Users/michaelnji/Projects/kira/app/assets/css/app.css#L1-L6)

- DM Sans is loaded via `@fontsource/dm-sans/*` imports.
- Nuxt Fonts module is configured, but the app shell uses Fontsource imports by default.

## Icons

Files:

- Config: [nuxt.config.ts](file:///Users/michaelnji/Projects/kira/nuxt.config.ts#L17-L21)
- Usage: Icon components within [app.vue](file:///Users/michaelnji/Projects/kira/app/app.vue)

## Animations

- Micro-interactions and subtle entrance reveals are implemented with anime.js in the app shell ([app.vue](file:///Users/michaelnji/Projects/kira/app/app.vue#L1-L120)).

## ESLint

File: [eslint.config.mjs](file:///Users/michaelnji/Projects/kira/eslint.config.mjs#L1-L5)

- Uses `@antfu/eslint-config`
- Enables formatters

## TypeScript

File: [tsconfig.json](file:///Users/michaelnji/Projects/kira/tsconfig.json#L1-L18)

- References to Nuxt-generated tsconfigs
- Empty `files` (Nuxt manages TS typing via references)

## Feature Flags & Integrations

- Devtools enabled in Nuxt
- @nuxt/image configured, but no direct usage in the app shell
- No environment variables detected
