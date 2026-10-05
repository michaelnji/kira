# Errors

Global rule. Read this before writing, throwing, or handling any error, on the server and on the client.

We use the **Result pattern**, borrowed from Rust. A function that can fail in an expected way returns a `Result` instead of throwing. The caller must check it before using the value.

## The pattern

A `Result<T, E>` is one of two values:

- `Ok<T>`: success, carries a `value`.
- `Err<E>`: failure, carries an `error`.

Rust comparison:

| Rust | Here |
|---|---|
| `Result<T, E>` | `Result<T, E>` |
| `Ok(value)` | `ok(value)` |
| `Err(error)` | `err(error)` |
| `match` / `if let` | `if (!result.ok)` (TypeScript narrows the type) |
| `?` operator | `if (!result.ok) return result` (early return) |
| `unwrap()` (panics) | `unwrapOrThrow(result)` (throws an HTTP error, server boundary only) |
| `panic!` | `throw`, for bugs only |

### Types

Types live in the `types` folder (see [types](types.md)). No runtime code there.

```ts
// types/result.ts
export type Ok<T> = { ok: true; value: T }
export type Err<E> = { ok: false; error: E }
export type Result<T, E = AppError> = Ok<T> | Err<E>

export type ErrorCode =
  | 'validation'
  | 'unauthenticated'
  | 'forbidden'
  | 'not_found'
  | 'conflict'
  | 'external'
  | 'internal'

export interface AppError {
  code: ErrorCode
  message: string // safe to show to a user. A translation code in multilanguage projects (see server.md)
  cause?: unknown // original error, for logs only, never sent to the client
}
```

- `ok` is the discriminant. Checking `result.ok` narrows `value` and `error` for you.
- `message` is always safe for users. Put internal detail in `cause`.
- Add a code to `ErrorCode` only when callers need to react differently to it.

### Helpers

Runtime helpers live in `shared/utils/result.ts`, so they are auto-imported on both the client and the server. If the project has no `shared/` folder, ask before choosing another place.

```ts
// shared/utils/result.ts
export const ok = <T>(value: T): Ok<T> => ({ ok: true, value })

export const err = (code: ErrorCode, message: string, cause?: unknown): Err<AppError> =>
  ({ ok: false, error: { code, message, cause } })

// Run code that might throw (third-party calls, JSON parse) and turn it into a Result.
export async function attempt<T>(
  fn: () => Promise<T> | T,
  fail: (cause: unknown) => AppError,
): Promise<Result<T>> {
  try {
    return ok(await fn())
  } catch (cause) {
    return { ok: false, error: fail(cause) }
  }
}
```

Server-only helper in `server/utils/result.ts`:

```ts
const statusByCode: Record<ErrorCode, number> = {
  validation: 400,
  unauthenticated: 401,
  forbidden: 403,
  not_found: 404,
  conflict: 409,
  external: 502,
  internal: 500,
}

// The only place a Result becomes a thrown HTTP error.
export function unwrapOrThrow<T>(result: Result<T>): T {
  if (result.ok) return result.value
  const { code, message, cause } = result.error
  if (cause) console.error(`[${code}] ${message}`, cause)
  throw createError({ statusCode: statusByCode[code], statusMessage: message, data: { code } })
}
```

Keep the helpers this small. Do not add `map`, `andThen`, or other combinator chains. Plain `if` checks are easier to read.

## Core rules

- **Expected failures return `Err`.** Invalid input, not found, conflict, permission denied, a failed external call. These are normal outcomes, not exceptions.
- **Bugs throw.** Broken invariants, impossible states, programmer mistakes. Let them throw. Nuxt's error handling (`error.vue`, `showError`, Nitro's error handler) deals with them. This is Rust's `panic!`.
- **A function that returns a `Result` never throws.** Wrap anything that can throw with `attempt`.
- **Never signal failure with `null`, `undefined`, `-1`, `false`, or an empty object.** Return `Err`.
- **Never throw strings or plain objects.** Throw `Error` instances, or `createError` at the HTTP boundary.
- **Never swallow errors.** No empty `catch`. Either handle it, return it as `Err`, or let it throw.
- **Check before use.** Never read `result.value` without narrowing with `result.ok`.
- **Propagate with an early return.** `if (!result.ok) return result`. Do not rewrap the same error in a new `Err` unless you add useful context.
- **Log once, at the boundary.** Do not log and rethrow at every layer. Keep the original error in `cause` and log it where the error leaves your code (the server handler or the client UI).
- **Handle by `code`, not by message text.** Messages are for humans.
- **Never leak internals.** No stack traces, SQL, file paths, tokens, or raw `cause` in a user-facing message or response.

## Stack traces

A stack trace is for developers. Users, API clients, and the browser never see one.

**Keep it.**
- Never discard the original error. Pass it as `cause` (`err(code, message, cause)`, or the `fail` callback of `attempt`). The stack travels with it.
- When you wrap an error in a new `Error`, use `new Error(message, { cause })`. Do not copy only `error.message`.
- Do not rebuild or replace the error object on the way up. That loses the stack.

**Log it, once.**
- Log the full error object at the boundary (`console.error(label, cause)`), not `String(error)`, `error.message`, or `JSON.stringify(error)`. Those drop or flatten the stack.
- Log the stack for unexpected failures: thrown bugs, `internal`, and `external`. Do not log stacks for expected failures such as `not_found`, `validation`, or `forbidden`. They are normal outcomes and only add noise.
- Do not log the same stack at every layer. One log per error.
- Never include tokens, passwords, or personal data in the label or context you log next to a stack.

**Never send it.**
- Never put `error.stack` in a response body, `statusMessage`, `data`, a toast, or any rendered UI.
- Never put `cause` in `createError({ data })`. `data` carries only safe fields such as `code`.
- Do not override Nitro's default error handler to expose stacks. It only includes them in development, and that must stay true in production.
- On the client, never render `error.stack`, and never render the raw `FetchError` from `$fetch`. Convert it with `toAppError` first.

## Server side

Business logic returns a `Result`. Handlers are the only place that turns an `Err` into an HTTP error.

```ts
// server/utils/orders.ts
export async function createOrder(userId: string, input: CreateOrderBody): Promise<Result<Order>> {
  const user = await findUser(userId)
  if (!user) return err('not_found', 'User not found')
  if (!user.active) return err('forbidden', 'Account is disabled')

  const saved = await attempt(
    () => db.insertOrder(userId, input),
    cause => ({ code: 'internal', message: 'Could not save the order', cause }),
  )
  if (!saved.ok) return saved
  return ok(saved.value)
}
```

```ts
// server/api/orders.post.ts
export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, createOrderSchema.parse)
  const session = await requireSession(event)
  return unwrapOrThrow(await createOrder(session.userId, body))
})
```

- Utils and services return `Result`. They do not call `createError`.
- Handlers call `unwrapOrThrow`. This maps `code` to the HTTP status and logs the `cause` once.
- Input validation failures become `400` through the validation helpers. See [server](server.md).
- Wrap third-party SDKs and database calls with `attempt` at the edge, usually in `lib/`. See [lib](lib.md).
- Server middleware throws `createError` directly for auth failures, because it ends the request. See [middleware](middleware.md).
- The error response body always has the same shape: `statusCode`, `statusMessage`, and `data.code`.

## Client side

Errors come from three places: network calls, composable actions, and unexpected bugs.

**Network calls.** `$fetch` throws on a non-2xx response. Convert that at the edge with `attempt`:

```ts
// composables/useOrders.ts
export function useOrders() {
  async function create(input: CreateOrderBody): Promise<Result<Order>> {
    return attempt(
      () => $fetch<Order>('/api/orders', { method: 'POST', body: input }),
      toAppError,
    )
  }
  return { create }
}
```

`toAppError` reads `data.code` from the server's error response and builds an `AppError`. For anything unknown it returns `internal` with a generic message and keeps the original in `cause`. Put it in `utils/` (see [utils](utils.md)).

**Composable actions** (submit, delete, save) return `Result`. They do not show UI themselves. See [composables](composables.md).

**Pages and components** check the result and decide what the user sees:

```vue
<script setup lang="ts">
const { create } = useOrders()

async function onSubmit() {
  const result = await create(form.value)
  if (!result.ok) {
    error.value = result.error.message
    return
  }
  await navigateTo(`/orders/${result.value.id}`)
}
</script>
```

- Show `result.error.message`. It is already safe for users. In a multilanguage project it is a code, so translate it first: `t(result.error.message)`. See [server](server.md).
- Branch on `result.error.code` when the UI should react differently (for example send `unauthenticated` to the login page).
- Page-load data uses `useFetch` or `useAsyncData`. Use their `error` ref for loading states and error views. See [pages](pages.md).
- Do not use `try/catch` around `$fetch` in components. Use the composable's `Result`.
- Unexpected bugs are not caught in components. Let them reach Nuxt's error handling (`error.vue`).

## Do and don't

```ts
// Don't
async function getUser(id: string) {
  try {
    return await db.user(id)
  } catch {
    return null // failure is hidden, caller cannot tell why
  }
}

// Do
async function getUser(id: string): Promise<Result<User>> {
  const found = await attempt(() => db.user(id), cause => ({ code: 'internal', message: 'Could not load user', cause }))
  if (!found.ok) return found
  if (!found.value) return err('not_found', 'User not found')
  return ok(found.value)
}
```

## Related rules

Read these when you write error code in their area:

- [server](server.md): handlers, `createError`, validation, status codes.
- [middleware](middleware.md): auth failures, fail closed, safe messages.
- [composables](composables.md): composable actions that return `Result`.
- [pages](pages.md): showing loading and error states.
- [utils](utils.md): `toAppError` and other pure helpers.
- [lib](lib.md): wrapping third-party libraries with `attempt`.
- [types](types.md): where `Result`, `AppError`, and `ErrorCode` live.
