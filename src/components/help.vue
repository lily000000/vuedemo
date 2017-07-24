<template>
	<div class='help'>
		<table>
		<thead>
			<tr>
				<td>商品</td>
				<td>销售时间</td>
				<td>价格(元)</td>
				<td>操作</td>
			</tr>
		</thead>
		<tbody>
			<tr v-for='shop in name'>
				<td>{{shop.name}}</td>
				<td>{{shop.time}}</td>
				<td>{{shop.pice}}</td>
				<td @click="deleteo()"><button>{{shop.delete}}</button></td>
			</tr>
		</tbody>	
		</table>
	</div>
</template>

<script>
export default {
  name: 'help',
  data () {
    return {
      name: [{
      	name: '晶钻水',
        time:'12:00',
        pice:  2,
        delete: '删除'
      },{
      	name: '娃哈哈',
        time:'12:00',
        pice:  4,
         delete: '删除'
      },{
      	name: '启力',
        time:'12:00',
        pice:  3,
        delete: '删除'
      }
      ]
    } 
},
    methods:{
    	deleteo:function(index){
    		this.name.splice(index,1);
    	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.help{
	margin-top:20px; 
}
.help table thead tr td{
	background: #5dbede;
}
.help table tr td{
	width: 300px;
	font-size: 20px;
	background: #fc9870;
	text-align: center;
	line-height: 30px;
}
thead tr td{
	height: 20px;
}
button{
	width: 80px;
	line-height: 20px;
	background: #9c9;
	color:#ffffff;
}
</style>
