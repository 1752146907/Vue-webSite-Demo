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
        订单评价
      </div>
    </div>
    <div class="container main">
      <Sidebar :thisPage="1"></Sidebar>
      <div class="conter">
        <div class="content-description">
          <div class="content-description-none" style="display: none;">您的订单列表是空的...</div>
          <h1 class="content-description-title">订单评价</h1>
          <div class="content-description-tag">
          <span :class="tagEvaluation ? 'content-description-tag-active' : ''"
                @click="handleGoEvaluation()">未评价</span>
            <span :class="!tagEvaluation ? 'content-description-tag-active' : ''"
                  @click="handleAlreadyEvaluation()">已评价</span>
          </div>
          <div v-if="tagEvaluation">
            <div class="content-description-title d-flex">
              <div class="content-description-title-order">订单编号</div>
              <div class="content-description-title-name">商品名称</div>
              <div class="content-description-title-number">数量</div>
              <div class="content-description-title-total">合计</div>
              <div class="content-description-title-time">创建时间</div>
              <div class="content-description-title-del"></div>
            </div>
            <div class="content-description-product d-flex"
                 v-for="item in evaluationList"
                 :key="item.id"
            >
              <div class="content-description-product-order">
                <router-link class="content-description-product-order-a" :to="'./order/detail?id=' + item.id">
                  09811888235642
                </router-link>
              </div>
              <div class="content-description-product-name">{{item.name}}</div>
              <div class="content-description-product-number">{{item.number}}</div>
              <div class="content-description-product-total">{{item.price}}</div>
              <div class="content-description-product-time">{{item.date}}</div>
              <div class="content-description-product-del">
                <a :href="'./evaluationDetail.html?id=' + item.id">评价</a>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="content-description-title d-flex">
              <div class="content-description-title-order">订单编号</div>
              <div class="content-description-title-name">商品名称</div>
              <div class="content-description-title-number">数量</div>
              <div class="content-description-title-total">合计</div>
              <div class="content-description-title-time">创建时间</div>
              <div class="content-description-title-del"></div>
            </div>
            <div class="content-description-product d-flex"
                 v-for="item in productList"
                 :key="item.id"
            >
              <div class="content-description-product-order">
                <router-link class="content-description-product-order-a" :to="'./order/detail?id=' + item.id">
                  09811888235642
                </router-link>
              </div>
              <div class="content-description-product-name">{{item.name}}</div>
              <div class="content-description-product-number">{{item.number}}</div>
              <div class="content-description-product-total">{{item.price}}</div>
              <div class="content-description-product-time">{{item.date}}</div>
              <div class="content-description-product-del"
                   @click="handleEvaluationLisDelt(item.id)">删除
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--&lt;!&ndash; 底部 &ndash;&gt;-->
    <Footer></Footer>
  </div>

</template>

<style scoped>
  .breadcrumb {
    margin: 30px 0px;
  }

  .breadcrumb-icon {
    width: 20px;
    height: 20px;
  }

  .breadcrumb-line {
    margin: 0px 10px;
  }

  .breadcrumb-a {
    color: #1a1a1a;
  }

  .breadcrumb-a:hover {
    color: #999;
  }

  .main {
    display: flex;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .sidebar {
    width: 324px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0px 15px 0px 30px;
  }

  .sidebar-title {
    font-size: 22px;
    margin: 20px 0px 16px 0px;
    color: #666666;
  }

  .sidebar-item {
    padding: 2px 0px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .sidebar-item-a {
    color: #1a1a1a;
  }

  .sidebar-item-active {
    color: #e994a9;
  }

  .content-description-none {
    font-size: 36px;
  }

  .conter {
    flex: 1;
  }

  .content {
    margin-top: 50px;
  }

  .content-description-tag {
    height: 34px;
    margin-bottom: 20px;
    border-bottom: 1px solid #dddddd;
  }

  .content-description-tag > span {
    padding: 10px 15px;
    cursor: pointer;
  }

  .content-description-tag-active {
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
    border-top: 1px solid #dddddd;
  }

  .content-description {
    font-size: 15px;
    padding: 20px 0px 20px 0px;
    box-sizing: border-box;
  }

  .content-description-title {
    color: #666666;
    font-size: 22px;
    margin: 0px 0px 30px 0px;
  }

  .content-description-title-order {
    width: 273px;
    padding: 8px;
  }

  .content-description-title-name {
    width: 180px;
    padding: 8px;
  }

  .content-description-title-number {
    width: 83px;
    padding: 8px;
  }

  .content-description-title-total {
    width: 86px;
    padding: 8px;
  }

  .content-description-title-time {
    width: 163px;
    padding: 8px;
  }

  .content-description-title-del {
    width: 91px;
    padding: 8px;
  }

  .content-description-product {
    color: #1a1a1a;
    border-top: 1px solid #ddd;
    margin-top: 10px;
  }

  .content-description-product-order {
    width: 180px;
    padding: 8px;
  }

  .content-description-product-order-a {
    color: #000000;
  }

  .content-description-product-name {
    width: 273px;
    padding: 8px;
  }

  .content-description-product-number {
    width: 83px;
    padding: 8px;
  }

  .content-description-product-total {
    width: 86px;
    padding: 8px;
  }

  .content-description-product-time {
    width: 163px;
    padding: 8px;
  }

  .content-description-product-del {
    width: 91px;
    padding: 8px;
    cursor: pointer;
  }

  .content-description-product-del > a {
    color: #686868;
  }

</style>

<script>
  import bImg from 'bootstrap-vue/es/components/image/img';

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
      productList: [{
        id: "001",
        number: '21',
        name: '宜家正品代诺拉马克杯伴侣杯咖啡杯早餐牛奶创意大杯子陶瓷喝水杯',
        price: '￥38.00',
        payment: '待支付',
        date: '2018-05-21'
      }, {
        id: "002",
        number: '6',
        name: '宜家正品代诺拉马克杯伴侣杯咖啡杯早餐牛奶创意大杯子陶瓷喝水杯',
        price: '￥1398.00',
        payment: '待支付',
        date: '2018-05-21'
      }, {
        id: "003",
        number: '7',
        name: '宜家正品代诺拉马克杯伴侣杯咖啡杯早餐牛奶创意大杯子陶瓷喝水杯',
        price: '￥98.00',
        payment: '已完成',
        date: '2018-05-21'
      }, {
        id: "004",
        number: '90',
        name: '宜家正品代诺拉马克杯伴侣杯咖啡杯早餐牛奶创意大杯子陶瓷喝水杯',
        price: '￥1198.00',
        payment: '待支付',
        date: '2018-05-21'
      }],
      evaluationList: [{
        id: "0001",
        number: '21',
        name: '现在，每次切换时，输入框都将被重新渲染。请看：',
        price: '￥38.00',
        payment: '待支付',
        date: '2018-05-21'
      }, {
        id: "0002",
        number: '6',
        name: '现在，每次切换时，输入框都将被重新渲染。请看：',
        price: '￥1398.00',
        payment: '待支付',
        date: '2018-05-21'
      }, {
        id: "0003",
        number: '7',
        name: '现在，每次切换时，输入框都将被重新渲染。请看：',
        price: '￥98.00',
        payment: '已完成',
        date: '2018-05-21'
      }, {
        id: "0004",
        number: '90',
        name: '现在，每次切换时，输入框都将被重新渲染。请看：',
        price: '￥1198.00',
        payment: '待支付',
        date: '2018-05-21'
      }],
      tagEvaluation: true
    }),
    created() {
    },
    mounted() {

    },
    methods: {
      handleEvaluationLisDelt(id) {
        for (var i = 0; i < this.productList.length; i++) {
          if (id == this.productList[i].id) {
            this.productList.splice(i, 1)
            return;
          }
        }
      },
      handleGoEvaluation() {
        this.tagEvaluation = !this.tagEvaluation;
      },
      handleAlreadyEvaluation() {
        this.tagEvaluation = !this.tagEvaluation;
      }
    }
  }
</script>
