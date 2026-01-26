<template>
  <div class="min-h-screen bg-base-100 p-8">
    <h1 class="font-display text-5xl mb-4 font-bold">
      Kira Starter Template
    </h1>
    <p class="font-body mb-8 text-xl">
      This is a modern Nuxt 4 starter template with TailwindCSS, DaisyUI, and custom fonts.
    </p>

    <div class="flex gap-4">
      <button class="btn btn-primary">
        Primary Button
      </button>
      <button class="btn btn-secondary">
        Secondary Button
      </button>
      <button class="btn btn-accent">
        Accent Button
      </button>
    </div>

    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="p-6 bg-base-200 rounded-box">
        <p class="text-sm opacity-70 mb-2">
          Font Sans (General Sans)
        </p>
        <p class="font-sans text-lg">
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>
      <div class="p-6 bg-base-200 rounded-box">
        <p class="text-sm opacity-70 mb-2">
          Font Serif (Gambetta)
        </p>
        <p class="font-serif text-lg">
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="text-2xl font-bold mb-4">
        Icons
      </h2>
      <div class="flex gap-4">
        <Icon name="solar:home-smile-bold" class="text-4xl text-primary" />
        <Icon name="solar:settings-bold" class="text-4xl text-secondary" />
        <Icon name="solar:user-bold" class="text-4xl text-accent" />
      </div>
    </div>
  </div>
</template>
