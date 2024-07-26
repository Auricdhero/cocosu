// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({

  vite: {
    define: {
      "process.env.DEBUG": true,
    },
  },

  css: [
    'assets/styles/bootstrap.scss',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ],

  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/google-fonts',
    // '@nuxtjs/markdownit'
  ],
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Slab': true,
      'Sansita+Swashed': true,
      'Tourney': true,
      'Poppsins': true,
      'Mulish': true
    }
  },
  strapi: {
    url: process.env.API_URL,
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  build: {
    transpile: ['vuetify']
  },


  runtimeConfig: {
    public: {
      apiBase: process.env.API_URL
    },
    strapi:{
      url: process.env.API_URL
    }
  },
  imports: {
    dirs: [
      'composables/**'
    ]
  },
  // ssr: false,
  devtools: { enabled: true }
})
