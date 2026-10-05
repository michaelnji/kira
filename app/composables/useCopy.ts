/** Copy text to the clipboard and expose a short-lived `isCopied` flag for button feedback. */
export function useCopy() {
  const isCopied = ref(false)
  let resetTimer: ReturnType<typeof setTimeout> | undefined

  async function copy(text: string): Promise<Result<void>> {
    const copied = await attempt(
      () => navigator.clipboard.writeText(text),
      (cause) => ({ code: 'external', message: 'Could not copy to the clipboard', cause }),
    )
    if (!copied.ok) return copied

    isCopied.value = true
    clearTimeout(resetTimer)
    resetTimer = setTimeout(() => (isCopied.value = false), 2000)
    return copied
  }

  onScopeDispose(() => clearTimeout(resetTimer))

  return { isCopied, copy }
}
