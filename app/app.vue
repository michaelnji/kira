<script setup lang="ts">
const features = [
  {
    title: "Nuxt 4",
    description:
      "The latest version of the Vue framework, optimized for speed and developer experience.",
    icon: "logos:nuxt-icon",
  },
  {
    title: "Tailwind CSS v4",
    description:
      "Utility-first CSS framework for rapid UI development, now faster than ever.",
    icon: "logos:tailwindcss-icon",
  },
  {
    title: "DaisyUI 5",
    description:
      "The most popular component library for Tailwind CSS, adding component classes.",
    icon: "solar:palette-bold",
  },
  {
    title: "Supabase",
    description:
      "Open source Firebase alternative. Database, Auth, Realtime, Storage, and more.",
    icon: "logos:supabase-icon",
  },
  {
    title: "Pinia",
    description: "The intuitive, type-safe store for Vue.js state management.",
    icon: "logos:pinia",
  },
  {
    title: "Local Fonts",
    description:
      "Privacy-friendly local font loading with @nuxt/fonts for optimal performance.",
    icon: "solar:text-bold",
  },
];
</script>

<template>
  <div class="min-h-screen bg-base-100 font-sans text-base-content selection:bg-primary selection:text-primary-content">
    <NuxtRouteAnnouncer />

    <!-- Navbar -->
    <div class="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-200">
      <div class="container mx-auto justify-between flex px-4">
        <div class="">
          <a
            class="btn btn-ghost text-2xl font-display font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
          >Kira</a>
        </div>
        <div class="flex items-center gap-2">
          <a href="https://github.com" target="_blank" class="btn btn-ghost btn-circle">
            <Icon name="logos:github-icon" class="text-2xl" />
          </a>
          <button class="btn btn-primary btn-sm rounded-full px-6 font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <div class="hero min-h-[80vh] bg-base-100 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div class="hero-content text-center relative z-10">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-base-200 mb-8 border border-base-300">
            <span class="badge badge-primary badge-xs">New</span>
            <span class="text-xs font-bold tracking-wide">NUXT 4 READY</span>
          </div>
          <h1 class="md:text-6xl text-4xl  font-bold mb-8 leading-tight">
            The <span class="text-primary font-display italic">Modern</span> Starter <br>
            For Your Next Idea
          </h1>
          <p class="py-6 md:text-xl text-base-content/80 font-seri leading-relaxed max-w-2xl mx-auto">
            A meticulously crafted production-ready template. Pre-configured with Nuxt 4, TailwindCSS v4, DaisyUI 5, and a beautiful typography system.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button class="btn btn-primary btn-lg rounded-full px-8 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
              Start Building
              <Icon name="solar:arrow-right-linear" />
            </button>
            <button class="btn btn-outline btn-lg rounded-full px-8">
              Documentation
            </button>
          </div>

          <!-- Tech Stack Icons -->
          <div class="mt-16 flex justify-center gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <Icon name="logos:nuxt-icon" class="text-3xl" />
            <Icon name="logos:tailwindcss-icon" class="text-3xl" />
            <Icon name="logos:typescript-icon" class="text-3xl" />
            <Icon name="logos:supabase-icon" class="text-3xl" />
            <Icon name="logos:pinia" class="text-3xl" />
          </div>
        </div>
      </div>
    </div>

    <!-- Features Grid -->
    <section class="py-24 bg-base-200/50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-display font-bold mb-4">
            Baked-in Excellence
          </h2>
          <p class="text-lg opacity-70">
            Everything you need to ship faster, configured to perfection.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(feature, index) in features" :key="index" class="card bg-base-100 shadow-xl border border-base-200 hover:border-primary/50 transition-colors group">
            <div class="card-body">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-colors">
                <Icon :name="feature.icon" class="text-2xl text-primary group-hover:text-primary-content" />
              </div>
              <h3 class="card-title">
                {{ feature.title }}
              </h3>
              <p class="opacity-70">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Design System Showcase -->
    <section class="py-24 container mx-auto px-4">
      <div class="flex flex-col md:flex-row gap-16 items-start">
        <!-- Typography -->
        <div class="flex-1 space-y-12">
          <div>
            <h3 class="text-2xl font-bold mb-8 flex items-center gap-2">
              <Icon name="solar:text-bold" class="text-primary" /> Typography
            </h3>
            <div class="space-y-8 p-8 bg-base-200/30 rounded-3xl border border-base-200">
              <div>
                <p class="text-xs opacity-50 mb-2 font-mono">
                  Display • Gambetta
                </p>
                <h1 class="font-display text-5xl font-bold">
                  Elegant & Bold
                </h1>
                <h2 class="font-display text-4xl italic mt-2 text-primary">
                  With a touch of style
                </h2>
              </div>
              <div>
                <p class="text-xs opacity-50 mb-2 font-mono">
                  Body • General Sans
                </p>
                <p class="text-lg leading-relaxed">
                  The quick brown fox jumps over the lazy dog. A clear, modern sans-serif typeface optimized for readability at any size. Perfect for UI and long-form content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Color & Components -->
        <div class="flex-1 space-y-12">
          <div>
            <h3 class="text-2xl font-bold mb-8 flex items-center gap-2">
              <Icon name="solar:palette-bold" class="text-primary" /> Palette
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-6 rounded-2xl bg-primary text-primary-content">
                <p class="font-bold">
                  Primary
                </p>
                <p class="text-sm opacity-80">
                  Brand Color
                </p>
              </div>
              <div class="p-6 rounded-2xl bg-secondary text-secondary-content">
                <p class="font-bold">
                  Secondary
                </p>
                <p class="text-sm opacity-80">
                  Supporting
                </p>
              </div>
              <div class="p-6 rounded-2xl bg-accent text-accent-content">
                <p class="font-bold">
                  Accent
                </p>
                <p class="text-sm opacity-80">
                  Highlights
                </p>
              </div>
              <div class="p-6 rounded-2xl bg-neutral text-neutral-content">
                <p class="font-bold">
                  Neutral
                </p>
                <p class="text-sm opacity-80">
                  Structure
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-8 flex items-center gap-2">
              <Icon name="solar:widget-bold" class="text-primary" /> Components
            </h3>
            <div class="p-8 bg-base-200/30 rounded-3xl border border-base-200 space-y-6">
              <div class="flex flex-wrap gap-4">
                <button class="btn btn-primary">
                  Primary
                </button>
                <button class="btn btn-outline">
                  Outline
                </button>
                <button class="btn btn-ghost">
                  Ghost
                </button>
              </div>

              <div class="flex items-center gap-4">
                <input type="checkbox" class="toggle toggle-primary" checked>
                <input type="checkbox" class="checkbox checkbox-primary" checked>
                <input type="radio" class="radio radio-primary" checked>
              </div>

              <div class="alert bg-base-100/70 shadow-sm border border-base-200">
                <Icon name="solar:info-circle-bold" class="text-info" />
                <span>DaisyUI components are ready to use.</span>
                <button class="btn btn-sm btn-ghost">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>Copyright © {{ new Date().getFullYear() }} - All right reserved by Michael Nji</p>
      </aside>
    </footer>
  </div>
</template>
