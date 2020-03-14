<template>
    <div class='container'>
        <el-row>
            <el-col :span="8"><div><span>业务流水：</span><el-input v-model="busFlow" placeholder="请输入" class='input_style'></el-input></div></el-col>
            <el-col :span="8"><div><span>审批业务：</span>
                <el-select v-model="approValue" placeholder="请选择">
                    <el-option
                    v-for="appro in approList"
                    :key="appro.id"
                    :value="appro.value">
                    </el-option>
                </el-select></div></el-col>
            <el-col :span="8"><div><span>机构类型：</span>
                <el-select v-model="typeValue" placeholder="请选择">
                    <el-option
                    v-for="item in typeList"
                    :key="item.id"
                    :value="item.value">
                    </el-option>
                </el-select></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="8"><div><span>机构名称：</span><el-input v-model="orgName" placeholder="请输入" class='input_style'></el-input></div></el-col>
            <el-col :span="8"><div><span>社会统一信用编码：</span><el-input v-model="scoialCode" placeholder="请输入" class='input_style'></el-input></div></el-col>
            <el-col :span="8"><div><span>审批人：</span><el-input v-model="approver" placeholder="请输入" class='input_style'></el-input></div></el-col>
        </el-row>
        <div calss='btn_content' style="text-align:right">
            <el-button type="primary">查询</el-button>
            <el-button type="primary">重置</el-button>
        </div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane  label="全部" name="all"><Table :approData="approData"></Table></el-tab-pane>
            <el-tab-pane  label="待处理" name="wait"><Table :approData="approData"></Table></el-tab-pane>
            <el-tab-pane  label="已通过" name="pass"><Table :approData="approData"></Table></el-tab-pane>
            <el-tab-pane  label="已驳回" name="reject"><Table :approData="approData"></Table></el-tab-pane>
            <el-tab-pane  label="已终止" name="stop"><Table :approData="approData"></Table></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
  import Table from './component/table'
  export default {
    data() {
      return {
        activeName: 'all',
        busFlow: '',
        approValue: '',
        typeValue:'',
        orgName:'',
        scoialCode:'',
        approver: '',
        approList:[{
            id:1,
            value:'会员认定'
        },{
            id:2,
            value:'退回申请'
        }],
        typeList:[{
            id:1,
            value:'保险集团'
        }],
        approData: [],
        allData:[{
            busFlow: 'RD0912019092603551',
            type: '保险集团',
            name: '深圳泓桥财富管理有限公司',
            code: '3132132132131231231312',
            appro: '会员认定',
            state: '初审',
            actType: 'deal'
          },{
            busFlow: 'RD0912019092603551',
            type: '保险集团',
            name: '深圳泓桥财富管理有限公司',
            code: '3132132132131231231312',
            appro: '会员认定',
            state: '初审',
            actType: 'deal'
          },{
            busFlow: 'RD0912019092603551',
            type: '-',
            name: '中国保险资产管理业协会',
            code: '-',
            appro: '活动创建',
            state: '驳回',
            actType: 'check'
          }],
          waitData:[{
            busFlow: 'RD091201909260wait',
            type: '保险集团',
            name: '深圳泓桥财富管理有限公司',
            code: '3132132132131231231312',
            appro: '会员认定',
            state: '初审',
            actType: 'deal'
          },{
            busFlow: 'RD091201909260wait',
            type: '保险集团',
            name: '深圳泓桥财富管理有限公司',
            code: '3132132132131231231312',
            appro: '会员认定',
            state: '初审',
            actType: 'deal'
          },{
            busFlow: 'RD091201909260wait',
            type: '-',
            name: '中国保险资产管理业协会',
            code: '-',
            appro: '活动创建',
            state: '驳回',
            actType: 'check'
          }],
          passData:[{
            busFlow: 'RD091201909260pass',
            type: '保险集团',
            name: '深圳泓桥财富管理有限公司',
            code: '3132132132131231231312',
            appro: '会员认定',
            state: '初审',
            actType: 'deal'
          }],
          rejectData:[{
            busFlow: 'RD091201909260reject',
            type: '保险集团',
            name: '深圳泓桥财富管理有限公司',
            code: '3132132132131231231312',
            appro: '会员认定',
            state: '初审',
            actType: 'deal'
          }],
          stopData:[{
            busFlow: 'RD091201909260stop',
            type: '保险集团',
            name: '深圳泓桥财富管理有限公司',
            code: '3132132132131231231312',
            appro: '会员认定',
            state: '初审',
            actType: 'deal'
          }],
      }
    },
    created(){
       this.approData = this.allData;
    },
    methods: {
      handleClick(tab) {
        if (tab.name == 'all'){
          this.approData = this.allData;
        } else if (tab.name == 'wait'){
          this.approData = this.waitData;
        } else if (tab.name == 'pass'){
          this.approData = this.passData;
        } else if (tab.name == 'reject'){
          this.approData = this.rejectData;
        } else if (tab.name == 'stop'){
          this.approData = this.stopData;
        }
      }
    },
    components:{Table}
  }
</script>
<style lang="less" scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
.container {
    background: #fff;
    padding: 30px;
    height: 100%;
    .input_style,.el-select{
        width: calc(100% - 180px);
    }
}



</style>