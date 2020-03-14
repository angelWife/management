<template>
    <div class="msgBox flex">
      <div class="icon el-icon-warning-outline"></div>
      <div class="flex-1 msg">
        <div class="title">您的账号认定未通过</div>
        <div class="text">因为某些原因你的账号确认未通过，请仔细阅读协会反馈的邮件内容，根据要求对相关资料进行补充，然后重新申请</div>
        <div class="btnBox">
          <ElButton type="primary" @click="applyVip();">重新申请</ElButton>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  components: {},
  watch: {
    $route: "handleRoute"
  },
  methods: {
    applyVip(){
      this.$router.push({path: '/users/apply'})
    },
    handleRoute(menu) {
     console.log(menu)
    }
  }
};
</script>

<style lang="less" scoped>
.msgBox {
  margin: 0 0 20px;
  padding: 10px 20px;
  border: 1px solid rgba(255, 229, 143, 1);
  background: rgba(255, 251, 230, 1);
  color: #666;
  .icon {
    font-size: 24px;
    color: #d98719;
    margin-right: 20px;
    margin-top: 10px;
  }
  .title {
    font-size: 16px;
    font-weight: 600;
    padding: 10px 0;
  }
  .text {
    line-height: 25px;
    font-size: 14px;
    color: #999;
  }
  .btnBox {
    margin: 20px 0;
    button {
      width: 150px;
    }
  }
}
</style>