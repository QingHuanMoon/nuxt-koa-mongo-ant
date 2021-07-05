import UserRepo from "../repository/UserRepo";

class UserService
{
  static async loginByEmailAndPassword(params)
  {
    return await UserRepo.findUser(params)
  }
}

export default UserService
