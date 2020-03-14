<template>
  <div id="comHeader" :class="$store.state.app.collapse?'position-collapse-left':'position-left'">
    <el-row>
      <el-col :span="6">
        <div class="menuControl">
          <span class="icon el-icon-s-fold" @click="onCollapse"></span>
          <span class="text">首页</span>
        </div>
      </el-col>
      <el-col :span="18" class="topMenu">
        <span class="name">admin</span>
        <a class="text">重置密码</a>
        <a class="text">注销</a>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  methods: {
    // 折叠导航栏
    onCollapse: function() {
      this.$store.commit('onCollapse')
    },
  },
  mounted() {
    console.log($store.state.app.collapse)
  },
  computed:{
    ...mapState({
      collapse: state=>state.app.collapse
    })
  }
}
</script>
<style lang="less">
.el-header{
  background: #fff;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1);
}
#comHeader{
  position:relative;
  .menuControl{
    height:60px;
    line-height: 60px;
    span{
display: inline-block;
    }
    .icon{
      font-size:22px;
      position: relative;
      top:2px;
      cursor: pointer;
      &:hover{
        color:#409eff;
      }
    }
    .text{
      margin-left: 20px;
      font-size:16px;
    }
  }
  .topMenu{
    height:60px;
    line-height: 60px;
    text-align: right;
    a,span{
      display: inline-block;
      margin-right:20px;
    }
  }
}
.position-left {
  left: 250px;
}
.position-collapse-left {
  left: 65px;
}
</style>