
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
        地址编辑
      </div>
    </div>
    <div class="container main">
      <Sidebar :thisPage="2"></Sidebar>
      <div class="conter">
        <div class="content-description">
          <div class="content-description-none" style="display: none;">您的收货地址是空的...</div>
          <h2 class="content-description-title">地址编辑</h2>
          <b-form-group
            id="fieldName"
            label="收货人姓名"
            label-for="memberAddressName">
            <b-form-input id="memberAddressName"
                          placeholder="请输入收货人姓名..."
                          v-model="memberAddressName"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldMobile"
            label="收件人手机号码"
            label-for="memberAddressMobile">
            <b-form-input id="memberAddressMobile"
                          placeholder="请输入手机号码..."
                          v-model="memberAddressMobile"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="省份:"
                        label-for="memberAddressProvince">
            <b-form-select id="memberAddressProvince"
                           v-model="memberAddressProvince"
                           @change="handleProvChange">
              <option v-if="memberAddressProvince">{{memberAddressProvince}}</option>
              <option v-for="option in arr" :value="option.name">
                {{ option.name }}
              </option>
            </b-form-select>
          </b-form-group>
          <b-form-group label="城市:"
                        label-for="memberAddressCity">
            <b-form-select id="memberAddressCity"
                           v-model="memberAddressCity"
                           @change="handleCityChange">
              <option v-if="memberAddressCity">{{memberAddressCity}}</option>
              <option v-for="option in cityArr" :value="option.name">
                {{ option.name }}
              </option>
            </b-form-select>
          </b-form-group>
          <b-form-group label="行政区:"
                        label-for="memberAddressArea">
            <b-form-select id="memberAddressArea"
                           v-model="memberAddressArea"
                           @change="handleAreaChange">
              <option v-if="memberAddressArea">{{memberAddressArea}}</option>
              <option v-for="option in districtArr" :value="option.name">
                {{ option.name }}
              </option>
            </b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldAddressDetail"
            label="地址详情"
            label-for="memberAddressDetail">
            <b-form-input id="memberAddressDetail"
                          placeholder="请输入地址详情..."
                          v-model="memberAddressDetail"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldAddressIsDefault"
            label="是否默认地址"
            label-for="memberAddressIsDefault"
          >
            <b-form-radio-group id="memberAddressIsDefault" v-model="memberAddressIsDefault" :options="isDefaultOptions" name="memberAddressIsDefault">
            </b-form-radio-group>
          </b-form-group>
          <div class="row settlement">
            <div class="col-auto settlement-sublime" @click="handleSubmit">提交</div>
          </div>
        </div>
      </div>
    </div>
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

  .content-description{
    width: 548px;
  }

  .content-description-none{
    font-size: 36px;
  }

  .content-description-title{
    font-size: 22px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .settlement{
    height: 70px;
    position: relative;
    margin-bottom: 60px;
  }
  .settlement-sublime {
    width: 90px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
    background-color: #e994a9;
    cursor: pointer;
    position: absolute;
    right: 12px;
    top: 30px;
  }
</style>

<script>
  import bImg from 'bootstrap-vue/es/components/image/img';
  import bForm from 'bootstrap-vue/es/components/form/form';

  import mixins from '../../mixins/index';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';
  import Sidebar from '../../component/member/sidebar';
  import china from '../../common/china';

  export default {
    components: {
      bImg,
      Header,
      Footer,
      Sidebar
    },
    mixins: [mixins],

    data: () => ({
      memberAddressId: '',
      memberAddressName: '',
      memberAddressMobile: '',
      memberAddressDetail: '',
      memberAddressIsDefault: false,
      systemVersion: 0,
      arr: china,
      memberAddressProvince: '',
      memberAddressCity: '',
      memberAddressArea: '',
      cityArr: [],
      districtArr: [],
      isDefaultOptions: [{
        text: '是',
        value: true,
        disabled: false
      }, {
        text: '否',
        value: false,
        disabled: false
      }]
    }),
    created() {
    },
    mounted() {
      if (this.$route.params.memberAddressId) {
        this.memberAddressId = this.$route.params.memberAddressId;
      }

      if (!String.prototype.trim) {    // 清除字符串两端空格，包含换行符、制表符
        String.prototype.trim = function () {
          return this.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "");
        }
      }

      if (this.memberAddressId.trim() !== '') {
        this.handleLoad();
      } else {
        for (var i = 0; i < this.arr.length; i++) {  //初始化城市列表
          if (this.arr[i].name === this.memberAddressProvince) {
            this.cityArr = this.arr[i].sub;
            for (var j = 0; j < this.cityArr.length; j++) {
              if (this.memberAddressCity === this.cityArr[j].name) {
                this.districtArr = this.cityArr[j].sub;
                break;
              }
            }
            break;
          }
        }
      }
    },
    methods: {
      updateCity: function () {
        for (var i in this.arr) {
          var obj = this.arr[i];
          if (obj.name == this.memberAddressProvince) {
            this.cityArr = obj.sub;
            break;
          }
        }
        this.memberAddressCity = this.cityArr[1].name;
      },
      updateDistrict: function () {
        for (var i in this.cityArr) {
          var obj = this.cityArr[i];
          if (obj.name == this.memberAddressCity) {
            this.districtArr = obj.sub;
            break;
          }
        }
        if(this.districtArr && this.districtArr.length > 0 && this.districtArr[1].name) {
          this.memberAddressArea = this.districtArr[1].name;
        } else {
          this.memberAddressArea = this.districtArr[0].name;
        }
      },
      handleProvChange (value) {
        if (value == "选择省份" || value == "undefined" || typeof(value) == "undefined" || value == "" ){
          this.memberAddressProvince = "";
          this.memberAddressCity = "";
          this.memberAddressArea = "";
          return;
        } else{
          this.memberAddressProvince = value;
          this.updateCity(value);
          this.updateDistrict(value);
        }
      },
      handleCityChange (value) {
        if (value == "请选择" || value == "undefined" || typeof(value) == "undefined" || value == "" ){
          this.memberAddressCity = "";
          this.memberAddressArea = "";
          return;
        } else {
          this.memberAddressCity = value;
          this.updateDistrict();
        }
      },
      handleAreaChange(value) {
        //    选择行政区
      },
      handleLoad() {
        if (this.memberAddressId.trim() === '') {
          return;
        }
        this.request({
          url: '/xingxiao/member/address/desktop/v1/find',
          data: {
            memberAddressId: this.memberAddressId
          },
          success: (data) => {
            if (data) {
              this.memberAddressName = data.memberAddressName;
              this.memberAddressMobile = data.memberAddressMobile;
              this.memberAddressDetail = data.memberAddressDetail;
              this.memberAddressProvince = data.memberAddressProvince;
              this.memberAddressCity = data.memberAddressCity;
              this.memberAddressArea = data.memberAddressArea;
              this.memberAddressIsDefault = data.memberAddressIsDefault;
              this.systemVersion = data.systemVersion;

              for (var i = 0; i < this.arr.length; i++) {  //初始化城市列表
                if (this.arr[i].name === this.memberAddressProvince) {
                  this.cityArr = this.arr[i].sub;
                  for (var j = 0; j < this.cityArr.length; j++) {
                    if (this.memberAddressCity === this.cityArr[j].name) {
                      this.districtArr = this.cityArr[j].sub;
                      break;
                    }
                  }
                  break;
                }
              }
            }
          },
          error: () => {

          }
        });
      },
      handleToAddress () {
        // this.$router.push({path: '/address'});
        window.history.go(-1);
      },
      handleSubmit() {
        if (this.memberAddressName.trim() === '') {
          this.$toasted.show("收货人姓名不能为空");
          return;
        }
        if (this.memberAddressMobile.trim() === '') {
          this.$toasted.show("收货人手机号码不能为空");
          return;
        }
        if (this.memberAddressMobile.length > 11 || this.memberAddressMobile.length < 11) {
          this.$toasted.show("收货人手机号码不合法");
          return;
        }
        if (this.memberAddressProvince === '') {
          this.$toasted.show("省不能为空");
          return;
        }
        if (this.memberAddressCity === '') {
          this.$toasted.show("城市不能为空");
          return;
        }
        if (this.memberAddressArea === '') {
          this.$toasted.show("行政区不能为空");
          return;
        }
        if (this.memberAddressDetail.trim() === '') {
          this.$toasted.show("详情地址不能为空");
          return;
        }

        var url = this.memberAddressId === '' ? '/xingxiao/member/address/desktop/v1/save' : '/xingxiao/member/address/desktop/v1/update';

        this.request({
          url: url,
          data: {
            memberAddressId: this.memberAddressId,
            memberAddressName: this.memberAddressName,
            memberAddressMobile: this.memberAddressMobile,
            memberAddressProvince: this.memberAddressProvince,
            memberAddressDetail: this.memberAddressDetail,
            memberAddressCity: this.memberAddressCity,
            memberAddressArea: this.memberAddressArea,
            memberAddressIsDefault: this.memberAddressIsDefault,
            systemVersion: this.systemVersion
          },
          success: (data) => {
            if (data) {
              this.handleToAddress();
            }
          },
          error: () => {

          }
        });
      }
    }
  }
</script>
