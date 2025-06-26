import colors from 'vuetify/es5/util/colors'
import axios from 'axios' // Make sure this import is at the top

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - MainGame.my.id",
    title: "Web Game Online Indonesia | MainGame.my.id",
    htmlAttrs: {
      lang: "id"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  loading: {
    color: "DodgerBlue",
    height: "5px",
    continuous: true,
    duration: 3000
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://127.0.0.1:8000/api/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    optionsPath: "./vuetify.options.js",
    treeShake: true,
    options: {
      customProperties: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // generate: {
  //     routes: async () => {
  //       const response = await fetch('https://example.com/api/articles') // Replace with your API
  //       const articles = await response.json()
  
  //       return articles.map(article => `/articles/${article.slug}`)
  //     }
  //   }

  // generate: {
  //   routes: [
  //     '/article/article1',
  //     '/article/article2'
  //   ]
  // }

  generate: {
    async routes() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/articles/all');
        // This next line depends on your API structure.
        // If your API returns { "data": [...] }, this is correct.
        const articles = response.data.data; 
        const paths = articles.map(article => `/article/${article.slug}`);
        console.log(`Found ${paths.length} routes to generate.`);

        return paths;
      } catch (error) {
        console.error('Failed to fetch routes for generation:', error);
        return [];
      }
    }
  }
}
