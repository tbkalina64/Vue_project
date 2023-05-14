export default {
  server: {
    port: process.env.PORT,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "vt-inbox",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/filters.js" },
    { src: "~/plugins/inject.js" },
    { src: "~plugins/vee-validate.js" },
    { src: "~/plugins/google-maps", ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/google-analytics",
  ],

  googleAnalytics: {
    id: "UA-154375302-1",
  },

  robots: {
    UserAgent: "*",
    Disallow: "/",
    Host: "vtinbox.com",
    Sitemap: "https://vtinbox.com/sitemap.xml",
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "vue-scrollto/nuxt",
      {
        duration: 1000,
        offset: -100,
      },
    ],
    "vue-social-sharing/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/robots",
    [
      "@nuxtjs/recaptcha",
      {
        hideBadge: false,
        siteKey: "6LfjL_kcAAAAAFDLyRuvgF1t5Y2j6MWrW6LlOX89",
        version: 3,
      },
    ],
    [
      "@nuxtjs/robots",
      {
        UserAgent: "*",
        Disallow: "/",
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules", /^vue2-google-maps($|\/)/],
    extend(config, ctx) {
      ctx.isDev &&
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        });
    },
  },
};
