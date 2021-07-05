<template>
  <form-create
    v-model="fApi"
    class="form"
    :rule="rule"
    :option="options"
    @submit="handlerSubmit"
  />
</template>

<script>
  import { formOptions } from '../../config'
  import request from '@/utils/request'
  export default {
    name: 'ModuleTableComponentsCreateComponent',
    props: {
      payload: {
        type: Object,
        default: () => {},
      },
    },
    data: () => ({
      fApi: {},
      options: formOptions,
    }),
    computed: {
      rule() {
        let rule = this.payload.createColumns
        return rule
      },
      resourceKey() {
        return this.payload.resourceKey
      },
    },
    methods: {
      async handlerSubmit(formData) {
        // 创建提交
        let { data } = await request.post(`${this.resourceKey}`, {
          data: formData,
        })
        this.$emit('eventHandler', 'tabChange', 'Show')
      },
    },
  }
</script>

<style lang="less" scoped>
  .form {
    margin-top: 30px;
  }
</style>
