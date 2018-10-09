
<template>
  <div>
    <!-- 头部 -->
    <Header :index="5"
            :isShowCategoryLeft="true"></Header>
    <!-- 内容 -->
    <div class="container">
      <div class="content">
        <div class="content-pay">
          <b-img class="pay-success" src="../../../static/image/pay-success.png"></b-img>
          <div class="pay-success-text">恭喜您，支付成功！</div>
        </div>
        <div class="content-btn">
          <div class="content-btn-order">
            <router-link class="hot-item" :to="'/order/detail/'+saleOrderId">
              <div class="content-btn-order-text">查看订单</div>
            </router-link>
          </div>
          <div class="content-btn-shopping">
            <router-link class="hot-item" to="/product/list">
              <div class="content-btn-shopping-text">继续购物</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>

</template>

<style scoped>

  .content {
    width: 100%;
    padding-top: 80px;
  }
  .content-pay {
    width: 550px;
    height: 180px;
    margin: 0 auto;
  }
  .pay-success {
    float: left;
  }
  .pay-success-text {
    font-size: 42px;
    padding-top: 38px;
    padding-left: 170px;
    color: #e296a8;
  }
  .content-btn {
    width: 550px;
    margin: 0 auto;
    padding: 30px 70px 50px 90px;
    text-align: center;
  }
  .content-btn-order {
    display: inline-block;
  }
  .content-btn-order-text {
    width: 160px;
    height: 40px;
    padding-top: 4px;
    font-size: 20px;
    color: #e296a8;
    border: 2px solid #e296a8;
    text-align: center;
    border-radius: 10px;
  }
  .content-btn-shopping {
    display: inline-block;
  }
  .content-btn-shopping-text {
    width: 160px;
    height: 40px;
    padding-top: 5px;
    font-size: 20px;
    color: #FFFFFF;
    background-color: #e296a8;
    text-align: center;
    border-radius: 10px;
    margin-left: 60px;
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
      saleOrderId: ''
    }),
    created() {

    },
    mounted() {
      if (this.$route.params.saleOrderId) {
        this.saleOrderId = this.$route.params.saleOrderId;
      }
    },
    methods: {

    }
  }
</script>
