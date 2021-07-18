<template>
  <section class="login-page">
    <a-card class="login-card">
      <a-row class="title-row">
        <a-col :span="24">
          <h1 class="title">鲸落</h1>
        </a-col>
      </a-row>
      <a-form-model ref="loginForm" layout="horizontal" :model="loginForm" :rules="rules">
        <a-form-model-item has-feedback label="邮箱" prop="email">
          <a-input v-model="loginForm.email" type="email" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="密码" prop="password">
          <a-input v-model="loginForm.password" type="password" />
        </a-form-model-item>
        <a-form-model-item>
          <a-button icon="check" block type="primary" @click="submitForm('loginForm')">登录</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </section>
</template>

<script>
import {isEmail, isPassword} from '@/public/validate'
import Storage from '../utils/storage';
export default {
  layout: 'full',
  name: 'LoginPage',
  data: () => ({
    loginForm: {
      email: '',
      password: ''
    },
    rules: {
      email:[ {validator: isEmail, trigger: 'change', name: 'isEmail'}],
      password: [ {validator: isPassword, trigger: 'change', name: 'isPassword'}]
    },
  }),
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate( async (valid, errors) => {
        if (valid) {
         let res = await this.$api.UserApi.login({
           form: this.loginForm,
           rules: this.rules
         })
         Storage.setItem('userInfo', res)
         this.$router.push({name: 'dashboard'})
        } else {
          let keys = Object.keys(errors)
          var msg = ''
          keys.forEach(key => {
            msg += key + '->' + errors[key][0]['message'] + `\n`
          })
          this.$notification.error({
            key: 'error',
            message: '前台表单验证错误',
            description: msg,
            style: {
              whiteSpace: 'pre-wrap',
              fontWeight: 700
            },
          })
          return false;
        }
      });

    }
  }
}
</script>

<style lang="less">
.login-page {
  height: 100%;
  width: 100%;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  .title-row {
    display: flex;
    justify-content: center;
    font-size: 28px;
    .title {
      text-align: center;
    }
  }
  .login-card {
    width: 35vw;
    height: 50vh;
  }
}
</style>
