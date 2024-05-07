// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  ssr: false,
  modules: [
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@vee-validate/nuxt",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/fonts",
    "nuxt-og-image",
  ],
  i18n: {
    locales: [
      {
        code: "fr",
        name: "Français (France)",
        file: "fr-FR.ts",
      },
    ],
    lazy: true,
    langDir: "locales",
    defaultLocale: "fr",
  },
});
