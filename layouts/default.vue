<template>
  <section>
    <div class="page">
      <a-layout-sider class="left" v-model="collapsed" :trigger="null" collapsible>
        <LayoutLogoComponent />
        <LayoutMenuComponent />
      </a-layout-sider>
      <div class="right" :style="{ marginLeft: this.width[collapsed ? 1 : 0] + 'px' }">
        <a-layout-header class="header">
          <a-row>
            <a-col span="1">
              <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
            </a-col>
            <a-col span="6">
              <LayoutBreadComponent />
            </a-col>
            <a-col span="1" push="16">
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
        <a-layout-content class="wrapper" :style="{}">
          <nuxt-child class="content"></nuxt-child>
        </a-layout-content>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    collapsed: false,
    width: [200, 80]
  })
}
</script>
<style lang="less">
* {
  font-family: 'Source Code Pro';
  font-weight: 700;
}
.page {
  width: 100vw;
  height: 100vh;
  position: relative;
  .left {
    background-color: #fff;
    position: fixed;
    width: 200px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    &.ant-layout-sider-collapsed {
      width: 64px !important;
    }
  }
  .right {
    background-color: #f0f2f5;
    height: 100%;
    .header {
      padding: 0px 30px;
      background-color: #fff;
      height: 64px;
    }
    .wrapper {
      // margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px'
      margin: 24px 16px;
      padding: 24px;
      height: calc(100vh - 100px);
      border-radius: 10px;
      background-color: #fff;
      overflow: hidden;
      .content {
        width: 100%;
        height: 100%;
        overflow-y: auto;
      }
    }
  }
}
</style>
