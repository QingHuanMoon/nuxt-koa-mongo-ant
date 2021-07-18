import UserService from "../service/UserService"
import tools from '../../utils/tools'
import jwt from 'jsonwebtoken'
class UserController
{
  static async login(ctx, next) {
    let params = ctx.request.body
    let res = await UserService.loginByEmailAndPassword(params.form)
    if (res) {
      let timestamp = new Date().getTime()
      let data = res._doc
      const token = jwt.sign({
        data: {...data, timestamp},
      }, 'qinghuan', { expiresIn: 60 })
      return ctx.body = tools.success('登录成功', {...data, token, timestamp})
    } else {
      return ctx.body = tools.fail('登录失败')
    }
  }

  static async check(ctx, next) {
    return ctx.body = 'check'
  }
}

export default UserController
