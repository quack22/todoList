// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  appConfig: {
    apiKey: process.env.SUPABASE_API_KEYS,
    baseUrl: process.env.SUPABASE_URL,
    secretKey: process.env.SUPABASE_SECRETS_KEYS
  },
  css: ['~/assets/css/tailwind.css'],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"]
})