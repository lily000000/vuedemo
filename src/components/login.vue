<template>
	<div>
		<input type="text" name="">
		<input type="text" name="">
		<button>登录</button>
		<button @click='back'>返回</button>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
			}
		},
		methods:{
			back:function(){
				this.$router.push({ path: 'router3'})
			}

		}
	}
</script>
