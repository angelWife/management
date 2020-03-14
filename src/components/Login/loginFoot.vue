<template>
  <div id="loginFoot">
    <el-row>
      <el-col :offset="6" :span="12" class="item text_center fs13">
        <router-link to="help" class="c999">帮助</router-link>
        <router-link to="privacy" class="c999">隐私</router-link>
        <router-link to="clause" class="c999">条款</router-link>
      </el-col>
      <el-col :offset="6" :span="12" class="item text_center fs13 c999">
        copyright© 中国保险资产管理业协会京ICP备14059205号
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "LoginFoot"
};
</script>
<style lang="less" scoped>
#loginFoot {
  padding: 20px;
  a {
    margin: 0 20px;
  }
  .item {
    padding: 5px;
  }
}
</style>
