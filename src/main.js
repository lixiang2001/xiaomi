import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'

//按需引入elementUI 中的组件和插件
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import store from './store'


const mock = true;
if(mock){
  //require和import的区别就在于 import预编译加载文件     require代码编译时加载文件，好处就是当我们mock变量为false是就不会加载mockApi文件了
  require('./mock/api');
};

Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueAxios,axios);     //引用插件
Vue.use(VueCookie);     //引用插件
Vue.config.productionTip = false;

//根据前端的跨域方式做调整
axios.defaults.baseURL='/api';       //基础路径
axios.defaults.timeout=8000;      //请求超时 统一报错

//axios.defaults.baseURL=env.baseURL;       //基础路径

//请求响应 拦截
axios.interceptors.response.use(function (response) {
  let path = location.hash;
  console.log(path);
  
  let res = response.data;
  if(res.status == 0){
      return res.data;
  }else if(res.status == 10){

    if(path != '#/index'){
      window.location.href="/#/login";
    }
    return Promise.reject(res);
       
  }else{
    //alert(res.msg);
    Message.warning(res.meg)
    return Promise.reject(res);
  }   
},
(error)=>{     //第二个回调是拦截http状态码 进行判断
    console.log(error);
    let res = error.response;
    console.log(res);
    Message.error(res.data.message);
    return Promise.reject(res);
}
);

//全局插件方式按需导入elementUI
Vue.prototype.$message = Message;
//console.log(Vue.prototype.$message);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
