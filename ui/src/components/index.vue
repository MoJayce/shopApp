<template>
  <div class="index">
    <el-container>
      <el-header>
        <Top />
      </el-header>
      <el-container class="content">
        <el-aside min-width="200px" min-height = '100%'>
            <LeftBar style="min-height:100%" />
        </el-aside>
        <el-main class="zhongjian">
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <!-- <el-container>
      <el-header>
        <top></top>
      </el-header>

      <el-container>
        <el-aside style="max-width:260px;overflow:hidden">
          <leftBar :style="{height}"></leftBar>
        </el-aside>
    <el-main>-->
    <!--<matter></matter>-->
    <!-- <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>-->
  </div>
</template>
<script>
import LeftBar from "./left_bar";
import Top from "./top";
//  import matter  from  './matter'
export default {
  name: "index",
  components: {
    LeftBar,
    Top
  },
  data() {
    return {
      height: ""
    };
  },
  created() {
    document.title = "首页";
  },
  mounted() {
    var dih = document.body.scrollHeight;
    //			console.log(dih),
    this.height = dih + "px";
    this.$store.state.tab1Name = "fenxi";
  },
  watch: {
    dih: function(val, oldVal) {
      console.log(val + "and" + oldVal);
    }
  }
};
</script>
<style scoped>
.index {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
}
.el-header{
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 999;
}
.content{
  margin-top: 60px;
}
.left_bar {
  width: 100%;
  /*height: 100%;*/
  background: rgb(84, 92, 100);
  /* box-shadow: 20px 0px 6px #000000; */
}

.top {
  width: 100%;
  height: 100%;
  background: #29abe2;
}
.matter {
  width: 100%;
  height: 100%;
  /*background: #e5d3d1;*/
}
.el-header,
.el-footer {
  background-color: #29abe2;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  min-height: 100%;
  position: fixed;
  top: 60px;
  left: 0;
  /* color: #333; */
  background: rgb(84, 92, 100);
  text-align: center;
  line-height: 200px;
}

.el-main {
  /* max-width: 80%; */
  margin-left: 300px;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
  /*overflow: inherit;*/
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>