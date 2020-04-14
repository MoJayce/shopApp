<template>
	<div>
		基础页
		<el-table :data="tableData" style="width: 100%"  :default-sort="{prop: 'date', order: 'descending'}">
			<!--prop: 'date',默认的排序列的 prop 和顺序 order: 'descending' order, 则默认顺序是ascending（上升）、descending（下降）-->
			<el-table-column type="selection" width="55">
			</el-table-column>
			<!--sortable//排序箭头 、、//prop="date"排序条件-->
			<el-table-column prop="date" label="日期" sortable width="180">
				<template prop="date" slot-scope="scope">{{ scope.row.date }}</template>
			</el-table-column>
			<el-table-column prop="name" label="姓名" sortable width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址" sortable :formatter="formatter">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="100">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					<el-button type="text" size="small">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: []
//				{
//					date: '2016-03-07',
//					name: '王小虎',
//					address: '上海市普陀区金沙江路 1518 弄'
//				}, {
//					date: '2016-05-04',
//					name: '阿拉伯',
//					address: '上海市普陀区金沙江路 1517 弄'
//				}, {
//					date: '2016-05-01',
//					name: '比波塞冬',
//					address: '上海市普陀区金沙江路 1519 弄'
//				}, {
//					date: '2016-05-03',
//					name: '动次打次',
//					address: '上海市普陀区金沙江路 1516 弄'
//				}
			}
		},
		methods: {
			formatter(row, column) {
				return row.address;
			}
		},
		mounted(){
			this.axios({
				method: "get",
				url: 'http://localhost:8080/static/table.json'
			}).then((res) => {
				console.log(res)
				this.tableData = res.data.d,
				console.log(this.tableData3)
			});
		}
	}
</script>

<style scoped="scoped">
.cell{
	text-align: center!important;
}
</style>