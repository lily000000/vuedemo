<template>
  <div class="router1">
    <router-link to='/router3'><h1>{{ router1 }}</h1></router-link>
   
     <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'router1',
  data () {
    return {
      router1: '见证奇迹的时候到了1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
