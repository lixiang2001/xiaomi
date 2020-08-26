<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  data() {
    return {
      res:{}
    }
  },
  mounted(){
    //请求本地文件中的json数据文件      因为是json静态文件所有在public下创建的mock文件存储json数据
    // this.axios.get('/mock/user/info.json').then((response)=>{
    //   this.res = response;
    // })

    //请求easyMock中的模拟接口数据
    // this.axios.get('/member/list').then((res)=>{
    //   console.log(res);
    //   this.res = res;
    // })

    //使用继承mockApi进行模拟数据  在src创建mock文件下封装的mockApi   特定就是请求的时候会被拦截所有notwoke下面是没有请求记录的
    this.axios.get('/user/info').then((res)=>{
      this.res = res
    })
    
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
