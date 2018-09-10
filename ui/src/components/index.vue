<template>
    <div class="index">
        <el-container>
        	 <el-header>
                    <top></top>
                </el-header>

            <el-container>
	            <el-aside style="max-width:260px;overflow:hidden">
	                <leftBar :style='{height}'></leftBar>
	            </el-aside>
                <el-main>
                    <!--<matter></matter>-->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
        
    </div>
</template>
<script>
    import leftBar from  './left_bar'
    import top from  './top'
//  import matter  from  './matter'
    export default {
        name: "index",
        components:{
            leftBar,top
        },
        data(){
            return {
            	height:"",
            	
            }
        },
        created(){
            document.title = "首页"
        },
        mounted(){
			var dih	= document.body.scrollHeight
//			console.log(dih),
			this.height = dih+"px"
			this.$store.state.tab1Name = "fenxi"
        },
        watch:{
        	dih:function(val,oldVal){
        		console.log(val+"and"+oldVal)
        	}
        }
    }
</script>
<style scoped>
    .index {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
        position: relative;
    }

    .left_bar {
        width: 100%;
        /*height: 100%;*/
        background:rgba(0,21,41);
		box-shadow: 20px 0px 6px #000000;
    }

    .top {
        width: 100%;
        height: 100%;
        background: #29ABE2;
    }
    .matter{
        width: 100%;
        height: 100%;
        /*background: #e5d3d1;*/
    }
    .el-header, .el-footer {
        background-color: #29ABE2;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        /*line-height: 160px;*/
        /*overflow: inherit;*/
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>