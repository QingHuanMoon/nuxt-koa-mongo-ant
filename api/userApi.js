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
}

export default UserApi
