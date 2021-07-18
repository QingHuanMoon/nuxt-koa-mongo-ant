<template>
  <section class="bread-wrapper">
    <a-breadcrumb>
      <a-breadcrumb-item href="/">
        <a-icon type="home" />
        首页
      </a-breadcrumb-item>
      <a-breadcrumb-item v-for="(item, index) in routerMatched" :key="`${item.name}${index}`">
        <a-icon type="home" />
        {{ item.name }}
      </a-breadcrumb-item>
    </a-breadcrumb>
  </section>
</template>

<script>
export default {
  name: 'LayoutBreadComponent',
  data: () => ({}),
  computed: {
    routerMatched() {
      return this.$route.matched
    }
  }
}
</script>

<style lang="less">
.bread-wrapper {
  height: 64px;
  display: flex;
  align-items: center;
  position: relative;
  right: 30px;
}
</style>
