<template>
	<div class="working">
		<!--头部面包屑-->
		<div class="header_title">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>首页</el-breadcrumb-item>
				<el-breadcrumb-item>index</el-breadcrumb-item>
				<el-breadcrumb-item>工作台</el-breadcrumb-item>
			</el-breadcrumb>
			<div class="header_img">
				<div>
					<img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="" />
					<h2>早安，{{userName}}，祝你开心每一天！</h2>
					<p style="color: #cdcdcd;">交互专家 | 蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</p>
				</div>
				<div>
					<div>
						<p>项目数</p>
						<p>56</p>
					</div>
					<div>
						<p>团队内排名</p>
						<p>8 / 24</p>
					</div>
					<div>
						<p>项目访问</p>
						<p>2,223</p>
					</div>
				</div>
			</div>
		</div>
		<!--中间部分-->
		<div class="work_content">
			<div class="content1">
				<div>
					<div class="header_content1">进行中的项目</div>
					<div class="header_content">全部项目</div>
				</div>
				<ul>
					<li v-for="item in projects" class="moudle_detail">
						<div>
							<img :src="item.img" alt="" />
							<div>{{item.title}}</div>
						</div>
						<div>{{item.content}}</div>
						<div>
							<div>{{item.name}}</div>
							<div>{{item.time}}</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="content2">
				<div class="title">快速开始 / 便捷导航</div>
				<ul>
					<li v-for='operation in operations'>{{operation}}</li>
				</ul>
			</div>
			<div class="content3">
				<div class="leida">
					<div id="myChart" style="width: 100%;height: 100%;"></div>
				</div>
			</div>
			<div class="content4">
				<div class="title">动态</div>
				<ul>
					<li v-for='item in dynamics'>
						<div>
							<img :src="item.headerImg" alt="" />
							<div>
								<span style="color: rgb(24,144,255);width: 10%;height: 100%;display: block;float: left;">{{item.user}}</span> &nbsp; <span>{{item.content}}</span>
							</div>
							<p>{{item.time}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import echarts from 'echarts' //第二种方法
	export default {
		name: "monitoring",
		data() {
			return {
				userName:"曲丽丽",
				projects: [],
				operations: ["操作一", "操作二", "操作三", "操作四", "操作五", "操作六", "操作六六六"],
				dynamics: [
							{
					         "user":"哇哈哈",
					         "headerImg":"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
				           	 "content":"那是一种内在的东西，他们到达不了，也无法触及的",
					           "time":"1分钟前"
					         },
							{
					         "user":"口渴可乐",
					         "headerImg":"https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png",
				           	 "content":"那是一种内在的东西，他们到达不了，也无法触及的",
					           "time":"1分钟前"
					         },
							{
					         "user":"雪",
					         "headerImg":"https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png",					         
				           	 "content":"那是一种内在的东西，他们到达不了，也无法触及的",
					           "time":"1分钟前"
					         },
							{
					         "user":"那是",
					         "headerImg":"https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png",
				           	 "content":"那是一种内在的东西，他们到达不了，也无法触及的",
					           "time":"1分钟前"
					         },
							{
					         "user":"呆头",
					         "headerImg":"https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png",					         
				           	 "content":"那是一种内在的东西，他们到达不了，也无法触及的",
					           "time":"1分钟前"
					         }
						 ]
			}
		},
		mounted() {
			this.axios({
				method: "get",
				url: 'http://localhost:8080/static/working.json'
			}).then((res) => {
				console.log(res.data.d)
				this.projects = res.data.d
			});
			let myChart = echarts.init(document.getElementById('myChart')); //第二种方法
			
			// Schema:
			// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
			var dataBJ = [
			    [45,99,56,2.46,68,36,5]
//			    AQI,pm2.5,pm10,co,co,no2,so2,none
			];
			
			var dataGZ = [
			    [26,37,27,1.163,27,13,1]
			];
			
			var dataSH = [
			    [187,143,201,1.39,89,53,31]
			];
			
			var lineStyle = {
			    normal: {
			        width: 1,
			        opacity: 0.5
			    }
			};
			
			myChart.setOption({
				    tooltip: {},
				    legend: {
				        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
				    },
				    radar: {
				        // shape: 'circle',
				        name: {
				            textStyle: {
				                color: '#fff',
				                backgroundColor: '#999',
				                borderRadius: 3,
				                padding: [3, 5]
				           }
				        },
				        indicator: [
				           { name: '销售（sales）', max: 6500},
				           { name: '管理（Administration）', max: 16000},
				           { name: '信息技术（Information Techology）', max: 30000},
				           { name: '客服（Customer Support）', max: 38000},
				           { name: '研发（Development）', max: 52000},
				           { name: '市场（Marketing）', max: 25000}
				        ]
				    },
				    series: [{
				        name: '预算 vs 开销（Budget vs spending）',
				        type: 'radar',
				        // areaStyle: {normal: {}},
				        data : [
				            {
				                value : [4300, 10000, 28000, 35000, 50000, 19000],
				                name : '预算分配（Allocated Budget）'
				            },
				             {
				                value : [5000, 14000, 28000, 31000, 42000, 21000],
				                name : '实际开销（Actual Spending）'
				            }
				        ]
				    }]
			 
			
		  })
		}
	}
</script>

<style scoped="scoped">
	.el-main {
		padding: 0!important;
	}
	
	.header_title {
		width: 100%;
		height: 140px;
		background: #FFFFFF;
		padding: 10px;
	}
	
	.header_title>.header_img {
		width: 100%;
		height: 100px;
	}
	
	.header_title>.header_img>div:nth-of-type(1)>img {
		width: 72px;
		height: 72px;
		float: left;
		margin: 18px;
	}
	
	.header_title>.header_img>div:nth-of-type(1) {
		width: 70%;
		height: 100%;
		float: left;
		text-align: left;
	}
	
	.header_title>.header_img>div:nth-of-type(2) {
		width: 30%;
		height: 100%;
		float: right;
	}
	
	.header_title>.header_img>div:nth-of-type(2)>div {
		float: left;
		text-align: center;
		margin: 0 20px;
	}
	
	.header_title>.header_img>div:nth-of-type(2)>div>p:nth-of-type(1) {
		font-size: 16px;
	}
	
	.header_title>.header_img>div:nth-of-type(2)>div>p:nth-of-type(2) {
		font-size: 22px;
	}
	
	.work_content {
		width: 100%;
		height: 100%;
		margin-top: 20px;
	}
	/*中间部分*/
	
	.content1 {
		width: 70%;
		/*height: 400px;*/
		float: left;
		background: #ffffff;
		display: flex;
		flex-flow: column nowrap;
	}
	
	.header_content1 {
		width: 50%;
		height: 50px;
		line-height: 50px;
		float: left;
		text-align: left;
		text-indent: 2em;
		font-size: 16px;
	}
	
	.header_content {
		width: 50%;
		height: 50px;
		line-height: 50px;
		float: right;
		text-align: right;
		padding-right: 20px;	
		font-size: 14px;
		color: rgb(24,144,255);
	}
	
	ul {
		margin: 0!important;
		padding: 0!important;
		display: flex;
		flex-flow: row wrap;
		border-top: 1px solid #ececec;
	}
	
	.moudle_detail {
		width: 33%;
		color: rgba(0, 0, 0, 0.45);
		padding: 2%;
		/*-webkit-transition: all 2s ease-out 1s;
        -moz-transition: all 2s ease-out 1s;
        -o-transition: all 2s ease-out 1s;*/
		transition: all 200ms ease-out 200ms;
	}
	
	.moudle_detail:hover {
		box-shadow: 1px 1px 2px #DDDDDD;
	}
	
	.moudle_detail:nth-of-type(1) {
		border-left: 1px solid #ececec;
		border-right: 1px solid #ececec;
		border-bottom: 1px solid #ececec;
	}
	
	.moudle_detail:nth-of-type(2) {
		border-right: 1px solid #ececec;
		border-bottom: 1px solid #ececec;
	}
	
	.moudle_detail:nth-of-type(3) {
		width: 34%;
		border-right: 1px solid #ececec;
		border-bottom: 1px solid #ececec;
	}
	
	.moudle_detail:nth-of-type(4) {
		border-left: 1px solid #ececec;
		border-right: 1px solid #ececec;
		border-bottom: 1px solid #ececec;
	}
	
	.moudle_detail:nth-of-type(5) {
		border-right: 1px solid #ececec;
		border-bottom: 1px solid #ececec;
	}
	
	.moudle_detail:nth-of-type(6) {
		width: 34%;
		border-right: 1px solid #ececec;
		border-bottom: 1px solid #ececec;
	}
	
	.moudle_detail>div:nth-of-type(1)>img {
		width: 40px;
		height: 40px;
		border-radius: 100%;
		float: left;
		margin-right: 10px;
	}
	
	.moudle_detail>div:nth-of-type(1)>div {
		width: 100%;
		height: 40px;
		line-height: 40px;
		color: #000000;
		font-size: 13px;
		font-weight: 600;
	}
	.moudle_detail>div:nth-of-type(1)>div:hover{
		cursor: pointer;
		color: rgb(24,144,255);
	}
	
	.moudle_detail>div:nth-of-type(1) {
		width: 94%;
		height: 40px;
		text-align: left;
		box-sizing: border-box;
	}
	
	.moudle_detail>div:nth-of-type(2) {
		width: 94%;
		height: 50px;
		margin: 10px auto;
		text-align: left;
		box-sizing: border-box;
	}
	
	.moudle_detail>div:nth-of-type(3) {
		width: 100%;
		height: 30px;
		line-height: 30px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		padding: 0 3%;
	}
	
	.moudle_detail>div:nth-of-type(3)>div {
		/*width: 35%;*/
		height: 100%;
	}
	/*右边上面*/
	
	.content2 {
		width: 28%;
		/*height: 200px;*/
		margin-left: 2%;
		background: #FFFFFF;
		float: right;
	}
	
	.content2>.title,.content4>.title {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: left;
		text-indent: 2em;
	}
	
	.content2>ul {
		width: 100%;
		/*height: 100%;*/
		padding: 2%!important;
		display: flex;
		flex-flow: row wrap;
	}
	
	.content2>ul>li {
		width: 25%;
		/*height: 30px;*/
		line-height: 30px;
		padding: 2%;
		cursor: pointer;
	}
	
	.content2>ul>li:hover {
		color: rgb(24, 144, 255);
	}
	/*雷达图*/
	.content3{
		float: right;
		margin: 2% 0%;
		width: 28%;
		height: 400px;
		background: #FFFFFF;
	}
	.content3>.leida{
		width: 100%;
		height: 100%;
	}
	/*第四模块*/
	.content4{
		width: 70%;
		/*height: 400px;*/
		margin-top: 2%;
		float: left;
		background: #FFFFFF;
	}

	.content4>ul>li{
		width: 90%;
		height: 80px;
	    padding: 1% 2%;
		line-height: 20px;
		text-align: left;
		margin: 0 auto;
		border-top: 1px solid #ededed;
	}
	.content4>ul>li:nth-of-type(1){
		border:none;
	}
	.content4>ul>li>div>img{
		width: 30px;
		height: 30px;
		border-radius: 100%;
		margin: 10px auto;
		float: left;
	}
	.content4>ul>li>div>div{
		width: 94%;
		height: 40px;
		line-height: 40px;
		margin-left: 6%;
	}
	.content4>ul>li>div>p{
		display: block;
		margin: 0;
		width: 94%;
		height: 20px;
		line-height: 20px;
		margin-left: 6%;
	}
</style>