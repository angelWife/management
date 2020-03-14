<template>
  <div class="page-container">
    <div class="msgBox flex">
      <div class="icon el-icon-warning-outline"></div>
      <div class="flex-1 msg">
        <div class="title">协会已经收到您的申请信息，请耐心等待审批流程</div>
        <div class="btnBox">
          <ElButton type="primary" @click="checkApply();">查看审批进度</ElButton>
        </div>
      </div>
    </div>
    <div class="vipMsg">
      <img src="@/assets/pic1.png"/>
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
    checkApply(){
    },

  }
};
</script>