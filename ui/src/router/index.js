import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


const index = resolve => {require(['../components/index'], resolve)};   //index
const welcome = resolve => {require(['../components/welcome'], resolve)};   //welcome
const login = resolve => {require(['../components/login'], resolve)};   //login
const left_bar = resolve => {require(['../components/left_bar'], resolve)};   //left_bar
const fenxi = resolve => {require(['../pages/fenxi'], resolve)};   //fenxi
const monitoring = resolve => {require(['../pages/monitoring'], resolve)};   //fenxi
const working = resolve => {require(['../pages/working'], resolve)};   //working
const basicForm = resolve => {require(['../pages/basicForm'], resolve)};   //basicForm
const stepForm = resolve => {require(['../pages/stepForm'], resolve)};   //stepForm
const supplier = resolve => {require(['../supplier/supplier'], resolve)};   //supplier供应商
const addSupplier = resolve => {require(['../supplier/addSupplier'], resolve)};   //addSupplier新增供应商
const updateSupplier = resolve => {require(['../supplier/updateSupplier'], resolve)};   //updateSupplier修改供应商

const basisDetail = resolve => {require(['../detail/basisDetail'], resolve)};   //search
const results = resolve => {require(['../pages/results'], resolve)};   //results
const standard = resolve => {require(['../supplier/standard'], resolve)};   //standard 






Vue.use(Router);

export default new Router({
  routes: [{
  		path: '/',
  		redirect: '/welcome'	//如果地址为空时重定向为 /index
  	},
  	{
  		path: '/index',
  		component: index, //模板
      children: [
      	{path: '/pages/fenxi', component: fenxi},
        {path: '/pages/results', component: results},
        {path: '/pages/monitoring',component: monitoring},
        {path: '/pages/working',component: working},
        {path: '/pages/basicForm',component: basicForm},
        {path: '/supplier/supplier',component: supplier},//供应商管理
        {path: '/supplier/addSupplier',component: addSupplier},//新增供应商
        {path: '/supplier/updateSupplier',component: updateSupplier},//修改供应商
        {path: '/pages/stepForm',component: stepForm},
        {path: '/detail/basisDetail',component: basisDetail},
        {path: '/supplier/standard',component: standard},
      ]
  	}, 
  	{
  		path: '/welcome',
  		component: welcome //模板
  	}, 
  	{
  		path: '/login',
  		component: login //模板
  	},
  	{
  		path: '/left_bar',
  		component: left_bar //模板
  	}
  ]
})
