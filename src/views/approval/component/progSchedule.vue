<template>
    <div class="container">
        <div class="table_title">流程进度<router-link to="" class="seePic">查看流程图</router-link></div>
         <el-table
            :data="proData"
            style="width: 100%;padding:30px"
            :header-row-style="ttHeadStyle"
            :header-cell-style="thStyle">
            <el-table-column
                prop="node"
                label="审批节点"
                width="100"
                align='center'>
            </el-table-column>
            <el-table-column
                prop="ideal"
                label="处理意见"
                width="100"
                align='center'>
            </el-table-column>
            <el-table-column
                prop="actor"
                label="操作人"
                align='center'>
            </el-table-column>
            <el-table-column
                prop="time"
                label="处理时间"
                align='center'>
            </el-table-column>
                <el-table-column
                prop="explain"
                label="说明"
                width="300"
                align='center'>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
      name: 'proSchedule',
      data() {
        return {
          ttHeadStyle: { 'background-color': '#fafafa'},
          thStyle: { 'border': 0 },
          proData: [{
            node: '复审',
            ideal: '-',
            actor: '泰康资产管理公司',
            time: '2016-05-02',
            explain: '-'
          }, {
            node: '初审',
            ideal: '-',
            actor: '操作人1',
            time: '2016-05-02',
            explain: '-'
          }, {
            node: '提交',
            ideal: '-',
            actor: '泰康资产管理公司',
            time: '2016-05-02',
            explain: '-'
          }]
        }
      }
    }
  </script>
  <style lang="less" scoped>
  .container{
      background: #fff;
      .table_title{
          font-size: 16px;
          font-weight: 600;
          padding: 15px 30px;
          border: 1px solid #eee;
          .seePic{
              float: right;
              font-weight: normal;
              font-size: 14px;
              color: #409EFF;
          }
      }
  }
.el-table td{
    border-bottom: 1px solid #fff;
}
  </style>