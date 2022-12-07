export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tecpastryworld - Order cakes and pastries from the comfort of you home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:site_name', content: "tecpastryworld"},
      { hid: 'og:title', property: 'og:title', content: 'tecpastryworld - Order cakes and pastries from the comfort of you home '},
      { hid: 'og:description', property: 'og:description', content: 'The fastest way to order cakes, pastries and bread from TEC online and have it delivered to your doorstep.'},
      { hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1670409912/tec/tpw-logo_eu4rev.png'},
      { hid: 'og:url', property: 'og:url', content: 'https://www.tecpastryworld.com'},
      { hid: 'twitter:title', name: 'twitter:title', content: 'tecpastryworld - Order cakes and pastries from the comfort of you home '},
      { hid: 'twitter:description', name: "twitter:description", content: "The fastest way to order cakes, pastries and bread from TEC online and have it delivered to your doorstep."},
      { hid: 'twitter:image', name:"twitter:image", content:"https://res.cloudinary.com/dsgvwxygr/image/upload/v1670409912/tec/tpw-logo_eu4rev.png"},
      { hid: 'twitter:url', property: "twitter:url", content: "https://www.tecpastryworld.com"},
      { hid: "twitter:card", name: "twitter:card", content: "summary"},
      { name:"twitter:creator", content:"@joshytheprog"}
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/ngrok',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '@/assets/scss/app.scss',
      '@/assets/scss/mixins.scss'
    ],
    hoistUseStatements:  true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  ngrok: {
    // module options
    authtoken: process.env.NGROK_AUTHTOKEN
  }
}
