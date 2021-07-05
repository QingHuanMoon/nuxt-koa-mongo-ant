<template>
  <form-create
    v-model="fApi"
    :rule="rule"
    :option="options"
    @submit="handlerSubmit"
  />
</template>

<script>
  export default {
    name: 'ModuleTableComponentsQueryComponent',
    props: {
      payload: {
        type: Object,
        default: () => {},
      },
    },
    data: () => ({
      fApi: {},
      options: {
        form: {
          labelAlign: 'right',
          layout: 'inline',
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 20,
          },
        },
        row: {
          gutter: 0,
          align: 'middle',
          justify: 'center',
        },
        submitBtn: {
          disabled: false,
          ghost: false,
          icon: 'search',
          loading: false,
          type: 'success',
          block: false,
          innerText: '搜索',
          show: true,
        },
      },
    }),
    computed: {
      rule() {
        let rule = this.payload.queryColumns
        rule = rule.filter((element) => {
          if (element.validate) {
            element.validate = []
          }
          if (!element.noQuery) {
            return element
          }
        })
        return rule
      },
      resourceKey() {
        return this.payload.resourceKey
      },
    },
    methods: {
      async handlerSubmit(formData) {
        let searchArray = {}
        let queryStr = []
        Object.keys(formData).filter((key) => {
          if (formData[key]) {
            searchArray = { ...searchArray, [key]: formData[key] }
          }
        })
        Object.keys(searchArray).forEach((item, index) => {
          queryStr[index] = `filter[${item}]=${searchArray[item]}`
        })
        queryStr = '?' + queryStr.join('&')
        this.$emit('search', queryStr)
      },
    },
  }
</script>
