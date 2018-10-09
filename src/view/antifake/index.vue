
<template>
  <div>
    <!-- 头部 -->
    <Header :index="-1"
            :isShowCategoryLeft="false"></Header>
    <div class="container relative">
      <div class="body-title">真伪查询</div>
      <div class="content">
        <b-form-group
          label-for="mobile">
          <b-form-input v-model="QRCode"
                        placeholder="请输入二维码ID"></b-form-input>
        </b-form-group>
        <b-form-group
          label-for="mobile">
          <b-form-input v-model="verificationCode"
                        placeholder="请输入验证码"></b-form-input>
        </b-form-group>
        <div class="sublime"
             @click="handleQuery">查询</div>
      </div>
      <div class="body-box">
        <b-img class="body-box-img" src="../../../static/image/antifake.png"></b-img>
      </div>
      <div class="result"
           v-if = "isQueryFailure">
        <div class="result-content">
          <p>查询结果：{{result.QueryResult}}</p>
          <p>公司名称：{{result.unitname}}</p>
          <p>品牌名称：{{result.brand}}</p>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <Footer></Footer>
  </div>

</template>

<style scoped>
  .relative{
    position: relative;
  }
  .content{
    width: 600px;
    margin-left: 110px;
  }
  .body-title {
    color: #000000;
    font-size: 28px;
    padding: 56px 330px;
  }
  .sublime{
    width: 120px;
    height: 36px;
    line-height: 36px;
    background: #e994a9;
    text-align: center;
    color: #ffffff;
    font-size: 14px;
    margin: 20px auto 70px auto;
    cursor: pointer;
  }
  .body-box {
    position: absolute;
    top: 55px;
    right: 0px;
  }
  .result{
    padding-left: 110px;
    width: 704px;
    margin-bottom: 60px;
  }
  .result-content{
    border: 1px solid #e994a9;
    padding: 20px;
  }
  .result-content p{
    font-size: 14px;
    line-height: 28px;
  }


</style>

<script>
  import bForm from 'bootstrap-vue/es/components/form/form';
  import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';
  import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
  import bImg from 'bootstrap-vue/es/components/image/img';

  import mixins from '../../mixins/chuangshi';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';

  export default {
    components: {
      bForm,
      bFormGroup,
      bFormInput,
      bImg,
      Header,
      Footer
    },
    mixins: [mixins],
    data: () => ({
      verificationCode: '',
      QRCode: '',
      result: '',
      isQueryFailure: false
    }),
    created() {

    },
    mounted() {
    },
    methods: {
      handleQuery: function () {
        if (this.verificationCode == ''){
          this.$toasted.show('二维码ID不能为空');
          return;
        }
        if (this.QRCode == ''){
          this.$toasted.show('验证码不能为空');
          return;
        }
        this.request({
          url: '/certificate/qrcode/find',
          data: {
            fwcode: ''+this.verificationCode+'',
            vcode: ''+this.QRCode+''
            // fwcode: '1594289614662266',
            // vcode: '4269'
          },
          success: (data) => {
            this.isQueryFailure = true;
            this.$toasted.show('查询成功');
            this.result = data.data;
          },
          error: (data) => {
            this.isQueryFailure = false;
            this.$toasted.show(''+data.data.QueryResult+'');
          }
        });
      }
    }
  }
</script>
