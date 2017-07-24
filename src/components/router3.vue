<template>
	<p @click='goFirst'>子组件</p>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
			}
		},
		methods:{
			goFirst:function(){
				this.$router.push({ path: 'login'})
			}

		}
	}
</script>