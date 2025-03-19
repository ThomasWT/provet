// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
    }
  },
  i18n: {
    langDir: 'locales',
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      { "code": "en", "language": "en-US", "file": "en.js", "dir": "ltr", "name": "English", "flag": "en.svg" },
      { "code": "fi", "language": "fi-FI", "file": "fi.js", "dir": "ltr", "name": "Suomi", "flag": "fi.svg" },
    ]
  },
  modules: ['@nuxt/fonts', '@nuxt/test-utils', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css', '~/node_modules/@provetcloud/css/lib/provet.css'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes('-'),
    },
  },
})