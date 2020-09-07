<template>
   <div>
       <!-- <order-header :title="title">
           <template v-slot:tip>
               <span>{{tip}}</span>
           </template>
       </order-header> -->
       
       <router-view></router-view>
       <service-bar></service-bar>
       <nav-footer></nav-footer>
   </div>
</template>
<script>
import orderHeader from '../components/OrderHeader'
import ServiceBar from '../components/ServiceBar'
import NavFooter from '../components/NavFooter'
export default {
    name:"nav-home",
    components:{
        NavFooter,
        // orderHeader,
        ServiceBar
    },
    data() {
        return {
            title:"",
            tip:"",
        }
    },
    
    mounted() {  //下面这个判断 在子路由切换时是无效的(比如confirm 跳转到list时 这个判断不会执行)。如果从cart页面跳转过来时则会执行判断
        let path = this.$route.path;
        if(path == '/order/confirm'){
            this.title='订单确认';
            this.tip = '请认真填写收货地址';
        }else if(path == '/order/list'){
             this.title='订单列表';
            this.tip = '谨防钓鱼连接或者咋骗电话，了解更多>';
        }else if(path == '/order/pay'){
            this.title='订单支付';
            this.tip = '谨防钓鱼连接或者咋骗电话，了解更多>';
         }
    },

}
</script>