
<template>
  <div>
    <Header></Header>

    <div class="view-body">
      <div class="container">
        <div class="title-name">爆水丸</div>
      </div>
      <div class="purchase">
        <div class="container">
          <div class="purchase-box">
            <b-img  width="200px"
                    height="170px"
                    style="margin-right: 30px;"
                    src="./static/image/product.jpg" alt=""/>
            <div class="purchase-box-middle">
              <p>爆水丸</p>
              <p>RMB 48</p>
            </div>
            <div class="purchase-box-right">
              <span>查看购物袋</span>
            </div>
          </div>
        </div>
      </div>
      <div class="container periphery">
        <h2 class="periphery-title">V+Lab周边</h2>
        <div class="periphery-body">
          <div class="periphery-body-item">
            <b-img  width="200px"
                    height="170px"
                    style="margin-right: 30px;margin-bottom: 24px;box-shadow: 0px 0px 10px #f5f5f5"
                    src="./static/image/purchase-01.png" alt=""/>
            <div class="periphery-body-item-name">V+lab抱抱熊</div>
            <div class="periphery-body-price">RMB 50</div>
            <div class="periphery-body-text">抱抱熊公仔2米泰迪熊猫布娃娃女孩睡觉抱可爱毛绒玩具大熊送女友</div>
            <span class="periphery-body-add-cart">添加至购物车</span>
          </div>
          <div class="periphery-body-item">
            <b-img  width="200px"
                    height="170px"
                    style="margin-right: 30px;margin-bottom: 24px;box-shadow: 0px 0px 10px #f5f5f5"
                    src="./static/image/purchase-02.png" alt=""/>
            <div class="periphery-body-item-name">V+lab抱抱熊</div>
            <div class="periphery-body-price">RMB 50</div>
            <div class="periphery-body-text">抱抱熊公仔2米泰迪熊猫布娃娃女孩睡觉抱可爱毛绒玩具大熊送女友</div>
            <span class="periphery-body-add-cart">添加至购物车</span>
          </div>
          <div class="periphery-body-item">
            <b-img  width="200px"
                    height="170px"
                    style="margin-right: 30px;margin-bottom: 24px;box-shadow: 0px 0px 10px #f5f5f5"
                    src="./static/image/purchase-03.png" alt=""/>
            <div class="periphery-body-item-name">V+lab抱抱熊</div>
            <div class="periphery-body-price">RMB 50</div>
            <div class="periphery-body-text">抱抱熊公仔2米泰迪熊猫布娃娃女孩睡觉抱可爱毛绒玩具大熊送女友</div>
            <span class="periphery-body-add-cart">添加至购物车</span>
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

  .header{
    background: #333333;
    height: 70px;
  }

  .header-box{
    height: 70px;
    display: flex;
    justify-content:center;
    align-items: center;
  }

  .header-box a{
    color: #e9e6e6;
    font-size: 20px;
  }

  .header-nav{
    flex: 1;
    position: relative;
  }

  .header-nav-item{
    padding-right: 58px;
    display: inline-block;
  }

  .user-msg{
    width: 194px;
    padding-right: 30px;
    display: inline-block;
    position: absolute;
    right: 0px;
    color: #ffffff;
    font-size: 20px;
  }

  .user-msg a{
    display: inline-block;
    vertical-align: middle
  }

  .title-name{
    font-size: 34px;
    font-weight: bold;
    padding: 40px 0px;
    color: #000000;
  }

  .purchase{
    padding: 4px 0px;
    background: #fafafa;
  }

  .purchase-box{
    display: flex;
    justify-content: center;
  }

  .purchase-box-middle{
    padding-top: 46px;
  }

  .purchase-box-middle > p{
    font-size: 25px;
    color: #000000;
  }

  .purchase-box-right{
    padding-top: 60px;
    padding-left: 30px;
  }

  .purchase-box-right > span{
    padding: 10px 30px;
    background: #e994a9;
    display: inline-block;
    border-radius: 2px;
    color: #ffffff;
    cursor:pointer;
  }

  .periphery{
    padding-bottom: 62px;
  }

  .periphery-title{
    padding: 76px 0px;
    font-size: 50px;
    text-align: center;
    color: #111111;
  }

  .periphery-body{
    display: flex;
  }

  .periphery-body-item{
    width: 400px;
    padding-left: 50px;
    padding-right: 62px;
    box-sizing: border-box;
  }

  .periphery-body-item-name{
    font-size: 24px;
    color: #000000;
    padding-bottom: 10px;
  }

  .periphery-body-price{
    font-size: 24px;
    color: #000000;
    padding-bottom: 10px;
  }

  .periphery-body-text{
    font-size: 20px;
    color: #000000;
    line-height: 24px;
    padding-bottom: 20px;
  }

  .periphery-body-add-cart{
    font-size: 20px;
    color: #ffffff;
    background: #e994a9;
    padding: 5px 28px;
    display: inline-block;
    border-radius: 2px;
    cursor:pointer;
  }

  .footer{
    height: 530px;
    padding-top: 90px;
    background: #f2f2f2;
    color: #111111;
  }

  .footer-title{
    font-size: 25px;
    padding-bottom: 28px ;
    font-weight: bold;
  }

  .footer-item-text{
    font-size: 18px;
    padding-bottom: 24px;
  }

  .footer-item-text > p{
    font-size: 18px;
    line-height: 24px;
  }

  .footer-box{
    display: flex;
    padding-bottom: 20px;
  }

  .footer-about{
    width: 208px;
    padding-left: 26px;
    box-sizing: border-box;
  }

  .footer-server{
    width: 208px;
    padding-left: 26px;
    box-sizing: border-box;
  }

  .footer-contact{
    width: 365px;
    padding-left: 26px;
    box-sizing: border-box;
  }

  .footer-code{
    width: 208px;
    padding-left: 26px;
    box-sizing: border-box;
    font-size: 16px;
  }

  .footer-code-title{
    font-size: 20px;
  }

  .footer-copyright{
    height: 100px;
    box-sizing: border-box;
  }

  .footer-copyright-text{
    display: inline-block;
    padding-top: 30px;
    margin-left: 26px;
    border-top: 3px solid #d7d7d7;
    box-sizing: border-box;
  }


</style>

<script>
  import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
  import bListGroup from 'bootstrap-vue/es/components/list-group/list-group';
  import bImg from 'bootstrap-vue/es/components/image/img';

  import mixins from '../../mixins/index';

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
      categoryList: [{
        categoryId: 1,
        categoryName: '分类',
        children: [{
          categoryId: 11,
          categoryName: '发夹',
          active: false
        }, {
          categoryId: 12,
          categoryName: '发箍',
          active: false
        }, {
          categoryId: 13,
          categoryName: '发圈',
          active: false
        }, {
          categoryId: 14,
          categoryName: '皇冠',
          active: false
        }, {
          categoryId: 15,
          categoryName: '发梳',
          active: false
        }]
      }, {
        categoryId: 2,
        categoryName: '风格',
        children: [{
          categoryId: 21,
          categoryName: '欧美',
          active: false
        }, {
          categoryId: 22,
          categoryName: '韩版',
          active: false
        }, {
          categoryId: 23,
          categoryName: '日版',
          active: false
        }, {
          categoryId: 24,
          categoryName: '民族',
          active: false
        }, {
          categoryId: 25,
          categoryName: '卡通',
          active: false
        }, {
          categoryId: 26,
          categoryName: '简约',
          active: false
        }]
      }, {
        categoryId: 3,
        categoryName: '价格',
        children: [{
          categoryId: 31,
          categoryName: '50 - 100元',
          active: false
        }, {
          categoryId: 32,
          categoryName: '100 - 200元',
          active: false
        }, {
          categoryId: 33,
          categoryName: '200 - 500元',
          active: false
        }, {
          categoryId: 34,
          categoryName: '500 - 1000元',
          active: false
        }, {
          categoryId: 35,
          categoryName: '1000元以上',
          active: false
        }]
      }]
    }),
    created() {

    },
    mounted() {

    },
    methods: {
      handleClick(childrenCategoryId, categoryId) {
        for(var category of this.categoryList) {
          if (category.categoryId == categoryId) {
            for(var children of category.children) {
              if (children.categoryId == childrenCategoryId) {
                children.active = true;
              } else {
                children.active = false;
              }
            }
          }
        }
      }
    }
  }
</script>
