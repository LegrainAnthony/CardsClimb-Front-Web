// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ['@nuxtjs/i18n', '@vueuse/nuxt', '@vee-validate/nuxt', '@nuxt/ui'],
  i18n: {
    locales: [
      {
        code: 'fr',
        name: 'Français (France)',
        file: 'fr-FR.ts',
      },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'fr',
  },
  // veeValidate: {
  //   // disable or enable auto imports
  //   autoImports: true,
  // },
});
