---
paths:
  - "**/lib/**"
---

# Lib

## Role

- Wrappers and setup for third-party libraries or SDKs. One per file.
- `lib/` is the boundary between your code and a library. The rest of the app talks to your wrapper, never to the library directly.
- Name files after the library or service: `lib/stripe.ts`, `lib/resend.ts`, `lib/s3.ts`.
- Do not put your own business logic here. That belongs in `server/utils` or `composables`.

## Framework independence

- No Vue or Nuxt specifics unless unavoidable. Keep framework-agnostic.
- Not auto-imported. Import explicitly. Do not rely on auto-imports inside `lib/` either, so files stay portable and testable.
- Pass config (API keys, URLs) in as arguments or read it at the call site from `useRuntimeConfig`. Do not call `useRuntimeConfig` inside `lib/`.
- Do not import from `pages/`, `components/`, or `composables/`.

## API design

- Export a small typed API. Hide library details from callers.
- Callers must not need to import the library or know its types. Define your own types for inputs and outputs in the `types` folder.
- Expose only what the app uses today. Do not wrap the whole library.
- Name functions by what the app does (`sendWelcomeEmail`), not by the library call (`resend.emails.send`).
- Create the client once per file and reuse it. Do not instantiate it on every call.
- Initialize lazily when the client needs secrets or is costly to create, so imports stay side-effect free.

## Errors

- Read [errors](errors.md) before writing error code. Wrap third-party calls with `attempt` so library exceptions never leak. Export functions that return `Result`.
- Map the library's error types to your `ErrorCode` in one place, inside the wrapper. Callers never see library errors.
- Keep the original error as `cause` so the stack is kept for logs. Never put it in a user-facing message.

## Security

- Secrets come from runtime config or environment variables. Never hardcode them or commit them.
- Server-only SDKs (payments, email, database) must only be imported from `server/`. Never import them in client code, or the secret ships to the browser.
- Do not log request payloads, tokens, or API keys.
- Set timeouts on network calls. Do not let a slow service hang a request.

## Simplicity

- Keep wrappers thin. A wrapper is a few typed functions, not a framework.
- Do not wrap a library if the app only calls it in one place. Call it there.
- No abstraction layers, adapters, or provider interfaces for libraries you do not plan to swap. Add one when a second implementation actually exists.
- Inline simple logic instead of extracting helpers.
- Use the library's own features and defaults. Do not re-implement them or add options "just in case".
- Prefer straightforward code over clever patterns.
- If a wrapper grows past ~100 lines, split it by feature into separate files rather than adding layers.
