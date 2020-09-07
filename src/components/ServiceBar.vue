<template>
    <div class="service-bar">
        <div class="container">
            <ul>
                <li><span class="icon-setting"></span>预约维护服务</li>
                <li><span class="icon-7day"></span>7天无理由退货</li>
                <li><span class="icon-15day"></span>15天免费换货</li>
                <li><span class="icon-post"></span>满150元包邮</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"service-bar",
}
</script>
<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
    .service-bar{
        padding:33px 0px;
        font-size: 16px;
        color:$colorC;
        text-align: center;
        .container{
            // position: relative;
            ul{
                @include flex();
                li{
                    border-right:1px solid $colorH;
                    flex:1;
                    &:last-child{
                        border:none
                    }
                    
                }
                .icon-setting{
                    @include bgImg(20px,20px,'/imgs/icon-setting.png');
                    vertical-align:middle;
                    margin-right: 8px;
                }

                .icon-7day{
                    @include bgImg(20px,20px,'/imgs/icon-7day.png');
                    vertical-align:middle;
                    margin-right: 8px;
                }
                .icon-15day{
                    @include bgImg(20px,20px,'/imgs/icon-15day.png');
                    vertical-align:middle;
                    margin-right: 8px;
                }
                .icon-post{
                     @include bgImg(20px,20px,'/imgs/icon-post.png');
                    vertical-align:middle;
                    margin-right: 8px;
                }
            }
        }

    }
</style>