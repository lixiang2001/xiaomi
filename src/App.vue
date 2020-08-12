<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
 //import axios from 'axios'
import jsonp from 'jsonp'

export default {
  data() {
    return {
      age:30,
      data:"",
    }
  },
  mounted(){
    //访问一下后端设置好的Cors跨域的接口
        // let url = "http://mengxuegu.com:7300/mock/5ee1078aaed99d0634618f25/member/list";
        // axios.get(url).then(()=>{

        // })

    //jsonp跨域
    let url = "https://www.imooc.com/common/adver-getadver";
    jsonp(url,(err,res)=>{
        this.data = res;
    })
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
