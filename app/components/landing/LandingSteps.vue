<script setup lang="ts">
import { Check, Copy } from '@lucide/vue'
import { Button } from '~/components/ui/button'

const steps = [
  {
    title: 'Clone the template',
    command: siteConfig.cloneCommand,
    note: 'Copies Kira into a fresh folder without git history.',
  },
  {
    title: 'Install dependencies',
    command: 'cd my-app && bun install',
    note: 'Bun keeps installs fast.',
  },
  { title: 'Start the dev server', command: 'bun run dev', note: 'Opens on localhost:3000.' },
  { title: 'Run the tests', command: 'bun run test', note: 'Vitest is wired up and ready.' },
  {
    title: 'Build and deploy',
    command: 'bun run build',
    note: 'Push the repo to Vercel to deploy.',
  },
]

const { isCopied, copy } = useCopy()
const copiedCommand = ref('')

async function copyCommand(command: string) {
  const result = await copy(command)
  if (result.ok) copiedCommand.value = command
}
</script>

<template>
  <section id="steps" class="mx-auto w-full max-w-4xl px-4 py-16 md:py-24">
    <h2 class="text-3xl font-extrabold tracking-tight md:text-5xl">Up and running in five steps</h2>
    <p class="mt-3 text-muted-foreground">From zero to deployed without leaving your terminal.</p>

    <ol class="mt-10 flex flex-col gap-6">
      <li
        v-for="(step, index) in steps"
        :key="step.title"
        class="brutal flex flex-col gap-4 bg-card p-4 md:flex-row md:items-center md:p-6"
      >
        <span
          class="brutal flex size-12 shrink-0 items-center justify-center bg-primary text-2xl font-extrabold text-primary-foreground"
        >
          {{ index + 1 }}
        </span>

        <div class="min-w-0 flex-1">
          <h3 class="text-lg font-bold">{{ step.title }}</h3>
          <p class="text-sm text-muted-foreground">{{ step.note }}</p>

          <div
            class="brutal mt-3 flex items-center gap-2 bg-foreground py-2 pl-3 pr-2 text-background"
          >
            <code class="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-sm">
              {{ step.command }}
            </code>
            <Button
              size="icon-sm"
              variant="secondary"
              class="brutal-press shrink-0"
              :aria-label="`Copy ${step.command}`"
              @click="copyCommand(step.command)"
            >
              <Check v-if="isCopied && copiedCommand === step.command" />
              <Copy v-else />
            </Button>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>
