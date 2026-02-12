import { defineNuxtPlugin } from "nuxt/app";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { unstyled: true });
  nuxtApp.vueApp.use(ToastService);
});
