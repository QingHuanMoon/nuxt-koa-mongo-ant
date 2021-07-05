import Vue from 'vue'

const autoApi = () => {
  const requireComponent = require.context('@/api', true, /\.js$/)
  Vue.prototype.$api = []

  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName)
    Vue.prototype.$api[componentConfig.default.name] = componentConfig.default
  })
}

export default autoApi
