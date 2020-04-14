<template>
	<div class="standard">
		<!--分割线1-->
		<div class="title">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>首页</el-breadcrumb-item>
				<el-breadcrumb-item>列表页</el-breadcrumb-item>
				<el-breadcrumb-item>标准列表</el-breadcrumb-item>
			</el-breadcrumb>

		</div>
		<!--分割线2-->
		<div class="list">
			<div>
				<p>我的待办</p>
				<h2>8个任务</h2>
			</div>
			<div>
				<p>本周任务平均处理时间</p>
				<h2>32分钟</h2>
			</div>
			<div>
				<p>本周完成任务数</p>
				<h2>24个任务</h2>
			</div>
		</div>
		<!--分割线3-->
		<div class="edit_form">
			<div class="toptitle">
				<div style="float: left;font-size: 16px;padding: 30px;">标准列表</div>
				<el-radio-group v-model="tabPosition" style="margin: 20px;">
					<el-radio-button label="all">全部</el-radio-button>
					<el-radio-button label="underway">进行中</el-radio-button>
					<el-radio-button label="waiting ">等待中</el-radio-button>
				</el-radio-group>
				<br />
				<!-- Form 开关-->
				<el-button type="text" @click="dialogFormVisible = true">
					<i class="el-icon-plus"></i> 添加
				</el-button>
				<ul>
					<li v-for="item in list" class="moudle_detail">
						<div>
							<img :src="item.img" alt="" />
							<div>{{item.title}}</div>
							<div>{{item.content}}</div>
						</div>
						<div class="">
							<div>{{item.name}}</div>
							<div>{{item.time}}</div>
							<div style="cursor: pointer;">
								<span @click="bianji($event)" :data="{i}">编辑</span>
								<span>删除</span>
							</div>
						</div>
					</li>
				</ul>
			</div>

		</div>
		<!-- Form 开关-->
		<el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
		<!--编辑弹窗-->
		<div class="TaskEditor">
			<el-dialog title="任务编辑" :visible.sync="dialogFormVisible" width="35%" style="text-align: left;">
				<el-form :model="form">
					<el-form-item label="活动名称：" :label-width="formLabelWidth">
						<el-input v-model="form.name" placeholder="请输入" auto-complete="off" style="width: 100%;"></el-input>
					</el-form-item>
					<el-form-item label="开始时间：" :label-width="formLabelWidth">
						<el-date-picker v-model="value1" type="datetime" placeholder="请输入" style="width: 100%;">
						</el-date-picker>
					</el-form-item>
					<el-form-item label="任务负责人：" :label-width="formLabelWidth">
						<el-select v-model="form.region" placeholder="请输入" style="width: 100%;">
							<el-option label="付晓晓" value="shanghai"></el-option>
							<el-option label="周毛毛" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="任务描述：" :label-width="formLabelWidth">
						<el-input type="textarea" placeholder="请输入至少五个字符" style="width: 100%"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialogFormVisible: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '100px',
				value1: "",
				tabPosition: 'all',
				list:[],
			};
		},
		mounted() {
			this.axios({
				method: "get",
				url: 'http://localhost:8080/static/working.json'
			}).then((res) => {
				console.log(res.data.d)
				this.list = res.data.d
			});
		},methods:{
			bianji(e){
				this.dialogFormVisible = true,
				console.log(e)
			}
		}
	};
</script>

<style scoped="scoped">
	.standard {
		width: 100%;
		height: 100%;
		/*background: #FFFFFF;*/
	}
	
	.title {
		width: 100%;
		padding: 1%;
		background: #FFFFFF;
		text-align: left;
	}
	
	.list {
		width: 100%;
		background: #FFFFFF;
		margin: 20px auto;
		display: flex;
	}
	
	.list>div {
		flex: 1;
		height: 62px;
		margin: 20px auto;
		border-right: 1px solid #CCCCCC;
	}
	
	.list>div:nth-last-of-type(1) {
		border-right: none;
	}
	
	.list>div>p {
		margin: 0;
		padding: 0;
		color: #7E8C8D;
	}
	
	.list>div>h2 {
		margin: 10px 0 0 0;
		color: #555;
	}
	
	.TaskEditor>div>div {
		border-radius: 5px!important;
	}
	
	.toptitle {
		width: 100%;
		/*height: 50px;*/
		background: #FFFFFF;
	}
	
	.toptitle>button {
		width: 96%;
		height: 30px;
		border: 1px dashed #CCCCCC;
		line-height: 30px;
		padding: 0;
	}
	ul{
		
		padding: 0;
		width: 96%;
		margin: 20px auto;
	}
	.moudle_detail{
		width: 100%;
		/*height: 200px;*/
		border-bottom: 1px solid #ededed;
		display: flex;
		flex-flow: row nowrap;
		padding: 20px 0;
	}
	.moudle_detail>div{
		width: 50%;
	}
	.moudle_detail>div:nth-of-type(1){
		text-align: left;
		text-indent: 1em;
	}
	.moudle_detail>div>img{
		width: 50px;
		height: 50px;
		border-radius: 5px;
		float: left;
	}
</style>