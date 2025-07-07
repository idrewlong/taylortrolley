// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  image: {
    format: ['webp', 'png', 'jpg', 'jpeg'],
    domains: ['localhost:3000', 'localhost'],
  },
  routeRules: {
    // '/': { prerender: true },
  },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxtjs/seo'],
  site: {
    url: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000',
    name: 'Taylor Trolley',
    defaultLocale: 'en',
    trailingSlash: false,
  },
});
