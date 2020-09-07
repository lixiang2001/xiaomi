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
    if(this.$cookie.get('userid')){
        this.getUser();
        this.getcartCount();
    }
    
  },

  methods:{
    //在这里调用这两个方法的原因就是 vuex刷新页面数据就会清空 ，所以刷新页面时先在这里获取数据重新存入vuex中

      //获取用户信息 
      getUser(){
        this.axios.get('/user').then((res={})=>{
            this.$store.dispatch('setUserName',res.username);
        })
      },

      //获取用户购物车的商品数量   第一次调用该方法
      getcartCount(){
          this.axios.get('/carts/products/sum').then((res=0)=>{
              this.$store.dispatch('setCartCount',res);
          })
      }
      
  },
  
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">
  @import './assets/scss/reset.scss';
  @import './assets/scss/config.scss';
  @import './assets/scss/mixin.scss';
  @import './assets/scss/modal.scss';
  @import './assets/scss/button.scss';
</style>
