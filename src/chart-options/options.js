module.exports = {
  bar: {
    chart: {
    		type:'column'//指定图表的类型，默认是折线图（line）
    		},
    		credits: {
    		  enabled:false
    		},//去掉地址
    		title: {
    			text: '我的第一个图表' //指定图表标题
    		},
    		colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00',
    			    '#24CBE5'  ],
    		xAxis: {
    				categories: ['海创大厦1号', '海创大厦2号', '海创大厦3号','海创大厦3号','海创大厦3号'] //指定x轴分组
    			},
    		yAxis: {
    				title: {
    				text: '最近七天', //指定y轴的标题

    			},
    			},
    		plotOptions: {
    			    column: {
    			    colorByPoint:true
    			        },
    			    },
    			
    		series: [{ //指定数据列
    				name: '小明',
    				data: [{
    					y:1000,
    				    color:"red"}, 5000, 4000,5000,2000] //数据
    			}]
  }
}