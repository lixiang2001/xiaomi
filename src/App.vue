<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import jsonp from 'jsonp'

export default {
  data() {
    return {
  
    }
  },
  mounted(){
    
    
  },
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
