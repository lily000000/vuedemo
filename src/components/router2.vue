<template>
  <div class="router2">
    <h1>{{ router2 }}</h1>
    <p><input type="text" name="" v-model='message'></p>
    <button v-on:click="greet">click事件直接绑定一个方法</button><!--绑定其他-->
    <button v-on:click='say("click事件绑定它自己")'>click事件绑定它自己</button><!--绑定他自己-->
  </div>
</template>

<script>
export default {
  name: 'router2',
 /* message:'hello world!',*/
  data () {
    return {
      router2: '见证奇迹的时候到了2',
      message:'hello world!',
    }
  },
  methods:{
  	greet: function() {
  	// // 方法内 `this` 指向 vm
  	    alert(this.message)
  	    },
  	say: function(msg) {
  	    alert(msg)
  	    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
