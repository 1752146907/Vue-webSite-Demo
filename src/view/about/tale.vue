<template>
  <div>
    <!-- 头部 -->
    <Header :index="3"
            :isShowCategoryLeft="true"></Header>

    <div class="banner-bg"></div>

    <div class="content-bg">
      <div class="container">
        <div class="content-box">
          <div class="list-box">
            <div class="title"
                 :class="isLately ? 'title-active' : ''"
                 @click="handleLately">最近</div>
            <em class="l"></em>
            <ul class="year-box" v-for="(year, index) in yearMonthList">
              <li class="year">
                <em class="l"
                    v-if="index != 0"></em>
                <h3 :class="thisYear ===  year.year ? 'active-h3' : ''"
                    @click="handleYear(year.year)">{{year.year}}年</h3>
                <div class="year-list"
                     v-if="thisYear === year.year"
                     v-for="month in year.monthList">
                  <em class="l"></em>
                  <p class="year-list-p"
                     :class="thisMonth === month ? 'year-list-active' : ''"
                     @click="handleMonth(year.year, month)">{{month}}月</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="tale-box">
            <div class="tale-box-item"
                 v-for="(article, index) in articleList"
                 :key="index"
                 v-if="!isArticleListShowAll ? (index < showNumber) : (index < articleList.length)">
              <div class="tale-box-item-box">
                <div class="tale-box-item-titme">
                  <span class="tale-box-item-titme-number">{{article.month}}</span>月
                  <span class="tale-box-item-titme-year">{{article.year}}</span>
                </div>
                <div class="tale-box-item-img">
                  <div v-if="article.articleIsOuterLink">
                    <a :href="article.articleOuterLink">
                      <div class="tale-box-item-img-box">
                        <div class="overflow-hidden">
                          <div class="tale-box-item-img-box-bg"
                               :style="'background-image: url(' + imageHost + article.articleImagePath +')'">
                          </div>
                        </div>
                      </div>
                      <p class="tale-box-item-img-p">{{article.articleTitle}}</p>
                    </a>
                  </div>
                  <div v-if="!article.articleIsOuterLink">
                    <router-link :to="'/article/details/' + article.articleId" >
                      <div class="tale-box-item-img-box">
                        <div class="overflow-hidden">
                          <div class="tale-box-item-img-box-bg"
                               :style="'background-image: url(' + imageHost + article.articleImagePath +')'">
                          </div>
                        </div>
                      </div>
                      <p class="tale-box-item-img-p">{{article.articleTitle}}</p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-center dot-dot-dot">
              <span @click="handleDot">{{showDotDotDotText}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<style scoped>
  .overflow-hidden{
    overflow: hidden;
  }
  .banner-bg{
    min-width: 1200px;
    max-width: 1920px;
    height: 653px;
    margin: 0 auto;
    background-image: url("../../../static/image/tale-banner.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .content-bg{
    min-width: 1200px;
    background-color: #f7f7f7;
  }
  .content-box{
    display: flex;
    padding-top: 78px;
    padding-bottom: 100px;
  }
  .list-box{
    width: 122px;
    text-align: right;
    padding-right: 16px;
    box-sizing: border-box;
    background-color: #ffffff;
  }
  .list-box > .title{
    font-size: 26px;
    padding-top: 30px;
    color: #a0a3a6;
    cursor: pointer;
  }
  .list-box > .title-active{
     color: #000000 !important;
   }
  .list-box .l{
    display: block;
    width: 6px;
    height: 30px;
    margin: 5px 0 5px 78px;
    background: #f7f7f7;
  }
  .year-box h3{
    font-size: 24px;
    color: #a0a3a6;
    cursor: pointer;
  }
  .year-box .active-h3{
    color: #202020;
  }
  .year-list-p{
    font-size: 24px;
    color: #a0a3a6;
    cursor: pointer;
  }
  .year-list-active{
    color: #000000;
  }
  .tale-box{
    flex: 1;
  }
  .tale-box-item{
    width: 534px;
    display: inline-block;
  }
  .tale-box-item-box{
    display: flex;
    margin-bottom: 85px;
  }
  .tale-box-item-titme{
    width: 162px;
    color: #000000;
    font-size: 24px;
    padding-right: 18px;
    text-align: right;
  }
  .tale-box-item-titme{
  }
  .tale-box-item-titme-number{
    font-size: 54px;
    color: #000000;
  }
  .tale-box-item-titme-year{
    width: 90px;
    text-align: center;
    display: inline-block;
    font-size: 24px;
    color: #ffffff;
    background: #f0a7af;
  }
  .tale-box-item-img-box{
    flex: 1;
    padding: 12px;
    background-color: #ffffff;
  }
  .tale-box-item-img-box-bg{
    width: 340px;
    height: 242px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: all 0.6s;
  }
  .tale-box-item-img-box-bg:hover{
    transform: scale(1.2);
  }
  .tale-box-item-img{
    overflow: hidden;
  }
  .tale-box-item-img-p{
    font-size: 18px;
    color: #010101;
    text-align: center;
    line-height: 20px;
    padding-top: 25px;
  }
  .tale-box-item-img > p{
    font-size: 20px;
    color: #000000;
    margin-bottom: 106px;
    word-wrap: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .dot-dot-dot span{
    cursor: pointer;
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
      isLately: true,
      thisYear: '',
      thisMonth: '',
      yearMonthList: [],
      articleList: [],
      isArticleListShowAll: false,
      showNumber: 18,
      showDotDotDotText: '显示更多'
    }),
    created() {

    },
    mounted() {
      this.handleLoadYearAndMonthList();
      this.handleLoadArticleList();
    },
    methods: {
      handleLately: function () {
        this.isLately = true;
        this.thisYear = '';
        this.thisMonth = '';
        this.handleLoadArticleList();
      },
      handleYear: function (year) {
        this.isLately = false;
        this.thisYear = year;
        this.thisMonth = '';
        this.handleLoadArticleList();
      },
      handleMonth: function (year, month) {
        for(var i = 0; i < this.yearMonthList.length; i++){
          if(year == this.yearMonthList[i].year){
            this.thisMonth = month;
          }
        }
        this.handleLoadArticleList();
      },
      handleLoadYearAndMonthList: function () {
        this.request({
          url: '/xingxiao/article/desktop/v1/year/and/month/list',
          data: {},
          success: (data) => {
            if (data && data.length > 0) {
              this.yearMonthList = data;
            }
          },
          error: () => {

          }
        });
      },
      handleLoadArticleList: function () {
        this.request({
          url: '/xingxiao/article/desktop/v1/storyList',
          data: {
            year: this.thisYear,
            month: this.thisMonth
          },
          success: (data) => {
            if (data && data.length > 0) {
              this.articleList = data;
            }
          },
          error: () => {

          }
        });
      },
      handleDot: function () {
        if(this.showNumber >= this.articleList.length){
          this.showDotDotDotText = '- 我是有底线的 -';
          return;
        }else {
          this.showNumber =  this.showNumber + 4
        }
      }
    }
  }
</script>
