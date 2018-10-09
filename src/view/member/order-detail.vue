
<template>
  <div>
    <!-- 头部 -->
    <Header :index="0"
            :isShowCategoryLeft="false"></Header>
    <div class="container">
      <div class="breadcrumb">
        <b-img class="navigation-home-image"
               width="16"
               height="16"
               style="margin-right: 12px;"
               src="../static/image/navigation-home.png"
               alt=""/>
        <router-link class="breadcrumb-a" to="/index">首页</router-link>
        <span class="breadcrumb-line">/</span>
        订单资讯
      </div>
    </div>
    <div class="container main">
      <Sidebar :thisPage="0"></Sidebar>
      <div class="conter">
        <div class="content-description">
          <h2 class="content-description-title">订单资讯</h2>
          <div class="address">
            <div class="address-list">
              <div class="address-list-content">
                <p>订单编号：{{order.saleOrderId}}</p>
                <p>订单日期：{{order.systemCreateTime}}</p>
                <p>状态：{{
                  order.saleOrderStatus === 'WAITING_DELIVERY' ?
                  '待发货' : order.saleOrderStatus === 'WAITING_PAID' ?
                  '待付款' : order.saleOrderStatus === 'WAITING_RECEIVE' ?
                  '待收货' : '已完成' }}</p>
                <p>是否开票: {{order.saleOrderIsOpenInvoice ? '是' : '否'}}</p>
              </div>
              <div class="address-list-right">
                <p>支付方式：{{order.saleOrderPayWay === 'ALI_PAY' ? '支付宝支付' : order.saleOrderPayWay === 'WX_PAY' ? '微信支付' : '其他支付'}}</p>
              </div>
            </div>
          </div>
          <div class="address">
            <div class="address-list">
              <div class="address-list-content">
                <p>收货人：{{order.saleOrderReceiveName}}</p>
                <p>收货人电话：{{order.saleOrderReceiveMobile}}</p>
                <p>省份：{{order.saleOrderReceiveProvince}}</p>
                <p>城市：{{order.saleOrderReceiveCity}}</p>
                <p>收货区：{{order.saleOrderReceiveArea}}</p>
                <p>收货街道：{{order.saleOrderReceiveAddress}}</p>
              </div>
              <div class="address-list-right">
                <p>运费：{{order.saleOrderExpressAmount}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="product">
          <div class="product-title">商品详情</div>
          <div class="product-list">
            <div class="product-list-title">
              <div class="product-list-title-image">图片</div>
              <div class="product-list-title-name">名称</div>
              <div class="product-list-title-number">数量</div>
              <div class="product-list-title-price">单价</div>
              <div class="product-list-title-total">总计</div>
            </div>
            <div class="product-list-body"
                 v-for="product in order.saleOrderProductList">
              <div class="product-list-body-image">
                <b-img class="border"
                       style="width: 100px"
                       :src="imageHost + product.productImagePath"
                       alt=""/>
              </div>
              <div class="product-list-body-name">{{product.productTitle}}</div>
              <div class="product-list-body-number">{{product.productQuantity}}</div>
              <div class="product-list-body-price">{{product.productPrice}}</div>
              <div class="product-list-body-total">{{product.productOriginalPrice}}</div>
            </div>
          </div>
        </div>
        <div class="logistics" v-if="order.saleOrderExpressList && order.saleOrderExpressList.length > 0">
          <div class="logistics-title">物流详情</div>
          <div class="">
            <div class="logistics-item" v-for="expressTrace in order.saleOrderExpressList[0].expressTraces">
              {{expressTrace.time}}    {{expressTrace.context}}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
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

  .conter{
    flex: 1;
  }

  .content-description-title{
    font-size: 22px;
    margin: 20px 0px 20px 0px;
    color: #666666;
  }

  .address{
    border-top: 1px solid #dddddd;
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
  }
  .address-list{
    display: flex;
    border-bottom: 1px solid #dddddd;
  }
  .address-list-content{
    width: 50%;
    padding: 8px;
    border-right: 1px solid #dddddd;
  }
  .address-list-right{
    width: 50%;
    padding: 8px;
  }

  .product{
    margin-top: 60px;
  }

  .product-title{
    font-size: 22px;
    margin-bottom: 20px;
    color: #666666;
  }

  .product-list-title{
    border-top: 1px solid #dddddd;
  }

  .product-list-title-image{
    width: 180px;
    padding: 8px;
    display: inline-block;
  }

  .product-list-title-name{
    width: 360px;
    padding: 8px;
    text-align: left;
    display: inline-block;
  }

  .product-list-title-number{
    width: 91px;
    padding: 8px;
    display: inline-block;
  }

  .product-list-title-price{
    width: 124px;
    padding: 8px;
    display: inline-block;
  }

  .product-list-title-total{
    width: 91px;
    padding: 8px;
    display: inline-block;
  }

  .product-list-body{
    border-top: 1px solid #dddddd;
  }

  .product-list-body-image{
    width: 180px;
    padding: 8px;
    display: inline-block;
  }

  .product-list-body-name{
    width: 360px;
    padding: 8px;
    text-align: left;
    display: inline-block;
  }

  .product-list-body-number{
    width: 91px;
    padding: 8px;
    display: inline-block;
  }

  .product-list-body-price{
    width: 124px;
    padding: 8px;
    display: inline-block;
  }

  .product-list-body-total{
    width: 91px;
    padding: 8px;
    display: inline-block;
  }

  .logistics{
    margin-bottom: 40px;
  }

  .logistics-title{
    font-size: 22px;
    padding: 60px 0px 10px 0px;
    color: #666666;
  }

  .logistics-body{
    padding-bottom: 20px;
  }

  .logistics-item{
    line-height: 30px;
    border-bottom: 1px solid #dddddd;
  }
</style>

<script>
  import bImg from 'bootstrap-vue/es/components/image/img';

  import mixins from '../../mixins/index';
  import moment from 'moment';

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
      saleOrderId: '',
      order: {

      }
    }),
    created() {
    },
    mounted() {
      if (this.$route.params.saleOrderId) {
        this.saleOrderId = this.$route.params.saleOrderId;
        this.handleLoadProduct();
      }

    },
    methods: {
      handleLoadProduct() {
        this.request({
          url: '/xingxiao/sale/order/desktop/v1/find',
          data: {
            saleOrderId: this.saleOrderId
          },
          success: (data) => {
            data.systemCreateTime = moment(data.systemCreateTime).format("YYYY-MM-DD");
            data.saleOrderProductList[0].productPrice = data.saleOrderProductList[0].productPrice.toFixed(2);
            data.saleOrderProductList[0].productOriginalPrice = data.saleOrderProductList[0].productOriginalPrice.toFixed(2);
            this.order = data;
          },
          error: () => {

          }
        });
      }
    }
  }
</script>
