<template>
  <div class="page-container">
    <component v-bind:is='comfirm'></component>
    <div class="vipMsg">
      <img src="@/assets/pic1.png"/>
    </div>
  </div>
</template>

<script>

import notConfirm from './component/notConfirm';
import applyConfirm from './component/applyConfirm';
import passConfirm from './component/passConfirm';
import failConfirm from './component/failConfirm';
import frozeAccount from './component/frozeAccount';
import retiredAcount from './component/retiredAcount';


export default { 
  data(){
    return {
       comfirm: 'notConfirm',
    }
  },
  created() {
    let type = this.$route.query.type;
    if (type === "sendConfirm") {
      this.comfirm = "applyConfirm";
    } else if (type === "sendPay") {
      this.comfirm = "passConfirm";
    } else if (type === "sendFail") {
      this.comfirm = "failConfirm";
    } else {
      this.comfirm = "notConfirm";
    };
    /* if (this.$store.state.user.role.name == 'recoMember' && this.$store.state.user.role.type == 'froze'){
      this.comfirm = "frozeAccount";
    } else if (this.$store.state.user.role.name == 'recoMember' && this.$store.state.user.role.type == 'retire') {
      this.comfirm = "retiredAcount";
    } */
    // 解决回到顶部问题 不知道是否存在bug
    this.$nextTick(()=>{
        this.$el.offsetParent.scrollTop = 0; 
    });
  },
  components: { notConfirm, applyConfirm, passConfirm, failConfirm, frozeAccount,retiredAcount},
};
</script>

<style lang="less">

.vipMsg{
  background: #fff;
  padding:20px;
  img{
    width: 100%;
  }
}
</style>