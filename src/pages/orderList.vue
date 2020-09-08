<template>
  <div class="order-list">

    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>

    <div class="wrapper">
      <div class="container">
        <div class="order-box">

          <!-- 首次请求数据加载动画   -->
          <loading v-if="loading"></loading>

          <div class="order" v-for="(order,index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{order.createTime}}
                <span>|</span>
                {{order.receiverName}}
                <span>|</span>
                订单号：{{order.orderNo}} 
                <span>|</span>
                {{order.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{order.payment}}</span>
                <span>元</span>
              </div>
            </div>

            <div class="order-content clearFloat">
              <div class="good-box fl">
                <div class="good-list" v-for="(item,index) in order.orderItemVoList" :key="index">
                  <div class="good-img">
                    <img v-lazy="item.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{item.productName}}</div>
                    <div class="p-money"> {{item.totalPrice}}X{{item.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status == 20">
                <a href="javascript:;">{{order.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
              </div>
            </div>
          </div>

          <!-- elementUI 中的分页组件 -->
          <el-pagination
          v-if="true"
          class="pagination"
          background
          layout="prev, pager, next"
          :pageSizes="pageSizes"
          :total="toTal"
          @current-change="handleCurrentChange"
          >
          </el-pagination>

          <!-- 点击加载数据  -->
          <div class="load-more" v-if="false">
              <el-button type="primary" :loading="loading" @click="loadMore1()" v-if="showNextpage">加载更多</el-button>
          </div>

          <!-- 滚动加载数据 组件 -->
          <div class="scroll-more" 
              v-infinite-scroll="loadMore"             
              infinite-scroll-disabled="true"
              infinite-scroll-distance=120
              v-if="false"
          >
              <!-- 滚动加载 请求数据是显示 动态svg图片、 -->
              <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="loading">
          </div>

      
          <no-data v-if="!loading && list.length==0"></no-data>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import Loading from './../components/Loading';
  import OrderHeader from './../components/OrderHeader';
  import NoData from './../components/NoData';
  import {Pagination,Button} from 'element-ui';
  import infiniteScroll from 'vue-infinite-scroll';
  export default{
    name:'order-list',
    components:{
      OrderHeader,
      Loading,
      NoData,
      [Pagination.name]:Pagination,
      [Button.name]:Button,

      //Pagination.name   才会动态获取到 el-Pagination 组件
    },
    directives: {infiniteScroll},
    data() {
      return {
        list:[],
        loading:false,      //加载动画
        pageSizes:[10],   //每页显示多少条数据
        toTal:0,        //总条数
        PageNum:1,        //当前是那一页   
        busy:true,        //滚动加载是否触发    true=禁用  false=使用

        showNextpage:true,   // 加载更多 按钮 默认显示
      }
    },
    mounted() {
      this.getOrderList();
    },
    methods: {
      getOrderList(){
        //按钮添加数据
         this.loading = true;

          this.busy = true;
          this.axios.get('/orders',{
            params:{
              pageSize:10, 
              pageNum:this.PageNum
            }
          }).then((res)=>{
              console.log(res);
              this.loading = false
              this.list =this.list.concat(res.list)
              this.toTal = res.total
              this.showNextpage = res.hasNextPage;   //没有数据时自动为false 那就会隐藏掉

            this.busy=false;           //打开页面自动开启 滚动加载事件
          }).catch(()=>{
            this.loading = false;
          })
      },

      goPay(orderNo){
          this.$router.push({
            path:'/order/pay',
            query:{
              orderNo
            }
          })

          // this.$router.push({
          //   name:'order-list',
          //   query:{
          //     orderNo
          //   }
          // })
      },
      
      //当前页发生改变是触发-----elementUI分页器方法
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.PageNum = val;
        console.log(this.PageNum);
        
        this.getOrderList();
      },
      
      //点击按钮触发 分页动作
      loadMore1(){
          this.PageNum++;
          this.getOrderList();
      },

      //通过 vue-infinite-scroll插件 滚动加载分页动作
      loadMore(){
        this.busy = true;       //先关闭
        setTimeout(()=>{
          
          this.PageNum++;
          this.getList();
        },500)
      },
      //专门给scroll使用
      getList(){
          this.loading = true;
          this.axios.get('/orders',{
            params:{
              pageSize:10, 
              pageNum:this.PageNum
            }
          }).then((res)=>{
              this.list =this.list.concat(res.list);
              this.loading = false;
              if(res.hasNextPage){      //res.hasNextPage  后面有数据这个值就为true
                  this.busy = false;
              }else{
                this.busy = true;      //没有数据的时候关闭 滚动加载
              }
          })
      },

    },
  }
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }
  }
</style>