import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
import { defineNuxtPlugin } from "nuxt/app";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";

const KiraPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "var(--color-primary-100)",
      100: "var(--color-primary-100)",
      200: "var(--color-primary-200)",
      300: "var(--color-primary-300)",
      400: "var(--color-primary-400)",
      500: "var(--color-primary-500)",
      600: "var(--color-primary-600)",
      700: "var(--color-primary-700)",
      800: "var(--color-primary-800)",
      900: "var(--color-primary-900)",
      950: "var(--color-primary-950)",
    },
    colorScheme: {
      light: {
        surface: {
          0: "var(--color-bg)",
          50: "var(--color-surface)",
          100: "var(--color-surface-2)",
          200: "var(--color-border)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
          950: "var(--color-neutral-950)",
        },
      },
      dark: {
        surface: {
          0: "var(--color-bg)",
          50: "var(--color-surface)",
          100: "var(--color-surface-2)",
          200: "var(--color-border)",
          300: "var(--color-neutral-700)",
          400: "var(--color-neutral-600)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-400)",
          700: "var(--color-neutral-300)",
          800: "var(--color-neutral-200)",
          900: "var(--color-neutral-100)",
          950: "var(--color-neutral-100)",
        },
      },
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    ripple: true,
    theme: {
      preset: KiraPreset,
      options: {
        darkModeSelector: ".dark",
      },
    },
  });
  nuxtApp.vueApp.use(ToastService);
});
