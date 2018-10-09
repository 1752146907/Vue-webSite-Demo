
<template>
  <div>
    <Header :index="5"
            :isShowCategoryLeft="true"></Header>
    <div class="view-body">
      <div class="container">
        <div class="body-title">购买 {{product.productTitle}}</div>
        <div class="content">
          <div class="content-left">
            <b-img  width="512px"
                    height="auto"
                    style="margin-bottom: 12px;"
                    v-if="product.productImageList && product.productImageList.length > 0"
                    :src="imageHost + product.productImageList[0].imagePath" alt=""/>
          </div>
          <div class="content-right">
            <h2 class="content-right-title">{{product.productSubtitle}}</h2>
            <div class="content-right-comment">HA-800道尔顿补水精华啫喱（{{product.productTitle}}）是一款全新的美容零食糖果，其富含小分子透明质酸和纳米胶原蛋白。爆水丸通过食用的方式，提供肌肤深层需要的补水成分，从而改善肌肤品质。</div>
            <div class="content-right-sku">
              <div class="content-right-sku-title">购买配置</div>
              <div  v-for="item in product.productSkuPriceList"
                    :key="item.productSkuId"
                    @click="handleProductSelect(item.productSkuId)">
                <div class="content-right-sku-item"
                     v-bind:class="[item.productSkuId == seleSkuId && showSelectActive == true ? 'content-right-sku-item-active' : '']">
                  {{item.compositeAttributeKey}}
                  <span>+RMB {{item.productSkuPrice}}</span>
                </div>
              </div>
              <div class="content-right-purchase">
                <div class="content-right-purchase-title content-right-sku-nunber-select">
                  自定义购买数量：
                </div>
                <div class="content-right-sku-number">
                  <div class="content-right-sku-number-box d-flex">
                    <div class="input-group-prepend">
                    <span class="input-group-text rounded-0 border-right content-right-sku-number-pull"
                          @click="handleProductPull">-</span>
                    </div>
                    <input type="number"
                           v-model="number"
                           @input="handleNumberInput"
                           class="content-right-sku-number-input border-top border-bottom" />
                    <div class="input-group-append">
                    <span class="input-group-text rounded-0 content-right-sku-number-push"
                          @click="handleProductPush">+</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span class="content-right-pricr-rmb">RMB  {{sumPrice ? sumPrice : 0}}</span>
                </div>
              </div>
            </div>
            <div class="content-right-pricr">
              <!--<span class="content-right-pricr-rmb">RMB  {{sumPrice ? sumPrice : 0}}</span>-->
              <span class="add-cart" @click="handleSublime">立即购买</span>
            </div>
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
    margin-bottom: 40px;
  }

  .content-left{
    width: 532px;
    padding: 20px;
    box-sizing: border-box;
  }

  .content-right{
    width: 658px;
    padding: 20px;
    box-sizing: border-box;
  }

  .content-right-title{
    font-size: 34px;
    color: #000000;
    padding: 16px 0px;
  }

  .content-right-comment{
    font-size: 14px;
    color: #1b1b1b;
    line-height: 34px;
    padding-bottom: 20px;
    border-bottom: 2px solid #d7d7d7;
  }

  .content-right-sku{
    padding: 30px 20px;
    box-sizing: border-box;
  }

  .content-right-sku-number-pull{
    width: 32px;
    cursor: pointer;
  }

  .content-right-sku-number-push{
    cursor: pointer;
  }

  .content-right-sku-number-input{
    width: 76px;
    height: 36px;
    margin: 0px 1px;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
  }

  .content-right-sku-number-input:focus{
    box-shadow: none;
    outline: medium;
  }

  .content-right-sku-nunber-select{
    margin: 24px 0px;
  }

  .content-right-sku-number{
    width: 183px;
    position: absolute;
    left: 128px;
    top: 16px;
  }

  .content-right-purchase{
    position: relative;
    width: 630px;
    height: 58px;
    margin-top: 10px;
  }

  .content-right-purchase-title{
    width: 132px;
    position: absolute;
    font-size: 16px;
    color: #000000;
  }

  .content-right-sku-title{
    font-size: 16px;
    color: #000000;
  }

  .content-right-pricr-rmb{
    font-size: 42px;
    font-weight: bold;
    color: #000000;
    margin-top: 6px;
    position: absolute;
    left: 0px;
    top: 60px;
  }

  .content-right-sku-item{
    padding: 14px;
    font-size: 14px;
    color: #1b1b1b;
    border-radius: 2px;
    border: 2px solid #d7d7d7;
    box-sizing: border-box;
    margin-top: 24px;
    position: relative;
    cursor:pointer
  }

  .content-right-sku-item-active{
    border: 2px solid #e994a9 !important;
  }

  .content-right-sku-item > span{
    position: absolute;
    right: 14px;
  }

  .content-right-pricr{
    padding: 10px 0px 46px 0px;
    text-align: right;
  }

  .content-right-pricr .add-cart{
    height: 40px;
    line-height: 34px;
    font-size: 18px;
    background: #e994a9;
    color: #ffffff;
    display: inline-block;
    padding: 4px 40px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    top: 30px;
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
      showSelectActive: true,
      productId: ''
    }),
    created() {

    },
    mounted() {
      if (this.$route.params.productId) {
        this.productId = this.$route.params.productId;
      }
      this.request({
        url: '/xingxiao/product/desktop/v1/view',
        data: {
          "productId": this.productId,
        },
        success: (data) => {
          if (data.productSkuPriceList && data.productSkuPriceList.length > 0) {
            this.number = 1;
            this.seleSkuId = data.productSkuPriceList[0].productSkuId;
            this.sumPrice = data.productSkuPriceList[0].productSkuPrice.toFixed(2);
          }
          this.product = data;
        },
        error: () => {}
      });
    },
    methods: {
      handleProductPull() {
        if (this.number > 1) {
          this.number--;
          this.handleSum();
        }
      },
      handleProductPush() {
        if(this.productId == "1002483230350774273"){
          if(this.number >= 600) {
            this.number = 600;
            this.handleSum();
            return
          }
          if(this.number <= 9) {
            ++this.number;
            this.handleSum();
            return
          }
          if(this.number >= 10 && this.number < 100) {
            this.number = this.number + 10;
            this.handleSum();
            return
          }
          if(this.number >= 100) {
            if(this.number < 600) {
              this.number = this.number + 100;
              this.handleSum();
            } else {
              this.number = 600;
              this.handleSum();
            }
          }
        }else {
          if(this.number >= 50) {
            this.number = 50;
            this.handleSum();
            return
          }
          if(this.number <= 2) {
            ++this.number;
            this.handleSum();
            return
          }
          if(this.number >= 3 && this.number < 10) {
            this.number = this.number + 3;
            this.handleSum();
            return
          }
          if(this.number >= 10) {
            if(this.number <= 50) {
              this.number = this.number + 10;
              if(this.number >= 50) {
                this.number = 50;
              }
              this.handleSum();
            } else {
              this.number = 50;
              this.handleSum();
            }
          }
        }
      },
      handleSum() {
        var number = this.number;
        if(this.productId == "1002483230350774273"){
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
          } else if (number >= 100) {
            this.showSelectActive = true;
            this.seleSkuId = this.product.productSkuPriceList[2].productSkuId;
            if(number != 100){
              this.showSelectActive = false;
            }
            var productSkuPrice = this.product.productSkuPriceList[2].productSkuPrice;
            this.sumPrice = ((productSkuPrice / 100) * number).toFixed(2);;
          }
        } else{
          if (number >= 1 && number < 3) {
            this.showSelectActive = true;
            this.seleSkuId = this.product.productSkuPriceList[0].productSkuId;
            if(number != 1){
              this.showSelectActive = false;
            }
            this.sumPrice = (this.product.productSkuPriceList[0].productSkuPrice * number).toFixed(2);
          } else if (number >= 3 && number < 10) {
            this.showSelectActive = true;
            this.seleSkuId = this.product.productSkuPriceList[1].productSkuId;
            if(number != 3){
              this.showSelectActive = false;
            }
            var productSkuPrice = this.product.productSkuPriceList[1].productSkuPrice;
            this.sumPrice = ((productSkuPrice / 3) * number).toFixed(2);
          } else if (number >= 10) {
            this.showSelectActive = true;
            this.seleSkuId = this.product.productSkuPriceList[2].productSkuId;
            if(number != 10){
              this.showSelectActive = false;
            }
            var productSkuPrice = this.product.productSkuPriceList[2].productSkuPrice;
            this.sumPrice = ((productSkuPrice / 10) * number).toFixed(2);
          }
        }
      },
      handleNumberInput(e) {
        var value = e.currentTarget.value;
        if(this.productId == "1002483230350774273"){
          if (!value || value === '' || value < 1) {
            this.number = 1;
          } else if (value > 100) {
            this.number++;
          } else {
            this.number = value;
          }
        } else{
          if (!value || value === '' || value < 1) {
            this.number = 1;
          } else if (value > 10) {
            this.number++;
          } else {
            this.number = value;
          }
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
        if(this.productId == "1002483230350774273"){
          for (var i = 0; i < this.product.productSkuPriceList.length; i++) {
            if (id == this.product.productSkuPriceList[i].productSkuId) {
              if (i === 0) {
                this.number = 1;
              } else if (i === 1) {
                this.number = 10;
              } else if (i === 2){
                this.number = 100;
              }
              this.sumPrice = this.product.productSkuPriceList[i].productSkuPrice.toFixed(2);
              return;
            }
          }
        } else{
          for (var i = 0; i < this.product.productSkuPriceList.length; i++) {
            if (id == this.product.productSkuPriceList[i].productSkuId) {
              if (i === 0) {
                this.number = 1;
              } else if (i === 1) {
                this.number = 3;
              } else if (i === 2){
                this.number = 10;
              }
              this.sumPrice = this.product.productSkuPriceList[i].productSkuPrice.toFixed(2);
              return;
            }
          }
        }
      }
    }
  }
</script>
