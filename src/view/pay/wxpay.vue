
<template>
  <div>
    <!-- 头部 -->
    <Header :index="-1"
            :isShowCategoryLeft="false"></Header>
    <!-- 内容 -->
    <div class="container">
      <div class="body">
        <div class="header-logo">
          <!--<b-img class="logo-img" src="./static/image/join-WeChat.png"></b-img>-->
          <span class="cashier">收银台</span>
        </div>
        <div class="order">
          <span class="order-number">订单编号：{{saleOrderId}}</span>
          <span class="pay-money">应付金额： ¥ {{totalAmount}}</span>
        </div>
        <b-tabs class="pay-mode">
          <b-tab title="微信支付" active>
            <div class="tab-item">
              <b-img class="pay-img" src="./static/image/WePayLogo.png"></b-img>
              <b-img class="pay-code" :src="imageHost + qrcodeUrl" v-if="qrcodeUrl"></b-img>
              <b-img class="pay-code-desc" src="./static/image/paydesc.png"></b-img>
            </div>
          </b-tab>
        </b-tabs>

      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>

</template>

<style scoped>
  .header-logo {
    width: 100%;
    padding: 50px 0px 10px 0px;
  }
  .cashier {
    font-size: 30px;
    color: #000000;
  }
  .order {
    width: 100%;
    height: 100px;
    background-color: #F2F2F2;
    padding: 40px 30px 30px 40px;
    position: relative;
  }
  .order-number {
    font-size: 20px;
    color: #000000;
  }
  .pay-money {
    font-size: 20px;
    color: #000000;
    position: absolute;
    top: 40px;
    right: 100px;
  }
  .pay-mode {
    padding: 35px;
  }
  .tab-item {
    position: relative;
    width: 100%;
    height: 400px;
    border-bottom: 1px solid #dee2e6;
    border-left: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
    padding: 50px;
  }
  .pay-img {
    width: 160px;
    position: absolute;
  }
  .pay-code {
    position: absolute;
    top: 72px;
    left: 470px;
    width: 190px;
  }
  .pay-code-desc {
    position: absolute;
    top: 280px;
    left: 470px;
    width: 190px;
  }

</style>

<script>
  import bForm from 'bootstrap-vue/es/components/form/form';
  import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';
  import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
  import bImg from 'bootstrap-vue/es/components/image/img';
  import bTabs from 'bootstrap-vue/es/components/tabs/tabs';


  import mixins from '../../mixins/index';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';

  let timer;

  export default {
    components: {
      bForm,
      bFormGroup,
      bFormInput,
      bImg,
      bTabs,
      Header,
      Footer
    },
    mixins: [mixins],
    data: () => ({
      saleOrderId: "",
      totalAmount: 0.00,
      qrcodeUrl: "",
    }),
    created() {

    },
    mounted() {
      if (this.$route.params.saleOrderId && this.$route.params.totalAmount) {
        this.saleOrderId = this.$route.params.saleOrderId;
        this.totalAmount = this.$route.params.totalAmount;
        this.handlePay();
      } else {
        this.$router.push({'path': '/product/cart'});
      }
    },
    destroyed() {
      clearInterval(timer);
    },
    methods: {
      handlePay: function () {
        this.request({
          url: '/xingxiao/sale/order/desktop/v1/website/wxpay',
          data: {
            saleOrderId: this.saleOrderId
          },
          success: (data) => {
            if (data) {
              this.qrcodeUrl = data.qrcodeUrl;
              var repeat = 300;  // 限制执行次数为200次
              timer = setInterval(function() {
                if (repeat == 0) {
                  clearInterval(timer);
                } else {
                  this.request({
                    url: "/xingxiao/sale/order/desktop/v1/find",
                    data: {
                      saleOrderId: this.saleOrderId
                    },
                    success: (data) => {
                      if (data.saleOrderStatus === 'WAITING_DELIVERY') {
                        clearInterval(timer);
                        window.location.href = this.payReturnUrl + this.outTradeNo;
                      }
                    }
                  });
                  repeat--;
                }
              }.bind(this), 3000);
            }
          },
          error: () => {

          }
        });

      }
    }
  }
</script>
