<template>
  <div class="test-container">
    <ModuleTableComponent />
  </div>
</template>

<script>
  import { isEmail, isPhone } from '../public/validate'
  export default {
    name: 'Dashboard',
    data: () => ({
      resourceKey: 'admin',
      columns: [
        {
          title: '序号',
          key: 'id',
          type: 'hidden',
        },
        {
          title: '姓名',
          key: 'name',
          type: 'input',
          validate: [
            { required: true, trigger: 'blur', message: '用户名是必填项' },
            { min: 2, trigger: 'blur', message: '最少输入2个字符' },
          ],
          noShow: true,
        },
        {
          title: '姓名',
          key: 'username',
          type: 'input',
          validate: [
            { required: true, trigger: 'blur', message: '用户名是必填项' },
            { min: 2, trigger: 'blur', message: '最少输入2个字符' },
          ],
          hidden: true,
        },
        {
          title: '邮箱',
          key: 'email',
          type: 'input',
          validate: [
            {
              type: 'string',
              required: true,
              trigger: 'blur',
              message: '邮箱是必填项',
            },
            { validator: isEmail, trigger: 'blur', message: '必须是邮箱格式' },
          ],
        },
        {
          title: '手机',
          key: 'phone',
          type: 'input',
          validate: [
            {
              type: 'string',
              required: true,
              trigger: 'blur',
              message: '手机是必填项',
            },
            { validator: isPhone, trigger: 'blur', message: '必须是手机格式' },
          ],
        },
        {
          title: '密码',
          key: 'password',
          type: 'input',
          justCreate: true,
          noQuery: true,
          validate: [
            {
              type: 'string',
              required: true,
              trigger: 'blur',
              message: '密码是必填项',
            },
          ],
        },
      ],
    }),
    created() {},
    mounted() {},
    methods: {},
  }
</script>
