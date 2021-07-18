import request from "../utils/request"
class UserApi
{
  static login(params)
  {
    return request({
      url: '/users/login',
      method: 'post',
      data: params,
      mock: false
    })
  }
  static check(params = {}) {
    return request({
      url: '/users/check',
      method: 'get',
      data: params,
      mock: false,
    })
  }
  static getMenuList()
  {
    return request({
      url: '/menu/list',
      method: 'get',
    })
  }
}

export default UserApi
