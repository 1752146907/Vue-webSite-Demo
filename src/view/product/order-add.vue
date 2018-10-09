
<template>
  <div>
    <Header :index="5"
            :isShowCategoryLeft="true"></Header>
    <div>
      <div class="container">
        <div class="order-address">
          <div class="order-address-title">
            请选择收货地址
            <router-link class="manage-addr"
                         v-if="addressList.length != 0"
                         to="/address/add">管理收货地址</router-link>
          </div>
          <div class="order-list">
            <div v-if="addressList.length == 0">
              没找到您的收货地址，赶紧去
              <router-link class="address-null"
                           to="/address/add">添加一个</router-link>
            </div>
            <div class="suggest-address"
                 v-if="addressList"
                 v-for="address in addressList"
                 @click="handleAddressSelect(address.memberAddressId)"
                 :class="addressActive == address.memberAddressId ? 'suggest-address-active': ''">
              <div class="suggest-address-title">{{address.memberAddressName}} {{address.memberAddressMobile}}</div>
              <div class="street">
                {{address.memberAddressProvince}}
                {{address.memberAddressCity}}
                {{address.memberAddressArea}}
                {{address.memberAddressDetail}}
              </div>
              <router-link class="suggest-address-edit"
                           v-if="addressActive == address.memberAddressId"
                           :to="'/address/edit/' + address.memberAddressId">修改</router-link>
            </div>
          </div>
        </div>

        <div class="select-pay">
          <div class="select-pay-title">
            请选择支付方式
          </div>
          <b-form-group label="">
            <b-form-radio-group id="radios2" v-model="saleOrderPayWay" name="radioSubComponent">
              <b-form-radio value="ALI_PAY"><i class="alipay-icon"></i><span class="select-pay-text">支付宝支付</span></b-form-radio>
              <span style="width: 10px;display: inline-block"></span>
              <b-form-radio value="WX_PAY"><i class="wechat-icon"></i><span class="select-pay-text">微信支付</span></b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </div>

        <div class="product"
             v-if="productSkuId">
          <div class="product-title">
            确认订单信息
          </div>
          <div class="product-list">
            <div class="product-list-title">
              <div class="product-list-title-image">
                图片
              </div>
              <div class="product-list-title-name">
                品名
              </div>
              <!--<div class="product-list-title-sku">-->
                <!--规格-->
              <!--</div>-->
              <div class="product-list-title-number">
                数量
              </div>
              <div class="product-list-title-price">
                单价
              </div>
              <div class="product-list-title-total">
                总计
              </div>
            </div>
            <div class="product-list-body">
              <div class="product-list-body-image">
                <b-img  width="100px"
                        :src="imageHost + product.productImageList[0].imagePath" alt=""/>
              </div>
              <div class="product-list-body-name">
                {{product.productTitle}}
              </div>
              <!--<div class="product-list-title-sku">-->
                <!--{{product.productSkuPriceList[product.productSkuPriceList.findIndex(productSkuPrice => productSkuPrice.productSkuId === productSkuId)].compositeAttributeKey}}-->
              <!--</div>-->
              <div class="product-list-body-number">
                {{number}}
              </div>
              <div class="product-list-body-price">
                ￥{{product.productSkuPriceList[product.productSkuPriceList.findIndex(productSkuPrice => productSkuPrice.productSkuId === productSkuId)].productSkuPrice / (number === 100 ? 100: (number >= 10 && number < 100) ? 10 : 1)}}
              </div>
              <div class="product-list-body-total">
                ￥{{sumPrice}}
              </div>
            </div>
          </div>
        </div>

        <div class="cart-body-product-settlement-total"
             v-if="sumPrice >= 0">
          总计
          <span>RMB {{sumPrice}}</span>
        </div>
        <div class="cart-body-product-sublime"
             v-if="sumPrice >= 0"
             @click="handlerCreateOrder">
          <span>结账</span>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
  .address-null{
    color: #ef93a7;
    font-size: 20px;
  }
  .order-address{
    margin-bottom: 30px;
    padding-top: 30px;
  }
  .order-address-title{
    color: #666666;
    font-size: 22px;
    margin-bottom: 20px;
  }
  .order-address{

  }
  .suggest-address{
    display: inline-block;
    width: 240px;
    height: 122px;
    margin: 0 14px 14px 0;
    border: 2px solid #f7f7f9;
    padding: 8px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .suggest-address-active{
    border: 2px solid #e994a9 !important;
  }
  .suggest-address-title{
    border-bottom: 2px solid #f7f7f9;
    padding-bottom: 2px;
    margin-bottom: 4px;
  }
  .manage-addr{
    color: #686868;
  }
  .manage-addr:hover{
    color: #e994a9;
    cursor: pointer;
  }
  .street{
    height: 42px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .suggest-address-edit{
    position: absolute;
    color: #686868;
    font-size: 12px;
    margin-top: 10px;
  }

  .select-pay{
    margin-bottom: 30px;
    padding-top: 30px;
    border-top: 3px solid #f1f1f1;
  }

  .select-pay-title{
    font-size: 22px;
    margin-bottom: 20px;
    color: #666666;
  }

  .alipay-icon{
    width: 20px;
    height: 20px;
    background-image: url("../../../static/image/alipay-icon.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: inline-block;
  }

  .wechat-icon{
    width: 20px;
    height: 20px;
    background-image: url("../../../static/image/wechat-icon.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: inline-block;
  }

  .select-pay-text{
    position: relative;
    top: -4px;
    left: 6px;
  }

  .select-pay-select{
    width: 220px;
  }

  .product{
    padding-top: 60px;
    border-top: 3px solid #f1f1f1;
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
    width: 200px;
    padding: 8px;
    text-align: left;
    display: inline-block;
  }

  .product-list-title-sku{
    width: 291px;
    padding: 8px;
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
    width: 200px;
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

  .cart-body-product-settlement-total{
    color: #000000;
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
    padding: 26px 0px 26px 0px;
    text-align: right;
    border-top: 3px solid #f1f1f1;
  }
  .cart-body-product-settlement-total > span{
    color: #000000;
    font-size: 30px;
    padding: 0px 30px;
    display: inline-block;
  }

  .cart-body-product-sublime{
    text-align: right;
    padding-top: 60px;
    margin-bottom: 60px;
    border-top: 3px solid #f1f1f1;
  }
  .cart-body-product-sublime > span{
    width: 116px;
    height: 36px;
    line-height: 36px;
    background: #ef93a7;
    color: #ffffff;
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;
    text-align: center;
  }
</style>

<script>
  import bFormSelect from 'bootstrap-vue/es/components/form-select/form-select';
  import bFormRadioGroup from 'bootstrap-vue/es/components/form-radio/form-radio-group';
  import bListGroup from 'bootstrap-vue/es/components/list-group/list-group';
  import bImg from 'bootstrap-vue/es/components/image/img';

  import mixins from '../../mixins/index';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';

  export default {
    components: {
      bFormRadioGroup,
      bFormSelect,
      bListGroup,
      bImg,
      Header,
      Footer
    },
    mixins: [mixins],
    data: () => ({
      saleOrderPayWay: 'ALI_PAY',
      addressActive:'',
      addressList: [],
      productSkuId: '',
      number: 0,
      sumPrice: 0.00,
      product: {}
    }),
    created() {

    },
    mounted() {

      if (this.$route.params.productSkuId && this.$route.params.number && this.$route.params.sumPrice && this.$route.params.product) {
        // this.commit('global', {
        //   productOrderAddPage: {
        //     productSkuId: this.$route.params.productSkuId,
        //     number: this.$route.params.number,
        //     sumPrice: this.$route.params.sumPrice,
        //     product: this.$route.params.product
        //   }
        // });
        this.productSkuId = this.$route.params.productSkuId;
        this.number = this.$route.params.number;
        this.sumPrice = this.$route.params.sumPrice;
        this.product = this.$route.params.product;
        console.log(this.$route.params.productTitle);
      } else {
        // if (!this.store.state.global.productOrderAddPage.productSkuId) {
        //   this.$router.push({'path': '/product/cart'});
        // }
        this.$router.push({'path': '/product/cart'});
      }
      this.handleLoadAddressList();
    },
    methods: {
      handleAddressSelect(id) {
        this.addressActive = id;
      },
      handleLoadAddressList() {
        this.request({
          url: '/xingxiao/member/address/desktop/v1/list',
          data: {},
          success: (data) => {
            if (data.list && data.list.length > 0) {
              this.addressList = data.list;
              var addressActive = data.list[0].memberAddressId;
              for (var address in data.list) {
                if (address.memberAddressIsDefault) {
                  addressActive = address.memberAddressId;
                }
              }
              this.addressActive = addressActive;
            }
          },
          error: () => {

          }
        });
      },
      handlerCreateOrder() {
        if (!this.addressActive || this.addressActive === '') {
          this.$toasted.show('请选择收货地址');
          return;
        }
        if (!this.product.productId || !this.productSkuId) {
          this.$toasted.show('请去选购商品');
          return;
        }
        var saleOrderProductList = [];
        saleOrderProductList.push({
          productId: this.product.productId,
          productSkuId: this.productSkuId,
          productQuantity: this.number
        });
        this.request({
          url: '/xingxiao/sale/order/desktop/v1/save',
          data: {
            saleOrderProductList: saleOrderProductList,
            memberAddressId: this.addressActive,
            memberCouponId: '',
            memberInvoiceId: '',
            saleOrderIsOpenInvoice: false,
            saleOrderRemark: '',
            saleOrderFrom: this.platform
          },
          success: (data) => {
            this.handleToPay(data.saleOrderId, data.saleOrderPayAccount);
          },
          error: () => {

          }
        });
      },
      handleToPay(saleOrderId, saleOrderPayAccount) {
        if (this.saleOrderPayWay === 'ALI_PAY') {
          this.$router.push({name: 'orderAlipay', params: {saleOrderId: saleOrderId, totalAmount: saleOrderPayAccount}});
        } else if (this.saleOrderPayWay === 'WX_PAY') {
          this.$router.push({name: 'orderWxpay', params: {saleOrderId: saleOrderId, totalAmount: saleOrderPayAccount}});
        }
      }
    }
  }
</script>
