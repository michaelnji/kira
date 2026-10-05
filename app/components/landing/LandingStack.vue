<script setup lang="ts">
import { Badge } from '~/components/ui/badge'

const stack: { name: string; icon: BrandIcon }[] = [
  { name: 'Nuxt 4', icon: brandIcons.nuxt },
  { name: 'Vue 3', icon: brandIcons.vue },
  { name: 'Pinia', icon: brandIcons.pinia },
  { name: 'Tailwind v4', icon: brandIcons.tailwind },
  { name: 'shadcn-vue', icon: brandIcons.shadcn },
  { name: 'oxlint', icon: brandIcons.oxc },
  { name: 'oxfmt', icon: brandIcons.oxc },
  { name: 'Vitest', icon: brandIcons.vitest },
  { name: 'Vercel', icon: brandIcons.vercel },
]
</script>

<template>
  <section class="border-y-2 border-ink bg-secondary py-6">
    <ul class="mx-auto flex w-full max-w-5xl flex-wrap gap-3 px-4">
      <li v-for="item in stack" :key="item.name">
        <Badge variant="outline" class="brutal-ink bg-card px-3 py-1 text-sm font-bold">
          <Icon :name="item.icon.name" :style="{ color: item.icon.color }" class="size-6" />
          {{ item.name }}
        </Badge>
      </li>
    </ul>
  </section>
</template>
