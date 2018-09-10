<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body,html{
    width: 100%;
    height: 100%!important;
    position: relative;
    top:0;
    margin: 0;
    padding: 0;
  }
  ul>li{
    list-style-type: none;
    margin:0;
    padding: 0;
  }
  #app{
    height: 100%;
    width: 100%;
    position: relative;
    top: 0;
  }
  .cell{
  	text-align: center!important;
  }
</style>
