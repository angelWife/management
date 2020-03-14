<template>
  <div id="index">
    <el-container class="flex">
      <el-aside :width="asideWidth" class="menu-bar-container">
        <div
          class="logo"
          :class="collapse ? 'menu-bar-collapse-width' : 'menu-bar-width'"
          @click="$router.push('/myHome/index')"
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
          @open="handleOpen"
          @close="handleClose"
          @select="handleselect"
        >
          <menu-tree v-for="item in menuList" :key="item.id" :menu="item"></menu-tree>
        </el-menu>
      </el-aside>
      <!-- :style="'padding-left:'+asideWidth+';'" -->
      <el-container class="container-main flex-1">
        <el-header>
          <el-row>
            <el-col :span="6">
              <div class="menuControl">
                <span
                  class="icon"
                  :class="collapse?'el-icon-s-unfold':'el-icon-s-fold'"
                  @click="onCollapse"
                ></span>
                <span class="text">{{headTitle}}</span>
              </div>
            </el-col>
            <el-col :span="18" class="topMenu">
              <span class="name">admin</span>
              <a class="text" @click="resetPass()">重置密码</a>
              <a class="text" @click="Login()">注销</a>
            </el-col>
          </el-row>
        </el-header>
        <el-main class="iframe-container">
          <keep-alive>
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </keep-alive>
          <div class="rightBar">
            <span>业务咨询</span>
            <div class="msg">
              <div class="title">业务咨询</div>
            </div>
          </div>
        </el-main>
      </el-container>
      <resetPass/>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MenuTree from "@/components/MenuTree/menuTree";
import resetPass from './Dialog/resetPass'
export default {
  name: "Home",
  components: {
    MenuTree, resetPass
  },
  data() {
    return {
      asideWidth: "250px",
      collapse: false,
      headTitle:"",
      menuList: [
        {
          id: 1,
          name: "首页",
          icon: "el-icon-location",
          path: "/myHome/index",
          hasChild: false
        },
        {
          id: Math.random()*99999,
          name: "审批中心",
          icon: "el-icon-c-scale-to-original",
          children:[{
            id: Math.random()*99999,
            name: "审批管理",
            path: "/approval/manager",
          },{
            id: Math.random()*99999,
            name: "年费核对管理",
            path: "/approval/yearFee",
          },]
        },
        {
          id: Math.random()*99999,
          name: "会员服务",
          icon: "el-icon-c-scale-to-original",
          children:[{
            id: Math.random()*99999,
            name: "会员信息",
            path: "/member/memberInfo",
          },{
            id: Math.random()*99999,
            name: "证书下载",
            path: "/member/paperDown",
          },{
            id: Math.random()*99999,
            name: "年审确认",
            path: "/member/annualConfirm",
          },]
        }
      ]
    };
  },
  watch: {
    $route: "handleRoute"
  },
  mounted() {
    window.addEventListener('load', () => { // 滚动事件变为 scroll
          this.$router.replace('/myHome/index')  
    })
  },
  computed: {
    // ...mapState({
    //   headTitle: state=>state.app.headTitle,
    // }),
  },
  created() {
    // this.handleRoute(this.$route);
    this.headTitle = this.$store.state.app.headTitle
    console.log(this.$store.state);
    // this.$router.push({path: '/login/index'})
    
  /*  联调接口判断会员角色
  if (!(this.$store.state.user.role.name == 'nonRecoMember') ) {
      this.menuList.map((v)=>{
        if (v.name == '首页'){
          v['children'] = [{
            id: Math.random()*99999,
            name: "会员信息",
            path: "/users/userMsg",
          }]
        }
      })
    } */
  },
  methods: {
    // 重置密码
    resetPass(){
      this.$store.commit('showResetDialog')
    },
    Login(){
      this.$router.push('/login/index')
    },
    onCollapse() {
      this.collapse = !this.collapse;
      if (this.collapse) {
        this.asideWidth = "65px";
      } else {
        this.asideWidth = "250px";
      }
    },
    handleOpen(e) {
      console.log("handleopen");
    },
    handleClose() {
      console.log("handleclose");
    },
    handleselect(e) {
      console.log(e);
    },
    handleRoute(menu) {
      this.headTitle = this.$store.state.app.headTitle = menu.name
     console.log(menu)
    }
  }
};
</script>

<style lang="less">
#index {
  height: 100vh;
  width: 100vw;
  .menu-bar-container {
    .el-menu {
      border: 0 !important;
      // background-color: #2968a30c;
      .el-submenu {
        position: relative;
        .el-menu-item {
          width: 100%;
        }
      }
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
  }
  .el-container {
    height: 100%;
    background: #f0f2f5;
  }
  .el-aside {
    background: #001529;
    color: #fff;
  }
  .el-header {
    background: #fff;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 10;
    .menuControl {
      height: 60px;
      line-height: 60px;
      span {
        display: inline-block;
      }
      .icon {
        font-size: 22px;
        position: relative;
        top: 2px;
        cursor: pointer;
        &:hover {
          color: #409eff;
        }
      }
      .text {
        margin-left: 20px;
        font-size: 16px;
      }
    }
    .topMenu {
      height: 60px;
      line-height: 60px;
      text-align: right;
      a,
      span {
        display: inline-block;
        margin-right: 20px;
      }
    }
  }
  .container-main{
    width: calc(100vw - 250px);
  }
  .iframe-container {
    height: 100%;
    position: relative;
    
    .frame {
      width: 100%;
      height: 100%;
    }
    .rightBar {
      position: fixed;
      right: 10px;
      bottom: 20%;
      height: 50px;
      width: 50px;
      padding: 5px;
      text-align: center;
      background: #409eff;
      color: #fff;
      cursor: pointer;
      .msg {
        display: none;
      }
    }
  }
  .pmenu-bar-collapse-width {
    width: 65px;
  }
  .menu-bar-width {
    width: 250px;
  }
}
</style>
