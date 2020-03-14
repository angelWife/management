<template>
  <div id="logoPic">
    <div class="logo">
      <img src="@/assets/logo.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoPic",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#logoPic {
  .logo {
    text-align: center;
    padding: 50px 0;
  }
}
</style>
