import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  userId: {
    type: Number,
  },
  userName: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  mobile: {
    type: String
  },
  sex: {
    type: Number
  },
  deptId: [],
  job: String,
  state: {
    type: Number,
    default: 1,
  },
  role: {
    type: Number,
    default: 1
  },
  createdTime: {
    type: Date,
    default: Date.now()
  },
  lastLoginTime: {
    type: Date,
    default: Date.now()
  },
  remark: String
})

export default mongoose.model('users', UserSchema, 'users')
