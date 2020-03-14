<template>
  <div id="setPassword">
    <logoPic></logoPic>
    <div class="main">
      <div class="title">重置密码</div>
      <div class="msg item">密码要求长度大于8位，由英文+数字组合以保障安全</div>
      <div class="item">
        <el-input
          type="password"
          placeholder="新密码"
          v-model="pwd1"
          prefix-icon="el-icon-lock"
        ></el-input>
      </div>
      <div class="item">
        <el-input
          type="password"
          placeholder="再次输入"
          v-model="pwd2"
          prefix-icon="el-icon-lock"
        ></el-input>
      </div>
      <div class="btnBox">
        <el-button type="primary" @click="sendPass">提交</el-button>
      </div>
    </div>
    <loginFoot></loginFoot>
  </div>
</template>
<script>
import logoPic from "@/components/Login/logoPic";
import loginFoot from "@/components/Login/loginFoot";
export default {
  name: "SetPassword",
  components: {
    logoPic,
    loginFoot
  },
  data() {
    return {
      pwd1: "",
      pwd2: ""
    };
  },
  created() {},
  methods: {
    sendPass() {
      this.$router.push({
        path: "/login/success",
        query: { type: "pass" }
      });
    }
  }
};
</script>

<style lang="less">
#setPassword {
  padding-top: 100px;
  .main {
    width: 380px;
    margin: 0 auto 100px;
    .title {
      text-align: center;
      margin: 10px 0 30px;
    }
    .item {
      margin-bottom: 20px;
    }
    .msg {
      font-size: 14px;
      color: #999;
    }
  }
  .btnBox {
    padding-bottom: 100px;
    button {
      width: 100%;
    }
  }
}
</style>
