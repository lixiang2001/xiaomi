<template>
    <div class="order-header clearFloat">
        <div class="container">
            <div class="header-logo">
                <a href="/#/index"></a>
            </div>
            <div class="title">
                <h2>{{title}}<slot name="tip"></slot></h2>
            </div>
            <div class="username">
                <a href="javascript:;">{{username}}</a>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'orderHeader',
    props:{
        title:String,
    },
    computed: {
        /*
            username(){
                return this.$store.state.username
            }
        */      
        ...mapState(['username']) //两种方式一致
    },
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
    .order-header{
        border-bottom:2px solid $colorA;
        padding:30px 0px;
        .header-logo{
            float:left
        }
        .title,.username{
            display:inline-block;
            height:55px;
            line-height:55px;  
        }

        .title{
            float:left;
            margin-left:54px;
            h2{
                font-size: 28px;
                color: #333;
                span{
                    font-size:14px;
                    margin-left:17px;
                    color:#999999;
                    font-weight: 300;
                }
            }
            
        }

        .username{
            float:right;
            a{
                font-size:16px;
                color:#666666;
            }
        }



    }
</style>