// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import ElementUI from 'element-ui';  //引用element-ui框架
import '.././node_modules/element-ui/lib/theme-chalk/index.css' ;    // 引用element-ui框架主题
import animate from 'animate.css'
import vue2Animate from 'vue2-animate/dist/vue2-animate.min.css'
import Vuex from 'vuex'
import store from './vuex/store'
import Icon from 'vue-svg-icon/Icon.vue' //引入
import axios from 'axios';
import echarts from 'echarts'//引入图表插件

import VueQuillEditor  from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
 
 
Vue.use(VueQuillEditor);
Vue.component('icon', Icon) //注册
Vue.prototype.$echarts = echarts 
Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(MuseUI);
Vue.use(ElementUI);  //使用UI框架
Vue.use(animate);
Vue.use(vue2Animate);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
