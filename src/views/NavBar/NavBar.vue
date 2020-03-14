<template>
  <div class="menu-bar-container">
    <!-- logo -->
    <div
      class="logo"
      :class="collapse ? 'menu-bar-collapse-width' : 'menu-bar-width'"
      @click="$router.push('/')"
    >
      <img src="@/assets/toplogo.png" />
    </div>
    <!-- 导航菜单 -->
    <el-menu
      ref="navmenu"
      default-active="1"
      :class="collapse ? 'menu-bar-collapse-width' : 'menu-bar-width'"
      :collapse="collapse"
      :collapse-transition="false"
      background-color="#001529"
      text-color="#fff"
      router="false"
      @open="handleOpen"
      @close="handleClose"
      @select="handleselect"
    >
    <!-- <el-menu-item>
    <template slot="title">
      <i class="el-icon-s-home" ></i>
      <span slot="title">首页</span>
    </template>
  </el-menu-item> -->
      <!-- 导航菜单树组件，动态加载菜单 -->
      <menu-tree
        v-for="item in menuList"
        :key="item.id"
        :menu="item"
      ></menu-tree>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MenuTree from "@/components/MenuTree";
export default {
  components: {
    MenuTree
  },
  data() {
    return {
      menuList: [
        {
          id: 1,
          name: "首页",
          icon: "el-icon-location",
          url: null,
          hasChild: false
        },
        {
          id: 2,
          name: "会员信息",
          icon: "el-icon-location",
          hasChild: true,
          url:null,
          children: [
            {
              id: 21,
              name: "会员设置",
              icon: "el-icon-location",
              url: "/Sys/log"
            },
            {
              id: 22,
              name: "会员列表",
              icon: "el-icon-location",
              url: "/Sys/User"
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState({
      appName: state => state.app.appName,
      themeColor: state => state.app.themeColor,
      collapse: state => state.app.collapse,
    //   navTree: state => state.menu.navTree
    }),
    mainTabs: {
      get() {
        return this.$store.state.tab.mainTabs;
      },
      set(val) {
        this.$store.commit("updateMainTabs", val);
      }
    },
    mainTabsActiveName: {
      get() {
        return this.$store.state.tab.mainTabsActiveName;
      },
      set(val) {
        this.$store.commit("updateMainTabsActiveName", val);
      }
    }
  },
  watch: {
    $route: "handleRoute"
  },
  created() {
    this.handleRoute(this.$route);
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
      // tab标签页选中, 如果不存在则先添加
      var tab = this.mainTabs.filter(item => item.name === route.name)[0];
      if (!tab) {
        tab = {
          name: route.name,
          title: route.name,
          icon: route.meta.icon
        };
        this.mainTabs = this.mainTabs.concat(tab);
      }
      this.mainTabsActiveName = tab.name;
      // 切换标签页时同步更新高亮菜单
      if (this.$refs.navmenu != null) {
        this.$refs.navmenu.activeIndex = "" + route.meta.index;
        this.$refs.navmenu.initOpenedMenu();
      }
    }
  }
};
</script>

<style scoped lang="scss">
.menu-bar-container {
  position: fixed;
  top: 0px;
  left: 0;
  bottom: 0;
  z-index: 1020;
  .el-menu {
    position: absolute;
    top: 60px;
    bottom: 0px;
    text-align: left;
    border: 0 !important;
    // background-color: #2968a30c;
  }
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
  .menu-bar-width {
    width: 250px;
  }
  .menu-bar-collapse-width {
    width: 65px;
  }
}
</style>
