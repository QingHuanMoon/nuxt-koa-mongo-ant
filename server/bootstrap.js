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
}

export default BootStrap
