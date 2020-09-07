<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="javascript:;">小米商城</a><span>|</span>
            <a href="javascript:;">MUI</a><span>|</span>
            <a href="javascript:;">米家</a><span>|</span>
            <a href="javascript:;">米聊</a><span>|</span>
            <a href="javascript:;">多看</a><span>|</span>
            <a href="javascript:;">游戏</a><span>|</span>
            <a href="javascript:;">小米商城意见反馈窗口</a>
        </div>
        <div class="copyright">Copyright ©2020 <span>mi.futurefe.com</span> All Rights Reserved.</div>
    </div>
</template>

<script>
export default {
    name:'nav-footer'
}
</script>

<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';

.footer{
    height:234px;
    border-top:4px solid $colorA;
    background-color: $colorB;
    font-size:16px;
    text-align: center;
    color:$colorD;
    .footer-logo{
       margin-top: 46px;
       margin-bottom: 31px;
       img{
           width: 53px;
            height: 36px;
            margin-bottom: 13px;
       }
    }
    .footer-link{
        margin-bottom: 15px;
        a{
            color:$colorD;
        }
        span{
            margin:0px 10px;
        }
    }
    .copyright{
        span{
            color:$colorA;
        }
    }

}

</style>