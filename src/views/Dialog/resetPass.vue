<template>
    <el-dialog title="重置密码" :visible.sync="resetDialog" width="500px">
    <div class="tip">密码要求长度大于8位，由英文+数字组合以保障安全</div>
    <el-form :model="form">
        <el-form-item label="新密码:" :label-width='formLabelWidth'>
        <el-input v-model="form.newPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="再次输入:" :label-width="formLabelWidth">
        <el-input v-model="form.againPass" autocomplete="off"></el-input>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="closeReset()">取 消</el-button>
        <el-button type="primary" @click="closeReset()">提交</el-button>
    </div>
    </el-dialog>
</template>

<script>
import {mapState} from 'vuex';
  export default {
    data() {
      return {
        form: {
          newPass: '',
          againPass: '',
        },
        formLabelWidth: '80px',
        resetDialo:true
      };
    },
    computed:{
        ...mapState({
            resetDialog:  state => state.dialog.resetDialog
        }),
    },
    methods:{
        closeReset(){
            this.$store.commit('hideResetDialog')
        }
    }
  };
</script>

<style lang="less">
.tip{
   width: 100%;
   font-size: 14px;
   color: #777;
   padding-bottom: 20px;
   margin-top: -20px;
}
.el-dialog__body{
    padding-bottom: 5px;
}
.el-dialog__header{
    border-bottom: 1px solid #999;
}
.el-form-item__label{
    text-align: left;
}
</style>
