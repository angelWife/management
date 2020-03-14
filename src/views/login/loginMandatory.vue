<template>
  <div id="login">
    <logoPic></logoPic>
    <div class="loginMain">
      <div class="item title text_center">强制重置密码</div>
      <div class="item explain">因为会员系统更新，我们需要对会员密码进行强制重置，密码要求长度大于8位，由英文+数字组合以保障安全，谢谢配合</div>
      <div class="item">
        <el-input
          placeholder="新密码"
          v-model="name"
          prefix-icon="el-icon-tickets"
        ></el-input>
      </div>
      <div class="item">
        <el-input
          placeholder="旧密码"
          v-model="name"
          prefix-icon="el-icon-document"
        ></el-input>
      </div>
      <div class="item">
        <el-button type="primary" @click="subLogin">提交</el-button>
      </div>
    </div>
    <loginFoot></loginFoot>
  </div>
</template>

<script>
import logoPic from "@/components/Login/logoPic";
import loginFoot from "@/components/Login/loginFoot";
export default {
  name: "Login",
  components: {
    logoPic,
    loginFoot
  },
  data() {
    return {
      name: "",
      passd: ""
    };
  },
  created() {},
  methods: {
    subLogin() {
      this.$router.push({ path: "/" });
    },
  }
};
</script>

<style lang="less" scoped>
#login {
  min-height: 100vh;
  padding-top: 50px;
  background-color: #F1F2F6;
  .loginMain {
    width: 370px;
    margin: 0 auto;
    .explain{
        margin: 20px auto;
        color: #858688;
        width: 400px;
    }
    .item {
      margin-bottom: 20px;
      button {
        width: 100%;
      }
    }
  }
}
</style>
