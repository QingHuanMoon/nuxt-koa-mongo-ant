import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  userId: {
    type: Number,
    title: '用户ID',
    form: 'hidden'

  },
  userName: {
    type: String,
    title: '用户名称',
    form: 'input',
  },
  password: {
    type: String,
    title: '密码',
    form: 'input',
    noQuery: true
  },
  email: {
    type: String,
    title: '邮箱',
    form: 'input',
  },
  mobile: {
    type: String,
    title: '手机',
    form: 'input'
  },
  sex: {
    type: Number,
    title: '性别',
    form: 'select',
    options: [
      { label: '男', value: 0 },
      { label: '女', value: 1 },
    ]
  },
  deptId: {
    type: Array,
    title: '所属部门',
    form: 'input',
  },
  job: {
    type: String,
    title: '工作',
    form: 'input',
  },
  state: {
    type: Number,
    default: 1,
    title: '用户状态',
    form: 'input'
  },
  role: {
    type: Number,
    default: 1,
    title: '角色',
    form: 'input'
  },
  createdTime: {
    type: Date,
    default: Date.now(),
    title: '创建时间',
    form: 'hidden',
  },
  lastLoginTime: {
    type: Date,
    default: Date.now(),
    title: '最后登录时间',
    form: 'hidden'
  },
  remark: {
    type: String,
    title: '备注',
    info: {
      documentName: 'users'
    },
    form: 'hidden'
  }
})

export default UserSchema
