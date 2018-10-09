
<template>
  <div>
    <Header :index="5"
            :isShowCategoryLeft="true"></Header>
    <div class="view-body">
      <div class="container">
        <div class="body-title">
          购买选择
        </div>
        <div class="content">
          <div class="content-left">
            <router-link to="/product/cart/1002483230350774273">
              <div class="content-left-product">
                <div class="content-left-product-box">
                  爆水丸
                </div>
              </div>
            </router-link>
          </div>
          <div class="content-right">
            <router-link to="/product/cart/1035421817968144386">
              <div class="content-right-product">
                <div class="content-right-product-box">
                  皛丸子
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>

  .view-body{
    height: 100%;
  }

  .body-title{
    color: #000000;
    font-size: 58px;
    padding: 56px 0px;
    text-align: center;
  }

  .content{
    display: flex;
    margin-bottom: 80px;
  }

  .content-left{
    width: 532px;
    padding: 20px;
    margin-left: 126px;
    box-sizing: border-box;
  }
  .content-left-product{
    width: 400px;
    height: 400px;
    background: url("../../../static/image/product.jpg");
    background-size: cover;
    position: relative;
    overflow: hidden;
  }
  .content-left-product-box{
    width: 400px;
    height: 400px;
    position: absolute;
    top: -400px;
    right: 0px;
    left: 0px;
    background: #dd96a6;
    opacity: 0.9;
    -webkit-transition: all 0.6s;
    transition: all 0.6s;
    color: #ffffff;
    text-align: center;
    font-size: 30px;
    padding-top: 150px;
  }
  .content-left-product:hover .content-left-product-box{
    top: 0px;
  }

  .content-right{
    width: 658px;
    padding: 20px;
    box-sizing: border-box;
  }
  .content-right-product{
    width: 400px;
    height: 400px;
    background: url("../../../static/image/product02.jpg");
    background-size: cover;
    position: relative;
    overflow: hidden;
  }
  .content-right-product-box{
    width: 400px;
    height: 400px;
    position: absolute;
    top: -400px;
    right: 0px;
    left: 0px;
    background: #dd96a6;
    opacity: 0.9;
    -webkit-transition: all 0.6s;
    transition: all 0.6s;
    color: #ffffff;
    text-align: center;
    font-size: 30px;
    padding-top: 150px;
  }
  .content-right-product:hover .content-right-product-box{
    top: 0px;
  }

  .content-right-sku-item > span{
    position: absolute;
    right: 14px;
  }
</style>

<script>
  import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
  import bListGroup from 'bootstrap-vue/es/components/list-group/list-group';
  import bImg from 'bootstrap-vue/es/components/image/img';

  import mixins from '../../mixins/index';

  import storage from '../../common/storage';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';

  export default {
    components: {
      bCarousel,
      bListGroup,
      bImg,
      Header,
      Footer
    },
    mixins: [mixins],
    data: () => ({
      number: 0,
      seleSkuId: '',
      product: [],
      sumPrice: '',
      showSelectActive: true
    }),
    created() {

    },
    mounted() {

    },
    methods: {
      handleProductPull() {
        if (this.number > 1) {
          this.number--;
          this.handleSum();
        }
      },
      handleProductPush() {
        if (this.number < 100) {
          this.number++;
          this.handleSum();
        }
      },
      handleSum() {
        var number = this.number;
        if (number >= 1 && number < 10) {
          this.showSelectActive = true;
          this.seleSkuId = this.product.productSkuPriceList[0].productSkuId;
          if(number != 1){
            this.showSelectActive = false;
          }
          this.sumPrice = (this.product.productSkuPriceList[0].productSkuPrice * number).toFixed(2);
        } else if (number >= 10 && number < 100) {
            this.showSelectActive = true;
            this.seleSkuId = this.product.productSkuPriceList[1].productSkuId;
            if(number != 10){
              this.showSelectActive = false;
            }
            var productSkuPrice = this.product.productSkuPriceList[1].productSkuPrice;
            this.sumPrice = ((productSkuPrice / 10) * number).toFixed(2);
        } else if (number == 100) {
            this.showSelectActive = true;
            this.seleSkuId = this.product.productSkuPriceList[2].productSkuId;
            this.sumPrice = this.product.productSkuPriceList[2].productSkuPrice.toFixed(2);
        }
      },
      handleNumberInput(e) {
        var value = e.currentTarget.value;
        if (!value || value === '' || value < 1) {
          this.number = 1;
        } else if (value > 100) {
          this.number = 100;
        } else {
          this.number = value;
        }
        this.handleSum();
      },
      handleSublime() {
        if (!storage.getToken() || storage.getToken() === '') {
          this.$router.push({path: '/member/login'});
          return;
        }
        if (this.seleSkuId == '' || this.seleSkuId == null) {
          this.$toasted.show('请选择商品规格');
          return;
        }
        if (this.number < 1) {
          this.$toasted.show('商品数量不能为空');
        }
        this.$router.push({name: 'productOrder', params: {number: this.number, sumPrice: this.sumPrice, productSkuId: this.seleSkuId, product: this.product}});
      },
      handleProductSelect(id) {
        this.showSelectActive = true;
        this.seleSkuId = id;
        var number = this.number && this.number > 1 ? this.number : 1;
        for (var i = 0; i < this.product.productSkuPriceList.length; i++) {
          if (id == this.product.productSkuPriceList[i].productSkuId) {
            if (i === 0 && number >= 10) {
              this.number = 1;
            } else if (i === 1 && (number <= 10 || number === 100)) {
              this.number = 10;
            } else if (i === 2 && number < 100){
              this.number = 100;
            }
            this.sumPrice = this.product.productSkuPriceList[i].productSkuPrice.toFixed(2);
            return;
          }
        }
      }
    }
  }
</script>
