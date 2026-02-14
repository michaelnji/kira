# Component Architecture

- Components must be small and single-purpose
- Props typed in separate *.types.ts
- Component-specific functions in *.utils.ts
- Convert reusable logic into composables
- Tests for all components unless explicitly exempt
- Tailwind-first styling, custom CSS only in assets/css/
- Script setup order: imports, types, props, composables, state, methods, lifecycle hooks