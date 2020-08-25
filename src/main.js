import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import store from './store'
// import env from './env'

Vue.use(VueAxios,axios);     //引用插件
Vue.config.productionTip = false

//根据前端的跨域方式做调整
axios.defaults.baseURL='/api';       //基础路径
axios.defaults.timeout=8000;      //请求超时 统一报错

//axios.defaults.baseURL=env.baseURL;       //基础路径

//请求响应 拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if(res.status == 0){
      return res.data;
  }else if(res.status == 10){
        window.location.href="/#/login"
  }else{
    alert(res.msg);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
