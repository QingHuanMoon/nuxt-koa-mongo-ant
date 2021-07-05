import Router from 'koa-router'

const router = new Router()

router.prefix('/api')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/hello', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

export default router

