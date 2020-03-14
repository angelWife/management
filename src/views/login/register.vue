<template>
  <div id="register">
    <logoPic></logoPic>
    <div class="container">
      <div class="stepBox">
        <div
          v-for="(item, ind) in stepList"
          :key="ind"
          class="item clearfix"
          :class="{ active: item.active }"
        >
          <div class="numBox clearfix">
            <span class="num">{{ ind + 1 }}</span>
            <span class="name">{{ item.name }}</span>
          </div>
          <div class="line" v-if="ind < stepList.length - 1"></div>
        </div>
      </div>
      <div class="main">
        <transition name="el-fade-in">
          <div v-show="showInd == 0" class="step1">
            <div class="msgBox flex">
              <div class="icon el-icon-warning-outline"></div>
              <div class="flex-1 msg">
                <div class="title">
                  欢迎访问中国保险资产管理业协会会员服务系统
                </div>
                <div class="text">
                  您需要先填写基本信息并完成注册流程，来获得协会面向全部注册会员的资讯，课程，活动及调研等服务；进一步申请成为协会正式认定的会员，则可获得认定会员专享服务参与资格
                </div>
              </div>
            </div>
            <div class="compList">
              <el-row>
                <el-col
                  v-for="(item, ind) in listObj"
                  :key="ind"
                  class="item"
                  :span="6"
                >
                  <li
                    v-for="(child, cind) in item"
                    :key="cind"
                    :class="[child.class, child.isChoose ? 'active' : '']"
                    @click="chooseProd(ind, cind)"
                  >
                    {{ child.text }}
                    <span
                      v-if="child.isChoose"
                      class="icon el-icon-circle-check"
                    ></span>
                  </li>
                </el-col>
              </el-row>
            </div>
            <div class="text_center btnBox">
              <el-button type="primary" @click="nextStep(1)">下一步</el-button>
            </div>
          </div>
        </transition>
        <transition name="el-fade-in">
          <div v-show="showInd == 1" class="step2">
            <div class="formBox">
              <div class="form-item flex item-center">
                <div class="mark red item-top">*</div>
                <div class="label">是否有统一社会信用代码：</div>
                <div class="input flex-1">
                  <el-select placeholder="请选择" v-model="form.select">
                    <el-option label="是" value="shanghai"></el-option>
                    <el-option label="否" value="beijing"></el-option>
                  </el-select>
                </div>
              </div>
              <div class="form-item flex item-center">
                <div class="label"></div>
                <div class="input flex-1 msg">
                  如为海外机构无法提供相关证明文件，选择否，仅在后面补充相关信息即可
                </div>
              </div>
              <div class="form-item flex item-center">
                <div class="mark red item-top">*</div>
                <div class="label">统一社会信用代码：</div>
                <div class="input flex-1">
                  <el-input
                    placeholder="请输入"
                    :disabled="true"
                    v-model="form.code"
                  ></el-input>
                </div>
              </div>
              <div class="form-item flex item-center">
                <div class="mark red item-top">*</div>
                <div class="label">机构名称：</div>
                <div class="input flex-1">
                  <el-input
                    placeholder="请输入"
                    v-model="form.codeName"
                  ></el-input>
                </div>
              </div>
              <div class="form-item flex item-center">
                <div class="mark red item-top">*</div>
                <div class="label">联系人：</div>
                <div class="input flex-1">
                  <el-input placeholder="请输入" v-model="form.name"></el-input>
                </div>
              </div>
              <div class="form-item flex item-center">
                <div class="mark red item-top">*</div>
                <div class="label">联系人手机：</div>
                <div class="input flex-1">
                  <el-input
                    placeholder="请输入"
                    v-model="form.phone"
                  ></el-input>
                </div>
              </div>
              <div class="form-item flex item-center">
                <div class="mark red item-top">*</div>
                <div class="label">联系人邮箱：</div>
                <div class="input flex-1">
                  <el-input placeholder="请输入" v-model="form.mail"></el-input>
                </div>
              </div>
              <div class="form-item flex item-center">
                <div class="mark red item-top">*</div>
                <div class="label">验证码：</div>
                <div class="input flex-1">
                  <el-input
                    placeholder="请输入"
                    v-model="form.phoneMark"
                  ></el-input>
                  <el-button
                    class="markBtn"
                    type="primary"
                    :disabled="isSend"
                    @click="sendMark"
                    >{{ btnText }}</el-button
                  >
                </div>
              </div>
            </div>
            <div class="text_center btnBox">
              <el-button type="primary" @click="prevStep(0)">上一步</el-button>
              <el-button type="primary" @click="submitForm">提交</el-button>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="mymodal.modalShow"
      width="30%"
      center
    >
      <span>{{ mymodal.text }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="mymodal.modalShow = false">取 消</el-button>
        <el-button type="primary" @click="mymodal.modalShow = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <loginFoot></loginFoot>
  </div>
</template>
<script>
import logoPic from "@/components/Login/logoPic";
import loginFoot from "@/components/Login/loginFoot";
export default {
  name: "Register",
  components: {
    logoPic,
    loginFoot
  },
  data() {
    return {
      showInd: 0,
      form: {
        phone: "",
        phoneMark: "",
        mail: "",
        name: "",
        select: "",
        code: "",
        codeName: ""
      },
      mymodal: {
        text: "",
        modalShow: false
      },
      isSend: false,
      btnText: "获取验证码",
      stepList: [
        {
          name: "机构类型",
          active: true
        },
        {
          name: "基本信息",
          active: false
        },
        {
          name: "注册成功",
          active: false
        }
      ],
      listObj: [
        [
          { text: "保险资产管理公司", class: "y_bg", isChoose: false },
          { text: "专业型保险资产管理机构", class: "y_bg", isChoose: false },
          { text: "保险集团", class: "y_bg", isChoose: false },
          { text: "人寿保险", class: "y_bg", isChoose: false },
          { text: "财产保险", class: "y_bg", isChoose: false },
          { text: "再保险", class: "y_bg", isChoose: false },
          { text: "托管行", class: "y_bg", isChoose: false },
          {
            text: "受托管理保险资金的基金公司及其子公司",
            class: "y_bg",
            isChoose: false
          },
          {
            text: "受托管理保险资金的证券公司及其子公司",
            class: "y_bg",
            isChoose: false
          }
        ],
        [
          { text: "媒体", class: "b_bg", isChoose: false },
          { text: "销售机构", class: "b_bg", isChoose: false },
          { text: "一般企业", class: "b_bg", isChoose: false },
          { text: "信托公司", class: "b_bg", isChoose: false },
          { text: "科技企业", class: "b_bg", isChoose: false },
          { text: "证券公司及其子公司", class: "b_bg", isChoose: false },
          { text: "融资租赁公司", class: "b_bg", isChoose: false },
          { text: "咨询机构", class: "b_bg", isChoose: false },
          { text: "私募基金公司", class: "b_bg", isChoose: false }
        ],
        [
          { text: "律师事务所", class: "b_bg", isChoose: false },
          { text: "会计师事务所", class: "b_bg", isChoose: false },
          { text: "公募基金公司及其子公司", class: "b_bg", isChoose: false },
          { text: "期货公司及其子公司", class: "b_bg", isChoose: false },
          { text: "其他营利性机构", class: "b_bg", isChoose: false },
          { text: "资信评级机构", class: "b_bg", isChoose: false },
          { text: "金融资产管理公司", class: "b_bg", isChoose: false },
          { text: "商业银行", class: "b_bg", isChoose: false }
        ],
        [
          { text: "保障基金", class: "y_bg", isChoose: false },
          { text: "交易所", class: "y_bg", isChoose: false },
          { text: "登记结算机构", class: "y_bg", isChoose: false },
          { text: "境外机构", class: "b_bg", isChoose: false },
          { text: "代表处", class: "b_bg", isChoose: false },
          { text: "其他非营利性机构", class: "b_bg", isChoose: false }
        ]
      ]
    };
  },
  created() {},
  methods: {
    nextStep(ind) {
      this.showInd = ind;
      this.stepList[ind].active = true;
    },
    prevStep(ind) {
      this.showInd = ind;
      this.stepList[ind + 1].active = false;
    },
    chooseProd(ind1, ind2) {
      this.listObj.filter((v, i) => {
        if (ind1 == i) {
          v.filter((m, j) => {
            if (j == ind2) {
              m.isChoose = !m.isChoose;
            } else {
              m.isChoose = false;
            }
          });
        }
      });
    },
    sendMark() {
      if (this.isSend) {
        return false;
      }
      if (this.form.phone == "") {
        this.mymodal.text = "请输入手机号码";
        this.mymodal.modalShow = true;
        return false;
      } else {
        let reg = /^1[345789]\d{9}$/;
        if (!reg.test(this.form.phone)) {
          this.mymodal.text = "请输入正确的手机号码";
          this.mymodal.modalShow = true;
          return false;
        }
      }
      let num = 60;
      let self = this;
      let timer = null;
      // this.getMark();
      function downCount() {
        if (num > 0) {
          num--;
          self.isSend = true;
          self.btnText = num + "s后重新发送";
        } else {
          self.isSend = false;
          clearInterval(timer);
          self.btnText = "获取验证码";
        }
      }
      setInterval(() => {
        timer = downCount();
      }, 1000);
    },
    submitForm() {
      this.$router.push({
        path: "/login/success",
        query: { type: "register" }
      });
    }
  }
};
</script>

<style lang="less">
#register {
  .container {
    width: 1124px;
    margin: 0 auto;
  }
  .stepBox {
    line-height: 30px;
    text-align: center;
    .item {
      display: inline-block;

      .line {
        float: left;
        width: 105px;
        margin: 0 15px;
        height: 30px;
        line-height: 30px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 15px;
          border-bottom: 1px solid #e5e5e5;
          top: 0;
          left: 0;
        }
      }
      .numBox {
        float: left;
        span {
          float: left;
        }
        .num {
          width: 30px;
          height: 30px;
          line-height: 28px;
          border: 1px solid #d5d5d5;
          border-radius: 100%;
          font-size: 16px;
          text-align: center;
          margin-right: 10px;
          color: #999;
        }
        .name {
          color: #999;
        }
      }
      &.active {
        font-weight: 600;
        .num {
          background: #409eff;
          border-color: #409eff;
          color: #fff;
        }
        .name {
          color: #333;
        }
      }
    }
  }
  .main {
    .step1 {
      .msgBox {
        margin: 30px 0 20px;
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
      }
      .compList {
        margin-bottom: 30px;
        .item {
          height: 288px;
          box-shadow: 0 0 2px rgba(199, 148, 148, 0.4);
          background: #e4ecf3;
          overflow: hidden;
          border: 1px solid #e6e6e6;
          li {
            height: 32px;
            padding: 0 10px;
            font-size: 13px;
            line-height: 32px;
            position: relative;
            list-style: none;
            border-bottom: 1px solid #f9f9f9;
            color: #666;
            cursor: pointer;
            &:last-child {
              border: 0;
            }
            .icon {
              position: absolute;
              right: 10px;
              font-size: 20px;
              top: 6px;
            }
            &.y_bg {
              background: #f1e6d9;
            }
            &.b_bg {
              background: #dbecf5;
            }
            &.active {
              background: #fff !important;
              .icon {
                color: #67c23a;
              }
            }
          }
        }
      }
    }
    .formBox {
      width: 400px;
      margin: 30px auto;
      .form-item {
        margin-bottom: 20px;
        position: relative;
        .mark {
          position: absolute;
          left: -10px;
          top: 15px;
        }
        .label {
          width: 100px;
          margin-right: 20px;
          font-size: 13px;
        }
        .input {
          width: 280px;
          position: relative;
          > * {
            width: 100%;
          }
          &.msg {
            white-space: nowrap;
            margin-top: -10px;
            color: #999;
            font-size: 13px;
          }
          .markBtn {
            position: absolute;
            right: 0;
            top: 0;
            min-width: 33.33%;
            max-width: 40%;
            padding: 12px 0;
          }
        }
      }
    }
  }
  .btnBox {
    button {
      width: 150px;
      margin: 0 20px;
    }
  }
}
</style>
