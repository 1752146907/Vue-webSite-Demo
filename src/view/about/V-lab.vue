<template>
  <div>
    <!-- 头部 -->
    <Header :index="2"
            :isShowCategoryLeft="true"></Header>

    <div class="banner-bg">
      <div class="header-bg">
        <div class="container" style="position: relative">
          <router-link class="jump-cart"
                       to="/product/list"></router-link>
        </div>
      </div>
      <div class="header-bg-image"></div>
      <div class="header-bg-img"></div>
      <div class="container">
        <div class="content-image-box">
          <b-img class="content-image" src="../../../static/image/V-lab04.png"></b-img>
          <b-img class="content-image" src="../../../static/image/V-lab05.png"></b-img>
          <b-img class="content-image" src="../../../static/image/V-lab06.png"></b-img>
          <b-img class="content-image" src="../../../static/image/V-lab07.png"></b-img>
          <b-img class="content-image" src="../../../static/image/V-lab08.png"></b-img>
          <b-img class="content-image margin-top-4" src="../../../static/image/V-lab09.png"></b-img>
          <b-img class="content-image margin-top-4" src="../../../static/image/V-lab10.png"></b-img>
          <b-img class="content-image margin-top-4" src="../../../static/image/V-lab11.png"></b-img>
          <b-img class="content-image" src="../../../static/image/V-lab12.png"></b-img>
          <b-img class="content-image" src="../../../static/image/V-lab13.png"></b-img>
          <b-img class="content-image" src="../../../static/image/V-lab14.png"></b-img>
          <b-img class="content-image" src="../../../static/image/V-lab15.png"></b-img>
          <b-img class="content-image" src="../../../static/image/V-lab16.png"></b-img>
          <b-img class="content-image" src="../../../static/image/V-lab17.png"></b-img>
          <b-img class="content-image" src="../../../static/image/V-lab18.png"></b-img>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<style scoped>

  .margin-top-4 {
    margin-top: 4px;
  }
  .banner-bg {
    min-width: 1200px;
    max-width: 1920px;
    margin: 0 auto;
    background-image: url("../../../static/image/V-lab19.png");
    background-repeat: repeat-y;
  }
  .header-bg {
    min-width: 1200px;
    max-width: 1920px;
    height: 653px;
    margin: 0 auto;
    background-image: url("../../../static/image/V-lab01.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .header-bg-image {
    min-width: 1200px;
    max-width: 1920px;
    height: 653px;
    margin: 0 auto;
    background-image: url("../../../static/image/V-lab02.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .header-bg-img {
    min-width: 1200px;
    max-width: 1920px;
    height: 338px;
    margin: 0 auto;
    background-image: url("../../../static/image/V-lab03.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .jump-cart {
    width: 200px;
    height: 55px;
    position: absolute;
    top: 526px;
    right: 500px;
  }
 .content-image-box {
   width: 100%;
   text-align: center;
 }


</style>

<script>
  import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
  import bImg from 'bootstrap-vue/es/components/image/img';
  import bMedia from 'bootstrap-vue/es/components/media/media';

  import mixins from '../../mixins/index';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';

  export default {
    components: {
      bCarousel,
      bImg,
      bMedia,
      Header,
      Footer
    },
    mixins: [mixins],
    data: () => ({

    }),
    created() {

    },
    mounted() {

    },
    methods: {

    }
  }
</script>
