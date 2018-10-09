<template>
  <div>
    <!-- 头部 -->
    <Header :index="-1"
            :isShowCategoryLeft="true"></Header>

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
        账户概况
      </div>
    </div>
    <div class="container">
      <div class="main">
        <Sidebar :thisPage="-1"></Sidebar>
        <div class="conter">
          <div class="member-info">
            <h1 class="member-info-title">账户概况</h1>
            <p class="member-info-title-p">欢迎回来，尊敬的 <span class="member-name">{{memberNickName}}</span></p>
            <!--<p class="member-info-title-p">您来自广东</p>-->
            <!--<hr class="member-info-hr">-->
            <!--<p class="member-info-title-p">生涯累计消费金额：￥0.00 元</p>-->
            <!--<p class="member-info-title-p">积分余额：100</p>-->
            <!--<p class="member-info-prompt">我们会尽快同步您过去的历史消费记录。</p>-->
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
  .sidebar{
    width: 324px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0px 15px 0px 30px;
  }
  .sidebar-title{
    font-size: 22px;
    margin: 20px 0px 16px 0px;
    color: #666666;
  }
  .sidebar-item{
    padding: 2px 0px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .sidebar-item-a{
    color: #1a1a1a;
  }
  .member-name{
    color: #e994a9;
  }

  .conter{
    flex: 1;
  }
  .member-info-title{
    color: #666666;
    font-size: 22px;
    margin: 20px 0px 20px 0px;
  }
  .member-info-title-p{
    color: #333333;
  }
  .member-info-hr{
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .member-info-prompt{
    font-style: italic;
    font-size: 12px;
    color: #999;
    margin-top: 20px;
  }

</style>

<script>
  import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
  import bImg from 'bootstrap-vue/es/components/image/img';

  import mixins from '../../mixins/index';
  import storage from '../../common/storage';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';
  import Sidebar from '../../component/member/sidebar';

  export default {
    components: {
      bCarousel,
      bImg,
      Header,
      Footer,
      Sidebar
    },
    mixins: [mixins],
    data: () => ({
      slide: 0,
      scrollIndex: 1,
      memberNickName: ''
    }),
    created() {

    },
    mounted() {
      this.memberNickName = storage.getMemberNickName();
    },
    methods: {

    }
  }
</script>
