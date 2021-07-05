import mongoose from 'mongoose'
import config from '../../public/config'
class Db
{
  static boot()
  {
    mongoose.connect(config.dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
    )
    const db = mongoose.connection

    db.on('error', () => {
      console.log('数据库服务注册失败')
    })

    db.on('open', () => {
      console.log('数据库服务注册成功')
    })
  }
}

export default Db
