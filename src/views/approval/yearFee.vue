<template>
    <div class='container'>
        <el-row>
            <el-col :span="8"><div><span>业务流水：</span><el-input v-model="busFlow" placeholder="请输入" class='input_style'></el-input></div></el-col>
           <el-col :span="8"><div><span>缴费名目：</span><el-input v-model="payName" placeholder="请输入" class='input_style'></el-input></div></el-col>
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
            <el-col :span="8"><div><span>审批人：</span><el-input v-model="approver" placeholder="请输入" class='input_style'></el-input></div></el-col>
        </el-row>
        <div calss='btn_content' style="text-align:right">
            <el-button type="primary">查询</el-button>
            <el-button type="primary">重置</el-button>
        </div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane  label="全部" name="all"><yearTable :approData="allData"></yearTable></el-tab-pane>
            <el-tab-pane  label="待审核" name="wait"><yearTable :approData="approData"></yearTable></el-tab-pane>
            <el-tab-pane  label="已核对" name="pass"><yearTable :approData="approData"></yearTable></el-tab-pane>
            <el-tab-pane  label="已驳回" name="reject"><yearTable :approData="approData"></yearTable></el-tab-pane>
            <el-tab-pane  label="已中止" name="stop"><yearTable :approData="approData"></yearTable></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
  import yearTable from './component/table'
  export default {
    data() {
      return {
        busFlow:'',
          payName: '',
          orgName: '',
          approver: '',
          typeValue: '',
          typeList:[{
            id:1,
            value:'保险集团'
          }],
          activeName: 'all',
          approData: [],
          allData:[{
             busFlow: 'RD091201909260355',
             feeName: '2019年会费缴纳',
             type: '保险集团',
             name: '深圳泓桥财富管理有限公司',
             busScope: '5000',
             feePip: '90000.00',
             state: '待核对',
             actor: '操作员1',
             time: '2019-11-11 10:11:11'
          }]
      }
    },
    created(){
    //    this.approData = this.allData;
    },
    methods: {
      handleClick(tab) {
          console.log(tab.name)
      }
    },
    components:{ yearTable }
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