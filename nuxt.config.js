module.exports = {
  telemetry: false,
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  plugins: [
    '~plugins/antd.js',
    '~plugins/request.js',
    '~plugins/autoload.js',
    {src: '~plugins/form-create.js', ssr:false},
    {src: '~plugins/lodash.js', ssr: false},

  ],

  build: {
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
      if (ctx.Client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
