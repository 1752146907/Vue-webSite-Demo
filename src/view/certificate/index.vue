
<template>
  <div>
    <!-- 头部 -->
    <Header :index="-1"
            :isShowCategoryLeft="false"></Header>
    <div class="container relative" style="margin-bottom: 380px;">
      <div class="body-title">查询授权书</div>
      <div class="content">
        <b-form-group
          label-for="mobile">
          <b-form-input v-model="verificationCode"
                        placeholder="请输入授权书编号"></b-form-input>
        </b-form-group>
        <div class="sublime"
             @click="handleQuery">查询</div>
      </div>
      <div class="body-box">
        <b-img class="body-box-img"
               :src="isQueryFailure ? result.file_original_path : '../../../static/image/certificate.jpg'"></b-img>
        <div>
          <div class="body-box-line"></div>
          <span class="authorization-number">授权编号</span>
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
    width: 564px;
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
    right: 166px;
  }
  .body-box-img{
    width: 280px;
  }
  .body-box-line{
    width: 97px;
    height: 1px;
    position: absolute;
    top: 72px;
    right: -41px;
    background: #000000;
  }
  .authorization-number{
    position: absolute;
    top: 62px;
    right: -106px;
    color: #000000;
  }
</style>

<script>
  import bForm from 'bootstrap-vue/es/components/form/form';
  import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';
  import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
  import bImg from 'bootstrap-vue/es/components/image/img';

  import mixins from '../../mixins/index';

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
          this.$toasted.show('授权书不能为空');
          return;
        }if (this.verificationCode.length != 12){
          this.$toasted.show('请输入有效证书编号');
          return;
        }
        this.request({
          url: '/certificate/website/find',
          data: {
            certificate_number: ''+this.verificationCode+''
          },
          success: (data) => {
            this.isQueryFailure = true;
            this.$toasted.show('查询成功');
            this.result = data.data;
          },
          error: (data) => {
            this.isQueryFailure = false;
            this.$toasted.show('查询失败');
            console.log(data)
          }
        });
      }
    }
  }
</script>
