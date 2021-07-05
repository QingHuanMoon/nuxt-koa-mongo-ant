<template>
  <section>
    {{ data }}
  </section>
</template>

<script>
  export default {
    name: 'FieldTagShowComponent',
    props: {
      data: {
        type: Array,
        default: () => [],
      },
    },
  }
</script>
