<template>
	<div class="left_bar">
		<!--<div class="logo">
			<icon scale="5" name="mayi" style="background: #fff;border-radius: 100%;float: left;"></icon>
			<div style="line-height: 20px">
				Antd Platform
			</div>
		</div>-->
		<!--导航栏-->
		<el-row>
			<el-col :span="24">
				<el-menu default-active="2" class="el-menu-vertical-demo" unique-opened
					@open="handleOpen" @close="handleClose" background-color="#545c64"
					text-color="#fff" active-text-color="#ffd04b" style="border: none;">
					<el-submenu index="1" style="text-align: left;text-indent: 10px;">
						<template slot="title">
							<i class="el-icon-goods"></i>
							<span>供应商</span>
						</template>
						<el-menu-item-group style="text-indent: 20px;">
							<el-menu-item index="3-1" @click="supplier">供应商管理</el-menu-item>
						
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2" style="text-align: left;text-indent: 10px;">
						<template slot="title">
							<i class="el-icon-document"></i>
							<span>面料管理</span>
						</template>
						<el-menu-item-group style="text-indent: 20px;">
							<el-menu-item index="1-1" @click="fenxi">分析页</el-menu-item>
							<el-menu-item index="1-2" @click="jiankong">监控页</el-menu-item>
							<el-menu-item index="1-3" @click="working">工作台</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3" style="text-align: left;text-indent: 10px;">
						<template slot="title">
							<i class="el-icon-news"></i>
							<span>（款号档案管理）表单页</span>
						</template>
						<el-menu-item-group style="text-indent: 20px;">
							<el-menu-item index="2-1" @click='basicForm'>基础表单</el-menu-item>
							<el-menu-item index="2-2" @click="stepForm">分步表单</el-menu-item>
							<el-menu-item index="2-3">高级表单</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				
					<el-submenu index="4" style="text-align: left;text-indent: 10px;">
						<template slot="title">
							<i class="el-icon-tickets"></i>
							<span>（色号管理）详情页</span>
						</template>
						<el-menu-item-group style="text-indent: 20px;">
							<el-menu-item index="4-1" @click="basisDetail">基础详情页</el-menu-item>
							<el-menu-item index="4-2">高级详情页</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="5" style="text-align: left;text-indent: 10px;">
						<template slot="title">
							<i class="el-icon-edit-outline"></i>
							<span>季度预算</span>
						</template>
						<el-menu-item-group style="text-indent: 20px;">
							<el-menu-item index="5-1" @click="results">成功</el-menu-item>
							<el-menu-item index="5-2" @click="defeated">失败</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="6" style="text-align: left;text-indent: 10px;">
						<template slot="title">
							<i class="el-icon-sold-out"></i>
							<span>仓库管理</span>
						</template>
						<el-menu-item-group style="text-indent: 20px;">
							<el-menu-item index="5-1" @click="results">成功</el-menu-item>
							<el-menu-item index="5-2" @click="defeated">失败</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="7" style="text-align: left;text-indent: 10px;">
						<template slot="title">
							<i class="el-icon-mobile-phone"></i>
							<span>用户管理</span>
						</template>
						<el-menu-item-group style="text-indent: 20px;">
							<el-menu-item index="5-1" @click="results">成功</el-menu-item>
							<el-menu-item index="5-2" @click="defeated">失败</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		name: "left_bar",
		data() {
			return {
				activeNames: [],
				//                show:this.$store.state.show
				//                count:"",
				author: this.$store.state.author,
				width: "200px",
				margin: "0 auto",
			
				allTitle: "",
				texta: "",
			}
		},
		methods: {
			handleChange(val) {
				console.log(val);
			},
			handleOpen(key, keyPath) {
				console.log(key, keyPath)
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			fenxi(){
				this.$router.push({path:"/pages/fenxi"})
			},
			results(){
				this.$router.push({path:"/pages/results"})
			},
			defeated(){
				this.$router.push({path:"/pages/results"})
			},
			jiankong(){
				this.$router.push({path:"/pages/monitoring"})
			},
			working(){
				this.$router.push({path:"/pages/working"})
			},
			basicForm(){
				this.$router.push({path:"/pages/basicForm"})
			},
			stepForm(){
				this.$router.push({path:"/pages/stepForm"})
			},
			supplier(){
				this.$router.push({path:"/supplier/supplier"})
			},
			basisDetail(){
				this.$router.push({path:"/detail/basisDetail"})
			},
			standard(){
				this.$router.push({path:"/supplier/standard"})
			}
		},
		mounted() {

		},
		computed: {
			
		},
		watch: {
			// 如果 `title` 发生改变，这个函数就会运行
			allTitle: function(val, oldVal) {
				console.log("val改变了" + val)
			}
		},
	}
</script>
<style scoped>
	.logo {
		width: 100%;
		height: 160px;
	}
	
	.logo>svg {
		margin: 50px 0 0 50px;
	}
	
	.logo>div {
		text-align: left;
		padding: 65px 0 0 105px;
	}
	
	.left_bar {
		color: #fff;
	}
	
	#el-collapse-content-174>div {
		padding: 0!important;
	}
	
	.el-collapse {
		background: rgb(0, 21, 41)!important;
	}
	
	.tab1 {
		list-style-type: none;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
	
	.tab1>li {
		width: 100%;
		height: 50px;
		line-height: 50px;
	}
</style>