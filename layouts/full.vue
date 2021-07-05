<template>
  <section class="full-page">
    <nuxt-child></nuxt-child>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="less">
.full-page {
  height: 100vh;
  width: 100vw;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
