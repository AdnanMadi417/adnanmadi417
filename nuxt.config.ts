// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  pages: true,
  modules: ['@nuxt/ui'],
    ssr: false, // Disable SSR if you want a fully static site, set to true for SSR.
})