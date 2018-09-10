<template>
	<div class="add">
		<div class="title">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>首页</el-breadcrumb-item>
				<el-breadcrumb-item>供应商</el-breadcrumb-item>
				<el-breadcrumb-item>供应商管理</el-breadcrumb-item>
				<el-breadcrumb-item>新增供应商</el-breadcrumb-item>
			</el-breadcrumb>
			<!--<h2>新增供应商</h2>-->
			<div class="forma">
				<h3  style="color: #29ABE2;">供应商信息</h3>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="名称" prop="name" style="width: 50%;">
						<el-input v-model="ruleForm.name"></el-input>
					</el-form-item>
					<el-form-item label="编码" prop="encoding" style="width: 50%;">
						<el-input v-model="ruleForm.encoding"></el-input>
					</el-form-item>
					<el-form-item label="区域" prop="region" style="width: 50%;">
							<!--<el-input v-model="ruleForm.region"></el-input>-->
						 <el-select v-model="ruleForm.region" placeholder="请选择区域" style="width: 100%;"> 
							<el-option label="中国" value="shanghai"></el-option>
      						<el-option label="其它区域" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="详细地址"  prop="address" style="width: 50%;">
							<el-input v-model="ruleForm.address"></el-input>
					</el-form-item>
					<el-form-item label="是否启用" prop="delivery">
						<el-switch v-model="ruleForm.delivery" @change="kai"></el-switch>
					</el-form-item>
				
				<h3  style="color: #29ABE2;width: 100%;">个人信息</h3>
					<el-form-item label="姓名" prop="userName" style="width: 50%;">
						<el-input v-model="ruleForm.userName"></el-input>
					</el-form-item>
						<el-form-item label="手机" prop="phone" style="width: 50%;">
							<el-input v-model="ruleForm.phone"></el-input>
						</el-form-item>
						<el-form-item label="电话" prop="tel" style="width: 50%;">
							<el-input v-model="ruleForm.tel"></el-input>
						</el-form-item>
				<!-- 	<el-form-item label="职位"  prop="positions" style="width: 50%;">
							<el-input v-model="ruleForm.positions"></el-input>
					</el-form-item> -->
					<el-form-item label="Email"  prop="Email" style="width: 50%;">
							<el-input v-model="ruleForm.Email"></el-input>
					</el-form-item>
			
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
						<el-button @click="cancel">取消</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					name: '',
					encoding:"",
					region: '',
					address: '',
					delivery: false,
					userName: '',
					phone: "",
					tel: '',
					desc: '',
					Email: '',
					positions: '',
				},
//				delivery: false,
				rules: {
					name: [{
							required: true,
							message: '请输入名称',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 30,
							message: '名称不能大于30个字符',
							trigger: 'blur'
						}
					],
					userName: [{
							required: true,
							message: '姓名不能为空',
							trigger: 'blur'
						}
					],
					region: [{
						required: true,
						message: '请选择活动区域',
						trigger: 'change'
					}],
					phone: [{
						required: true,
						message: '手机号不能为空',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			cancel(){
				this.$router.push({path:"supplier"})
			},
			kai(){
				console.log(this.ruleForm.delivery)
			}
		},
		created(){
//				console.log()
	var	row = JSON.parse(sessionStorage.getItem("row"))
		console.log(row)
		this.ruleForm.name = row.supplier
		this.ruleForm.encoding = row.date
		this.ruleForm.phone = row.contactWay
		this.ruleForm.address = row.address
		this.ruleForm.userName = row.name
		if(row.state == "正常"){
				this.ruleForm.delivery = true
			}
		},
		watch:{
			delivery:function(val,oldVal){
				console.log(val)
			},
			name:function(val,oldVal){
				console.log(val)
			}
		}
	}
</script>

<style scoped="scoped">
	.title {
		width: 100%;
		padding: 1%;
		background: #FFFFFF;
		text-align: left;
	}
	
	.forma {
		width: 100%;
		background: #FFFFFF;
		padding: 2%;
	}
	.demo-ruleForm{
		display: flex;
		flex-flow: row wrap;
	}
</style>