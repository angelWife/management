<template>
    <div class="msgBox flex">
      <div class="icon el-icon-warning-outline"></div>
      <div class="flex-1 msg">
        <div class="title">您的账号已经冻结</div>
        <div class="text">因为某些原因，你的认定会员身份暂时被冻结，无法享有认定会员的各项服务，请查阅相关通知解决后，联系协会解除冻结</div>
        <div class="btnBox">
        </div>
      </div>
    </div>
</template>
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