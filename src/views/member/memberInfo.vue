<template>
  <div class="appyVip comModal">
    <div class="flex">
      <div class="formMenu">
        <div class="menuBox">
          <div
            v-for="(item,ind) in leftMenu"
            :key="ind"
            class="item"
            :class="item.active?'active':''"
            @click="chooseMenu(ind)"
          >
            <a :href="item.id">{{item.name}}</a>
          </div>
        </div>
      </div>
      <div class="flex-1 formModal">
        <div class="formBox" id="basicInfo">
          <div class="title">
            <span class="text">会员基本信息</span>
          </div>
          <div class="formMain">
            <el-form
              ref="ruleForm"
              label-width="150px"
              label="left"
            >
              <el-row class="m-t-20">
                <el-col :span="10">
                  <el-form-item label="会员类型：">
                     特别机构
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="会员代号：">
                     L00000296
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row class="m-t-20">
                <el-col :span="10">
                  <el-form-item label="会员状态：">
                     已认定
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="会员有效期：">
                        2019-11-11至2023-11-11
                    </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
        <div class="formBox" id="applyBook">
          <div class="title">
            <span class="text">入会申请书</span>
          </div>
          <div class="formMain">
            <el-form
              label-width="150px"
              label="left"
            >
              <el-form-item label="入会申请书.doc" class="m-t-20">
                <el-upload
                  class="upload-box float-left"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                </el-upload>
                <div class="float-left blue m-l-20 cur-pointer">下载</div>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="formBox" id="baseInfo">
          <div class="title">
            <span class="text">公司基本信息</span>
          </div>
          <div class="formMain">
            <el-form
              ref="ruleForm"
              label-width="140px"
              label="left"
            >
              <el-row class="m-t-20">
                <el-col :span="10">
                  <el-form-item label="机构类型：">
                    保险公司
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="统一社会信用代码：">
                        914403006820323321
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="名称：">
                    深圳市亲几餐饮有限公司
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="英文名称：">
                    <el-input v-model="ruleForm.name" placeholder="请输入英文名称"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="公司类型：">
                    <el-select v-model="ruleForm.region" placeholder="请选择公司类型">
                      <el-option label="有限责任公司" value="yes"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="成立日期：" prop="data1">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="ruleForm.date1"
                      style="width: 100%;"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="是否上市：">
                    <el-select v-model="ruleForm.region" placeholder="请选择">
                      <el-option label="是" value="yes"></el-option>
                      <el-option label="否" value="no"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="上市地：">
                    <el-input v-model="ruleForm.name" placeholder="请输入上市地址"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="18">
                  <el-form-item label="注册地址：" prop="address">
                    <el-input v-model="ruleForm.name" placeholder="请输入注册地址"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="18">
                  <el-form-item label="办公地址：">
                    <el-input v-model="ruleForm.name" placeholder="请输入办公地址"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="法人代表：">
                    <el-input v-model="ruleForm.name" placeholder="请输入法人代表"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="注册资本(万元)：">
                    <el-input v-model="ruleForm.name" placeholder="请输入注册资本"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="18">
                  <el-form-item label="公司网址：">
                    <el-input v-model="ruleForm.name" placeholder="请输入公司网址"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="18">
                  <el-form-item label="营业执照：" class="l">
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
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="18">
                  <el-form-item label="经营业务许可证：" class="l">
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="true"
                      list-type="picture-card"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload"
                    >
                      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <div class="c999">支持上传多个经营许可证，支持JPG/PNG/PDF格式</div>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
        <div class="formBox" id="userInfo">
          <div class="title">
            <span class="text">联系人信息</span>
            <ElButton type="primary" size="small" class="float-right">保存</ElButton>
          </div>
          <div
            class="msg fs12 c999 m-t-20"
          >请填写至少两名联系人，建议一名行政，一名业务，务必注意，系统将根据默认联系人手机生成账号，后续各类短信，邮件通知消息也将发送至默认联系人</div>
          <div class="formMain">
            <div class="tableBox">
              <table class="myTable m-t-20">
                <thead>
                  <tr>
                    <th></th>
                    <th>
                      <span class="red">*</span>联系人姓名
                    </th>
                    <th>
                      <span class="red">*</span>职务
                    </th>
                    <th>
                      <span class="red">*</span>办公电话
                    </th>
                    <th>
                      <span class="red">*</span>手机
                    </th>
                    <th>传真</th>
                    <th>
                      <span class="red">*</span>邮箱
                    </th>
                    <th>备用邮箱</th>
                    <th>通讯地址</th>
                    <th>微信号</th>
                    <th width="160">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,ind) in tableItems" :key="ind">
                    <td>
                      <el-button v-if="item.default" type="primary" size="mini">默认</el-button>
                    </td>
                    <td>
                      <ElInput v-modal="item.name"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.post"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.tel"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.phone"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.max"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.email"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.b_email"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.address"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.weixin"></ElInput>
                    </td>
                    <td>
                      <a class="text" @click="setItemDefault(ind)">设为默认</a>
                      <a class="text" @click="deleteItem(ind)">删除</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="addItem">
                <el-button icon="el-icon-plus" size="small" @click="addTableItem();">新增</el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="formBox" id="vipUser">
          <div class="title">
            <span class="text">会员代表</span>
            <ElButton type="primary" size="small" class="float-right">保存</ElButton>
          </div>
          <div class="formMain">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="140px"
              label="left"
            >
              <el-row class="m-t-20">
                <el-col :span="10">
                  <el-form-item label="证件类型：">
                    <el-select v-model="ruleForm.region" placeholder="请选择证件类型">
                      <el-option label="身份证" value="baoxin"></el-option>
                      <el-option label="驾驶证" value="caiwu"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="证件号码：">
                    <el-input v-model="ruleForm.name" placeholder="请输入证件号码"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="签发机关：">
                    <el-input v-model="ruleForm.name" placeholder="请输入签发机关"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="有效期：">
                    <el-input v-model="ruleForm.name" placeholder="请输入有效期"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="姓名：">
                    <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="性别：">
                    <el-select v-model="ruleForm.region" placeholder="请选择性别">
                      <el-option label="男" value="baoxin"></el-option>
                      <el-option label="女" value="caiwu"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="籍贯：">
                    <el-input v-model="ruleForm.name" placeholder="请输入籍贯"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="出身年月：" prop="date1">
                    <el-date-picker
                      placeholder="选择时间"
                      type="date"
                      v-model="ruleForm.date1"
                      style="width: 100%;"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="名族：">
                    <el-input v-model="ruleForm.name" placeholder="请输入名族"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="最高学历：">
                    <el-select v-model="ruleForm.region" placeholder="请选择最高学历">
                      <el-option label="本科" value="baoxin"></el-option>
                      <el-option label="博士" value="caiwu"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="政治面貌：">
                    <el-input v-model="ruleForm.name" placeholder="请输入政治面貌"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="职务：">
                    <el-input v-model="ruleForm.name" placeholder="请输入职务"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="办公电话：">
                    <el-input v-model="ruleForm.name" placeholder="请输入办公电话"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="传真：">
                    <el-input v-model="ruleForm.name" placeholder="请输入传真"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="本人电话：">
                    <el-input v-model="ruleForm.name" placeholder="请输入本人电话"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="邮箱：">
                    <el-input v-model="ruleForm.name" placeholder="请输入邮箱"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="通讯地址：">
                    <el-input v-model="ruleForm.name" placeholder="请输入通讯地址"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="微信号：">
                    <el-input v-model="ruleForm.name" placeholder="请输入微信号"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="代表履历：">
                    <el-input type="textarea" placeholder="请输入代表履历"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
        <div class="formBox" id="other">
          <div class="title">
            <span class="text">股东与高管</span>
            <ElButton type="primary" size="small" class="float-right">保存</ElButton>
          </div>
          <div class="formMain">
            <div class="tableBox">
              <table class="myTable m-t-20">
                <thead>
                  <tr>
                    <th>股东名称</th>
                    <th>持股比例(%)</th>
                    <th>认缴出资比例(%)</th>
                    <th>股东类型</th>
                    <th width="160">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,ind) in tableItems" :key="ind">
                    <td>
                      <ElInput v-modal="item.name"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.post"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.tel"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.phone"></ElInput>
                    </td>
                    <td>
                      <a class="text" @click="deleteItem(ind)">删除</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="addItem">
                <el-button icon="el-icon-plus" size="small" @click="addTableItem();">新增</el-button>
              </div>
            </div>
            <div class="tableBox">
              <table class="myTable m-t-20">
                <thead>
                  <tr>
                    <th>高管姓名</th>
                    <th>性别</th>
                    <th>职务</th>
                    <th>民族</th>
                    <th>出生年月</th>
                    <th>最高学历</th>
                    <th>任职时间</th>
                    <th>分管部门</th>
                    <th>办公电话</th>
                    <th>邮箱</th>
                    <th width="160">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,ind) in tableItems" :key="ind">
                    <td>
                      <ElInput v-modal="item.name"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.post"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.tel"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.phone"></ElInput>
                    </td>
                    <td>
                      <ElInput></ElInput>
                    </td>
                    <td>
                      <ElInput></ElInput>
                    </td>
                    <td>
                      <ElInput></ElInput>
                    </td>
                    <td>
                      <ElInput></ElInput>
                    </td>
                    <td>
                      <ElInput></ElInput>
                    </td>
                    <td>
                      <ElInput></ElInput>
                    </td>
                    <td>
                      <a class="text" @click="deleteItem(ind)">删除</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="addItem">
                <el-button icon="el-icon-plus" size="small" @click="addTableItem();">新增</el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="formBox" id="msgInfo">
          <div class="title">
            <span class="text">业务信息</span>
            <ElButton type="primary" size="small" class="float-right">保存</ElButton>
          </div>
          <div class="formMain">
            <div class="tableBox">
              <div class="msg fs12 c999 m-t-20">根据所属的机构类型， 将对应不同的业务信息需要补充填写</div>
              <table class="myTable m-t-20">
                <thead>
                  <tr>
                    <th>资管部门名称</th>
                    <th>人员数量</th>
                    <th>部门负责人</th>
                    <th>办公电话</th>
                    <th>手机</th>
                    <th>电话</th>
                    <th width="160">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,ind) in tableItems" :key="ind">
                    <td>
                      <ElInput v-modal="item.name"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.post"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.post"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.tel"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.phone"></ElInput>
                    </td>
                    <td>
                      <ElInput v-modal="item.tel"></ElInput>
                    </td>
                    <td>
                      <a class="text" @click="deleteItem(ind)">删除</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="addItem">
                <el-button icon="el-icon-plus" size="small" @click="addTableItem();">新增</el-button>
              </div>
            </div>
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="140px"
              label="left"
            >
              <el-row class="m-t-20">
                <el-col :span="12">
                  <el-form-item label="具备投资能力：">
                    <el-input type="textarea" placeholder="请输入"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="备注：">
                    <el-input type="textarea" placeholder="请输入"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="保险资金托管业务：">
                    <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="是否自保监会完成备案：">
                    <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="净资产规模：">
                    <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="受托管理保险资金规模：">
                    <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="外部信用评级：">
                    <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="全球总资产规模：">
                    <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="外部信用评级：">
                    <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="全球总资产规模：">
                    <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="外部信用评级：">
                    <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="全球总资产规模：">
                    <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <div class="footBtn text_right">
      <el-button type="">保存</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftMenu: [
        { name: "会员基本信息", active: true, id: "#basicInfo" },
        { name: "入会申请书", active: true, id: "#applyBook" },
        { name: "公司基本信息", active: false, id: "#baseInfo" },
        { name: "联系人信息", active: false, id: "#userInfo" },
        { name: "会员代表", active: false, id: "#vipUser" },
        { name: "股东与高管", active: false, id: "#other" },
        { name: "业务信息", active: false, id: "#msgInfo" }
      ],
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        address: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        address: [{ required: true, message: "请填写地址", trigger: "blur" }],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      tableItems: [
        {
          name: "",
          post: "",
          tel: "",
          phone: "",
          max: "",
          email: "",
          b_email: "",
          address: "",
          weixin: "",
          default: false
        }
      ]
    };
  },
  methods: {
    chooseMenu(ind) {
      this.leftMenu.filter((v, i) => {
        if (i == ind) {
          v.active = true;
        } else {
          v.active = false;
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push({
            path: "/myHome/index",
            query: { type: "sendConfirm" }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    addTableItem() {
      let item = {
        name: "",
        post: "",
        tel: "",
        phone: "",
        max: "",
        email: "",
        b_email: "",
        address: "",
        weixin: "",
        default: false
      };
      this.tableItems.push(item);
    },
    deleteItem(ind) {
      if (this.tableItems.length == 1) {
        return false;
      } else {
        this.tableItems.splice(ind, 1);
      }
    },
    setItemDefault(ind) {
      this.tableItems.filter((v, i) => {
        if (i == ind) {
          v.default = true;
        } else {
          v.default = false;
        }
      });
    }
  }
};
</script>
<style lang="less">
.appyVip {
  position: relative;
  .formMenu {
    width: 160px;
    .menuBox {
      position: fixed;
      width: 160px;
      border-right: 1px solid #d6d6d6;
    }
    .item {
      height: 50px;
      display: block;
      color: #666;
      text-align: right !important;
      line-height: 50px;
      border-right: 2px solid rgba(0, 0, 0, 0);
      position: relative;
      right: -1px;
      padding-right: 20px;
      font-size: 16px;
      cursor: pointer;
      a {
        display: block;
        height: 50px;
        color: #666;
      }
      &.active {
        border-right: 2px solid #409eff;
        a {
          color: #409eff;
        }
      }
    }
  }
  .formModal {
    width: calc(100% - 160px);
    padding: 0 20px 0 40px;
    .formBox {
      margin-bottom: 20px;
      .title {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #d6d6d6;
        .text {
          font-size: 18px;
          color: #333;
        }
      }
      .el-form-item {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        .el-form-item__label {
          line-height: 100% !important;
          text-align: left;
        }
        .el-form-item__content {
          -webkit-box-flex: 1;
          flex-grow: 1;
          margin-left: 0 !important;
          > .el-select {
            width: 80%;
            min-width: 200px;
          }
          > .el-input {
            width: 80% !important;
            min-width: 200px;
          }
        }
        .avatar-uploader {
          .el-upload-list {
            .el-upload-list__item {
              width: 100px;
              height: 100px;
              line-height: 100px;
            }
          }
          .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            &:hover {
              border-color: #409eff;
            }
            &.el-upload--picture-card {
              width: 100px;
              height: 100px;
              line-height: 100px;
            }
          }
          .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 100px;
            height: 100px;
            line-height: 100px;
            text-align: center;
          }
          .avatar {
            width: 100px;
            height: 100px;
            display: block;
          }
        }
      }
    }
    .tableBox {
      width: 100%;
      max-width: 100%;
      overflow: hidden;
      overflow-x: auto;
      .myTable {
        table-layout: fixed;
        border-collapse: separate;
        border-spacing: 0;
        min-width: 100%;
        tr {
          th {
            height: 50px;
            padding: 0 10px;
            border: 0;
            background: #f6f6f6;
            border-bottom: 1px solid #d6d6d6;
            text-align: left;
          }
          td {
            height: 50px;
            padding: 0 10px;
            border-bottom: 1px solid #d6d6d6;
            white-space: nowrap;
            text-overflow: ellipsis;
            input {
              width: 100px;
              height: 36px;
              line-height: 36px;
              padding: 0 5px;
              border: 1px solid #e6e6e6;
            }
            a {
              display: inline-block;
              margin: 0 10px;
            }
          }
        }
      }
      .addItem {
        padding: 20px 0;
        .el-button {
          border-style: dashed !important;
          width: 60%;
        }
      }
    }
  }
}
.footBtn{
  padding:20px;
}
</style>