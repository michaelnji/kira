---
paths:
  - "**/server/**"
---

# Server

## Structure

- Use `defineEventHandler`. One handler per file.
- Put the HTTP method in the file name: `users.get.ts`, `users.post.ts`, `users/[id].delete.ts`.
- Routes live in `server/api` (prefixed `/api`) or `server/routes`. Use `server/middleware` for request-wide concerns and `server/plugins` for startup work.
- Dynamic segments use `[param]`. Read them with `getRouterParam(event, 'id')`.
- Keep handlers thin: parse and validate input, call a util, return the result. No business logic in handlers.

## Simplicity

- Keep endpoint code lean. Write the simplest thing that works.
- Avoid unnecessary abstractions: no service layers, repositories, factories, or base handler classes for a single endpoint.
- Inline simple logic instead of extracting a helper. Extract only when the same logic is used in three or more places or is genuinely complex.
- Use H3's built-in utilities (`readBody`, `getQuery`, `getRouterParam`, `setResponseStatus`, `sendRedirect`, and so on) instead of custom wrappers around them.
- If a handler grows beyond ~50 lines, consider splitting it into smaller endpoints rather than adding layers.
- Do not add options, config, or generic parameters for cases that do not exist yet.

## Input validation

- Validate all input (body, query, params, headers) before use. Never trust the client.
- Use the schema library already in the project (for example Zod or Valibot) with the H3 helpers: `readValidatedBody`, `getValidatedQuery`, `getValidatedRouterParams`.
- Reject invalid input with a `400`. Do not coerce silently.
- Validate output shape too when it crosses a boundary (external API responses, database rows exposed to clients).

## Errors

Read [errors](errors.md) before writing error code. It defines the Result pattern used across the project.

- Utils return `Result`. Handlers turn an `Err` into an HTTP error with `unwrapOrThrow`. Call `createError` directly only for errors raised in the handler itself (validation, auth).
- Throw with `createError({ statusCode, statusMessage, data? })`. Do not return error objects with a `200`.
- Use the right status: `400` invalid input, `401` unauthenticated, `403` forbidden, `404` not found, `409` conflict, `422` semantic validation, `500` unexpected.
- Messages are safe for clients. Never leak stack traces, SQL, file paths, or internal IDs.
- Log the real cause on the server. Wrap external calls with `attempt` so they return a `Result`.
- Stack traces stay on the server. Never send them in a response. See the "Stack traces" section in [errors](errors.md).

## Messages

How you word error and success messages depends on whether the project supports one language or several. Check first: look for `@nuxtjs/i18n` in `nuxt.config`, or a `locales` / `i18n` folder. If you cannot tell, ask.

**Single-language project.** Return plain, human-readable messages.

```ts
return err('not_found', 'Order not found')
// 404 { statusMessage: 'Order not found', data: { code: 'not_found' } }

return { message: 'Order created', order }
```

- Write complete sentences or short phrases a user can read as is.
- Say what happened, and what to do when it helps: `Password must be at least 8 characters`.
- Consistent tone and casing across the API.

**Multilanguage project.** Return codes the client can translate. The server never returns prose.

```ts
return err('not_found', 'order.not_found')
// 404 { statusMessage: 'order.not_found', data: { code: 'not_found' } }

return { message: 'order.created', order }
```

- Put a stable message code in `message` (and `statusMessage`). The client translates it with `t(code)`.
- Format: lowercase, dot-separated, `domain.reason`: `order.not_found`, `auth.invalid_credentials`, `order.created`.
- Codes are part of the API contract. Do not rename or reuse them. Never put user data or free text in a code.
- Make codes specific enough to need no extra values. Do not interpolate into them.
- Do not translate on the server and do not read the locale in handlers.
- When you add a code, add its translation to every locale file. The client shows a generic localized message for an unknown code.

**Both.**
- `data.code` is the error category from `ErrorCode` and drives logic. `message` is for display only. The client never branches on `message`.
- Error bodies keep the same shape: `statusCode`, `statusMessage`, `data.code`.
- Prefer returning the data over a success message. The client knows an action worked from the `2xx` status, and can show its own success text. Add a `message` only when the client cannot tell what happened.
- Never put internals in a message, in any language: no stack traces, SQL, file paths, or IDs.

## Auth and security

- Check authentication and authorization in the handler or in `server/middleware`. Never rely on the client or on hidden UI.
- Authorize per resource, not just per route. Confirm the user owns or may access the record.
- Never build queries by string concatenation. Use parameterized queries.
- Set cookies with `httpOnly`, `secure`, and `sameSite`.
- Do not return fields the client does not need (password hashes, tokens, internal flags). Select or map explicitly.

## Config and secrets

- Read config with `useRuntimeConfig(event)`.
- Secrets go in private `runtimeConfig` keys (not under `public`), set through `NUXT_` environment variables.
- Never hardcode secrets or commit `.env` files. Never send private config to the client.

## Reuse

- Shared logic lives in `server/utils`. Functions there are auto-imported in the server.
- Before writing a function, check `server/utils` for an existing one. Reuse or extend it instead of duplicating.
- Keep utils single-purpose and typed. Group by domain (`server/utils/db.ts`, `server/utils/auth.ts`).
- Do not import from `app/`, `components/`, or `pages/`. Server code must not depend on client code.

## Types

- Put all types in the `types` folder. Import them from there.
- The only exception is a very simple type used in a single file (for example a one-line local alias).
- Share request and response types between the server and the client from `types`. Do not redefine them.
- Type handler return values so `$fetch` and `useFetch` infer them on the client.

## Responses and performance

- Return plain serializable data. Use `setResponseStatus(event, 201)` for non-200 successes and `204` with no body for empty ones.
- Use `defineCachedEventHandler` or `defineCachedFunction` for expensive, cacheable reads. Set a sensible `maxAge` and a cache key that includes everything the response varies on.
- Do not block on slow work in a request. Use `event.waitUntil` or a task for background work.
- Paginate list endpoints. Never return unbounded results.
