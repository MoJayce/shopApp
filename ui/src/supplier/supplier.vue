<template>
	<div>
		<div class="title">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>首页</el-breadcrumb-item>
				<el-breadcrumb-item>供应商</el-breadcrumb-item>
				<el-breadcrumb-item>供应商管理</el-breadcrumb-item>
			</el-breadcrumb>
			<h2>供应商管理</h2>
		</div>
		<div class="list">
			<div class="edit_ipt">
				<div>
					<span>请输入：</span>
					<el-input placeholder='供应商名称/编码/联系人/联系方式'></el-input>
				</div>
				<div>
				    <!--<el-date-picker
					      v-model="value6"
					      type="datetimerange"
					      start-placeholder="开始日期"
					      end-placeholder="结束日期"
					      :default-time="['12:00:00']">
				    </el-date-picker>-->
				</div>
				<div style="text-align: right;margin: 0;">
					<el-button type="primary">查询</el-button>
					<el-button @click="addSupplier">新增</el-button>
					<!--<div style="float: right;line-height: 40px;margin: 0 20px;cursor: pointer;">展开 <i class="el-icon-arrow-down"></i></div>-->

				</div>
			</div>
			<el-table ref="multipleTable" :data="tableData3.slice((currentPage-1)*pagesize,currentPage*pagesize)" 
				tooltip-effect="dark" style="width: 100%" 
				@selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column label="供应商编号"width="200">
					<template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column prop="supplier" label="供应商名称" width="auto">
				</el-table-column>
				<el-table-column prop="address" label="地址" width="300">
				</el-table-column>
				<el-table-column prop="name" label="联系人" width="auto">
				</el-table-column>
				<el-table-column prop="contactWay" label="联系方式" width="auto">
				</el-table-column>
				<el-table-column prop="state" label="状态" width="auto">
				</el-table-column>
				
				
				<el-table-column fixed="right" label="操作" width="100">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
						<!--<el-button type="text" size="small">编辑</el-button>-->
					</template>
				</el-table-column>
			</el-table>
			  <div class="block">
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage"
			      :page-size="pagesize"
			      layout="prev, pager, next, jumper"
			      :total="tableData3.length">
			    </el-pagination>
			  </div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData3:[],
				multipleSelection: [],
        		currentPage: 1,
        		pagesize:8, 
        		value6: '',
			}
		},
		methods: {
			toggleSelection(rows) {
				if(rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
//			查看
			handleClick(row) {
				console.log(row);
//				设置sessionStorage
//sessionStorage.setItem('isActive2', true)
 				sessionStorage.setItem("row",JSON.stringify(row))
				this.$router.push({path:"updateSupplier"})
			},
		    handleSizeChange: function (size) {
		        this.pagesize = size;
		    },
		    handleCurrentChange: function(currentPage){
		        this.currentPage = currentPage;
		    },
//		    新增供应商
			addSupplier(){
				this.$router.push({path:"addSupplier"})
			}
		},
		mounted(){
			this.axios({
				method: "get",
				url: 'http://localhost:8080/static/table.json'
			}).then((res) => {
				console.log(res)
				this.tableData3 = res.data.d,
				console.log(this.tableData3)
			});
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
	
	.list {
		width: 100%;
		/*height: 500px;*/
		margin-top: 20px;
		background: #FFFFFF;
		overflow: hidden;
	}
	
	.edit_ipt {
		width: 100%;
		margin: 20px auto;
		display: flex;
		flex-flow: row wrap;
	}
	
	.edit_ipt>div {
		width: 30%;
		margin: 0 2%;
		float: left;
	}
	
	.edit_ipt>div>span {
		display: block;
		float: left;
		width: 20%;
		line-height: 40px;
	}
	
	.el-input {
		width: 80%!important;
	}
	
	.el-table,
	.el-table-column {
		text-align: center;
		padding: 0 2%;
	}
	.block{
		padding: 20px;
	}
</style>