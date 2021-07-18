import mongoose from 'mongoose'
class BootStrap
{
  // 服务自动注册
  static ProviderRegister()
  {
    const requireComponent = require.context('./provider', true, /\.js$/)
      requireComponent.keys().forEach((fileName) => {
        const componentConfig = requireComponent(fileName)
        componentConfig.default.boot()
      })
  }

  // 路由自动注册
  static RouterRegister(app)
  {
    const requireComponent = require.context('./router', true, /\.js$/)
    requireComponent.keys().forEach((fileName) => {
      const componentConfig = requireComponent(fileName)
      app.use(componentConfig.default.routes(), componentConfig.default.allowedMethods())
    })
  }

  // 模型自动加载
  static ModelRegister(app)
  {
    global.model = [];
    const requireComponent = require.context('./model', true, /\.js$/)
    requireComponent.keys().forEach((fileName) => {
      const componentConfig = requireComponent(fileName)
      const documentName = componentConfig.default.obj.remark.info.documentName
      global.model[`${documentName}Schema`] = mongoose.model(documentName, componentConfig.default, documentName)
    })
    console.log('模型挂载成功...')
  }
}

export default BootStrap
