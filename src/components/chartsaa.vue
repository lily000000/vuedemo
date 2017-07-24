<template>
	<div>
		 <x-chart :id="id" :option="option"></x-chart>
	</div>
</template>
<script type="text/javascript">
	import XChart from '../components/chart.vue'
	// 导入chart组件模拟数据
	import options from '../chart-options/options.js'
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
	    XChart
	   
	   
	  } //注册组件
	}
</script>