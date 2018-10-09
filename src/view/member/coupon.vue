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
        我的优惠券
      </div>
    </div>
    <div class="container main">
      <Sidebar :thisPage="4"></Sidebar>
      <div class="conter">
        <div class="content-description">
          <h2 class="content-description-title">我的优惠券</h2>
          <div class="not-coupon">暂无优惠券</div>
        </div>
      </div>
    </div>

    <!--&lt;!&ndash; 底部 &ndash;&gt;-->
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
  .sidebar-item-active{
    color: #e994a9
  }

  .conter{
    flex: 1;
  }

  .content-description-none{
    font-size: 36px;
  }

  .content-description-title{
    font-size: 22px;
    margin: 20px 0px 16px 0px;
    color: #666666;
  }

  .not-coupon{
    margin-top: 160px;
    text-align: center;
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
      addressList: [{
        id: "001",
        name: "小钟",
        phone: '13800138000',
        province: '上海',
        city: '上海市',
        area: '虹口区',
        street: '杨树浦路 星外滩逐源大厦301室'
      }, {
        id: "002",
        name: "小钟",
        phone: '13800138000',
        province: '上海',
        city: '上海市',
        area: '虹口区',
        street: '杨树浦路 星外滩逐源大厦301室'
      }],

      form: {
        name: ''
      },
      foods: [
        { text: '男', value: null },
        '女'
      ]
    }),
    created() {
    },
    mounted() {

    },
    methods: {
      handleProductDel(id) {
        for(var i = 0; i < this.addressList.length; i++){
          if(id == this.addressList[i].id){
            this.addressList.splice(i, 1)
            return;
          }
        }
      }
    }
  }
</script>
