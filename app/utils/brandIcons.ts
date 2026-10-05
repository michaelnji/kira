// simple-icons glyphs are single-color, so the official brand hex is applied as the CSS color.
// Brands whose color is black are left out so they follow the theme text color in dark mode.
export const brandIcons = {
  nuxt: { name: 'simple-icons:nuxt', color: '#00DC82' },
  vue: { name: 'simple-icons:vuedotjs', color: '#4FC08D' },
  pinia: { name: 'simple-icons:pinia', color: '#FFD859' },
  tailwind: { name: 'simple-icons:tailwindcss', color: '#06B6D4' },
  shadcn: { name: 'simple-icons:shadcnui' },
  oxc: { name: 'simple-icons:oxc', color: '#98F5E1' },
  vitest: { name: 'simple-icons:vitest', color: '#6E9F18' },
  vercel: { name: 'simple-icons:vercel' },
  github: { name: 'simple-icons:github' },
  claude: { name: 'simple-icons:claude', color: '#D97757' },
} satisfies Record<string, BrandIcon>
