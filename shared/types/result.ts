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
  message: string // safe to show to a user
  cause?: unknown // original error, for logs only
}
