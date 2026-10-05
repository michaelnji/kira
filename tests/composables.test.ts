import { afterEach, describe, expect, it, vi } from 'vitest'

describe('useCopy', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('sets isCopied after a successful copy', async () => {
    vi.stubGlobal('navigator', { clipboard: { writeText: vi.fn().mockResolvedValue(undefined) } })
    const { isCopied, copy } = useCopy()

    const result = await copy('bun install')

    expect(result.ok).toBe(true)
    expect(isCopied.value).toBe(true)
  })

  it('returns an external error when the clipboard rejects', async () => {
    vi.stubGlobal('navigator', {
      clipboard: { writeText: vi.fn().mockRejectedValue(new Error('denied')) },
    })
    const { isCopied, copy } = useCopy()

    const result = await copy('bun install')

    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.error.code).toBe('external')
    expect(isCopied.value).toBe(false)
  })
})

describe('useTheme', () => {
  it('toggles between light and dark', () => {
    const { theme, toggleTheme } = useTheme()
    theme.value = 'light'

    toggleTheme()
    expect(theme.value).toBe('dark')

    toggleTheme()
    expect(theme.value).toBe('light')
  })
})
