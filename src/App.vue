<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import storage from './storage/index'
export default {
  data() {
    return {
  
    }
  },
  mounted(){
    console.log(storage);

    storage.setItem('a',1);
    // storage.setItem("salary",4500,"user");    //在模块中添加数据

    //storage.setItem("salary",4500,"user1");    如果在没有的模块中添加数据 就会报错

    // console.log(storage.getItem('user'));    
    // console.log(storage.getItem('a'));
    // console.log(storage.getItem('salary'));

    storage.clear('a');

    
  },
  name: 'App',
  components: {

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
