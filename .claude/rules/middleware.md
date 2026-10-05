---
paths:
  - "**/middleware/**"
---

# Middleware

Applies to route middleware (`middleware/`) and server middleware (`server/middleware/`).

## Simplicity

- One concern per middleware: auth, locale, logging, and so on. Do not combine them.
- Keep each middleware short and readable. Check a condition, then continue, redirect, or throw.
- Use straightforward `if` and early returns. No clever patterns.
- Do not add layers, options, or config for cases that do not exist yet.
- Run only where needed. Prefer named route middleware applied through `definePageMeta` over global middleware. Use global middleware only for checks that truly apply to every request.
- Middleware must be fast. No heavy work, and no unnecessary network or database calls on every request.

## DRY

- Do not repeat the same check in several middleware, pages, or handlers. Write it once and reuse it.
- Extract shared logic into a util or composable (`server/utils` on the server, `composables` or `utils` on the client). Middleware calls it.
- Before writing new logic, check whether it already exists. Reuse or extend it.
- Do not duplicate route or role lists. Define them once in one shared place.

## Reusability

- Name middleware by what it does: `auth.ts`, `admin.ts`, `guest.ts`. Avoid vague names like `check.ts`.
- Make route middleware composable. Apply several named middleware in `definePageMeta({ middleware: ['auth', 'admin'] })` instead of one big one.
- Keep middleware free of page-specific knowledge. Pass what varies through route meta (`route.meta`), not hardcoded paths.
- Type shared middleware inputs and outputs. Put types in the `types` folder.

## Route middleware (client and SSR)

- Use `defineNuxtRouteMiddleware` and return `navigateTo()` or `abortNavigation()` to stop or redirect. Return nothing to continue.
- Middleware runs on the server on first load and on the client after. Do not use browser-only APIs without a `import.meta.client` guard.
- Do not fetch large data here. Fetch in the page.
- Redirect with `navigateTo()`. Do not use `window.location`.

## Server middleware

- Use `defineEventHandler`. Server middleware runs on every request, so exit early for paths it does not apply to.
- Do not return a response unless you are ending the request (for example a redirect or an auth error). Returning a value stops the request chain.
- Attach data for later handlers to `event.context`. Type it by extending `H3EventContext`.
- Order matters. Files run alphabetically, so prefix with numbers (`01.auth.ts`) when order is important.

## Security

- Client-side route middleware is for UX only. Never rely on it for protection. Enforce auth and authorization again on the server in `server/middleware` or in each handler.
- Deny by default. Protect routes unless they are explicitly public.
- Check both authentication (who) and authorization (allowed to do this).
- Validate and verify tokens and sessions on the server. Never trust cookies, headers, or route params from the client without checking.
- Redirect targets must be validated. Allow only same-origin relative paths to prevent open redirects.
- Do not leak details in errors. Use generic `401` and `403` messages and never expose stack traces, secrets, or user data.
- Fail closed. If a check errors, deny the request.
- Never log tokens, passwords, or other sensitive data.
- Set security headers (CSP, `X-Frame-Options`, `X-Content-Type-Options`) in one server middleware, not per route.

## Errors

- Read [errors](errors.md) before writing error code. Server middleware throws `createError` directly because it ends the request. Route middleware uses `navigateTo()` or `abortNavigation()`. Shared check logic should return a `Result`.
