# Module: Public Assets

## Table of Contents

- [Purpose](#purpose)
- [Responsibilities](#responsibilities)
- [Key Files](#key-files)
- [Public Interfaces](#public-interfaces)
- [Dependencies](#dependencies)
- [Code Examples](#code-examples)
- [Diagram](#diagram)

## Purpose

Provide static assets (fonts, favicon, robots) served directly by the Nuxt app.

## Responsibilities

- Host local fonts referenced by global CSS.
- Provide site metadata assets (favicon, robots).

## Key Files

- `public/fonts/*.woff2` referenced by [app.css](file:///Users/michaelnji/Projects/kira/app/assets/css/app.css#L3-L33)
- [public/robots.txt](file:///Users/michaelnji/Projects/kira/public/robots.txt#L1-L2)
- `public/favicon.ico`

## Public Interfaces

- Assets available under `/` path (e.g., `/fonts/GeneralSans-Regular.woff2`).

## Dependencies

- Global CSS font-face declarations rely on these font files ([app.css](file:///Users/michaelnji/Projects/kira/app/assets/css/app.css#L3-L33)).

## Code Examples

```css
@font-face {
  font-family: 'General Sans';
  src: url('/fonts/GeneralSans-Regular.woff2') format('woff2');
}
```

## Diagram

```mermaid
flowchart LR
  PublicAssets --> Fonts
  Fonts --> CSSFontFace
  CSSFontFace --> AppShell
```
