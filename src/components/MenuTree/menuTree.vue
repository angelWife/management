<template>
  <el-submenu v-if="menu.children && menu.children.length >= 1" :index="'' + menu.id">
    <template slot="title">
      <i :class="menu.icon" ></i>
      <span slot="title">{{menu.name}}</span>
    </template>
    <router-link v-for="item in menu.children" :key="item.id" :to="item.path">
        <el-menu-item :index="'' + item.id">{{item.name}}</el-menu-item>
    </router-link>
  </el-submenu>
  <router-link :to="menu.path" v-else>
    <el-menu-item :index="'' + menu.id">
      <i :class="menu.icon"></i>
      <span slot="title">{{menu.name}}</span>
    </el-menu-item>
  </router-link>
  
</template>

<script>
export default {
  name: 'myTree',
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  methods: {
    // handleRoute (menu) {
    //   console.log(menu)
    //   // 如果是嵌套页面，转换成iframe的path
    //   let path = getIFramePath(menu.url)
    //   if(!path) {
    //     path = menu.url
    //   }
    //   // 通过菜单URL跳转至指定路由
    //   this.$router.push("/" + path)
    // }
  }
}
</script>

<style scoped lang="less">
// .el-submenu, .el-menu-item {
//   background-color: #3c4b5a44;
// }
</style>