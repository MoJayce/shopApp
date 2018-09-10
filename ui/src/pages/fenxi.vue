<template>
	<div class="fenxi">
		<!--第一部分-->
		<div class="block1" style="margin: 0 1% 0 0;">
			<div id="myChart" style="width: 100%;height: 100%;"></div>
			<div class="line">
				日访问量：{{people}}
			</div>
		</div>
		<div class="block1" style="margin: 0 1% 0 1.6%;">
			<div id="myChart1" style="width: 100%;height: 100%;">
				<h2 style="font-size: 16px;font-weight: 800;">总销售额</h2>
				<h2>{{allSell}}</h2>
				<div class="tongbi">
					<div>
						<div>周同比 {{up}}<el-icon class="el-icon-caret-top" style="color:red;"></el-icon></div>
					</div>
					<div>
						<div>日环比{{down}}<el-icon class="el-icon-caret-bottom" style="color:green"></el-icon></div>
					</div>
				</div>
			</div>
			<div class="line">
				日均销售额:￥1779.42
			</div>
		</div>
		<div class="block1" style="margin: 0 1% 0 1.6%;">
			<div id="myChart2" style="width: 100%;height: 100%;"></div>
			<div class="line">
				转化率60%
			</div>
		</div>
		<div class="block1"  style="margin: 0 0 0 1.8%;">
			<div id="myChart3" style="width: 100%;height: 100%;">
				<h2 style="font-size: 16px;font-weight: 800;line-height: 50px;margin: 0;">运营活动效果</h2>
				<div class="progress">
					<h2>70%</h2>
					<el-progress style="width: 95%;margin: 0 auto;" :text-inside="true" :show-text="false" :stroke-width="18" :percentage="70"></el-progress>
				</div>
				
			</div>
			<div class="line2">
					<div>
						<div>周同比 {{up}}<el-icon class="el-icon-caret-top" style="color:red;"></el-icon></div>
					</div>
					<div>
						<div>日环比{{down}}<el-icon class="el-icon-caret-bottom" style="color:green"></el-icon></div>
					</div>
			</div>
		</div>
		<!--第二部分-->
		<div class="section2">
			<!--第二部分-->
			 <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 100%;height: 500px;line-height: 60px;">
			    <el-tab-pane label="销售额" name="first" >
			    	<div class="connet_section2">
			    		<div class="tab">
			    			<div id="myChart2_1" style="width: 100%;height: 100%;"></div>
			    		</div>
			    		<div>
			    			<p>门店销售额排名</p>
			    			<ul>
			    				<li><div>1</div><div>工专路 0 号店 </div><div>323,234</div></li>
			    				<li><div>2</div><div>工专路 0 号店 </div><div>323,234</div></li>
			    				<li><div>3</div><div>工专路 0 号店 </div><div>323,234</div></li>
			    				<li><div>4</div><div>工专路 0 号店 </div><div>323,234</div></li>
			    				<li><div>5</div><div>工专路 0 号店 </div><div>323,234</div></li>
			    				<li><div>6</div><div>工专路 0 号店 </div><div>323,234</div></li>
			    				<li><div>7</div><div>工专路 0 号店 </div><div>323,234</div></li>
			    			</ul>	
			    		</div>
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="访问量" name="second">
		    	 	<div class="connet_section2_2">
			    		<div class="tab">
			    			<div id="myChart2_2" style="width: 100%;height: 100%;"></div>
			    		</div>
			    		<div>
			    			<p>门店销售额排名</p>
			    			<ul>
			    				<li><div>1</div><div>工专路 1 号店 </div><div>323,234</div></li>
			    				<li><div>2</div><div>工专路 1 号店 </div><div>323,234</div></li>
			    				<li><div>3</div><div>工专路 1 号店 </div><div>323,234</div></li>
			    				<li><div>4</div><div>工专路 1 号店 </div><div>323,234</div></li>
			    				<li><div>5</div><div>工专路 1 号店 </div><div>323,234</div></li>
			    				<li><div>6</div><div>工专路 1 号店 </div><div>323,234</div></li>
			    				<li><div>7</div><div>工专路 1 号店 </div><div>323,234</div></li>
			    			</ul>	
			    		</div>
			    	</div>
			    </el-tab-pane>
		  	</el-tabs>
		</div>
	</div>
</template>
<script>
	
	import echarts from 'echarts' //第二种方法
	
	export default {
		name: "fenxi",
		data() {
			return {
				people: 1075,
				allSell: "￥12456.00",
				up: "12%",
				down: "11%",
				activeName: "first",
				screenWidth: document.body.clientWidth,
			}
		},
		methods: {
		      handleClick(tab, event) {
		        console.log(tab, event);
//		        console.log(event.path[0].id)
//		        if(event.path[0].id == "tab-first"){
//		        	this.activeName = "first"
//		        	console.log(this.activeName)
//		        }
//		        else if(event.path[0].id == "tab-second"){
//		        	
//		        	this.activeName = "second"
//		        	console.log(this.activeName)
//		        }
		      }
	    },
	    created(){
	    			     	   let that = this
			        window.onresize = () => {
			            return (() => {
			                window.screenWidth = document.body.clientWidth
			                that.screenWidth = window.screenWidth
			            })()
			        }
	    },
		mounted() {

//			this.activeName = "first"/
			var mychart22width = document.getElementById("myChart2_1").offsetWidth;
			var mychart22height = document.getElementById("myChart2_1").offsetHeight;
			
			this.echarts = this.$echarts.init(document.getElementById('myChart')); //第一种方法
			let myChart1 = echarts.init(document.getElementById('myChart2')); //第二种方法
			let myChart2_1 = echarts.init(document.getElementById('myChart2_1')); //第二种方法
			this.echarts.setOption({ //第一种方法
					title: {
						text: '访问量',
						subtext: '7527'
					},
					tooltip: {
						trigger: 'axis'
					},
					grid: {
						left: '0%',
						right: '4%',
						bottom: '2%',
						containLabel: true
					},
					legend: {
						data: ['意向', '预购', '成交']
					},
					toolbox: {
						show: true,
						feature: {
							mark: {
								show: true
							},
						}
					},
					calculable: true,
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						type: 'line',
						smooth: true,
						data: [820, 932, 901, 934, 1290, 1330, 1320],
						itemStyle: {
							normal: {
								color: '#4a148c'
							}
						},
						areaStyle: {}
					}]
				}),
				//第二种方法
				myChart1.setOption({
					title: {
						text: '支付笔数',
						subtext: '7527'
					},
					color: ['#3398DB'],
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: '0%',
						right: '4%',
						bottom: '2%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
						name: '直接访问',
						type: 'bar',
						barWidth: '60%',
						data: [20, 52, 200, 334, 390, 330, 220]
					}]
				}),
//				第二部分的图表
				myChart2_1.setOption({
						color: ['#3398DB'],
						title: {
							text: '销售额趋势'
						},
						tooltip: {
							trigger: 'axis',
							axisPointer: { // 坐标轴指示器，坐标轴触发有效
								type: 'line' // 默认为直线，可选为：'line' | 'shadow'
							}
						},
//						legend: {
//							width:"500px",
//							height:"500px"
//						},
					    xAxis: {
					        type: 'category',
					        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月']
					    },
					    yAxis: {
					        type: 'value'
					    },
					    series: [{
					    	barWidth: '60%',
					        data: [620, 503, 350, 880, 470, 310, 430,643,432,953,1232,542],
					        type: 'bar'
					    }]
				});
//			        console.log(that.screenWidth)
		},
		watch:{
			activeName:function(val,oldVal){
//				console.log("切换了")
				setTimeout(function(){
					let myChart2_2 = echarts.init(document.getElementById('myChart2_2')); //第二种方法
					var mychart22width = document.getElementById("myChart2_2").offsetWidth;
					var mychart22height = document.getElementById("myChart2_2").offsetHeight;
//					console.log("监听的"+val,"原来的值"+oldVal)
					document.getElementById("myChart2_2").firstChild.style.width = mychart22width+"px";
					document.getElementById("myChart2_2").firstChild.style.height = mychart22height+"px";
					myChart2_2.setOption({
							color: ['#3398DB'],
							title: {
								text: '访问量趋势'
							},
							tooltip: {
								trigger: 'axis',
								axisPointer: { // 坐标轴指示器，坐标轴触发有效
									type: 'line' // 默认为直线，可选为：'line' | 'shadow'
								}
							},
							legend: {
								width:"100%",
								height:"100%"
							},
						    xAxis: {
						        type: 'category',
						        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月']
						    },
						    yAxis: {
						        type: 'value'
						    },
						    series: [{
						    	barWidth: '60%',
						        data: [453, 675, 867, 457, 234, 764, 435,435,768,979,1211,452],
						        type: 'bar'
						    }]
					})
				},50)
			},
//			监听屏幕宽度
			screenWidth(val,oldVal){
//				console.log(val !== oldVal)
//				if(val != oldVal){
//					console.log("a")
//					
//				}
			}
		}
	}
</script>
<style scoped>
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	.fenxi {
		display: flex;
		flex-flow: row wrap;
	}
	
	.block1 {
		width: 23%;
		/*margin: 0 1%;*/
		height: 200px;
	}
	
	#myChart {
		padding: 20px 10px 0px 10px;
		background: #FFFFFF;
	}
	
	.line {
		width: 100%;
		height: 40px;
		border-top: 1px solid #CCCCCC;
		line-height: 40px;
		background: white;
	}
	
	#myChart1,#myChart3 {
		background: #FFFFFF;
		text-align: left;
		text-indent: 1em;
	}
	
	#myChart2 {
		background: #FFFFFF;
		text-align: left;
		text-indent: 1em;
		padding: 10px 10px 0px 10px;
	}
	
	#myChart1>p,#myChart3>p {
		width: 100%;
		height: 60px;
		line-height: 40px;
		padding: 0;
		margin: 0;
		padding-top: 20px;
	}
	
	#myChart1>h2,#myChart3>.progress {
		width: 100%;
		height: 60px;
		line-height: 60px;
		padding: 0;
		margin: 0;
	}

	#myChart1>.tongbi {
		width: 100%;
		height: 80px;
		line-height: 80px;
		display: flex;
		flex-flow: row nowrap;
	}
	.line2 {
		width: 100%;
		height: 40px;
		border-top: 1px solid #CCCCCC;
		line-height: 40px;
		background: white;
		display: flex;
		flex-flow: row nowrap;
	}
	.tongbi>div,.line2>div {
		width: 50%;
		height: 100%;
	}
	.el-tabs__nav{
		width: 100%;
		height: 60px!important;
		line-height: 60px;
	}
	.section2{
		margin-top: 60px;
		width: 100%;
		/*height: 434px;*/
		padding: 0 1%;
		background: #fff
	}
	.connet_section2,.connet_section2_2{
		width: 100%;
		height: 400px;
		margin: 0;
		padding: 0;
		display: flex;
		flex-flow: row nowrap;
	}
	.connet_section2>.tab,.connet_section2_2>.tab{
		width: 75%;
		height: 100%;
	}
	.connet_section2>div,.connet_section2_2>div{
		width: 25%;
		height: 100%;
		text-align: left;
	}
	.connet_section2>div>ul>li,.connet_section2_2>div>ul>li{
		width: 100%;
		height: 40px;
		line-height: 40px;
	}
	.connet_section2>div>ul>li>div:nth-of-type(1),.connet_section2_2>div>ul>li>div:nth-of-type(1){
		width: 20px;
		height: 20px;
		line-height: 20px;
		border-radius: 100%;
		background: #314659;
		color: #FFFFFF;
		text-align: center;
		float: left;
		margin: 10px 10px 10px 0px;
	}
	.connet_section2>div>ul>li>div:nth-of-type(2),.connet_section2_2>div>ul>li>div:nth-of-type(2){
		float: left;
	}
	.connet_section2>div>ul>li>div:nth-of-type(3),.connet_section2_2>div>ul>li>div:nth-of-type(3){
		float: right;
	}
</style>

<!--
			this.echarts.setOption({
//			myChart1.setOption({
				title: {
					text: '访问量',
					subtext: '7527'
				},
				tooltip: {
					trigger: 'axis'
				},				    
				grid: {
			        left: '0%',
			        right: '4%',
			        bottom: '2%',
			        containLabel: true
			    },
				legend: {
					data: ['意向', '预购', '成交']
				},
				toolbox: {
					show: true,
					feature: {
						mark: {
							show: true
						},
//数据视图，打开数据视图，可设置更多属性,readOnly 默认数据视图为只读(即值为true)，可指定readOnly为false打开编辑功能
//						dataView: {
//							show: true,
//							readOnly: false
//						},
//切换类型 magicType，动态类型切换，支持直角系下的折线图、柱状图、堆积、平铺转换
//						magicType: {
//							show: true,
//							type: ['line', 'bar', 'stack', 'tiled']
//						},
//						还原
//						restore: {
//							show: true
//						},
//						是否保存为图片 保存图片（IE8-不支持）,图片类型默认为'png' 
//						saveAsImage: {
//							show: true
//						}
					}
			},
//				是否启用拖拽重计算特性，默认关闭(即值为false) 
				calculable: true,
//				直角坐标系中横轴数组，数组中每一项代表一条横轴坐标轴，仅有一条时可省略数值  
//				横轴通常为类目型，但条形图时则横轴为数值型，散点图时则横纵均为数值型
			    xAxis: {
				        type: 'category',
				        boundaryGap: false,
				        //类目型坐标轴文本标签数组，指定label内容。 数组项通常为文本，'\n'指定换行
				        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				    },
			    yAxis: {
				        type: 'value'
				    },
			    series: [{
			         	//图表类型，必要参数！如为空或不支持类型，则该系列数据不被显示。 
				        type: 'line',
				        //显示策略，可选为：true（显示） | false（隐藏），默认值为true
				        smooth: true,	
 //系列中的数据内容数组，折线图以及柱状图时数组长度等于所使用类目轴文本标签数组axis.data的长度，并且他们间是一一对应的。数组项通常为数值 
				        data: [820, 932, 901, 934, 1290, 1330, 1320],
			           //系列中的数据标注内容  
//                      markPoint: {  
//                          data: [  
//                              {type: 'max', name: '最大值'},  
//                              {type: 'min', name: '最小值'}  
//                          ]  
//                      }, 
                        //系列中的数据标线内容  
//                      markLine: {  
//                          data: [  
//                              {type: 'average', name: '平均值'}  
//                          ]  
//                      } 
//						设置图片颜色
				        itemStyle:{
                        	normal:{
                            	color:'#4a148c'
                        	}
                    	},
//                  	区域风格
				        areaStyle: {}
				    }]
				}),-->