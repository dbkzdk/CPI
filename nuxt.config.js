export default defineNuxtConfig({
  compatibilityDate: '2026-01-01', devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'], css: ['~/assets/css/main.css'],
  runtimeConfig: { sessionSecret: process.env.NUXT_SESSION_SECRET || 'change-this-secret-minimum-32-characters', public: { appName: 'PCI — Panel Critical Info' } },
  nitro: { experimental: { database: false } },
  app: { head: { title: 'PCI — Panel Critical Info', meta: [{ name:'description', content:'Majalah dinding digital untuk memastikan informasi dibaca dan dipahami.' }] } }
})