<template>
  <section>
    <div class="page">
        <a-layout-sider class="left" v-model="collapsed" :trigger="null" collapsible>
          <div class="logo" />
          <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
          </a-menu>
        </a-layout-sider>
      <div class="right">
        <a-layout-header class="header">
          <a-row>
            <a-col span=1>
              <a-icon
                class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="() => (collapsed = !collapsed)"
              />
            </a-col>
            <a-col span=6>
              <div class="bread">面包屑</div>
            </a-col>
            <a-col span=1 push=16>
              <div class="user-info">
                <a-dropdown placement="bottomCenter">
                  <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  <a-menu slot="overlay">
                    <a-menu-item key="0">
                      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">Hello</a>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">World</a>
                    </a-menu-item>
                    <a-menu-divider />
                    <a-menu-item key="3" disabled>
                      3rd menu item（disabled）
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </div>
            </a-col>
          </a-row>

        </a-layout-header>
        <a-layout-content
          class="content"
          :style="{  }"
        >
          <nuxt-child></nuxt-child>
        </a-layout-content>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style lang="less">
.page {
  width: 100vw;
  height: 100vh;
  position: relative;
  .left {
    position: fixed;
    width: 200px;
    height: 100%;
    overflow-y: auto;
  }
  .right {
    margin-left: 200px;
    background-color: #f0f2f5;
    height: 100%;
    .header {
      padding: 0px 30px;
      background-color: #fff;
      height: 64px;
    }
    .content {
      // margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px'
      margin: 24px 16px;
      padding: 24px;
      height: calc(100vh - 100px);
      border-radius: 10px;
      background-color: #fff;
    }

  }
}
</style>
