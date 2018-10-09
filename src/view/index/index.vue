<template>
  <div>
    <!-- 头部 -->
    <Header :index="0"
            :isShowCategoryLeft="true"></Header>

    <div class="banner">
      <b-carousel id="carousel1"
                  indicators
                  background="#ffffff"
                  :interval="14000"
                  img-width="1920"
                  img-height="469"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >
        <b-carousel-slide class="carousel-slide"
                          v-for="(banner, index) in bannerList"
                          :key="index"
                          :style="'background-image: url(' + imageHost + banner.advertisementImagePath +')'">
          <!--<h1>Hello world!</h1>-->
        </b-carousel-slide>

      </b-carousel>
    </div>

    <div class="snacks">
      <div class="snacks-image"></div>
      <div class="container snacks-body-content">
        <div class="snacks-body-content-box">
          <h2 class="snacks-body-content-box-title">全球独创的美容零食现已来临</h2>
          <p class="snacks-body-content-box-text">薇嘉实验室通过大量的数据调研，发现护肤和零食是女性日常
            生活中最喜爱的两个部分，于是我们灵机一动，为何不将女性
            最需要的护肤与女性最爱的零食结合在一起呢？于是全球首款
            美容零食——爆水丸诞生了！
          </p>
          <p class="snacks-body-content-box-text">爆水丸通过添加小分子透明质酸、纳米胶原蛋白和维C，将皮
            肤最需要的锁水营养物质透过口服实现补充，同时又用QQ软糖
            的性状实现口感佳，无抗拒感！
          </p>
        </div>
      </div>
    </div>

    <div class="container nav-slide-body-content">
      <div class="nav-slide-body-content-point">
        <span @click="handleScrool(1)" class="nav-slide-body-content-point-item"
              :class="scrollIndex === 1 ? 'nav-slide-body-content-point-active' : ''"></span>
        <span @click="handleScrool(2)" class="nav-slide-body-content-point-item"
              :class="[scrollIndex === 2 ? 'nav-slide-body-content-point-active' : '']"></span>
        <span @click="handleScrool(3)" class="nav-slide-body-content-point-item"
              :class="[scrollIndex === 3 ? 'nav-slide-body-content-point-active' : '']"></span>
        <span @click="handleScrool(4)" class="nav-slide-body-content-point-item"
              :class="[scrollIndex === 4 ? 'nav-slide-body-content-point-active' : '']"></span>
        <span @click="handleScrool(5)" class="nav-slide-body-content-point-item"
              :class="[scrollIndex === 5 ? 'nav-slide-body-content-point-active' : '']"></span>
        <span @click="handleScrool(6)" class="nav-slide-body-content-point-arr"></span>
      </div>
    </div>

    <div class="idea">
      <div class="container">
        <div class="block-title">
          <span class="block-title-line"></span>薇嘉实验室核心理念<span class="block-title-line"></span>
          <div class="block-title-sub">Core Idea Of V+lab</div>
        </div>
        <div class="idea-body">
          <div class="idea-body-item">
            <div class="idea-body-item-image-box">
              <b-img  width="306px"
                      height="306px"
                      class="idea-body-item-image"
                      src="./static/image/idea01.png" alt=""/>
            </div>
            <div class="idea-body-title">趣味</div>
            <div class="idea-body-sub">INTEREST</div>
            <div class="idea-body-item-msg"></div>
            <div class="idea-body-item-float-text">
              我们一直认为用最简单的方式即可完成的事情不需要做更复杂，就犹如我们的产品负责人提出的理念：用最简单且有趣的方式帮助每位女性改善皮肤。我们在研究了全球超过80%的护肤品后发现，大多护肤品都还停留在很原始的使用方式，但科学上来说却不是最有效的。通过结合女性最需要和最喜爱两个属性，我们将护肤做了CrossExperience（交叉式体验）式的升级，于是美容零食的概念由此而生。
            </div>
          </div>
          <div class="idea-body-item">
            <div class="idea-body-item-image-box">
              <b-img  width="306px"
                      height="306px"
                      class="idea-body-item-image"
                      src="./static/image/idea03.png" alt=""/>
            </div>
            <div class="idea-body-title">科技</div>
            <div class="idea-body-sub">TECHNOLOGY</div>
            <div class="idea-body-item-msg"></div>
            <div class="idea-body-item-float-text">
              有效是薇嘉实验室一直所坚持的品牌理念，为了做到真正有效，我们在所有产品研发上均使用了行业的最高科技。目前我们的HA-800小分子透明质酸材料只有韩国和日本可以研发出来。NANO 胶原蛋白等小分子可透过胃壁吸收的原材料相比其他胶原蛋白可达到超过80%以上的吸收率！在护肤品概念越来越多的市场行情下，我们坚持用最有效的高科技材料而不是去炒作概念，让用户的脸为我们做真正的背书。
            </div>
          </div>
          <div class="idea-body-item">
            <div class="idea-body-item-image-box">
              <b-img  width="306px"
                      height="306px"
                      class="idea-body-item-image"
                      src="./static/image/idea02.png" alt=""/>
            </div>
            <div class="idea-body-title">分享</div>
            <div class="idea-body-sub">SHARE</div>
            <div class="idea-body-item-msg"></div>
            <div class="idea-body-item-float-text">
              所有的营销最终需要的是用户口碑才能支撑，所以与其大笔宣传不如让每个用户成为我们的传播者。薇嘉在市场营销方面更注重于用户的口碑宣传，甚至在渠道的选择上也选择社会化分享式的营销渠道就是为了让有效的用户传播我们的产品功效和产品理念。我们相信只有用户的认可和有效背书才能让我们的品牌被更多的接受和体验，从而改变整个市场格局。
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="one" class="case">
      <div class="container">
        <div class="block-title">
          <span class="block-title-line"></span>客户案例<span class="block-title-line"></span>
          <div class="block-title-sub">Customer Case</div>
        </div>
      </div>
      <div class="case-bg01"></div>
      <div class="case-bg02">
        <div class="container" style="position: relative">
          <div class="case-bg-content">
            <p class="case-bg-content-text">说到补水，大家会认为敷面膜就能起到补水作用！其实不然，人体的皮肤结构分为 表皮层和真皮层，透明质酸平时就储存在真皮层中，当然所要补充的透明质酸也需要向真皮层去补充才能起到作用！而表皮层的皮肤毛孔是十分微小的，远远小于玻尿酸分子直径。一般外用护肤品包括面膜、面霜等等都是无法透过毛孔达到真皮层！</p>
          </div>
        </div>
      </div>
    </div>

    <div class="country">
      <div class="container">
        <div class="block-title">
          <span class="block-title-line"></span>全球超过<span class="block-title-pink">20</span>个国家和地区有售<span class="block-title-line"></span>
          <div class="block-title-sub">It has been sold in over 20 countries and</div>
          <div class="block-title-sub">regions all over the world.</div>
        </div>
      </div>
      <div class="country-bg"></div>
    </div>

    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
  import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';
  import bImg from 'bootstrap-vue/es/components/image/img';

  import mixins from '../../mixins/index';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';

  export default {
    components: {
      bCarousel,
      bImg,
      Header,
      Footer
    },
    mixins: [mixins],
    data: () => ({
      slide: 0,
      scrollIndex: 1,
      bannerList: [],
      scrollTop: ''
    }),
    created() {

    },
    mounted() {
      this.handleLoadBannerList();
      this.windowScrool();
    },
    methods: {
      windowScrool: function () {
        window.onscroll = () => {
          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          if (scrollTop <= 608){
            this.scrollIndex = 1;
          }
          else if (scrollTop > 608 && scrollTop <= 1030){
            this.scrollIndex = 2;
          }
          else if (scrollTop > 1030 && scrollTop <= 1702){
            this.scrollIndex = 3;
          }
          else if (scrollTop > 1702 && scrollTop <= 2554){
            this.scrollIndex = 4;
          }
          else if (scrollTop > 3227){
            this.scrollIndex = 5;
          }
        }
      },
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      },
      handleScrool: function (id) {
        if(id === 1){
          window.scrollTo(0, 608);
          this.scrollIndex = id;
        }
        if(id === 2){
          window.scrollTo(0, 1030);
          this.scrollIndex = id;
        }
        if(id === 3){
          window.scrollTo(0, 1702);
          this.scrollIndex = id;
        }
        if(id === 4){
          window.scrollTo(0, 2554);
          this.scrollIndex = id;
        }
        if(id === 5){
          window.scrollTo(0, 3227);
          this.scrollIndex = id;
        }
        if(id === 6){
          window.scrollTo(0, 0);
          this.scrollIndex = 1;
        }
      },
      handleLoadBannerList: function () {
        this.request({
          url: '/xingxiao/advertisement/desktop/v1/list',
          data: {
            advertisementCategoryCode: 'INDEX_BANNER'
          },
          success: (data) => {
            if (data.list && data.list.length > 0) {
              this.bannerList = data.list;
            }
          },
          error: () => {

          }
        });
      }
    }
  }
</script>

<style scoped>

  .banner{
    min-width: 1200px;
    max-width: 1920px;
    height: 653px;
    margin: 0 auto;
  }
  .carousel-slide{
    max-width: 19200px;
    height: 653px;
    margin: 0 auto;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .block-title-pink{
    color: #da9193;
    font-size: 28px;
  }
  .block-title{
    color: #000000;
    font-size: 28px;
    text-align: center;
  }
  .block-title-line{
    width: 72px;
    margin: 0px 12px;
    display: inline-block;
    border-bottom: 1px solid #000000;
  }
  .block-title-sub{
    font-size: 12px;
    color: #020202;
  }

  .snacks{
    /*position: sticky;*/
    /*top: 0px;*/
    min-width: 1200px;
    z-index: 99;
  }
  .snacks-image{
    max-width: 1920px;
    height: 418px;
    margin: 0 auto;
    background-image: url("../../../static/image/index-product01.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .snacks-body-content{
    position: relative;
  }
  .snacks-body-content-box{
    width: 380px;
    position: absolute;
    right: 2px;
    top: -314px;
  }
  .snacks-body-content-box-title{
    font-size: 28px;
    margin-bottom: 36px;
    color: #000000;
  }
  .snacks-body-content-box-text{
    line-height: 26px;
    font-size: 14px;
    color: #1b1b1b;
    margin-bottom: 6px;
  }

  .nav-slide-body-content{
    position: relative;
  }
  .nav-slide-body-content-point{
    width: 18px;
    height: 190px;
    position: fixed;
    right: 48px;
    top: 50%;
    margin-top: -94px;
    z-index: 100;
  }
  .nav-slide-body-content-point-active{
    background: #f4bdca;
  }
  .nav-slide-body-content-point-item{
    width: 16px;
    height: 16px;
    border: 2px solid #f4bdca;
    display: block;
    margin-bottom: 18px;
    border-radius: 50%;
    cursor:pointer;
  }
  .nav-slide-body-content-point-arr{
    width: 0;
    height: 0;
    top: -18px;
    left: -2px;
    position: relative;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 21px solid #f4bdca;
    cursor:pointer;
  }

  .idea{
    /*max-width: 1440px;*/
    min-width: 1200px;
    margin: 0 auto;
    height: 672px;
    background: #f3f3f3;
    padding-top: 64px;
  }
  .idea-body{
    display: flex;
    flex-wrap: wrap;
    padding-top: 70px;
  }
  .idea-body-item{
    width: 306px;
    color: #020202;
    text-align: center;
    margin-left: 73px;
    background: #ffffff;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
  }
  .idea-body-item:hover .idea-body-item-msg{
    top: 0px;
  }
  .idea-body-item:hover .idea-body-item-float-text{
    top: 0px;
  }
  .idea-body-item-msg{
    width: 306px;
    height: 306px;
    position: absolute;
    top: -306px;
    right: 0px;
    left: 0px;
    background: #dd96a6;
    opacity: 0.92;
    transition: all 0.6s;
  }
  .idea-body-item-float-text{
    width: 306px;
    height: 306px;
    line-height: 22px;
    position: absolute;
    top: -306px;
    right: 0px;
    left: 0px;
    padding: 50px 12px 0px 12px;
    box-sizing: border-box;
    font-size: 12px;
    color: #ffffff;
    text-align: left;
    transition: all 0.6s;
  }
  .idea-body-item-image-box{
    width: 306px;
    height: 306px;
    overflow: hidden;
  }
  .idea-body-item-image{
    border-radius: 5px 5px 0px 0px;
  }
  .idea-body-title{
    height: 32px;
    font-size: 24px;
  }
  .idea-body-sub{
    font-size: 14px;
    padding-bottom: 4px;
  }

  .case{
    width: 100%;
    min-width: 1200px;
    padding-top: 64px;
  }
  .case-bg01{
    height: 672px;
    margin: 70px auto 0 auto;
    top: 0px;
    background-image: url("../../../static/image/index-case.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .case-bg02{
    max-width: 1920px;
    height: 673px;
    margin: 0 auto;
    top: 0px;
    position: relative;
    background-image: url("../../../static/image/index-cart02.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .case-bg-content {
    width: 490px;
    height: 130px;
    position: absolute;
    top: 208px;
    left: 586px;
  }

  .case-bg-content-text {
    color: #e296a8;
    line-height: 24px;
    font-size: 14px;
  }

  .country{
    min-width: 1200px;
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 64px;
    padding-bottom: 64px;
    background-color: #fafafa;
  }
  .country-bg{
    max-width: 1440px;
    height: 673px;
    margin: 83px auto 0 auto;
    top: 0px;
    background-image: url("../../../static/image/country.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
</style>
