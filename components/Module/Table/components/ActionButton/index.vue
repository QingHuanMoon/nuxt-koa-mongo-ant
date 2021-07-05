<template>
  <section>
    <a-space>
      <a-button
        v-for="(item, index) in payload.defaultButtons"
        :key="index"
        :type="item.type"
        @click="handlerClick(item)"
      >
        {{ item.name }}
      </a-button>
    </a-space>
  </section>
</template>

<script>
  export default {
    name: 'ModuleTableComponentsActionButtonComponent',
    props: {
      payload: {
        type: Object,
        default: () => {},
      },
    },
    methods: {
      handlerClick(item) {
        let record = this.payload.record
        item = { ...item, record }
        this.$emit('buttonClick', item)
      },
    },
  }
</script>
