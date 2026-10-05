import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// shadcn-vue helper: merge conditional class names, resolving Tailwind conflicts.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
