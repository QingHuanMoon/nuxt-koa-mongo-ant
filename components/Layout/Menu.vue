<template>
  <div style="width: 256px">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['2']"
      mode="inline"
      theme="light"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in list">
        <sub-menu v-if="item.children && item.children.length > 0 &&
        item.children[0].menuType == 1" :key="item.key" :menu-info="item" />
        <a-menu-item v-else-if="item.children[0].menuType == 2" :key="item.key">
          <a-icon type="pie-chart" />
          <span>{{ item.menuName }}</span>
        </a-menu-item>
        <a-menu-item v-else :key="item.key">
          <a-icon type="pie-chart" />
          <span>{{ item.menuName }}</span>
        </a-menu-item>

      </template>
    </a-menu>
  </div>
</template>

<script>
import UserApi from '../../api/userApi';
// recommend use functional component
// <template functional>
//   <a-sub-menu :key="props.menuInfo.key">
//     <span slot="title">
//       <a-icon type="mail" /><span>{{ props.menuInfo.title }}</span>
//     </span>
//     <template v-for="item in props.menuInfo.children">
//       <a-menu-item v-if="!item.children" :key="item.key">
//         <a-icon type="pie-chart" />
//         <span>{{ item.title }}</span>
//       </a-menu-item>
//       <sub-menu v-else :key="item.key" :menu-info="item" />
//     </template>
//   </a-sub-menu>
// </template>
// export default {
//   props: ['menuInfo'],
// };
import { Menu } from 'ant-design-vue';
const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon :type="menuInfo.icon" /><span>{{ menuInfo.menuName }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.key">
            <a-icon type="monitor" />
            <span>{{ item.menuName }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.key" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: 'SubMenu',
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
export default {
  components: {
    'sub-menu': SubMenu,
  },
  data: () => ({
      collapsed: false,
      list: [],
  }),
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    async getMenuList() {
      try {
        let res = await UserApi.getMenuList()
        console.log(res)
        this.list = res
      } catch (e) {}
    }
  },
  mounted() {
    this.getMenuList()
  }
};
</script>
