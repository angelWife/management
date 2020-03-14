<template>
    <el-table
      :data="approData"
      style="width: 100%">
          <el-table-column
      type="selection"
      width="55">
      </el-table-column>
      <el-table-column
        prop="busFlow"
        label="业务流水"
       >
        </el-table-column>
      <el-table-column
        prop="feeName"
        label="缴费名目"
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
        prop="busScope"
        label="业务规模（万">
      </el-table-column>
      <el-table-column
        prop="feePip"
        label="年费标准"
        width="150">
      </el-table-column>
      <el-table-column
        prop="inform"
        label="缴费通知书"
        width="150">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width="100">
      </el-table-column>
      <el-table-column
        prop="actor"
        fixed="right"
        label="处理人"
        width="100">
        </el-table-column>
        <el-table-column
        prop="time"
        fixed="right"
        label="处理时间"
        width="100">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
            <el-button v-if="scope.row.actType=='deal'" @click="handleAct(scope.row)" type="text" size="small">核对</el-button>
            <el-button v-else-if="scope.row.actType=='check'" @click="handleClick(scope.row)" type="text" size="small">驳回</el-button>
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
