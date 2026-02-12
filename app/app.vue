<script setup lang="ts">
import { animate } from 'animejs'
import { computed, onMounted, watch } from 'vue'

const isDark = useState<boolean>('isDark', () => false)
const themeLabel = computed(() => (isDark.value ? 'Dark' : 'Light'))

function applyTheme(dark: boolean) {
  if (!import.meta.client)
    return

  document.documentElement.classList.toggle('dark', dark)
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

watch(isDark, applyTheme, { immediate: true })

onMounted(() => {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') {
    isDark.value = stored === 'dark'
    return
  }

  isDark.value
    = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
})

onMounted(() => {
  if (!import.meta.client)
    return

  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)
    return

  const heroTargets = Array.from(
    document.querySelectorAll<HTMLElement>('[data-hero-item]'),
  )
  heroTargets.forEach((el, index) => {
    animate(el, {
      opacity: [0, 1],
      translateY: [12, 0],
      duration: 450,
      delay: 120 + index * 80,
      easing: 'easeOutQuad',
    })
  })

  const revealTargets = Array.from(
    document.querySelectorAll<HTMLElement>('[data-reveal]'),
  )
  revealTargets.forEach((el) => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(14px)'
  })

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting)
          return

        const el = entry.target as HTMLElement
        obs.unobserve(el)

        animate(el, {
          opacity: [0, 1],
          translateY: [14, 0],
          duration: 420,
          easing: 'easeOutQuad',
        })
      })
    },
    { threshold: 0.15 },
  )

  revealTargets.forEach(el => observer.observe(el))

  const cards = Array.from(document.querySelectorAll<HTMLElement>('.k-card'))
  cards.forEach((card) => {
    card.addEventListener('pointerenter', () => {
      animate(card, { translateY: -3, duration: 180, easing: 'easeOutQuad' })
    })
    card.addEventListener('pointerleave', () => {
      animate(card, { translateY: 0, duration: 220, easing: 'easeOutQuad' })
    })
  })

  const links = Array.from(
    document.querySelectorAll<HTMLElement>(
      'nav a.k-btn, a.k-btn, button.k-btn',
    ),
  )
  links.forEach((el) => {
    el.addEventListener('pointerenter', () => {
      animate(el, {
        letterSpacing: '0.02em',
        duration: 180,
        easing: 'easeOutQuad',
      })
    })
    el.addEventListener('pointerleave', () => {
      animate(el, {
        letterSpacing: '0em',
        duration: 220,
        easing: 'easeOutQuad',
      })
    })
  })
})

const stack = [
  {
    title: 'Nuxt 4 + Vue 3',
    description: 'Modern app fundamentals with a fast dev/build pipeline.',
    icon: 'logos:nuxt-icon',
  },
  {
    title: 'PrimeVue 4 (styled)',
    description:
      'Component library wired to your semantic color tokens (light/dark).',
    icon: 'solar:palette-round-bold',
  },
  {
    title: 'Tailwind CSS v4',
    description:
      'Utility-first styling with a semantic token layer via CSS variables.',
    icon: 'logos:tailwindcss-icon',
  },
  {
    title: 'Nuxt Icon',
    description: 'Drop-in icons with bundled collections for fast builds.',
    icon: 'solar:bolt-bold',
  },
  {
    title: 'Nuxt Image',
    description: 'Optimized images when you start shipping real media.',
    icon: 'solar:gallery-minimalistic-bold',
  },
  {
    title: 'Anime.js',
    description: 'Subtle entrance reveals and micro-interactions by default.',
    icon: 'solar:magic-stick-3-bold',
  },
  {
    title: 'VueUse + Auto Animate',
    description: 'Quality-of-life composables and tasteful micro-interactions.',
    icon: 'solar:magic-stick-3-bold',
  },
  {
    title: 'ESLint + Hooks',
    description:
      'Opinionated linting with pre-commit automation.',
    icon: 'solar:code-bold',
  },
]
</script>

<template>
  <div class="min-h-screen bg-(--color-bg) font-sans text-(--color-text) selection:bg-(--color-primary) selection:text-(--color-primary-foreground)">
    <NuxtRouteAnnouncer />

    <header class="sticky top-0 z-40 border-b-2 border-(--color-text) bg-transparent! backdrop-blur-sm">
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-2xl border-2 border-(--color-text) bg-(--color-primary) text-(--color-primary-foreground) shadow-[4px_4px_0_0_var(--color-text)]">
            <Icon name="solar:bolt-bold" class="text-lg" />
          </div>
          <div class="leading-tight">
            <div class="text-lg font-bold tracking-tight">
              Kira
            </div>
            <div class="text-xs text-(--color-text-muted)">
              Nuxt v4 starter template
            </div>
          </div>
        </div>

        <nav class="hidden items-center gap-2 md:flex">
          <a class="k-btn k-btn-outline" href="#features">
            Features
          </a>
          <a class="k-btn k-btn-outline" href="#stack">
            Stack
          </a>
          <a class="k-btn k-btn-outline" href="#creator">
            Creator
          </a>
          <a class="k-btn k-btn-primary" href="#get-started">
            Get started
          </a>
        </nav>

        <div class="flex items-center gap-2">
          <button type="button" class="k-btn k-btn-outline" @click="isDark = !isDark">
            <span class="text-sm font-semibold">{{ themeLabel }}</span>
            <Icon name="solar:moon-bold" class="text-base" />
          </button>
        </div>
      </div>
    </header>

    <main>
      <section class="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div class="grid gap-8 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <div
              class="inline-flex items-center gap-2 rounded-full border-2 border-(--color-text) bg-(--color-bg) px-3 py-1 shadow-[4px_4px_0_0_var(--color-accent)]"
              data-hero-item
            >
              <span class="k-badge">Nuxt 4</span>
              <span class="text-xs font-semibold text-(--color-text-muted)">Bun-first, neo-brutalist defaults</span>
            </div>

            <h1 class="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl" data-hero-item>
              Ship a Nuxt v4 project with
              <span class="underline decoration-(--color-primary) decoration-[6px] underline-offset-8">good defaults</span>
              on day one.
            </h1>

            <p class="mt-5 max-w-xl text-base leading-relaxed text-(--color-text-muted) sm:text-lg" data-hero-item>
              Kira is a Nuxt v4 starter template that comes pre-wired with Tailwind v4 semantic tokens, PrimeVue styled mode, icons, images, and a clean dev setup.
            </p>

            <div class="mt-8 flex flex-wrap gap-3" data-hero-item>
              <a class="k-btn k-btn-primary" href="#get-started">
                Get started
                <Icon name="solar:arrow-right-bold" class="text-base" />
              </a>
              <a class="k-btn k-btn-outline" href="#features">
                What’s included
              </a>
              <a class="k-btn k-btn-outline" href="https://michaelnji.codes" target="_blank" rel="noreferrer">
                Creator
                <Icon name="solar:link-bold" class="text-base" />
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="k-card p-6" data-hero-item>
              <div class="text-sm font-bold">
                Brutal, but usable
              </div>
              <div class="mt-2 text-sm leading-relaxed text-(--color-text-muted)">
                Thick outlines, hard shadows, semantic tokens, and dark mode by default. Designed to stay simple when you scale into real pages and components.
              </div>
              <div class="mt-5 flex flex-wrap gap-2">
                <span class="k-badge">semantic colors</span>
                <span class="k-badge">100–950 shades</span>
                <span class="k-badge">PrimeVue styled</span>
                <span class="k-badge">anime.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="mx-auto max-w-6xl px-4 pb-16" data-reveal>
        <div class="flex items-end justify-between gap-6">
          <div>
            <div class="text-xs font-bold uppercase tracking-wider text-(--color-text-muted)">
              Features
            </div>
            <h2 class="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Defaults that keep you moving
            </h2>
          </div>
        </div>

        <div class="mt-6 grid gap-6 md:grid-cols-2">
          <div class="k-card p-6">
            <div class="flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-(--color-text) bg-(--color-bg) shadow-[4px_4px_0_0_var(--color-primary)]">
                <Icon name="solar:palette-round-bold" class="text-xl" />
              </div>
              <div class="text-lg font-bold">
                Semantic theme system
              </div>
            </div>
            <ul class="mt-4 grid gap-2 text-sm text-(--color-text-muted)">
              <li>Primary/secondary/accent + status colors with 100–950 scales</li>
              <li>Light/dark mode via `.dark` on `html`</li>
              <li>Use utilities like `bg-primary-600`, `text-secondary-300`</li>
            </ul>
          </div>

          <div class="k-card p-6">
            <div class="flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-(--color-text) bg-(--color-bg) shadow-[4px_4px_0_0_var(--color-accent)]">
                <Icon name="solar:widget-2-bold" class="text-xl" />
              </div>
              <div class="text-lg font-bold">
                UI ready (without the noise)
              </div>
            </div>
            <ul class="mt-4 grid gap-2 text-sm text-(--color-text-muted)">
              <li>PrimeVue styled mode configured to follow your tokens</li>
              <li>PrimeIcons included globally</li>
              <li>Neo-brutalist utility classes for fast layout</li>
            </ul>
          </div>

          <div class="k-card p-6">
            <div class="flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-(--color-text) bg-(--color-bg) shadow-[4px_4px_0_0_var(--color-text)]">
                <Icon name="solar:shield-check-bold" class="text-xl" />
              </div>
              <div class="text-lg font-bold">
                DX + guardrails
              </div>
            </div>
            <ul class="mt-4 grid gap-2 text-sm text-(--color-text-muted)">
              <li>ESLint with Antfu config</li>
              <li>Formatting via ESLint</li>
              <li>Pre-commit hooks via lint-staged</li>
            </ul>
          </div>

          <div class="k-card p-6">
            <div class="flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-(--color-text) bg-(--color-bg) shadow-[4px_4px_0_0_var(--color-secondary)]">
                <Icon name="solar:rocket-bold" class="text-xl" />
              </div>
              <div class="text-lg font-bold">
                Batteries included
              </div>
            </div>
            <ul class="mt-4 grid gap-2 text-sm text-(--color-text-muted)">
              <li>@nuxt/icon + bundled icon sets</li>
              <li>@nuxt/image ready for production</li>
              <li>Anime.js micro-interactions included</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="stack" class="mx-auto max-w-6xl px-4 pb-16" data-reveal>
        <div class="flex items-end justify-between gap-6">
          <div>
            <div class="text-xs font-bold uppercase tracking-wider text-(--color-text-muted)">
              Stack
            </div>
            <h2 class="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              What’s installed
            </h2>
          </div>
        </div>

        <div class="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in stack" :key="item.title" class="k-card p-6">
            <div class="flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-(--color-text) bg-(--color-bg) shadow-[4px_4px_0_0_var(--color-primary)]">
                <Icon :name="item.icon" class="text-xl" />
              </div>
              <div class="text-base font-bold">
                {{ item.title }}
              </div>
            </div>
            <div class="mt-3 text-sm leading-relaxed text-(--color-text-muted)">
              {{ item.description }}
            </div>
          </div>
        </div>
      </section>

      <section id="creator" class="mx-auto max-w-6xl px-4 pb-16" data-reveal>
        <div class="k-card p-6 sm:p-8">
          <div class="grid gap-8 lg:grid-cols-12">
            <div class="lg:col-span-7">
              <div class="text-xs font-bold uppercase tracking-wider text-(--color-text-muted)">
                Creator
              </div>
              <h2 class="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Michael Nji
              </h2>
              <p class="mt-4 text-sm leading-relaxed text-(--color-text-muted)">
                Full stack web developer with a focus on building beautiful, robust web projects. Contributor to open
                source documentation and integration work around StepCI + CircleCI.
              </p>
              <p class="mt-3 text-sm leading-relaxed text-(--color-text-muted)">
                Currently working on Gemma Fx, a forex trading website.
              </p>

              <div class="mt-6 flex flex-wrap gap-3">
                <a class="k-btn k-btn-primary" href="https://michaelnji.codes" target="_blank" rel="noreferrer">
                  michaelnji.codes
                  <Icon name="solar:link-bold" class="text-base" />
                </a>
                <a class="k-btn k-btn-outline" href="https://michaelnji.codes" target="_blank" rel="noreferrer">
                  More about Michael
                </a>
              </div>
            </div>

            <div class="lg:col-span-5">
              <div class="rounded-2xl border-2 border-(--color-text) bg-(--color-bg) p-6 shadow-[6px_6px_0_0_var(--color-accent)]">
                <div class="text-sm font-bold">
                  Quick facts
                </div>
                <ul class="mt-4 grid gap-2 text-sm text-(--color-text-muted)">
                  <li>Works with Nuxt, Vue, TypeScript, Tailwind, Bun</li>
                  <li>Open source contributor</li>
                  <li>Built integrations and documentation for CI workflows</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="get-started" class="mx-auto max-w-6xl px-4 pb-24" data-reveal>
        <div class="k-card p-6 sm:p-8">
          <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div class="text-xs font-bold uppercase tracking-wider text-(--color-text-muted)">
                Get started
              </div>
              <h2 class="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Run it locally
              </h2>
            </div>
          </div>

          <div class="mt-6 grid gap-6 lg:grid-cols-2">
            <div class="rounded-2xl border-2 border-(--color-text) bg-(--color-bg) p-6 shadow-[6px_6px_0_0_var(--color-secondary)]">
              <div class="text-sm font-bold">
                Install
              </div>
              <pre class="mt-3 overflow-auto rounded-xl border-2 border-(--color-text) bg-(--color-surface-2) p-4 text-xs font-semibold text-(--color-text)"><code>bun install</code></pre>
            </div>

            <div class="rounded-2xl border-2 border-(--color-text) bg-(--color-bg) p-6 shadow-[6px_6px_0_0_var(--color-primary)]">
              <div class="text-sm font-bold">
                Develop
              </div>
              <pre class="mt-3 overflow-auto rounded-xl border-2 border-(--color-text) bg-(--color-surface-2) p-4 text-xs font-semibold text-(--color-text)"><code>bun run dev</code></pre>
              <div class="mt-3 text-sm text-(--color-text-muted)">
                Starts the dev server on port 3000.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t-2 border-(--color-text) bg-(--color-bg)">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div class="text-sm text-(--color-text-muted)">
          © {{ new Date().getFullYear() }} Michael Nji
        </div>
        <div class="flex items-center gap-2 text-sm text-(--color-text-muted)">
          <span class="k-badge">Nuxt 4</span>
          <span class="k-badge">Tailwind v4</span>
          <span class="k-badge">PrimeVue</span>
          <span class="k-badge">DM Sans</span>
        </div>
      </div>
    </footer>
  </div>
</template>
