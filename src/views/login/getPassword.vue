<template>
  <div id="getPassword">
    <logoPic></logoPic>
    <div class="main">
      <el-row>
        <el-col :span="12" class="item">
          <div class="title">邮箱找回密码</div>
          <div class="msg">
            输入注册时填写的默认联系人邮箱，系统将发送一封验证邮件，点击邮件内链接即可对账号密码进行重置
          </div>
          <div class="input">
            <el-input
              placeholder="邮箱"
              v-model="name"
              prefix-icon="el-icon-message"
            ></el-input>
          </div>
          <div class="btnBox">
            <el-button type="primary" @click="sendMail">提交</el-button>
          </div>
        </el-col>
        <el-col :span="12" class="item">
          <div class="title">其他密码找回</div>
          <div class="msg">
            如果您的邮箱因为某些原因无法接收重置密码邮件，请扫描以下二维码联系协会工作人员微信协助重置
          </div>
          <div class="mark">
            <img src="" alt="" />
          </div>
        </el-col>
      </el-row>
    </div>
    <loginFoot></loginFoot>
  </div>
</template>
<script>
import logoPic from "@/components/Login/logoPic";
import loginFoot from "@/components/Login/loginFoot";
export default {
  name: "GetPassword",
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
    sendMail() {
      this.$router.push({
        path: "/login/success",
        query: { type: "sendMail" }
      });
    }
  }
};
</script>

<style lang="less">
#getPassword {
  padding-top: 100px;
  .main {
    width: 880px;
    margin: 0 auto 100px;
    .item {
      width: 50%;
      padding: 0 40px;
      &:first-child {
        border-right: 1px solid #d5d5d5;
      }
      .title {
        text-align: center;
        margin: 10px 0 30px;
      }
      .msg {
        font-size: 14px;
        color: #999;
        margin-bottom: 20px;
      }
      .input {
        margin-bottom: 20px;
      }
      .btnBox {
        padding-bottom: 10px;
        button {
          width: 100%;
        }
      }
    }
  }
}
</style>
