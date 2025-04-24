<script lang="ts" setup>
// No imports needed as we're using UnoCSS and daisyUI
</script>

<template>
    <div class=" w-full" data-theme="kira">
        <!-- Hero Section -->
        <div class=" relative inset-0 bg-radial-pattern">
            <!-- Background Pattern -->
            <!-- <div class="absolute -z-0 -inset-1 bg-radial-pattern"></div> -->

            <!-- Content -->
            <div class="container sm:mx-auto  py-6 px-3 md:p8 lg:p-12">

                <!-- Logo -->
                <div class="mb-8 ">
                    <div
                        class="rounded-full py-2 px-6 bg-gradient-to-r from-primary  to-primary/90 text-primary-content w-max mx-auto shadow-lg transform-border rotate-2 shadow-primary/50">

                        <h1 class="text-center text-3xl font-display font-bold">
                            <span>Kira</span> <small class="text-base-100">Template</small>
                        </h1>
                    </div>
                    <p class="md:text-lg text-center text-base-content/80 mt-4">The Minimal Nuxt.js Starter Template
                    </p>
                </div>

                <!-- Main Content -->
                <div class="max-w-2xl mx-auto">
                    <h2 class="text-4xl text-center font-display font-bold mb-6">
                        Build <span class="text-primary">Modern</span> Web Apps with Ease
                    </h2>
                    <p class="md:text-lg text-center text-base-content/80 mb-8">
                        A powerful starter template that combines the best of Nuxt.js, TypeScript, and modern CSS
                        frameworks.
                        Get started in minutes, not hours.
                    </p>

                    <!-- Quick Start -->
                    <div class="mockup-code bg-neutral text-neutral-content mb-8 text-xs/normal font-mono">
                        <pre
                            data-prefix="$"><code><span class="text-success">git</span> clone <span class="underline font-bold">https://github.com/michaelnji/kira.git</span> my-project</code></pre>
                        <pre data-prefix="$"><code><span class="text-success">cd</span> my-project</code></pre>
                        <pre data-prefix="$"><code><span class="text-success">bun</span> install</code></pre>

                    </div>

                    <!-- Features Grid -->
                    <div class="grid md:grid-cols-2 gap-3 mb-12">
                        <div class="card bg-base-200">
                            <div class="card-body">
                                <h3 class="card-title font-medium text-primary">Modern Stack</h3>
                                <p>Nuxt.js, TypeScript, UnoCSS, and daisyUI - all pre-configured and ready to go.
                                </p>
                            </div>
                        </div>
                        <div class="card bg-base-200">
                            <div class="card-body">
                                <h3 class="card-title font-medium text-primary">Beautiful UI</h3>
                                <p>Pre-built components and a tropical theme that makes your app stand out.</p>
                            </div>
                        </div>
                        <div class="card bg-base-200">
                            <div class="card-body">
                                <h3 class="card-title font-medium text-primary">Type Safe</h3>
                                <p>Full TypeScript support with strict type checking and auto-completion.</p>
                            </div>
                        </div>
                        <div class="card bg-base-200">
                            <div class="card-body">
                                <h3 class="card-title font-medium text-primary">Performance</h3>
                                <p>Optimized for speed with modern build tools and best practices.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Tech Stack -->
                    <div class="flex flex-wrap justify-center gap-4 mb-8">
                        <div class="badge badge-lg badge-primary font-bold">Nuxt.js</div>
                        <div class="badge badge-lg badge-primary font-bold">TypeScript</div>
                        <div class="badge badge-lg badge-primary font-bold">TailwindCSS</div>
                        <div class="badge badge-lg badge-primary font-bold">daisyUI</div>
                        <div class="badge badge-lg badge-primary font-bold">Bun</div>
                    </div>

                    <!-- CTA -->
                    <div class="flex gap-4 justify-center">
                        <NuxtLink target="_blank" to="https://github.com/michaelnji/kira" class="btn btn-outline">
                            View on GitHub
                        </NuxtLink>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
