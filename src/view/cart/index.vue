
<template>
  <div>
    <div class="view-body">
      <!-- 头部 -->
      <Header :index="5"
              :isShowCategoryLeft="true"></Header>

      <div class="container">
        <div class="cart">
          <div class="cart-body">
            <h2 class="cart-body-title">购物车内的产品</h2>
            <div class="cart-body-product">
              <div class="cart-null"
                   v-if="cartList.length == 0">您的购物车是空的</div>
              <div class="cart-body-product-list"
                   v-for="item in cartList"
                   :key="item.shoppingCartId">
                <b-img  width="242px"
                        height="206px"
                        style="margin-right: 30px;margin-top: 30px"
                        :src="imageHost + item.productSkuImagePath" alt=""/>
                <div class="cart-body-product-list-right">
                  <div class="cart-body-product-list-right-header">
                    {{item.productTitle}}
                    <span>RMB {{item.productPrice}}</span>
                  </div>
                  <div class="cart-body-product-list-right-info">
                    <div class="cart-body-product-list-right-info-number">x {{item.quantity}}</div>
                    <span class="cart-body-product-list-right-info-del"
                          @click="handleProductDel(item.shoppingCartId)">删除</span>
                    <div class="deliver">发货：一个工作日</div>
                    <div class="sku">
                      <div class="sku-item">
                        <span class="point"></span>
                        {{item.productSkuAttributeList[0].value}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cart-body-product-settlement"
                   v-if="cartList.length != 0">
                <div class="cart-body-product-settlement-cost">
                  免费运送
                  <span>RMB 0</span>
                </div>
                <div class="cart-body-product-settlement-total">
                  总计
                  <span>RMB {{sumPrice}}</span>
                </div>
              </div>
              <div class="cart-body-product-sublime"
                   v-if="cartList.length != 0"
                   @click="handleConfirmOrder">
                <span>结算</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部 -->
      <Footer></Footer>
    </div>
  </div>
</template>

<style scoped>
  .view-body{
    height: 100%;
    background-color: #f7f7f7;
  }

  .cart{
    padding: 42px 0px 58px 0px;
    box-sizing: border-box;
  }

  .cart-body{
    padding: 24px 32px 46px 32px;
    background: #ffffff;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  .cart-body-title{
    font-size: 34px;
    padding-bottom: 24px;
    color: #000000;
    border-bottom: 3px solid #f1f1f1;
  }

  .cart-null{
    font-size: 24px;
    text-align: center;
    padding-top: 60px;
  }

  .cart-body-product{}

  .cart-body-product-list{
    display: flex;
    padding: 20px 20px 38px 20px;
    border-bottom: 3px solid #f1f1f1;
  }

  .cart-body-product-list-right{
    flex: 1;
  }

  .cart-body-product-list-right-header{
    font-size: 28px;
    font-weight: bold;
    color: #000000;
    padding: 24px 0px 22px 0px;
    border-bottom: 3px solid #f1f1f1;
    position: relative;
  }

  .cart-body-product-list-right-header > span{
    font-size: 28px;
    font-weight: bold;
    color: #000000;
    position: absolute;
    right: 42px;
  }

  .cart-body-product-list-right-info{
    position: relative;
  }

  .cart-body-product-list-right-info-number{
    font-size: 18px;
    position: absolute;
    right: 196px;
  }

  .cart-body-product-list-right-info-del{
    color: #1583db;
    font-size: 20px;
    position: absolute;
    right: 36px;
    cursor:pointer;
  }

  .cart-body-product-list-right-info .deliver{
    color: #666666;
    font-size: 20px;
    margin: 22px 0px 10px 0px;
  }

  .cart-body-product-list-right-info .sku{

  }

  .cart-body-product-list-right-info .sku-item{
    color: #000000;
    font-size: 20px;
    display: flex;
    align-items: center;
  }

  .cart-body-product-list-right-info .sku-item .point{
    width: 10px;
    height: 10px;
    margin-right: 16px;
    display: inline-block;
    border-radius: 50%;
    background: #8f8f8f;
  }

  .cart-body-product-settlement{
    text-align: right;
    border-bottom: 3px solid #f1f1f1;
  }

  .cart-body-product-settlement-cost{
    border-bottom: 3px solid #f1f1f1;
    color: #ef93a7;
    font-size: 20px;
    display: inline-block;
    padding: 18px 0px 14px 0px;
  }

  .cart-body-product-settlement-cost > span{
    color: #ef93a7;
    font-size: 20px;
    padding: 0px 30px;
    display: inline-block;
  }

  .cart-body-product-settlement-total{
    color: #000000;
    font-size: 30px;
    font-weight: bold;
    padding: 26px 0px;
  }

  .cart-body-product-settlement-total > span{
    color: #000000;
    font-size: 30px;
    padding: 0px 30px;
    display: inline-block;
  }

  .cart-body-product-sublime{
    text-align: right;
    padding-top: 16px;
  }

  .cart-body-product-sublime > span{
    width: 116px;
    height: 36px;
    line-height: 36px;
    background: #ef93a7;
    color: #ffffff;
    border-radius: 4px;
    display: inline-block;
    cursor:pointer;
    text-align: center;
  }


</style>

<script>
  import bImg from 'bootstrap-vue/es/components/image/img';

  import mixins from '../../mixins/index';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';

  export default {
    components: {
      bImg,
      Header,
      Footer
    },
    mixins: [mixins],
    data: () => ({
        cartList: [],
        sumPrice: 0
    }),
    created() {

    },
    mounted() {
      this.handleLoadCartList();
    },
    methods: {
      handleLoadCartList() {
        this.request({
          url: '/xingxiao/shopping/cart/desktop/v1/list',
          data: {},
          success: (data) => {
            if (data) {
              this.cartList = data;

              for (var i = 0; i < this.cartList.length; i++){
                this.sumPrice = this.sumPrice + (this.cartList[i].quantity * this.cartList[i].productPrice);
              }

            }
          },
          error: () => {

          }
        });
      },
      handleProductDel(id) {
        this.request({
          url: '/xingxiao/shopping/cart/desktop/v1/delete',
          data: {
            shoppingCartIdList: [id]
          },
          success: (data) => {
            if (data) {
              this.$toasted.show('删除成功');

              for(var i = 0; i < this.cartList.length; i++){
                if(id == this.cartList[i].shoppingCartId){
                  this.cartList.splice(i, 1)
                  return;
                }
              }
            }
          },
          error: () => {

          }
        });
      },
      handleConfirmOrder() {
        this.$router.push({path: '/product/order'});
      }
    }
  }
</script>
