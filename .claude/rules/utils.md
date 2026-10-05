---
paths:
  - "**/utils/**"
---

# Utils

- Pure functions only. No Vue reactivity, no side effects.
- One concern per file. Named exports.
- Fully typed params and return values.
- Utils are auto-imported. Keep names unique and descriptive.
- Read [errors](errors.md) before writing error code. Utils that can fail return `Result` and never throw. Error helpers such as `toAppError` live here.
