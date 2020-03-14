<template>
    <div class='container'>
        <el-row :gutter="120" style="height:100%">
            <el-col :span="12">
                <div class="grid-content">
                  <div class= 'todotitle'>待办事项</div>
                  <ul v-for="todo in todoList" :key='todo.id' class='todoContent'>
                      <li class="todoeve">
                          <div class='todoText'>
                              <div>{{todo.desc}}</div>
                              <div class="dateText">{{todo.date}}</div>
                          </div>
                          <div class='todoButton'>
                              <ElButton type="primary" size='mini' @click="deal($event)">处理</ElButton>
                          </div>
                      </li>
                  </ul>
                </div>
            </el-col>
            <el-col :span="12" v-if="role.name == 'recoMember'">
                <div class="grid-content">
                    <div class= 'todotitle'><span>通知公告</span> <router-link to="" class="seeMore">查看更多>></router-link></div>
                    <ul v-for="todo in noticeList" :key='todo.id' class='todoContent'>
                        <li class="todoeve">
                            <div class='todoText'>
                                <div>{{todo.desc}}</div>
                                <div class="dateText">{{todo.date}}</div>
                            </div>
                            <div class='todoButton'>
                                <ElButton type="primary" size='mini' @click="deal($event)">查看</ElButton>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="12" v-if="role.name == 'recoMember'">
                <div class="grid-content">
                    <div class= 'todotitle'><span>会员活动</span> <router-link to="" class="seeMore">查看更多>></router-link></div>
                    <ul v-for="todo in memberActivity" :key='todo.id' class='todoContent'>
                        <li class="todoeve">
                            <div class='todoText'>
                                <div>{{todo.desc}}</div>
                                <div class="dateText">{{todo.date}}前截止报名</div>
                            </div>
                            <div class='todoButton'>
                                <ElButton type="primary" size='mini' @click="deal($event)">报名</ElButton>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="12" v-if="role.name == 'recoMember'">
                <div class="grid-content">
                    <div class= 'todotitle'><span>系统消息</span> <router-link to="" class="seeMore">查看更多>></router-link></div>
                    <ul v-for="todo in memberActivity" :key='todo.id' class='todoContent'>
                        <li class="todoeve">
                            <div class='todoText'>
                                <div>{{todo.desc}}</div>
                                <div class="dateText">{{todo.date}}</div>
                            </div>
                            <div class='todoButton'>
                                <ElButton type="primary" size='mini' @click="deal($event)">查看</ElButton>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>

import { mapState } from "vuex";

export default { 
    data() {
        return {
            todoList:[{
                id:1,
                desc: '深圳市前海鑫鼎基金管理有限公司 / 年费缴纳 / 缴纳确认',
                date: '2010-3-10'
            }],
            noticeList:[{
                id:1,
                desc: '中国保险资产管理业协会“2019IAMAC年度课题”立项公告',
                date: '2010-3-10'
            },{
                id:2,
                desc: '2019保险资管业金融科技峰会成功召开',
                date: '2010-3-10'
            }],
            memberActivity:[{
                id:1,
                desc: '保险资金股权投资第二期专题培训',
                date: '2010-3-10'
            }],
            msgList:[{
                id:1,
                desc: '会员认定申请审批通过',
                date: '2010-3-10'
            }]
        }
    },
    computed:{
        ...mapState({
            role: state=>state.user.role,
        }),
    },
    methods:{
        deal(e){
            alert(e.currentTarget.innerHTML );
        }
    }
}
</script>
<style lang="less" scoped>
.container {
    background: #fff;
    padding: 30px;
    height: 100%;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    height: 50%;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  } 
  .todotitle{
      font-size: 16px;
      color: #000;
      font-weight: 600;
      padding: 10px 20px;
      border-bottom: 1px solid #eee ;
  }
  .todoContent{
      margin: 20px;
  }
  .todoeve{
      list-style-type: none;
      font-size: 14px;  
      color: #999;
      border-bottom: 1px solid #eee;
      padding-bottom: 15px;

  }
  .todoText{
      display: inline-block;
      width: 80%;
      box-sizing: border-box;
  }
  .todoButton{
      vertical-align: top;
      display: inline-block;
      width: 16%;
      box-sizing: border-box;
  }
 .dateText{
     color: rgba(0,0,0,0.3);
     font-weight: 400;
     margin-top: 10px;
 }
 .seeMore{
     float: right;
     font-weight: normal;
     font-size: 14px;
     color: #409EFF;
 }
</style>
