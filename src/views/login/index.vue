<template>
  <div id="login">
    <logoPic></logoPic>
    <div class="loginMain">
      <div class="item title text_center">登录</div>
      <div class="item">
        <el-input
          placeholder="请输入会员代码/邮箱"
          v-model="name"
          prefix-icon="el-icon-user"
        ></el-input>
      </div>
      <div class="item">
        <el-input
          placeholder="请输入密码"
          v-model="name"
          prefix-icon="el-icon-lock"
        ></el-input>
      </div>
      <div class="item text_right fs13">
        <router-link to="getPassword" class="link" @click="getPwd"
          >忘记密码</router-link
        >
      </div>
      <div class="item">
        <el-button type="primary" @click="confirmLogin">登录</el-button>
      </div>
      <div class="item">
        <el-button type="warning" @click="register">注册</el-button>
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
    confirmLogin() {
      this.$router.push({ path: "/" });
    },
    register() {
      this.$router.push({ path: "/login/register" });
    },
    getPwd() {
      this.$router.push({ path: "/login/getPassword" });
    }
  }
};
</script>

<style lang="less">
#login {
  min-height: 100vh;
  padding-top: 50px;
  background-color: #F1F2F6;
  .loginMain {
    width: 370px;
    margin: 0 auto;
    .item {
      margin-bottom: 20px;
      button {
        width: 100%;
      }
    }
  }
}
</style>
