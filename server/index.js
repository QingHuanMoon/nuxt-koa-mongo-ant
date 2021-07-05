import Koa from 'koa'
import koaBody from 'koa-body';
import { Nuxt, Builder } from 'nuxt'
import BootStrap from './bootstrap';


async function start () {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000

  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(koaBody())

  // 路由
  BootStrap.RouterRegister(app)


  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })


  app.listen(port, host)


  console.log('服务器启动成功,请点击访问->' + host + ':' + port) // eslint-disable-line no-console

  BootStrap.ProviderRegister()

}

start()