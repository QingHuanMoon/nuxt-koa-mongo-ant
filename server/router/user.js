import Router from 'koa-router'
import UserController from '../controller/UserController'

const router = new Router()

router.prefix('/api/users')


router.post('/login',  UserController.login)

export default router
