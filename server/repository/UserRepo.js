import userSchema from "../model/userSchema";
class UserRepo
{
  static async findUser(params)
  {
    let res = await userSchema.findOne(params)
    return res
  }
}


export default UserRepo
