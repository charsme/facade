import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  router: {
    linkActiveClass: 'link--active',
    linkExactActiveClass: 'link--exact-active',
    linkPrefetchedClass: 'link--prefetch'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  srcDir: 'src/',
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css', '~/assets/css/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/composition-api'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
    // '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    devtools: true
  }
}

export default config
