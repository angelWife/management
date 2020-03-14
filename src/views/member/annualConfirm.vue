<template>
    <div class='container'>
        <div class="annualName">
            <span>年审名目：</span>
            <div class="confirm">
                <el-select v-model="name" placeholder="请选择" size="medium">
                    <el-option
                    v-for="item in nameList"
                    :key="item.id"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <div class="explain">
                    请选择可参与的年审名目，仔细确认会员信息是否有变更，如有请同时对会员信息进行更新以便审核更新；处于审批中的名目可以在会员信息的变更记录中查询到
                </div>
            </div>
        </div>
        <div class=infoMesg>
            <div class="title">是否有信息变更（包括基本信息&会员代表）：</div>
            <div class='choose'>
                <el-radio v-model="radio" label="1">有</el-radio>
                <el-radio v-model="radio" label="2">无</el-radio>
            </div>
        </div>
        <apply></apply>
    </div>
</template>
<script>
import apply from '../users/apply'
export default {
    data(){
        return{
            name:'',
            radio: '1',
            nameList:[{
                id:'1',
                label:'2010年年审',
                value:'2010年年审'
            },{
                id:'2',
                label:'2020年年审',
                value:'2020年年审'
            },]
        }
    },
    components:{
        apply
    }
}
</script>
<style lang="less" scoped>
.container{
    .annualName{
        background-color: #fff;
        padding: 30px;
        span{
            font-size: 16px;
            font-weight: 600;
            vertical-align: top;
            padding-right: 50px;
        }
        .confirm{
            width: 580px;
            display: inline-block;
            .explain{
                margin-top: 20px;
                color: #A2A2A2;
            }
        }
    }
    .infoMesg{
        background-color: #fff;
        padding: 30px;
        margin: 20px 0;
        .title{
            font-size: 16px;
            font-weight: 600;
            vertical-align: top;
            padding-right: 50px;
        }
        .choose{
            margin-top: 20px;
        }
    }
}
.el-select{
    width: 400px;
}
</style>