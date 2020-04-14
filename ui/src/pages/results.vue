<template>
  <div>
    <h1>结果页</h1>
    <div>{{template}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      template: ""
    };
  },
  mounted() {
    let template = `
				<ul>
				<% for(let i=0; i < 5; i++) { %>
					<li><%= [i] %></li>
				<% } %>
				</ul>
				`;
    this.template = template;
  }
};
</script>

<style>
</style>