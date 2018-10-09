<template>
  <div>
    <!-- 头部 -->
    <Header :index="0"
            :isShowCategoryLeft="false"></Header>
    <div class="container">
      <div class="breadcrumb">
        <b-img clase="navigation-home-image"
               width="16"
               height="16"
               style="margin-right: 12px;"
               src="../static/image/navigation-home.png"
               alt=""/>
        <router-link class="breadcrumb-a" to="/index">首页</router-link>
        <span class="breadcrumb-line">/</span>
        我的订单
      </div>
    </div>
    <div class="container main">
      <Sidebar :thisPage="0"></Sidebar>
      <div class="conter">
        <div class="content-description">
          <div class="content-description-none"
               v-if="orderList.length == 0">您的订单列表是空的...</div>
          <h1 class="content-description-title"
              v-if="orderList.length != 0">我的订单</h1>
          <div class="content-description-title d-flex"
               v-if="orderList.length != 0">
            <div class="content-description-title-order">订单编号</div>
            <div class="content-description-title-name">客户</div>
            <div class="content-description-title-number">数量</div>
            <div class="content-description-title-payment">状态</div>
            <div class="content-description-title-total">合计</div>
            <div class="content-description-title-time">创建时间</div>
            <div class="content-description-title-del"> </div>
          </div>
          <div class="content-description-product d-flex"
               v-for="item in orderList"
               :key="item.saleOrderId"
          >
            <div class="content-description-product-order">
              <router-link class="content-description-product-order-a" :to="'./order/detail/' + item.saleOrderId">
                {{item.saleOrderId}}
              </router-link>
            </div>
            <div class="content-description-product-name">{{item.saleOrderReceiveName}}</div>
            <div class="content-description-product-number">{{item.saleOrderTotalQuantity}}</div>
            <div class="content-description-product-payment">{{
              item.saleOrderStatus === 'WAITING_DELIVERY' ?
              '待发货' : item.saleOrderStatus === 'WAITING_PAID' ?
              '待付款' : item.saleOrderStatus === 'WAITING_RECEIVE' ?
              '待收货' : '已完成' }}</div>
            <div class="content-description-product-total">¥{{item.saleOrderPayAccount}}</div>
            <div class="content-description-product-time">{{item.systemCreateTime}}</div>
            <div class="content-description-product-del"
                 @click="handleToDetail(item.saleOrderId)">查看</div>
          </div>
        </div>
      </div>
    </div>

    <!--&lt;!&ndash; 底部 &ndash;&gt;-->
    <Footer></Footer>
  </div>
</template>

<style scoped>
  .breadcrumb{
    margin: 30px 0px;
  }
  .breadcrumb-icon{
    width: 20px;
    height: 20px;
  }
  .breadcrumb-line{
    margin: 0px 10px;
  }
  .breadcrumb-a{
    color: #1a1a1a;
  }
  .breadcrumb-a:hover{
    color: #999;
  }
  .main{
    display: flex;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .content-description-none{
    font-size: 22px;
  }

  .conter{
    flex: 1;
  }

  .content-description{
    padding: 15px;
    border: 2px solid #f7f7f9;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .content-description-title{
    color: #666666;
    font-size: 22px;
    font-weight: bold;
    margin: 20px 0px 10px 0px;
  }

  .content-description-title-order{
    width: 190px;
    padding: 8px;
  }

  .content-description-title-name{
    width: 160px;
    padding: 8px 8px 8px 18px;
  }

  .content-description-title-number{
    width: 83px;
    padding: 8px;
  }

  .content-description-title-payment{
    width: 88px;
    padding: 8px;
  }

  .content-description-title-total{
    width: 188px;
    padding: 8px;
  }

  .content-description-title-time{
    width: 163px;
    padding: 8px;
  }


  .content-description-title-del{
    width: 91px;
    padding: 8px;
  }

  .content-description-product{
    color: #1a1a1a;
    border-top: 1px solid #ddd;
    margin-top: 10px;
  }

  .content-description-product-order{
    width: 190px;
    padding: 8px;
  }

  .content-description-product-order-a{
    color: #000000;
  }

  .content-description-product-name{
    width: 160px;
    padding: 8px 8px 8px 18px;
  }

  .content-description-product-number{
    width: 83px;
    padding: 8px;
  }

  .content-description-product-payment{
    width: 89px;
    padding: 8px;
  }

  .content-description-product-total{
    width: 188px;
    padding: 8px;
  }

  .content-description-product-time{
    width: 163px;
    padding: 8px;
  }

  .content-description-product-del{
    width: 91px;
    padding: 8px;
    cursor: pointer;
  }

</style>

<script>
  import bImg from 'bootstrap-vue/es/components/image/img';
  import moment from 'moment';

  import mixins from '../../mixins/index';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';
  import Sidebar from '../../component/member/sidebar';

  export default {
    components: {
      bImg,
      Header,
      Footer,
      Sidebar
    },
    mixins: [mixins],
    data: () => ({
      pageIndex: 1,
      pageSize: 100,
      orderList: [],
      orderTotal: 0
    }),
    created() {

    },
    mounted() {
      this.handleLoadOrderList();
    },
    methods: {
      handleLoadOrderList() {
        this.request({
          url: '/xingxiao/sale/order/desktop/v1/list',
          data: {
            saleOrderStatus: '',
            pageIndex: this.pageIndex,
            pageSize: this.pageSize
          },
          success: (data) => {
            if (data && data.list && data.list.length > 0) {
              var list = data.list;

              for (var i =0; i < list.length; i++) {
                list[i].systemCreateTime = moment(list[i].systemCreateTime).format('YYYY-MM-DD');
              }
              this.orderList = list;
              this.orderTotal = data.total;
            }
          },
          error: () => {

          }
        });
      },
      handleToDetail(saleOrderId) {
        this.$router.push({path: '/order/detail/' + saleOrderId});
      }
    }
  }
</script>
