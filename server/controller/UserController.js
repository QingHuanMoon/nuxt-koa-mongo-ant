import UserService from "../service/UserService"
import tools from '../../utils/tools'
class UserController
{
  static async login(ctx, next) {
    let params = ctx.request.body
    let res = await UserService.loginByEmailAndPassword(params)
    if (res) {
      ctx.body = tools.success('登录成功')
    } else {
      ctx.body = tools.fail('登录失败')
    }
  }
}

export default UserController
