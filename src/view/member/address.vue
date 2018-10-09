
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
        地址簿
      </div>
    </div>
    <div class="container main">
      <Sidebar :thisPage="2"></Sidebar>
      <div class="conter">
        <div class="content-description">
          <div class="content-description-none" v-if="addressList.length === 0">
            您可以点我
            <router-link to="/address/add">添加地址
            </router-link>
          </div>
          <h2 class="content-description-title"
              v-if="addressList.length > 0">
            地址簿
            <span class="content-description-title-new-address">
              <router-link class="content-description-title-new-address-a" to="/address/add">
                添加新地址
              </router-link>
            </span>
          </h2>
          <div class="address"
               v-if="addressList.length > 0">
            <div class="address-list"
                 v-for="item in addressList"
                 :key="item.memberAddressId">
              <div class="address-list-content">
                <p>{{item.memberAddressName}} {{item.memberAddressMobile}}</p>
                <p>{{item.memberAddressProvince}}</p>
                <p>{{item.memberAddressCity}}</p>
                <p>{{item.memberAddressArea}}</p>
                <p>{{item.memberAddressDetail}}</p>
              </div>
              <div class="address-list-right">
                <router-link class="address-list-edit-a" :to="'/address/edit/' + item.memberAddressId">
                  <div class="address-list-edit">
                    编辑
                  </div>
                </router-link>
                <div class="address-list-edit" @click="handleSetDefault(item.memberAddressId)" v-if="!item.memberAddressIsDefault">
                  设为默认
                </div>
                <div class="address-list-delte"
                     @click="handleDelete(item.memberAddressId, item.systemVersion)">删除</div>
              </div>
            </div>
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
  .sidebar-item-active{
    color: #e994a9;
  }

  .conter{
    flex: 1;
  }

  .content-description-none{
    font-size: 22px;
    margin-top: 14px;
  }

  .content-description-none > a{
    font-size: 20px;
    color: #e994a9;
  }

  .content-description-title{
    font-size: 22px;
    margin: 20px 0px 20px 0px;
    color: #666666;
    display: flex;
    align-items: center;
  }

  .content-description-title-new-address{
    flex: 1;
    text-align: right;
  }
  .content-description-title-new-address-a{
    font-size: 14px;
    color: #666666;
  }
  .content-description-title-new-address-a:hover{
    color: #e994a9;
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
  }
  .address-list-right{
    width: 50%;
    padding: 8px;
    text-align: right;
  }
  .address-list-edit{
    width: 90px;
    height: 36px;
    display: inline-block;
    line-height: 36px;
    text-align: center;
    background-color: #e994a9;
    cursor: pointer;
    color: #ffffff;
  }
  .address-list-delte{
    width: 90px;
    height: 36px;
    display: inline-block;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
    background-color: #e994a9;
    cursor: pointer;
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
      addressList: []
    }),
    created() {

    },
    mounted() {
      this.handleLoadAddressList();
    },
    methods: {
      handleLoadAddressList: function () {
        this.request({
          url: '/xingxiao/member/address/desktop/v1/list',
          data: {
          },
          success: (data) => {
            if (data.list && data.list.length > 0) {
              this.addressList = data.list;
            } else {
              this.addressList = []
            }
          },
          error: () => {

          }
        });

      },
      handleDelete: function (memberAddressId, systemVersion) {
        this.request({
          url: '/xingxiao/member/address/desktop/v1/delete',
          data: {
            memberAddressId: memberAddressId,
            systemVersion: systemVersion
          },
          success: (data) => {
            if (data) {
              this.handleLoadAddressList();
              this.$toasted.show("删除成功");
            }
          },
          error: () => {

          }
        });
      },
      handleSetDefault: function (memberAddressId) {
        this.request({
          url: '/xingxiao/member/address/desktop/v1/setDefault',
          data: {
            memberAddressId: memberAddressId
          },
          success: (data) => {
            if (data) {
              this.handleLoadAddressList();
            }
          },
          error: () => {

          }
        });
      }
    }
  }
</script>
