<script setup lang="ts">
import { Check, Copy, Moon, Sun } from '@lucide/vue'
import { Button } from '~/components/ui/button'

const { theme, toggleTheme } = useTheme()
const { isCopied, copy } = useCopy()
const copyError = ref('')

async function onCopy() {
  const result = await copy(siteConfig.cloneCommand)
  copyError.value = result.ok ? '' : result.error.message
}
</script>

<template>
  <section class="mx-auto w-full max-w-5xl px-4 py-6 md:py-10">
    <header class="flex items-center justify-between">
      <span class="brutal bg-primary px-3 py-1 text-xl font-black text-primary-foreground">
        {{ siteConfig.name }}
      </span>
      <Button
        variant="outline"
        size="icon"
        class="brutal-ink brutal-press"
        aria-label="Toggle theme"
        @click="toggleTheme"
      >
        <Sun v-if="theme === 'dark'" />
        <Moon v-else />
      </Button>
    </header>

    <div class="mt-12 flex flex-col gap-6 md:mt-20">
      <h1 class="text-5xl leading-none font-black tracking-tight md:text-7xl">
        Start your next Nuxt app
        <span class="brutal inline-block bg-accent px-2 text-accent-foreground">faster.</span>
      </h1>
      <p class="max-w-xl text-lg text-muted-foreground">
        Kira is an opinionated Nuxt 4 starter with the stack, rules, and tooling already wired.
      </p>

      <div class="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <div class="brutal flex min-w-0 flex-1 items-center justify-between gap-3 bg-card p-3">
          <code class="truncate font-mono text-sm">{{ siteConfig.cloneCommand }}</code>
          <Button class="brutal-press" size="sm" @click="onCopy">
            <Check v-if="isCopied" />
            <Copy v-else />
            {{ isCopied ? 'Copied!' : 'Copy' }}
          </Button>
        </div>
        <Button as-child variant="secondary" size="lg" class="brutal-ink brutal-press h-auto">
          <a :href="siteConfig.repoUrl" target="_blank" rel="noopener noreferrer">
            <Icon :name="brandIcons.github.name" class="size-6" />
            GitHub
          </a>
        </Button>
      </div>
      <p v-if="copyError" class="text-sm text-destructive" role="alert">{{ copyError }}</p>
    </div>
  </section>
</template>
