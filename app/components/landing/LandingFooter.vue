<template>
  <footer class="border-t-2 border-border bg-card">
    <div
      class="mx-auto flex w-full max-w-4xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <p class="text-xl font-extrabold">{{ siteConfig.name }}</p>
        <p class="text-sm text-muted-foreground">Built with Nuxt</p>
      </div>

      <a
        :href="siteConfig.repoUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="brutal-ink brutal-press inline-flex w-fit items-center gap-2 bg-accent px-4 py-2 font-bold text-accent-foreground"
      >
        <Icon :name="brandIcons.github.name" class="size-6" />
        GitHub
      </a>
    </div>
  </footer>
</template>
