<template>
  <section class="container">
    <a-button>Hello Nuxt</a-button>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'default',
  mounted() {
    this.$request.get('/login').then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>

</style>
