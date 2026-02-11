# Configuration Reference

## Table of Contents
- [Nuxt Configuration](#nuxt-configuration)
- [Vite & Tailwind v4](#vite--tailwind-v4)
- [DaisyUI Theme](#daisyui-theme)
- [Fonts](#fonts)
- [Icons](#icons)
- [ESLint](#eslint)
- [Biome](#biome)
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
- Global CSS imports Tailwind and configures DaisyUI via CSS plugin directives ([app.css](file:///Users/michaelnji/Projects/kira/app/assets/css/app.css#L1-L38)).

## DaisyUI Theme
File: [app.css](file:///Users/michaelnji/Projects/kira/app/assets/css/app.css#L47-L81)
- Theme name: `kira`
- Default, dark preference, color-scheme defined
- Color tokens (base, primary, secondary, accent, neutral, info, success, warning, error)
- Radii, sizes, border, depth, noise

## Fonts
File: [app.css](file:///Users/michaelnji/Projects/kira/app/assets/css/app.css#L3-L33)
- Local font-face declarations for "General Sans" and "Gambetta"
- WOFF2 assets under `public/fonts`

## Icons
Files:
- Config: [nuxt.config.ts](file:///Users/michaelnji/Projects/kira/nuxt.config.ts#L17-L21)
- Usage: Icon components within [app.vue](file:///Users/michaelnji/Projects/kira/app/app.vue#L93-L100)

## ESLint
File: [eslint.config.mjs](file:///Users/michaelnji/Projects/kira/eslint.config.mjs#L1-L5)
- Uses `@antfu/eslint-config`
- Enables formatters

## Biome
File: [biome.json](file:///Users/michaelnji/Projects/kira/biome.json#L1-L28)
- Formatter enabled
- Indent style/width configured
- Import organizer enabled
- Linter disabled
- VCS integration respects `.gitignore`

## TypeScript
File: [tsconfig.json](file:///Users/michaelnji/Projects/kira/tsconfig.json#L1-L18)
- References to Nuxt-generated tsconfigs
- Empty `files` (Nuxt manages TS typing via references)

## Feature Flags & Integrations
- Devtools enabled in Nuxt
- @nuxt/image configured, but no direct usage in the app shell
- No environment variables detected

