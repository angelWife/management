<template>
    <div class='container'>
        <div class="desc">以下为协会认定的会员证书，所有证书拥有唯一会员代码，请慎重保管</div>
        <div class="btn">
            <el-button type="primary">下载</el-button>
            <el-button type="primary">打印</el-button>
        </div>
        <div class="demo-image__placeholder">
            <div class="block">
                <el-image :src="src"></el-image>
            </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            src:'../../../static/certificate.png'
        }
    }
}
</script>
<style lang="less" scoped>
.container{
    background-color: #fff;
    padding: 30px;
    height: 100%;
    .desc{
        color:#666
    }
    .btn{
        margin: 20px 0;
    }
}
</style>