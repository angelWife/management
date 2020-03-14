<template>
    <div class="msgBox flex">
      <div class="icon el-icon-warning-outline"></div>
      <div class="flex-1 msg">
        <div class="title">协会已经收到您的申请信息，请耐心等待审批流程</div>
        <div class="btnBox">
          <ElButton type="primary" @click="checkConfirm();">查看审批进度</ElButton>
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
    checkConfirm(){
      this.$router.push({path: '/users/progressApply'})
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