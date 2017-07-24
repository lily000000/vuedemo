<template>
  <div id="app">
  <top></top>
    <x-chart :id="id" :option="option"></x-chart>
<!--     <img src="./assets/logo.png"> -->
    <transition name="router-fade" mode="out-in"><router-view></router-view></transition>
  </div>
</template>

<script>
import XChart from './components/chart.vue'
// 导入chart组件模拟数据
import options from './chart-options/options'

import top from "./components/top.vue";//引入
export default {
  name: 'app',
  data() {
     let option = options.bar
     return {
       id: 'test',
       option: option
     }
   },
  components: {
   
    top,
    XChart
   
   
  } //注册组件
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 .router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .2s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
} 
#test {
  width: 400px;
  height: 400px;
  margin: 40px auto;
}
</style>
