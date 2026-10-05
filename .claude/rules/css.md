---
paths:
  - "**/*.css"
  - "**/*.scss"
---

# CSS

## Approach

- Prefer tailwind classes and way of styling if tailwind is installed over traditional css.
- Without tailwind, prefer utility classes and scoped styles. Avoid global selectors.
- Write custom CSS only for what utilities cannot express (animations, complex selectors, theme tokens).
- Global CSS is for resets, base element styles, and theme tokens only.

## Theme

- Respect the defined theme to the letter; colors, fonts, sizes, radii, shadows, borders. If it is defined in the theme, it MUST be respected.
- Use CSS variables for colors, spacing, and fonts. No hardcoded values.
- Do not invent new colors, sizes, or radii. Use the theme's scale. If one is missing, add it to the theme first, then use it.
- With Tailwind, define tokens in the theme (`@theme` in v4, or the config in v3) and use the generated classes. No arbitrary values such as `w-[137px]` or `text-[#333]` when a token exists.
- Support dark mode through theme variables, not duplicate rules.

## Specificity

- Keep specificity low. No `!important`.
- No ID selectors. Avoid deep nesting (3 levels at most) and long descendant chains.
- Style classes, not element tags, except in base styles.
- Scope component styles with `<style scoped>`.

## Layout and responsiveness

- Mobile first. Add breakpoints with `min-width`.
- Use container queries where it makes sense: components that live in different-width containers respond to their container, not the viewport.
- Use flexbox and grid for layout. No floats or fixed pixel widths for layout.
- Use relative units (`rem`, `%`, `fr`) over fixed `px` for sizes and spacing, unless the theme says otherwise.
- Respect `prefers-reduced-motion` for animations.

## Naming

- Name classes by purpose, not by appearance: `.error-text`, not `.red-text`.
- Keep one consistent naming style across the codebase.

## Simplicity

- Write the simplest CSS that works. Do not add rules for cases that do not exist.
- Do not use a custom class for a style used once. Use utilities or inline it where it is used.
- Do not repeat declarations. Use a variable, a utility class, or a shared component.
- Avoid clever selectors and hacks. If a style needs one, rethink the markup.
- Delete unused styles. Do not keep them "just in case".
- Do not add a preprocessor feature (mixins, functions, loops) where plain CSS or a variable does the job.
