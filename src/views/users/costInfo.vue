<template>
  <div class="container comModal">
    <div class="title">缴费信息</div>
    <el-form>
      <el-row>
        <el-col :span="8">
          <div class="flex item">
            <div class="name">会费金额：</div>
            <div class="msg">135000(元)</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="flex item">
            <div class="name">周期：</div>
            <div class="msg">2019-09-26至2019-12-31</div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="flex item">
            <div class="name">缴费通知书：</div>
            <div class="msg">
              <embed src="../../../static/pic1.svg" type="image/svg+xml" />
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="flex item">
            <div class="name">缴费凭证：</div>
            <div class="msg">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <div class="c999 m-t-10">请根据缴费通知书内的转账信息完成转账后上传银行转账凭据用于审批，支持JPG/PNG/PDF格式</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="flex item">
            <div class="name">发票收件人：</div>
            <div class="msg">
              <el-input></el-input>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="flex item">
            <div class="name">收件人手机：</div>
            <div class="msg">
              <el-input></el-input>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="flex item">
            <div class="name">收件地址：</div>
            <div class="msg">
              <el-input type="textarea"></el-input>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <div class="footMsg">
      <div class="c999 f_blod">说明</div>
      <div class="c999 f_blod">会费金额</div>
      <div class="text c999">会费金额综合会员单位的各方面情况计算得出，入会会费周期为会员认定申请日起至当年最后一天</div>
      <div class="c999 f_blod">缴费凭证</div>
      <div class="text c999">使用线下转账完成交费后，请上传转账凭证，经由工作人员确认后进入到流程下一步</div>
      <div class="c999 f_blod">社会团体会费票据</div>
      <div class="text c999">
        根据财务票据管理办法，会费缴纳将使用社会团体会费票据作为发票报销凭证，该票据将在缴费确认后由工作人员专门寄出。
        <a class="text" @click="showBigPic()">发票样式参考</a>
      </div>
    </div>
    <div class="footBtn text_right">
      <el-button type="">保存</el-button>
      <el-button type="primary">提交</el-button>
    </div>
    <transition name="el-fade-in-linear">
    <div class="picModal" v-if="showDemoPic">
      <div class="imgBox">
        <img src="../../../static/pic2.png" alt />
        <span class="close el-icon-circle-close" @click="closeBigPic()"></span>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imageUrl: "",
      showDemoPic: false
    };
  },
  methods: {
    showBigPic() {
      this.showDemoPic = true;
    },
    closeBigPic(){
      this.showDemoPic = false;
    }
  }
};
</script>

<style lang="less">
.title {
  padding: 0 0 20px;
  font-size: 18px;
  color: #333;
}
.item {
  padding: 10px 0;
  line-height: 40px;
  .name {
    width: 120px;
  }
  .el-textarea,
  .el-input {
    width: 300px;
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
.footMsg {
  margin-top: 20px;
  padding: 20px 0;
  border-top: 1px solid #d6d6d6;
  line-height: 30px;
}
.picModal {
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.4);
  .imgBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .close{
      position:absolute;
      top:-20px;
      right:-20px;
      font-size:24px;
      color:#409eff;
      cursor: pointer;
    }
    img {
      max-width: 100%;
      max-height: 90vh;
    }
  }
}
.footBtn{
  padding:20px;
}
</style>