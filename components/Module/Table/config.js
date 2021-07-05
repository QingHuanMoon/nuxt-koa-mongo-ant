/**
 * Table组件默认设置
 */
module.exports = {
  defaultButtons: [
    {
      name: '编辑',
      method: 'Edit',
      type: 'primary',
    },
    {
      name: '查看',
      method: 'Detail',
      type: 'success',
    },
    {
      name: '删除',
      method: 'Del',
      type: 'danger',
    },
  ],
  // 表格显示的多个模式
  panes: [
    {
      title: '资源集',
      key: 'Show',
      closable: false,
    },
    {
      title: '单据模式',
      key: 'Bill',
      closable: false,
    },
    {
      title: '创建',
      key: 'Create',
      closable: false,
    },
    {
      title: '查看',
      key: 'Detail',
      closable: false,
      disabled: true,
    },
    {
      title: '编辑',
      key: 'Edit',
      closable: false,
      disabled: true,
    },
  ],
  // 表格的默认模式
  activeKey: 'Show',
  // 表单全局配置
  formOptions: {
    form: {
      labelAlign: 'right',
      layout: 'vertical',
      labelCol: {
        push: 4,
        span: 12,
      },
      wrapperCol: {
        push: 4,
        span: 16,
      },
      validateOnRuleChange: true,
    },
    row: {
      gutter: 0,
      type: 'flex',
      align: 'middle',
      justify: 'center',
    },
    submitBtn: {
      disabled: false,
      ghost: false,
      icon: 'upload',
      loading: false,
      type: 'primary',
      block: true,
      innerText: '提交',
      show: true,
    },
  },
}
