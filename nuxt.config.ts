// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: false },
	vite: {
		plugins: [tailwindcss()],
	},
	css: ["~/assets/css/app.css"],
	modules: [
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxt/image",
		"@nuxt/scripts",
		"@nuxt/test-utils",
		"@pinia/nuxt",
		"@vueuse/nuxt",
		"@formkit/auto-animate",
	],
	icon: {
		customCollections: [
			{
				// Give your collection a name, this will be used as the prefix for the icons
				prefix: "kira",
				dir: "./assets/icons",
			},
		],
		clientBundle: {
			// list of icons to include in the client bundle
			icons: [],
			// include all custom collections in the client bundle
			includeCustomCollections: true,
		},
	},
	image: {
		format: ["webp", "png", "jpeg"],
		// define your own presets
		presets: {
			// This is an example of a preset for avatars
			avatar: {
				modifiers: {
					format: "jpg",
					width: 50,
					height: 50,
				},
			},
		},
	},
	fonts: {
		defaults: {
			weights: [300, 400, 500, 600, 700, 800, 900],
			styles: ["normal", "italic"],
		},
		// use ~public/fonts for your font files
		provider: "local",
	},
});
