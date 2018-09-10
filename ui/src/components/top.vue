<template>
    <div class="top">
        <h2 style="float: left;margin: 0;">后台管理系统</h2>
        <div class="personal">
        	<el-menu :default-active="activeIndex" 
        		class="el-menu-demo"
        		 mode="horizontal" 
    		  	background-color="#29ABE2"
			  	text-color="#efefef"
			  	active-text-color="#efefef"
        		@select="handleSelect">
			  <el-submenu index="2">
			  	<template slot="title">个人信息</template>
			    <el-menu-item index="2-1">个人中心</el-menu-item>
			    <el-menu-item index="2-2" @click="Switch">切换账户</el-menu-item>
			    <el-menu-item index="2-3" @click="exit">退出</el-menu-item>
			  </el-submenu>
			</el-menu>
        </div>
    </div>
</template>
<script>
    export default {
        name: "top",
        data(){
            return {
                  activeIndex: '2',
            }
        },
        methods:{
        	    handleSelect(key, keyPath) {
			        console.log(key, keyPath);
		        },
		        Switch(){
		        	this.$router.push({path:"../login"})
		        },
		        exit(){
		        	this.$router.push({path:"../login"})
		        }
        }
    }
</script>
<style scoped>
	.top{
		color: #efefef;
		padding: 0 20px;
	}
.personal{
	float: right;
}
.el-menu-demo{
	height: 100%!important;
	border: none!important;
}
/*.el-menu-demo>li>div>i{
	color: #EFEFEF!important;
}
.el-menu-demo:hover{
	color: #000000;
}*/
</style>
<