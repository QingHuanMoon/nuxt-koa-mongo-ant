import mongoose from 'mongoose'
import { isEmail, isPhone} from '../../public/validate';

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
    validators: [
      { required: true, trigger: 'blur', message: '用户名是必填项' },
      { min: 2, trigger: 'blur', message: '最少输入2个字符' },
    ],
  },
  password: {
    type: String,
    title: '密码',
    form: 'input',
    noQuery: true,
    props: {
        type: "password",
    },
    validators: [
      { required: true, trigger: 'blur', message: '用户名是必填项' },
      { min: 6, trigger: 'blur', message: '最少输入2个字符' },
    ],
  },
  email: {
    type: String,
    title: '邮箱',
    form: 'input',
    validators: [
      {
        required: true,
        trigger: 'blur',
        message: '邮箱是必填项',
      },
      { validator: isEmail, trigger: 'blur', message: '必须是邮箱格式' },
    ]
  },
  mobile: {
    type: String,
    title: '手机',
    form: 'input',
    validators: [
      {
        type: 'string',
        required: true,
        trigger: 'blur',
        message: '手机是必填项',
      },
      { validator: isPhone, trigger: 'blur', message: '必须是手机格式' },
    ]
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
      documentName: 'users',
    },
    form: 'hidden'
  }
})

export default UserSchema
