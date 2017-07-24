<template>
  <div class="hello clearfix">
  <ul>
    <router-link to='/router1'><li>首页</li></router-link>
     <router-link to='/shop'><li>产品展示</li></router-link>
    <router-link to='/help'><li>新品上市</li></router-link>
    <router-link to='/router2'><li>促销热卖</li></router-link>
    <router-link to='/router3'><li>品牌故事</li></router-link>
     <router-link to='/router3'><li>售后服务</li></router-link>
  </ul>

  <div><input type="" name=""></div>   
  </div>
</template>
<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  margin-left: 50px; 
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  width: 1200px;
  margin: auto;
}
.hello ul{
  float: left;
}
.hello div{
  float: left;
  margin-top: 23px;  

}
.hello div>input{
  border: 1px solid rgb(66, 185, 131);
  border-radius: 5px; 
  height:25px;
 /*  margin-left:50px; */ 

}
.clearfix:after{
  content: '';
  display: block;
  height: 0;
  font-size: 0;
  visibility: hidden;
  clear: both;
}
.router-link-active{
    color: red;
  }
</style>
