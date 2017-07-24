import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import top from '@/components/top'
import router1 from '@/components/router1'
import router2 from '@/components/router2'
import router3 from '@/components/router3'
import login from '@/components/login'
import help from '@/components/help'
import shop from '@/components/shop'
import chartsaa from '@/components/chartsaa'
Vue.use(Router)

export default new Router({
	mode: 'history',
	hashbang: true, // 将路径格式化为#!开头
	history: true, // 启用HTML5 history模式，可以使用pushState和replaceState来管理记录
  routes: [
  {
    	path:'/router1',
    	name:'router1',
    	linkActiveClass: 'active',
    	component:router1

    },{
    	path:'/router2',
    	name:'router2',
    	component:router2
    },{
    	path:'/router3',
    	name:'router3',
    	component:router3
    },{
    	path:'/shop',
    	name:'shop',
    	component:shop
    },{
    	path:'/login',
    	name:'login',
    	component:login
    },{
    	path:'/shop',
    	name:'shop',
    	component:shop
    },{
    	path:'/help',
    	name:'help',
    	component:help
    },{
        path:'/chartsaa',
        name:'chartsaa',
        component:chartsaa
    }
  ]
})
