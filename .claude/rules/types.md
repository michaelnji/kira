---
paths:
  - "**/types/**"
---

# Types

## Structure

- Types and interfaces only. No runtime code.
- Group by domain, one file per domain: `types/user.ts`, `types/order.ts`, `types/api.ts`.
- Share types between app and server from here. No duplicates.
- Export every type by name. No default exports.
- Use `import type` and `export type` so type imports are erased at build time.

## Naming

- Use descriptive type names: `OrderStatus`, `CreateUserBody`, `UserListResponse`. Avoid vague names like `Data`, `Item`, `Info`, `Props`.
- PascalCase for all types and interfaces. No `I` prefix.
- Name request and response shapes by purpose: `CreateUserBody`, `UserResponse`.

## Interface vs type

- Prefer `interface` for object shapes.
- Use `type` for unions, intersections, aliases, tuples, and mapped types.

## Strictness

- No `any`. Use `unknown` and narrow.
- Cast types properly. Narrow with type guards or validation first. Use `as` only when you know more than the compiler, and never `as any`.
- Avoid non-null assertions (`!`). Handle `null` and `undefined` explicitly.
- Mark fields optional (`?`) only when they can truly be absent. Use `readonly` for data that must not change.

## No enums

- DO NOT USE ENUMS!
- Use string literal unions instead: `type OrderStatus = 'pending' | 'paid' | 'shipped'`.
- Derive a type from a runtime constant with `typeof` when the values are needed at runtime, and keep that constant outside `types/`.

## Derive, do not duplicate

- Build new types from existing ones with `Pick`, `Omit`, `Partial`, and `Required` instead of retyping fields.
- Derive types from a schema (for example `z.infer<typeof schema>`) so the type and validation never drift apart.
- Type API responses once and share them, so `$fetch` and `useFetch` infer the same shape on the client.

## Simplicity

- Keep types simple and readable. A type that needs a comment to explain it is too complex.
- Simplify complex types as much as possible. Break them into smaller composable types.
- Avoid deep conditional types, heavy generics, and clever type-level tricks unless there is a clear need.
- Do not add generic parameters, optional fields, or variants for cases that do not exist yet.
- Do not create a type for something used once. Inline simple types where they are used.
- Prefer a plain object type over a class-like hierarchy. Avoid long `extends` chains.

## Errors

- `Result`, `Ok`, `Err`, `AppError`, and `ErrorCode` live in `types/result.ts`. Read [errors](errors.md) before changing them.
