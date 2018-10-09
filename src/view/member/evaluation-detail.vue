
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
        商品评价
      </div>
    </div>
    <div class="container main">
      <Sidebar :thisPage="1"></Sidebar>
      <div class="conter">
        <div class="content-description">
          <h2 class="content-description-title">商品评价</h2>
          <div class="address">
            <div class="address-list">
              <div class="address-list-content">
                <b-img clase="navigation-home-image"
                       width="60"
                       height="60"
                       style="margin-right: 8px;"
                       src="../static/image/4.png"
                       alt=""/>
                <div class="address-list-content-title">广东移动1G全国漫游流量当年包，剩余流量次月6日自动结转</div>
              </div>
              <div class="address-list-right">
                <b-form-textarea id="textarea"
                                 v-model="textareaText"
                                 placeholder = "请输入内容..."
                                 :rows = "3"
                                 :max-rows = "6" >
                </b-form-textarea>

              </div>
            </div>
          </div>
          <div class="row settlement">
            <div class="col-auto settlement-sublime">提交</div>
          </div>
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
    color: #FF6000;
  }

  .conter{
    flex: 1;
  }

  .content-description-none{
    font-size: 36px;
  }

  .content-description-title{
    font-size: 22px;
    margin-bottom: 20px;
  }
  .address{
    border-top: 1px solid #dddddd;
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
  }
  .address-list{
    display: flex;
    border-bottom: 1px solid #dddddd;
  }
  .address-list-content{
    width: 50%;
    padding: 8px;
    border-right: 1px solid #dddddd;
    display: flex;
  }
  .address-list-content-title{
    flex: 1;
  }
  .address-list-right{
    width: 50%;
    padding: 8px;
  }
  .settlement{
    position: relative;
  }
  .settlement-sublime {
    width: 90px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
    background-color: #FF6402;
    cursor: pointer;
    position: absolute;
    right: 12px;
    top: 30px;
  }
</style>

<script>
  import bImg from 'bootstrap-vue/es/components/image/img';

  import mixins from '../../mixins/index';
  import { FormTextarea } from 'bootstrap-vue/es/components';

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
      textareaText: ''
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
