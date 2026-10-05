/** Light/dark theme persisted in a cookie so SSR renders the right class with no flash. */
export function useTheme() {
  const theme = useCookie<Theme>('theme', { default: () => 'light', maxAge: 60 * 60 * 24 * 365 })

  useHead({ htmlAttrs: { class: computed(() => (theme.value === 'dark' ? 'dark' : '')) } })

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggleTheme }
}
