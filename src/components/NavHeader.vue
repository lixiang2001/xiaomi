<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                     <a href="javascript:;">小米商城</a>
                     <a href="javascript:;">MUI</a>
                     <a href="javascript:;">云服务</a>
                     <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                     <a href="javascript:;" v-if="username">{{username}}</a>
                     <a href="javascript:;" v-if="!username" @click="login()">登录</a>
                     <a href="javascript:;" v-if="username"  @click="logout()">退出</a>
                     <a href="/#/order/list" v-if="username">我的订单</a>
                     <a href="javascript:;" class="my-cart" @click="goToCart()"><span class="icon-cart"></span>购物车({{cartCount}})</a>
                </div>
            </div>
        </div>

        <div class="nav-barder">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">

                    <div class="item-menu">
                        <span>小米</span>
                        <div class="children">
                            <ul>

                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a :href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}元</div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children"></div>
                    </div>

                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <li class="product">
                                    <a href="javascript:;" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>

                                <li class="product">
                                    <a href="javascript:;" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>

                                <li class="product">
                                    <a href="javascript:;" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-3.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>

                                <li class="product">
                                    <a href="javascript:;" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>

                                <li class="product">
                                    <a href="javascript:;" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>

                                <li class="product">
                                    <a href="javascript:;" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-6.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">1799元</div>
                                    </a>
                                </li>
                        </div>
                    </div>

                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    name:'nav-herder',
    data(){
        return {
          //  username:this.$store.state.username,
            phoneList:[],

        }
    },
    filters:{
        currency(val){
            if(!val)return '0.00';
            return '￥'+val.toFixed(2)+'元';
            //toFixed()   对小数进行四省五入 
        }
    },
    mounted(){
        this.getProductList();
        let Params = this.$route.params;
        if(Params && Params.from){          //只有从登陆页面跳转过来时才会 主动获取购物车商品数量
             this.getcartCount(); 
        }
       
    },
    computed: {         //数据监听

        // username(){
        //     return this.$store.state.username;
        // },

        // cartCount(){
        //     return this.$store.state.cartCount;
        // }

        //监听 vuex中的用户名 购物车商品数量 数据 ，因为先加载这个组件 然后加载App.vue这个组件,
        //  所以前期渲染这个组件时是没有数据的,所以需要数据监听，等有数据就立即渲染出来。
        ...mapState(['username','cartCount'])
             
    },

    methods:{
        //获取6条商品数据
        getProductList(){
            this.axios.get('/products',{
                params:{
                    categoryId:'100012',
                    pageSize:6   
                }
            }).then((res)=>{
                    this.phoneList = res.list;
                    console.log(this.phoneList);
            })
        },

        //跳转到登录页面
        login(){
            this.$router.push('/login');
        },

        //跳转 购物车列表页面
        goToCart(){
            this.$router.push('/cart');
        },

        //退出登录
        logout(){
            this.axios.post('/user/logout').then((res)=>{
                this.$message.success('退出成功');
                //清除cookie中保存的 token
                this.$cookie.set('userid','',{expires:'-1'})   //expires:'-1'   即可过期
                //清除Vuex中的数据
                this.$store.dispatch('setUserName','');
                this.$store.dispatch('setCartCount','0');
            })
        },

    
        //获取用户购物车的商品数量
        getcartCount(){
            this.axios.get('/carts/products/sum').then((res=0)=>{
                this.$store.dispatch('setCartCount',res);
            })
        }
        
    },
}
</script>
<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
    .header{
        .nav-topbar{
            height: 39px;
            line-height:39px;
            background-color:#333333;
            color:#b0b0b0;
            .container{
                @include flex();
                a{
                    display:inline-block;
                    color:#b0b0b0;
                    margin-right: 17px;
                }
              
                .my-cart{
                    width:110px;
                    background-color:#ff6600;
                    text-align:center;
                    color:white;
                    margin-right:0px;
                    .icon-cart{
                        @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                            margin-right:4px;
                    }
                }
            }
        }
        .nav-barder{
            .container{
                position: relative;
                height: 112px;
                @include flex();        //调用scss里的函数

                .header-menu{
                    width: 643px;
                    display:inline-block;
                    padding-left:209px;
                    .item-menu{
                        display:inline-block;
                        color:#333333;
                        font-weight: bold;
                        font-size:16px;
                        line-height:112px;
                        margin-right: 20px;
                        span{
                            cursor:pointer
                        }
                        &:hover{
                            color:$colorA;
                            .children{
                                height:220px;
                                opacity: 1;
                                
                            }
                        }
                        .children{
                            position:absolute;
                             z-index:100;
                            top:112px;
                            left:0px;
                            width:1226px;
                            height:0px;
                            opacity: 0;
                            overflow: hidden;
                            border-top:1px solid #e5e5e5;
                            box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                            transition:all .5s;
                            background-color:#ffffff;
                           
                            .product{
                                float:left;
                                width:16.6%;
                                height:220px;
                                font-size:12px;
                                line-height: 12px;
                                text-align: center;
                                position: relative;
                            
                                a{display:inline-block}
                                img{
                                    width:auto;
                                    height:111px;
                                    margin-top:26px;
                                }
                                .pro-img{
                                    height:137px;
                                }
                                .pro-name{
                                    font-weight: bold;
                                    margin-top:19px;
                                    margin-bottom:8px;
                                    color:$colorB;
                                }
                                .pro-price{
                                    color:$colorA
                                }
                                &:before{
                                    content:' ';
                                    width:1px;
                                    height:100px;
                                    border-left:$colorF solid 1px;
                                    position:absolute;
                                    top:28px;
                                    right:0px;
                                }
                                &:last-child:before{
                                    display:none;
                                }

                            }
                        }
                    }
                }
                .header-search{
                    width:319px;
                    .wrapper{
                       height:50px;
                       border:1px solid #e0e0e0;
                       display:flex;
                       align-items:center;
                       input{
                           box-sizing: border-box;
                           height:50px;
                           width:264px;
                           border:none;
                           border-right:1px solid #e0e0ee;
                           padding-left:14px;
                       }
                       a{   
                           @include bgImg(18px,18px,'/imgs/icon-search.png');
                           margin-left:14px;
                       }
                    }
                }
            }
        }
    }
</style>