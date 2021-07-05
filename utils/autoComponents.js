/*
 * 全局组件自动注册
 */
import _ from 'lodash'
import Vue from 'vue'
// 自动注册所有组件
const autoComponents = () => {
  const requireComponent = require.context('@/components', true, /\.vue$/)

  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName)
    let index = fileName.search('index.vue')
    if (index != -1) {
      fileName = fileName.substr(0, index - 1)
    }
    const componentName = _.upperFirst(
      // 获取驼峰式命名
      _.camelCase(
        // 剥去文件名开头的 `./` 和结尾的扩展名 eg: ./food-header.vue -> foodHeader
        fileName.replace(/^\.\/(.*)\.\w+$/, '$1') + 'Component'
      )
    )

    Vue.component(componentName, componentConfig.default || componentConfig)
    console.log(componentName)
  })
}

export default autoComponents
