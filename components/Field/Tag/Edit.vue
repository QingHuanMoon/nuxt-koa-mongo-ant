<template>
  <a-select
    v-model="inputValue"
    mode="tags"
    style="width: 100%"
    placeholder="Tags Mode"
    @change="handleChange"
  >
    <a-select-option v-for="item in value" :key="item">
      {{ item }}
    </a-select-option>
  </a-select>
</template>

<script>
  export default {
    name: 'FieldTagEditComponent',

    props: {
      value: {
        type: Array,
        default: () => [],
      },
      disabled: Boolean,
    },
    data: () => ({
      inputValue: '',
    }),
    mounted() {
      this.inputValue = this.value
    },
    methods: {
      handleChange(newValue) {
        this.$emit('input', newValue)
      },
    },
  }
</script>
