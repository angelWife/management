<template>
  <div class="container comModal">
    <div style="height: 400px;">
      <el-steps direction="vertical" :active="2">
        <el-step title="申请提交" description="2017-12-07 15:14:14 已完成"></el-step>
        <el-step title="审批中" description="2017-12-07 15:14:14 已完成"></el-step>
        <el-step title="待缴费"></el-step>
        <el-step title="缴费确认"></el-step>
        <el-step title="申请通过"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {}
};
</script>

<style lang="less">
.container{
  padding:20px 40px;
}
</style>