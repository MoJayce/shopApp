<template>
    <div class="welcome">
        <div class="block">
            <img src="../assets/logo.png" alt="">
            <div>{{msg}}</div>
            <el-row>
                <el-button @click="system">进入系统</el-button>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default {
        name: "welcome",
        data(){
            return {
                msg:"欢迎使用！"
            }
        },
        created(){
            document.title = "欢迎！"
        },methods:{
            system(){
                this.$router.push({path:"login"})
            }
        }
    }
</script>
<style scoped>
    * {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
    .block{
        width: 200px;
        height: 280px;
        margin: 200px auto;
        text-align: center;
    }
    .block>div{
        margin: 10px auto;
        text-align: center;
    }
</style>