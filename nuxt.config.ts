import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'shadcn-nuxt', '@nuxt/icon'],
  css: ['~/assets/css/tailwind.css'],
  vite: { plugins: [tailwindcss()] },
  icon: { serverBundle: 'local' },
  shadcn: { prefix: '', componentDir: './app/components/ui' },
})
