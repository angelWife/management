<template>
    <el-table
      :data="approData"
      style="width: 100%">
      <el-table-column
        prop="busFlow"
        label="业务流水"
       >
      </el-table-column>
      <el-table-column
        prop="type"
        label="机构类型"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="机构名称"
        >
      </el-table-column>
      <el-table-column
        prop="code"
        label="社会统一编码">
      </el-table-column>
      <el-table-column
        prop="appro"
        label="审批业务"
        width="150">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width="100">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
            <el-button v-if="scope.row.actType=='deal'" @click="handleAct(scope.row)" type="text" size="small">处理</el-button>
            <el-button v-else-if="scope.row.actType=='check'" @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
        </el-table-column>
     </el-table>
</template>
<script>
    export default {
      props: {
          approData:{ type: Array, required: true },
      },
      data() {
        return {
        }
      },
      created(){
      },
      methods: {
        handleClick(row) {
            console.log(row.actType);
        },
        handleAct(row){
          this.$router.push('/approval/memberDetails')
        }
      },
    }
  </script>
