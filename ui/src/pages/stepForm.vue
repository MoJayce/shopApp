<template>
	<div class="step_form">
		<el-steps :active="active" finish-status="success" style="width: 50%;margin: 0 auto;">
		  <el-step title="步骤 1"></el-step>
		  <el-step title="步骤 2"></el-step>
		  <el-step title="步骤 3"></el-step>
		</el-steps>
		
		<el-button style="margin-top: 12px;" @click="prev">上一步</el-button>
		<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
		<div class="tips">
			<h4>说明</h4>
			<p>转账到支付宝账户</p>
			<p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
			
			<p>转账到银行卡</p>
			<p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
		</div>
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	        active: 0
	      };
	    },
	
	    methods: {
	      next() {
	        if (this.active++ > 2) this.active = 0;
	      },
	      prev() {
	        if (this.active-- <0) this.active = 0;
	      }
	    }
	  }
</script>

<style scoped="scoped">
	.step_form{
		width: 100%;
		padding: 1%;
		background: #FFFFFF;
	}
	.tips{
		width: 100%;
		padding: 1%;
		text-align: left;
	}
	
</style>