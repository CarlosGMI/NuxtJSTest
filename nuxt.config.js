import { resolve } from 'path';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Imagenes del Mundo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios', '~/plugins/mixins', '~/plugins/repository'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // Use global variables on Vue components style tags
    '@nuxtjs/style-resources',
    // Use environment variables
    '@nuxtjs/dotenv',
  ],

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    componentPlugins: [
      'LayoutPlugin',
      'ImagePlugin',
      'ButtonPlugin',
      'ModalPlugin',
      'FormInputPlugin',
      'ToastPlugin',
      'SpinnerPlugin'
    ],
    components: ['BNavbar', 'BNavbarBrand', 'BTable'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
  },

  styleResources: {
    scss: ['~assets/styles/scss/_variables.scss'],
  },

  alias: {
    component_styles: resolve(__dirname, './assets/styles/scss/components'),
    page_styles: resolve(__dirname, './assets/styles/scss/pages'),
    // styles: '~assets/styles/scss',
  },
};
