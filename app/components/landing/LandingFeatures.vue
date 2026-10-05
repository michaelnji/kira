<script setup lang="ts">
import { Card, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

const features: { icon: BrandIcon; title: string; description: string; color: string }[] = [
  {
    icon: brandIcons.nuxt,
    title: 'Nuxt 4',
    description: 'The app/ directory layout, ready to go.',
    color: 'bg-primary',
  },
  {
    icon: brandIcons.pinia,
    title: 'Pinia',
    description: 'Simple, typed state management built in.',
    color: 'bg-secondary',
  },
  {
    icon: brandIcons.tailwind,
    title: 'Tailwind v4 + shadcn-vue',
    description: 'Components styled with shared theme tokens.',
    color: 'bg-accent',
  },
  {
    icon: brandIcons.oxc,
    title: 'oxlint + oxfmt',
    description: 'Fast linting and formatting on every commit via lint-staged.',
    color: 'bg-primary',
  },
  {
    icon: brandIcons.vitest,
    title: 'Vitest',
    description: 'Tests run in the Nuxt environment.',
    color: 'bg-secondary',
  },
  {
    icon: { name: 'lucide:triangle-alert' },
    title: 'Result pattern',
    description: 'ok, err and attempt. No throwing for expected failures.',
    color: 'bg-accent',
  },
  {
    icon: brandIcons.claude,
    title: 'Claude rules',
    description: 'Path-scoped rules in .claude/rules keep AI code on style.',
    color: 'bg-primary',
  },
]
</script>

<template>
  <section id="features" class="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
    <h2 class="text-3xl font-black md:text-5xl">Everything you need to start</h2>
    <p class="mt-3 max-w-2xl text-muted-foreground md:text-lg">
      A small, opinionated stack with the boring parts already wired up.
    </p>
    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        v-for="feature in features"
        :key="feature.title"
        class="brutal-ink brutal-press gap-0 py-0"
      >
        <CardHeader :class="[feature.color, 'border-b-2 border-ink py-4']">
          <div class="brutal-ink flex size-16 items-center justify-center bg-card">
            <Icon
              :name="feature.icon.name"
              :style="{ color: feature.icon.color }"
              class="size-10"
              aria-hidden="true"
            />
          </div>
        </CardHeader>
        <CardHeader class="py-4">
          <CardTitle class="text-xl font-bold">{{ feature.title }}</CardTitle>
          <CardDescription>{{ feature.description }}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  </section>
</template>
