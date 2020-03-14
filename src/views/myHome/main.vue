<template>
  <div class="iframe-container" id="main-container" :class="$store.state.app.collapse?'position-collapse-left':'position-left'">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "",
      loading: null
    };
  },
  computed: {
    mainTabs: {
      get () { return this.$store.state.tab.mainTabs },
      set (val) { this.$store.commit('updateMainTabs', val) }
    },
    mainTabsActiveName: {
      get () { return this.$store.state.tab.mainTabsActiveName },
      set (val) { this.$store.commit('updateMainTabsActiveName', val) }
    }
  },
  methods: {
    // tabs, 选中tab
    selectedTabHandle (tab) {
      tab = this.mainTabs.filter(item => item.name === tab.name)
      if (tab.length >= 1) {
        this.$router.push({ name: tab[0].name })
      }
    },
    // tabs, 删除tab
    removeTabHandle (tabName) {
      this.mainTabs = this.mainTabs.filter(item => item.name !== tabName)
      if (this.mainTabs.length >= 1) {
        // 当前选中tab被删除
        if (tabName === this.mainTabsActiveName) {
          this.$router.push({ name: this.mainTabs[this.mainTabs.length - 1].name }, () => {
            this.mainTabsActiveName = this.$route.name
          })
        }
      } else {
        this.$router.push("/")
      }
    },
    // tabs, 关闭当前
    tabsCloseCurrentHandle () {
      this.removeTabHandle(this.mainTabsActiveName)
    },
    // tabs, 关闭其它
    tabsCloseOtherHandle () {
      this.mainTabs = this.mainTabs.filter(item => item.name === this.mainTabsActiveName)
    },
    // tabs, 关闭全部
    tabsCloseAllHandle () {
      this.mainTabs = []
      this.$router.push("/")
    },
    // tabs, 刷新当前
    tabsRefreshCurrentHandle () {
      var tempTabName = this.mainTabsActiveName
      this.removeTabHandle(tempTabName)
      this.$nextTick(() => {
        this.$router.push({ name: tempTabName })
      })
    }
  },
};
</script>

<style lang="less">
.iframe-container {
  width: 100%;
    height: 100%;
    position:relative;
  .frame {
    width: 100%;
    height: 100%;
  }
  .rightBar{
    position: fixed;
    right:10px;
    bottom:20%;
    height:50px;
    width: 50px;
    padding:5px;
    text-align: center;
    background: #409eff;
    color:#fff;
    cursor: pointer;
    .msg{
      display:none;
    }
  }
}
</style>
