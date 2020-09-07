<template>
    <div class="nav-bar" :class="{'is_fixed':isFixed}">
        <div class="container">
            
                <div class="pro-title">
                    {{title}}
                </div>

                <div class="pro-param">
                    <a href="">概述</a><span>|</span>
                    <a href="">参数</a><span>|</span>
                    <a href="">用户评价</a>

                    <slot name="buy"></slot>

                </div>

        </div>
    </div>
</template>
<script>
export default {
    name:'nav-bar',
    props:{
        title:String
    },
    data() {
        return {
            isFixed:false,
        }
    },
    mounted() {
        window.addEventListener('scroll',this.initHeight)
        console.log(this.initHeight);
        console.log(this.isFixed);
    },
    methods:{
        initHeight(){
             let scrollTop = window.pageYOffset || document.documentElement.scrollTop|| document.body.scrollTop;
             this.isFixed = scrollTop > 152 ? true : false;
        }
    },
    //组件销毁后
    Destroyed(){
        window.removeEventListener('scroll',this.initHeight,false)
    }

}
</script>

<style lang="scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';
    .nav-bar{
        &.is_fixed{
             width:100%;
            position:fixed;
            top:0;
              box-shadow: 0 5px 5px $colorE;
              z-index: 11;
        }
        height:70px;
        line-height:70px;
        border-top:1px solid $colorH;
        background-color:$colorG;
      
        .container{
            @include flex();
            .pro-title{
                font-size:18px;
                color:$colorB;
                font-weight:bold;
                
            }
            .pro-param{
                font-size:14px;
                span{
                    margin:0px 10px;
                }
                a{
                    color:$colorC;
                }
               
            }
        }
    }
</style>