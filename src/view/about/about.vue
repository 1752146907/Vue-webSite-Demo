<template>
  <div>
    <!-- 头部 -->
    <Header :index="1"
            :isShowCategoryLeft="true"></Header>

    <div class="container nav-slide-body-content">
      <div class="nav-slide-body-content-point">
        <span @click="handleScrool(0)" class="nav-slide-body-content-point-item"
              :class="scrollIndex === 0 ? 'nav-slide-body-content-point-active' : ''"></span>
        <span @click="handleScrool(1)" class="nav-slide-body-content-point-item"
              :class="scrollIndex === 1 ? 'nav-slide-body-content-point-active' : ''"></span>
        <span @click="handleScrool(2)" class="nav-slide-body-content-point-item"
              :class="[scrollIndex === 2 ? 'nav-slide-body-content-point-active' : '']"></span>
        <span @click="handleScrool(3)" class="nav-slide-body-content-point-arr"></span>
      </div>
    </div>

    <div class="banner-bg-100">
      <div class="banner"></div>
    </div>

    <div class="VLab">
      <div class="container">
        <div class="block-title">
          <span class="block-title-line"></span>关于V+Lab<span class="block-title-line"></span>
          <div class="block-title-sub">About V+Lab</div>
        </div>
        <div class="VLab-brand">
          <div class="VLab-brand-title">品牌介绍</div>
          <div class="VLab-brand-name">
            <span>V+Lab</span>
            中文名称：薇嘉.实验室
          </div>
        </div>
        <div class="VLab-text">
          <p>
            V+Lab来源于自然生态保健品之国澳大利亚，正如我们的品牌 Slogan：High Tech Your Life Buty!智能科技美容一直是创始团队所秉承的产品理念，公司期望用本身的经营理念和全新的产品概念去改变传统美肤行业，并励志成为打破传统美容行业的品牌。
          </p>
          <p>V+Lab象征着科技、未来和全新的护肤体验，每一款高科技产品都颠覆着每个使用者感官，每款产品都100%来自于国外全进口，让中国消费者零距离接触全球最新美容科技品牌及国外生产线最严谨的最优品质。</p>
        </div>
      </div>
    </div>

    <div class="author-bg-100">
      <div class="author"></div>
    </div>

    <div class="course">
      <div class="container">
        <div class="block-title">
          <span class="block-title-line"></span>V+Lab历程<span class="block-title-line"></span>
          <div class="block-title-sub">Course of V+Lab</div>
        </div>
        <div class="course-body">
          <ul class="list-unstyled margin-top-32">
            <b-media tag="li">
              <img slot="aside"
                   class="case-image"
                   width="68"
                   height="68"
                   src="../../../static/image/about-02.png"
                   alt="事件图" />

              <h5 class="mt-0 course-body-content">
                <span class="course-body-time">2016.12</span>
                <span class="course-body-text">V+lab创始团队诞生，开创美容零食行业</span>
              </h5>
            </b-media>
          </ul>
          <ul class="list-unstyled margin-top-32">
            <b-media tag="li">
              <img slot="aside"
                   class="case-image"
                   width="68"
                   height="68"
                   src="../../../static/image/about-04.png"
                   alt="事件图" />

              <h5 class="mt-0 course-body-content">
                <span class="course-body-time">2017.01</span>
                <span class="course-body-text">V+lab与韩国Novarex正式签约，爆水丸正式投产</span>
              </h5>
            </b-media>
          </ul>
          <ul class="list-unstyled margin-top-32">
            <b-media tag="li">
              <img slot="aside"
                   class="case-image"
                   width="68"
                   height="68"
                   src="../../../static/image/about-05.png"
                   alt="事件图" />

              <h5 class="mt-0 course-body-content">
                <span class="course-body-time">2017.02</span>
                <span class="course-body-text">V+lab首款产品爆水丸正式下线</span>
              </h5>
            </b-media>
          </ul>
          <ul class="list-unstyled margin-top-32">
            <b-media tag="li">
              <img slot="aside"
                   class="case-image"
                   width="68"
                   height="68"
                   src="../../../static/image/about-06.png"
                   alt="事件图" />

              <h5 class="mt-0 course-body-content">
                <span class="course-body-time">2017.03</span>
                <span class="course-body-text">V+lab CEO Victoria探访韩国Novarex工厂</span>
              </h5>
            </b-media>
          </ul>
          <ul class="list-unstyled margin-top-32">
            <b-media tag="li">
              <img slot="aside"
                   class="case-image"
                   width="68"
                   height="68"
                   src="../../../static/image/about-07.png"
                   alt="事件图" />

              <h5 class="mt-0 course-body-content">
                <span class="course-body-time">2017.03</span>
                <span class="course-body-text">爆水丸首批试用，收到众多明星网红的祝贺与反馈、特邀美容教父大K
老师成为爆水丸首席美容官</span>
              </h5>
            </b-media>
          </ul>
          <ul class="list-unstyled margin-top-32">
            <b-media tag="li">
              <img slot="aside"
                   class="case-image"
                   width="68"
                   height="68"
                   src="../../../static/image/about-08.png"
                   alt="事件图" />

              <h5 class="mt-0 course-body-content">
                <span class="course-body-time">2017.04</span>
                <span class="course-body-text">V+lab爆水丸闪现上海时装周，与刘嘉玲合影</span>
              </h5>
            </b-media>
          </ul>
          <ul class="list-unstyled margin-top-32">
            <b-media tag="li">
              <img slot="aside"
                   class="case-image"
                   width="68"
                   height="68"
                   src="../../../static/image/about-09.png"
                   alt="事件图" />

              <h5 class="mt-0 course-body-content">
                <span class="course-body-time">2017.06</span>
                <span class="course-body-text">V+lab环球之旅首站日本，量子号游轮五天四晚封闭式品牌培训</span>
              </h5>
            </b-media>
          </ul>
          <ul class="list-unstyled margin-top-32">
            <b-media tag="li">
              <img slot="aside"
                   class="case-image"
                   width="68"
                   height="68"
                   src="../../../static/image/about-10.png"
                   alt="事件图" />

              <h5 class="mt-0 course-body-content">
                <span class="course-body-time">2017.06</span>
                <span class="course-body-text">V+lab确定品牌的中文名薇嘉实验室、爆水丸之歌发布</span>
              </h5>
            </b-media>
          </ul>
          <ul class="list-unstyled margin-top-32">
            <b-media tag="li">
              <img slot="aside"
                   class="case-image"
                   width="68"
                   height="68"
                   src="../../../static/image/about-11.png"
                   alt="事件图" />

              <h5 class="mt-0 course-body-content">
                <span class="course-body-time">2017.07</span>
                <span class="course-body-text">V+lab环球之旅第二站，品牌诞生地——澳洲，掘金之旅圆满成功</span>
              </h5>
            </b-media>
          </ul>
          <ul class="list-unstyled margin-top-32">
            <b-media tag="li">
              <img slot="aside"
                   class="case-image"
                   width="68"
                   height="68"
                   src="../../../static/image/about-12.png"
                   alt="事件图" />

              <h5 class="mt-0 course-body-content">
                <span class="course-body-time">2017.08</span>
                <span class="course-body-text">V+lab北京W酒店 首次品牌媒体发布会及COS晚宴</span>
              </h5>
            </b-media>
          </ul>
          <ul class="list-unstyled margin-top-32">
            <b-media tag="li">
              <img slot="aside"
                   class="case-image"
                   width="68"
                   height="68"
                   src="../../../static/image/about-13.png"
                   alt="事件图" />

              <h5 class="mt-0 course-body-content">
                <span class="course-body-time">2017.11</span>
                <span class="course-body-text">V+lab爆水丸进入《美丽俏佳人》演播室</span>
              </h5>
            </b-media>
          </ul>
          <ul class="list-unstyled margin-top-32">
            <b-media tag="li">
              <img slot="aside"
                   class="case-image"
                   width="68"
                   height="68"
                   src="../../../static/image/about-14.png"
                   alt="事件图" />

              <h5 class="mt-0 course-body-content">
                <span class="course-body-time">2018.01</span>
                <span class="course-body-text">V+lab正式赞助《骄阳》剧组，李治廷等主演热赞爆水丸</span>
              </h5>
            </b-media>
          </ul>
          <ul class="list-unstyled margin-top-32">
            <b-media tag="li">
              <img slot="aside"
                   class="case-image"
                   width="68"
                   height="68"
                   src="../../../static/image/about-15.png"
                   alt="事件图" />

              <h5 class="mt-0 course-body-content">
                <span class="course-body-time">2018.02</span>
                <span class="course-body-text">V+lab爆水丸造就改变、红动全城杭州发布会盛大召开</span>
              </h5>
            </b-media>
          </ul>
          <ul class="list-unstyled margin-top-32">
            <b-media tag="li">
              <img slot="aside"
                   class="case-image"
                   width="68"
                   height="68"
                   src="../../../static/image/about-16.png"
                   alt="事件图" />

              <h5 class="mt-0 course-body-content">
                <span class="course-body-time">2018.03</span>
                <span class="course-body-text">V+lab品牌完成首轮天使轮融资</span>
              </h5>
            </b-media>
          </ul>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<style scoped>

  .margin-top-32{
    margin-top: 32px;
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

  .banner-bg-100{
    width: 100%;
    background: #e8ebee;
  }

  .banner{
    min-width: 1200px;
    max-width: 1440px;
    height: 653px;
    margin: 0 auto;
    background-image: url("../../../static/image/about-01.png");
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

  .VLab{
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 64px;
  }
  .VLab-brand{
    width: 676px;
    height: 104px;
    margin: 20px auto 30px auto;
    border: 1px dashed #cccccc;
    box-sizing: border-box;
    text-align: center;
  }
  .VLab-brand-title{
    color: #010101;
    padding: 14px 0px 4px 0px;
    font-size: 24px;
  }
  .VLab-brand-name{
    color: #e397b7;
    font-size: 24px;
  }
  .VLab-brand-name > span {
    padding-right: 10px;
    color: #e397b7;
    font-size: 20px;
  }
  .VLab-text{
    width: 676px;
    margin: 0 auto 90px auto;
    text-align: center;
  }
  .VLab-text p{
    font-size: 14px;
    color: #1b1b1b;
    margin-bottom: 10px;
  }

  .author-bg-100{
    width: 100%;
  }

  .author{
    min-width: 1200px;
    max-width: 1920px;
    height: 611px;
    margin: 0 auto;
    background-image: url("../../../static/image/about-03.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .course{
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 64px;
  }
  .course-body{
    padding: 0px 120px 62px 182px;
  }
  .case-image{
    margin-right: 54px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .course-body h5{
    font-size: 20px;
    color: #000000;
    display: flex;
  }
  .course-body-time{
    width: 110px;
    font-size: 14px;
    color: #1b1b1b;
    padding-right: 20px;
  }
  .course-body-text{
    flex: 1;
    font-size: 14px;
    color: #1b1b1b;
    letter-spacing: 1px;
  }
  .course-body-content{
    padding-top: 22px;
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
      slide: 0,
      scrollIndex: 1,

    }),
    created() {

    },
    mounted() {
      this.windowScrool();
      setTimeout(() => {
        window.scrollTo(0, this.$route.query.top);
      }, 500)
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      },
      windowScrool: function () {
        window.onscroll = () => {
          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          if (scrollTop <= 653){
            this.scrollIndex = 0;
          }
          if (scrollTop > 653 && scrollTop <= 1000){
            this.scrollIndex = 1;
          }
          else if (scrollTop > 1000 && scrollTop <= 1138){
            this.scrollIndex = 2;
          }
          else if (scrollTop > 1138){
            this.scrollIndex = 2;
          }
        }
      },
      handleScrool: function (id) {
        if(id === 0){
          window.scrollTo(0, 0);
          this.scrollIndex = id;
        }
        if(id === 1){
          window.scrollTo(0, 668);
          this.scrollIndex = id;
        }
        if(id === 2){
          window.scrollTo(0, 1138);
          this.scrollIndex = id;
        }
        if(id === 3){
          window.scrollTo(0, 0);
          this.scrollIndex = 1;
        }
      }
    }
  }
</script>
