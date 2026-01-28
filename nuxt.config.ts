import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	vite: {
		plugins: [tailwindcss()],
	},
	css: ["~/assets/css/app.css"],
	modules: [
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxt/image",
		"@pinia/nuxt",
		"@vueuse/nuxt",
		"@formkit/auto-animate/nuxt",
		"@nuxtjs/supabase",
	],
	icon: {
		serverBundle: {
			collections: ["solar"],
		},
	},
	fonts: {
		provider: "local",
	},
});
