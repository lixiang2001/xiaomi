<template>
  <div class="index">
    <div class="container">
      <!-- 轮播图 -->
        <div class="swiper-box">
            <div class="nav-menu">
                <ul class="menu-wrap">
                    <li class="menu-item">
                        <a href="javascript:;">手机 电话卡</a>
                        <div class="children">
                            <ul v-for="(item,index) in menuList" :key="index">
                                <li v-for="(sub,index) in item" :key="index">
                                    <a :href="sub?'/#/product/'+sub.id:'javascript:;'">
                                        <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                        {{sub.name?sub.name:'小米9'}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">电视 盒子</a>
                        <div class="children">
                            <ul v-for="(item,index) in menuList" :key="index">
                                <li v-for="(sub,index) in item" :key="index">
                                    <a :href="sub?'/#/product/'+sub.id:'javascript:;'">
                                        <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                        {{sub.name?sub.name:'小米9'}}
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">笔记本 平板</a>
                        <div class="children">
                            <ul v-for="(item,index) in menuList" :key="index">
                                <li v-for="(sub,index) in item" :key="index">
                                    <a :href="sub?'/#/product/'+sub.id:'javascript:;'">
                                        <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                        {{sub.name?sub.name:'小米9'}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">家电 插线板</a>
                       <div class="children">
                            <ul v-for="(item,index) in menuList" :key="index">
                                <li v-for="(sub,index) in item" :key="index">
                                    <a :href="sub?'/#/product/'+sub.id:'javascript:;'">
                                        <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                        {{sub.name?sub.name:'小米9'}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">出行 穿戴</a>
                       <div class="children">
                            <ul v-for="(item,index) in menuList" :key="index">
                                <li v-for="(sub,index) in item" :key="index">
                                    <a :href="sub?'/#/product/'+sub.id:'javascript:;'">
                                        <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                        {{sub.name?sub.name:'小米9'}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">智能 路由器</a>
                        <div class="children">
                            <ul v-for="(item,index) in menuList" :key="index">
                                <li v-for="(sub,index) in item" :key="index">
                                    <a :href="sub?'/#/product/'+sub.id:'javascript:;'">
                                        <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                        {{sub.name?sub.name:'小米9'}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">电源 配件</a>
                        <div class="children">
                            <ul v-for="(item,index) in menuList" :key="index">
                                <li v-for="(sub,index) in item" :key="index">
                                    <a :href="sub?'/#/product/'+sub.id:'javascript:;'">
                                        <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                        {{sub.name?sub.name:'小米9'}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">生活 出行</a>
                        <div class="children">
                            <ul v-for="(item,index) in menuList" :key="index">
                                <li v-for="(sub,index) in item" :key="index">
                                    <a :href="sub?'/#/product/'+sub.id:'javascript:;'">
                                        <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                        {{sub.name?sub.name:'小米9'}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) in slideList" :key="index">
                <a :href="'/#/product/'+item.id">
                    <img :src="item.img" />
                </a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>

      <!-- 4个广告位 -->
      <div class="ads-box">
        <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
          <img v-lazy="item.img">
        </a>
      </div>

      <!-- 最大的广告图 -->
      <div class="bann">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt />
        </a>
      </div>
    </div>

    <!-- 最底部的产品模块 -->
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href>
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt />
            </a>
          </div>

          <div class="list-box">
            <div class="list" v-for="(arr,index) in phoneList" :key="index">
              <div class="item" v-for="(item,j) in arr" :key="j">
                <span :class="{'new-pro':j%2==0}">新品</span>
                <div class="item-img">
                  <img v-lazy="item.mainImage" alt />
                </div>
                <div class="item-info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.subtitle}}</p>
                  <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <service-bar></service-bar>
    <!-- 弹框 -->
    <modal
        title="提示"
        sureText="查看购物车"
        btnType="1"
        modalType="middle"
        v-bind:showModal="showModal"
        @submit="goToCart"
        @cancel="showModal = false">
        <template v-slot:body>
            <p>添加商品成功</p>
        </template>
    </modal>

  </div>
</template>
<script>
import ServiceBar from "../components/ServiceBar";
import modal from "../components/Modal";

import Vue from 'vue';
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay, EffectCube,Navigation} from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
SwiperClass.use([Pagination, Mousewheel, Autoplay, EffectCube,Navigation])
Vue.use(getAwesomeSwiper(SwiperClass))
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
import 'swiper/swiper-bundle.css'


// import "swiper/swiper-bundle.css";

export default {
  name: "index",
  components: {
    ServiceBar,
    SwiperClass,
    SwiperSlide,
    modal,
  },
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,

        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6,
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        pagination: {
          el: ".swiper-pagination",
          clickable :true,
        },
      },

      slideList: [
        {
          id: "42",
          img: "imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "imgs/slider/slide-2.jpg",
        },
        {
          id: "",
          img: "imgs/slider/slide-3.jpg",
        },
        {
          id: "",
          img: "imgs/slider/slide-4.jpg",
        },
        {
          id: "",
          img: "imgs/slider/slide-5.jpg",
        },
      ],

      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },

        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg",
        },

        {
          id: 45,
          img: "/imgs/ads/ads-3.png",
        },

        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
      menuList:[
          [
              {
                  id:30,
                  img:'/imgs/item-box-1.png',
                  name:"小米cc9"
              },
               {
                  id:31,
                  img:'/imgs/item-box-2.png',
                  name:"小米8青春版"
              },
               {
                  id:32,
                  img:'/imgs/item-box-3.jpg',
                  name:"Redmi k20 Pro"
              },
               {
                  id:33,
                  img:'/imgs/item-box-4.jpg',
                  name:"4G专区"
              },
          ],
          [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],

      phoneList: [],
      showModal: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
   
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 14,
          },
        })
        .then((res) => {
          res.list = res.list.slice(6, 14);
          console.log(res.list);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
          console.log(this.phoneList);
        });
    },

    addCart(id) {
      this.showModal = true;
      this.axios.post('/carts',{
          productId:id,
          selected:true
      }).then((res)=>{
           this.showModal= true;
           this.$store.dispatch('setCartCount',res.cartTotalQuantity);
      }).catch(()=>{
          this.showModal= true;
      })
    },

    goToCart() {
      this.$router.push("/cart");
    },
  },


};
</script>
<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";

.index {

  .swiper-box {
    .nav-menu{
        position: absolute;
        width:264px;
        height:451px;
        z-index: 9;
        padding: 26px 0px;
        background-color:#55585a85;
        box-sizing: border-box;
        .menu-wrap{
            .menu-item{
                height:50px;
                line-height: 50px;
                a{
                    font-size: 16px;
                    color:#ffffff;
                    padding-left:30px;
                    position:relative;
                    display:block;
                    &:after{
                        content:' ';
                        position: absolute;
                        right:30px;
                        top:17.5px; 
                        @include bgImg(10px,15px,'/imgs/icon-arrow.png')
                    }
                }
                &:hover{
                    background-color:$colorA;
                    .children{
                        display:block;
                    }
                }

                .children{
                    display:none;
                    width:962px;
                    height:451px;
                    background-color:$colorG;
                    position:absolute;
                    top:0px;
                    left:264px;
                    border:1px solid $colorH;
                    ul{
                      display:flex;
                      justify-content: space-between;
                      height:75px;
                      li{
                          height:75px;
                          line-height:75px;
                          flex:1;
                          padding-left:23px;
                          a{
                              color:$colorB;
                              font-size:14px;
                          }
                          img{
                              width:42px;
                              height:35px;
                              vertical-align: middle;
                              margin-right:15px;
                          }
                      }  
                    }
                }
            }
        }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev{
          left:272px
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .bann {
    height: 130px;
    margin-bottom: 50px;
    a {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  //
  .product-box {
    background-color: $colorJ;
    padding-top: 30px;
    padding-bottom: 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }

      .list-box {
        .list {
          width: 986px;
          @include flex();
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0px;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align-last: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: $colorG;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                height: 195px;
                width: 100%;
              }
            }
            .item-info {
              h3 {
                font-size: 14px;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              p {
                font-size: 12px;
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: $colorA;
                font-size: 14px;
                font-weight: 700;
                cursor: pointer;
                &:after {
                  content: " ";
                  @include bgImg(20px, 20px, "/imgs/icon-cart-hover.png");
                  vertical-align: middle;
                  margin-left: 5px;
                }
              }
            }
          }
        }
      }
    }
  }

}
</style>