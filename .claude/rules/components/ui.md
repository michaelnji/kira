---
paths:
  - "**/components/ui/**"
---

# UI components (`components/ui`)

## Ownership

- These are components installed by **shadcn** and related registries.
- Changes here **MUST** be explicitly initiated/confirmed by the user.
- If a task seems to need a change here, stop and ask first. Do not edit these files on your own.
- Exclude from tests, linting, formatting, and fallow or other review workflows.

## Using them

- Use them as they are. Import and compose them in your own components.
- To customize, wrap them in a component outside `components/ui` (for example `components/UserCard/`) or pass `class` and props. Do not edit the source.
- Do not copy a ui component to tweak it. Wrap or extend instead.
- Add new ones with the registry CLI (for example `npx shadcn-vue@latest add button`), not by writing them by hand.
- Do not move, rename, or delete files in this folder.
- Do not import from `pages/`, `server/`, or feature components inside these files.

## Theme

- They are styled by the project theme (CSS variables and tokens). Change the look in the theme, not in the component. See [css](../css.md).

## Simplicity

- Prefer an existing ui component over building a new one.
- Do not add a wrapper unless it adds real behavior or fixes a repeated customization.
- Do not duplicate a ui component's logic or styles in your own components.
