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
  import request from '@/utils/request'
  import { formOptions } from '../../config'
  export default {
    name: 'ModuleTableComponentsEditComponent',
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
        let rule = this.payload.editColumns
        return rule
      },
      resourceKey() {
        return this.payload.resourceKey
      },
    },
    methods: {
      async handlerSubmit(formData) {
        // 创建提交
        let { data } = await request.patch(
          `${this.resourceKey}/${formData.id}`,
          {
            data: formData,
          }
        )
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
