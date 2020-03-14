<template>
    <div class="msgBox flex">
      <div class="icon el-icon-warning-outline"></div>
      <div class="flex-1 msg">
        <div class="title">您已经退会</div>
        <div class="text">协会会为退会成员保留全部会员资料，但无法参与各类协会面向认定会员的服务，如有需要请重新申请会员认定流程</div>
        <div class="btnBox">
          <ElButton type="primary" @click="applyVip();">前往申请</ElButton>
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