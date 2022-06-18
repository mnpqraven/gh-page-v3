import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  css: ['@/assets/css/main.css'],
  buildModules: [
    '@nuxtjs/color-mode',
    'nuxt-windicss',
  ],
  build: { },
})
