<template>
  <a-table :columns="columns" :data-source="data">
    <span v-for="(item, index) in columns" :key="index">
      {{ item.title }}
    </span>
    <template
      v-for="(item, index) in customRenderColumns"
      slot="Tag"
      slot-scope="tags"
    >
      <span :key="index">
        <component :is="`TagShowComponent`" :data="tags" />
      </span>
    </template>
    <span slot="Action" slot-scope="text, record">
      <component
        :is="`Table${actionType}Component`"
        :payload="{ defaultButtons, record }"
        @buttonClick="handlerClick"
      />
    </span>
  </a-table>
</template>

<script>
  import TableActionButtonComponent from '../ActionButton'
  import { defaultButtons } from '../../config'
  export default {
    name: 'ModuleTableComponentsShowComponent',
    components: { TableActionButtonComponent },
    props: {
      payload: {
        type: Object,
        default: () => {},
      },
    },
    data: () => ({
      defaultButtons,
    }),
    computed: {
      data() {
        let { data } = this.payload
        return data
      },
      columns() {
        let { columns } = this.payload
        columns = [
          // 添加操作列
          ...columns,
          {
            title: '操作',
            key: 'action',
            scopedSlots: { customRender: 'Action' },
          },
        ]
        return columns
      },
      actionType() {
        let { actionType } = this.payload
        return actionType
      },
      customRenderColumns() {
        return this.columns.filter((item) => {
          if (item?.scopedSlots?.customRender) {
            return item
          }
        })
      },
    },
    mounted() {},
    methods: {
      handlerClick(item) {
        this.$emit('eventHandler', 'buttonClick', item)
      },
    },
  }
</script>
