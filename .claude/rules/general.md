# General

Global rules. They apply to all code in the project.

## Comments

- Avoid unnecessary comments. A comment must be necessary to the context, short, concise and easy to understand.
- Explain why, not what. If a comment restates the code, delete it and make the code clearer instead.
- Do not leave commented-out code. Delete it. Git keeps the history.
- Keep comments up to date. Change or remove them when the code changes.
- Use `TODO`, `BUG`, and `FIXME` markers where appropriate, with a short note on what is needed.
- I use the *Better Comments* VS Code extension, so use its markers too:

```ts
// ! Warning: something that must not be missed
// ? Question: something unclear that needs an answer
// * Highlight: something important to understand
// TODO: work that is still to do
// // Strikethrough: avoid, delete dead code instead
```


## Simplicity

- If it can be simplified, simplify it: functions, logic, types. I hate over-engineered work.
- Write the simplest thing that works. Add complexity only when a real need exists today.
- Do not add abstractions, layers, options, or generics for cases that do not exist yet.
- Prefer plain functions and plain objects over classes, factories, and patterns.
- Prefer straightforward conditionals and early returns over nested ternaries and clever one-liners.
- Inline simple logic instead of extracting a helper used once.
- Keep functions short and focused on one job.
- Do not add dependencies for something a few lines of code can do. Use the platform and the framework's built-in tools first.
- Delete code that is unused. Do not keep it "just in case".

## Naming

- Use descriptive names. `userCount` beats `n`, `isLoading` beats `flag`.
- Booleans read as questions: `isActive`, `hasAccess`, `canEdit`.
- Functions are verbs: `createOrder`, `findUser`. Variables and types are nouns.
- No abbreviations unless they are universal (`id`, `url`, `api`).
- Follow the naming and structure already in the codebase.

## Scope of changes

- Do only what was asked. No unrelated refactors, renames, or "improvements" along the way.
- Match the style of the surrounding code, even if you would write it differently.
- If you spot an unrelated problem, leave a `TODO` or `FIXME` or mention it. Do not fix it silently.
- Keep changes small and easy to review.

## Errors

- Read [errors](errors.md) before writing, throwing, or handling any error.
