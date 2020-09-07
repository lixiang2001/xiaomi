<template>
   <div class="product">
       <product-param :title="product.name">
           <template v-slot:buy>
                <button class="btn" @click="buy()">立即购买</button>        
           </template>
       </product-param> 
        <div class="content">
            <div class="item-bg">
                <h2>{{product.name}}</h2>
                <h3>{{product.subtitle}}</h3>
                <p>
                    <a href="javascript:;">全球首款双频 GP</a>
                    <span>|</span>
                    <a href="javascript:;">晓龙845</a>
                    <span>|</span>
                    <a href="javascript:;">AI 变焦双摄</a>
                    <span>|</span>
                    <a href="javascript:;">红外人脸识别</a>
                </p>
                <div class="price">
                    <span>￥</span>
                    <em>{{product.price}}</em>
                </div>
            </div>
            <div class="item-bg-2"></div>
            <div class="item-bg-3"></div>
            <div class="item-swiper">
                <swiper :options="swiperOptions">
                    <swiper-slide style="width: 614.333px; margin-right: 30px; height:614.33;"><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
                    <swiper-slide style="width: 614.333px; margin-right: 30px; height:614.33;"><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
                    <swiper-slide style="width: 614.333px; margin-right: 30px; height:614.33;"><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
                    <swiper-slide style="width: 614.333px; margin-right: 30px; height:614.33;"><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
                    <swiper-slide style="width: 614.333px; margin-right: 30px; height:614.33;"><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>

            <div class="item-video">
                <h2>
                    60帧超慢动作摄影
                    <br>
                    慢慢回味每一瞬间的精彩
                </h2>

                <p>
                    后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
                    <br>
                    更能AI 精准分析视频内容，15个场景智能匹配背景音效。 
                </p>

                <div class="video-bg" @click="showslide = 'slideDown'"></div>
                <div class="video-box">
                    <div class="overlay" v-if="showslide=='slideDown'"></div>
                    <div class="video" :class="showslide">
                        <span class="icon-close" @click="showslide = 'slideUp'"></span>
                        <video src="/imgs/product/video.mp4"   controls></video>
                        <!-- muted  autoplay-->
                    </div>
                </div>
            </div>

        </div>

   </div>
</template>
<script>
    import ProductParam from './../components/ProductParam'

    import Vue from 'vue';
    import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay, EffectCube,Navigation} from 'swiper/swiper.esm'
    import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
    SwiperClass.use([Pagination, Mousewheel, Autoplay, EffectCube,Navigation])
    Vue.use(getAwesomeSwiper(SwiperClass))
    const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
    import 'swiper/swiper-bundle.css'

    export default {
        data() {
            return {
                    swiperOptions: {
                        autoplay:true,
                        slidesPerView : 3,
                        spaceBetween : 30,
                    freeMode:true,
                        // slidesPerGroup : 2,         //一组2个
                        // slidesPerGroupSkip: 3,      //分成3组

                        // centeredSlides : true,
                        // centeredSlidesBounds: true,

                        pagination: {
                        el: ".swiper-pagination",
                        clickable :true,
                        },
                    },

                    showslide:'',  //控制动画效果
                    product:{},   //商品信息
                }

            },
        name:"product",
        components:{
            ProductParam,
        },

        mounted() {
            this.getProductInfo();
        },
        methods:{
            getProductInfo(){
                let id = this.$route.params.id;
                this.axios.get(`/products/${id}`).then((res)=>{
                    this.product=res; 
                })
            },

            buy(){
                    let id = this.$route.params.id;
                    this.$router.push(`/detail/${id}`);
            }
        }
    }
</script>




<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
    .product{
        .h3{
            height: 70px;
        }
        button{
            margin-left:10px;
        }
        .item-bg{
            background: url(/imgs/product/product-bg-1.png) no-repeat 50%;
            height: 718px;
            text-align: center;
            h2{
                font-size: 80px;
                padding-top: 55px;
            }
            h3{
                font-size: 24px;
                letter-spacing: 10px;
            }
            p{
                margin-top: 21px;
                margin-bottom: 40px;
                a{
                    font-size: 16px;
                    color: #333;
                }
                span{
                    margin: 0 15px;
                }
            }
            .price{
                font-size: 30px;
                color: #333;
                em{
                    font-style: normal;
                    font-size: 38px
                }
            }


        }
        .item-bg-2{
            background: url(/imgs/product/product-bg-2.png) no-repeat 50%;
            height: 480px;
            background-size: 1226px 397px;
        }
        .item-bg-3{
            background: url(/imgs/product/product-bg-3.png) no-repeat 50%;
            height: 638px;
            background-size: cover;
        }
        .item-swiper{
            margin: 36px auto 52px;
            img{
                width:100%;
                // width:614.33px;
                // height:349px;
            }
        }

        .item-video{
            height: 1044px;
            background-color: #070708;
            margin-bottom: 76px;
            color: #fff;
            text-align: center;
            h2{
                font-size: 60px;
                padding-top: 82px;
                margin-bottom: 47px;
            }
            p{
                font-size: 24px;
                margin-bottom: 58px;
            }
            .video-bg{
                    background: url(/imgs/product/gallery-1.png) no-repeat 50%;
                    background-size: cover;
                    width: 1226px;
                    height: 540px;
                    margin: 0 auto 120px;
                    cursor: pointer;
            }

            .video-box{
                
                .overlay{
                    @include position(fixed);
                    background-color:$colorB;
                    opacity:.4;
                    z-index:12
                }

                @keyframes slideDown{
                    from{
                        top:-50%;
                        opacity:0;
                    }
                    to{
                        top:50%;
                        opacity: 1;
                    }
                }

                @keyframes slideUp{
                    from{
                        top:50%;
                        opacity: 1;
                    }
                    to{
                        top:-50%;
                        opacity: 0;
                    }
                }

                .video{
                    position: fixed;
                    top:-50%;
                    left:50%;
                    transform: translate(-50%,-50%);
                    z-index:13;
                    width:1000px;
                    height:536px;
                    opacity: 0;
                    
                    &.slideDown{
                        animation: slideDown .6s linear;
                        animation-fill-mode: forwards;
                        top:50%;
                    }

                    &.slideUp{
                        animation: slideUp .6s linear;
                        animation-fill-mode: forwards;
                    }

                    //transition: all .6s;
                    // &.slide{
                    //     top:50%;
                    //     opacity:1;
                    // }

                    .icon-close{
                        @include bgImg(20px,20px,'/imgs/icon-close.png');
                        position:absolute;
                        top:20px;
                        right:20px;
                        cursor:pointer;
                        z-index: 14;
                    }
                    video{
                        width:100%;
                        height:100%;
                        object-fit: cover;      //内容视频窗口
                    }
                }
            }   
        }

    }
</style>