<template>
  <section>
    <a-tabs
      v-model="activeKey"
      type="editable-card"
      :hide-add="true"
      @tabClick="tabChangeCallBack"
    >
      <a-tab-pane
        v-for="pane in panes"
        :key="pane.key"
        :tab="pane.title"
        :closable="pane.closable"
        :disabled="pane.disabled"
      >
        <a-button
          v-if="activeKey === 'Show'"
          style="margin-bottom: 20px"
          type="success"
          icon="search"
          @click="showDrawer"
        >
          筛选
        </a-button>
        <a-drawer
          title="搜索面板"
          :z-index="99999"
          :placement="placement"
          :closable="true"
          :visible="visible"
          @close="onClose"
        >
          <ModuleTableComponentsQueryComponent
            :payload="{
              queryColumns: rebuildQueryColumn,
              resourceKey,
            }"
            @search="searchHanleder"
          />
        </a-drawer>

        <component
          :is="`ModuleTableComponents${activeKey}Component`"
          :payload="{
            columns: rebuildShowColumns,
            editColumns: rebuildEditColumns,
            createColumns: rebuildCreateColumn,
            data,
            actionType,
            resourceKey,
          }"
          @eventHandler="eventHandler"
        />
      </a-tab-pane>
    </a-tabs>
  </section>
</template>

<script>
  import request from '@/utils/request'
  import { panes, activeKey } from './config'
  import _ from 'lodash'
  export default {
    name: 'ModuleTableComponent',

    props: {
      columns: {
        type: Array,
        default: () => [],
      },
      actionType: {
        type: String,
        default: () => 'ActionButton',
      },
      resourceKey: {
        type: String,
        default: () => null,
      },
    },

    data: () => ({
      placement: 'top',
      panes,
      visible: false,
      activeKey,
      data: [],
      total: null,
    }),
    computed: {
      rebuildShowColumns() {
        let columns = this.columns.filter((item) => {
          item.dataIndex = item.key
          item.field = item.key
          if (!item.justCreate && !item.noShow) {
            return item
          }
        })
        return _.cloneDeep(columns)
      },
      rebuildEditColumns() {
        let columns = this.columns.filter((item) => {
          item.dataIndex = item.key
          item.field = item.key
          if (!item.justCreate) {
            return item
          }
        })
        return _.cloneDeep(columns)
      },
      rebuildCreateColumn() {
        this.columns.forEach((item) => {
          item.dataIndex = item.key
          item.field = item.key
        })
        return _.cloneDeep(this.columns)
      },
      rebuildQueryColumn() {
        this.columns.forEach((item) => {
          item.dataIndex = item.key
          item.field = item.key
        })
        return _.cloneDeep(this.columns)
      },
    },
    created() {},
    mounted() {
      this.fetchData()
    },
    methods: {
      showDrawer() {
        this.visible = true
      },
      onClose() {
        this.visible = !this.visible
      },
      searchHanleder(queryString) {
        this.fetchData(queryString)
        setTimeout(() => {
          this.visible = false
        }, 200)
      },
      tabChangeCallBack(key) {
        switch (key) {
          case 'Show':
          case 'Bill':
            this.fetchData()
            break
          default:
            this.visible = false
            break
        }
      },
      delDown(id) {
        let secondsToGo = 5
        const modal = this.$confirm({
          title: '再次确认',
          content: `是否要删除此条记录?这个对话框将在${secondsToGo}秒内关闭.`,
          okText: '确认',
          okType: 'danger',
          cancelText: '取消',
          cancelType: 'success',
          centered: true,
          onOk: async () => {
            let { data, status } = await request.delete(
              `${this.resourceKey}/${id}`
            )
            if (status === 'success') {
              this.fetchData()
            }
          },
          afterClose: () => {
            this.fetchData()
          },
        })
        const interval = setInterval(() => {
          secondsToGo -= 1
          modal.update({
            content: `是否要删除此条记录?这个对话框将在${secondsToGo}秒内关闭.`,
          })
        }, 1000)
        setTimeout(() => {
          clearInterval(interval)
          modal.destroy()
        }, secondsToGo * 1000)
      },
      eventHandler(type, data) {
        console.log(type)
        switch (type) {
          case 'buttonClick':
            switch (data.method) {
              case 'Edit':
              case 'Detail':
                // 对当前行的数据进行赋值
                let { record } = data
                this.rebuildEditColumns.forEach((item) => {
                  item.value = record[item.key]
                })
                this.activeKey = data.method
                break
              case 'Create':
                this.activeKey = data.method
                break
              case 'Del':
                console.log(data)
                this.delDown(data.record.id)
                break
            }
            break
          case 'tabChange':
            this.activeKey = data
            this.fetchData()
            break
        }
      },
      async fetchData(qeury = '') {
        let { data, links, meta } = await request.get(
          `${this.resourceKey}${qeury}`
        )
        this.data = data
      },
    },
  }
</script>
