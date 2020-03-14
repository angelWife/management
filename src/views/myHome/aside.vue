<template>
  <div class="menu-bar-container">
    <!-- logo -->
    <div
      class="logo"
      :class="collapse?'menu-bar-collapse-width':'menu-bar-width'"
      @click="$router.push('/')"
    >
      <img src="@/assets/toplogo.png" />
    </div>
    <!-- 导航菜单 -->
    <div class="menuBox">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#001529"
        @open="handleOpen"
        @close="handleClose"
        text-color="#fff"
      >
        <menu-tree v-for="item in menuList" :key="item.id" :menu="item"></menu-tree>
      </el-menu>
    </div>
  </div>
</template>

<script>
import MenuTree from "@/components/MenuTree/index"
export default {
  components:{
        MenuTree
  },
  data() {
    return {
      collapse: false,
      menuList: [
        {
          id: 1,
          name: "首页",
          icon: "el-icon-location",
          path: "/",
          hasChild: false
        },
        {
          id: 2,
          name: "会员信息",
          icon: "el-icon-location",
          path: "/home/index",
          hasChild: true,
          children: [
            {
              id: 21,
              name: "会员设置",
              icon: "el-icon-location",
              path: "/home/index"
            },
            {
              id: 22,
              name: "会员列表",
              icon: "el-icon-location",
              path: "/home/index"
            }
          ]
        }
      ]
    };
  },
  computed: {},
  watch: {
    $route: "handleRoute"
  },
  created() {
      console.log(this.$route)
    // this.handleRoute(this.$route);
  },
  methods: {
    handleopen() {
      console.log("handleopen");
    },
    handleclose() {
      console.log("handleclose");
    },
    handleselect(a, b) {
      console.log("handleselect");
    },
    // 路由操作处理
    handleRoute(route) {
      // // tab标签页选中, 如果不存在则先添加
      // var tab = this.mainTabs.filter(item => item.name === route.name)[0]
      // if (!tab) {
      //   tab = {
      //     name: route.name,
      //     title: route.name,
      //     icon: route.meta.icon
      //   }
      //   this.mainTabs = this.mainTabs.concat(tab)
      // }
      // this.mainTabsActiveName = tab.name
      // // 切换标签页时同步更新高亮菜单
      // if(this.$refs.navmenu != null) {
      //   this.$refs.navmenu.activeIndex = '' + route.meta.index
      //   this.$refs.navmenu.initOpenedMenu()
      // }
    }
  }
};
</script>

<style scoped lang="less">
.el-menu{
  border:0;
  .el-submenu,.el-menu-item{
      text-align: left;
  }
}
.menu-bar-container {
  .logo {
    height: 60px;
    background: #00284d;
    position: relative;
    img {
      position: absolute;
      height: 40px;
      top: 10px;
      left: 10px;
    }
  }
}
</style>