<script setup lang="ts">
useTheme()
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <main class="mx-auto flex w-full max-w-5xl flex-col gap-16 pb-16 md:gap-24 md:pb-24">
      <LandingHero />
      <LandingStack />
      <LandingFeatures />
      <LandingSteps />
    </main>
    <LandingFooter />
  </div>
</template>
