
<template>
  <div>
    <!-- 头部 -->
    <Header :index="-1"
            :isShowCategoryLeft="false"></Header>
    <!-- 内容 -->
    <div class="content container d-flex justify-content-center">
      <div class="register">
        <div class="register-title">新会员注册</div>
        <div class="register-description">我们需要一些关于您的基本信息来完成注册。如果您已经是注册会员，请您可以直接 登录。</div>
        <b-form-group
          id="fieldMobile"
          label="手机号码"
          label-for="mobile">
          <b-form-input id="mobile"
                        v-model="mobile"
                        placeholder="请输入手机号码"></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldPassword"
          label="密码"
          label-for="password">
          <b-form-input id="password"
                        v-model="password"
                        type="password"
                        placeholder="请输入密码"></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldConfirmPassword"
          label="确认密码"
          label-for="confirmPassword">
          <b-form-input id="confirmPassword"
                        v-model="confirmPassword"
                        type="password"
                        placeholder="请输入确认密码"></b-form-input>
        </b-form-group>
        <b-form-group
          id="fieldConfirmCode"
          label="手机验证码"
          label-for="confirmCode">
          <div class="relative">
            <b-form-input id="confirmCode"
                          v-model="confirmCode"
                          placeholder="请输入手机验证码"></b-form-input>
            <span class="get-code"
                  v-if="countDown < 60">{{"获取验证码(" + countDown + "s)"}}</span>
            <span class="get-code"
                  @click="handleGetCode"
                  v-else-if="countDown == 60">获取验证码</span>
          </div>
        </b-form-group>
        <b-form-checkbox
          class="is-checkbox"
          v-model = "status" >我接受和使用</b-form-checkbox>
          <span class="clause" v-b-modal.modalPopover>《V+Lab条款》</span>
        <div class="register-submit" @click="handleRegister">立即注册</div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>

    <!-- 弹出层 -->
    <b-modal id="modalPopover"  size="lg" title="V+Lab服务条款" ok-only>
      <div v-html="articleContent"></div>
    </b-modal>

  </div>

</template>


<script>
  import bForm from 'bootstrap-vue/es/components/form/form';
  import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';
  import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
  import bImg from 'bootstrap-vue/es/components/image/img';
  import bFormCheckboxGroup from 'bootstrap-vue/es/components/form-checkbox/form-checkbox-group';

  import mixins from '../../mixins/index';
  import storage from '../../common/storage';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';

  export default {
    components: {
      bForm,
      bFormGroup,
      bFormInput,
      bImg,
      Header,
      Footer,
      bFormCheckboxGroup
    },
    mixins: [mixins],
    data: () => ({
      mobile: '',
      password: '',
      confirmPassword: '',
      confirmCode: '',
      storage: storage,
      countDown: 60,
      status: true,
      isMask: false,
      articleContent: ''
    }),
    created() {

    },
    mounted() {
      this.handleLoadClause();
    },
    methods: {
      handleLoadClause: function () {
        this.request({
          url: '/xingxiao/article/desktop/v1/find',
          data: {
            articleId: '1007145017773830146'
          },
          success: (data) => {
            if (data && data.articleContent) {
              this.articleContent = data.articleContent;
            }
          },
          error: () => {

          }
        });
      },
      handleShowMask: function () {
        this.isMask = true
      },
      handleHideMask: function () {
        this.isMask = false
      },
      setTime () {
        var time = setInterval(function () {
          if (this.countDown > 0) {
            this.countDown--;
          } else {
            clearInterval(time);
            this.countDown = 60;
          }
        }.bind(this), 1000);
      },
      handleGetCode () {
        var myPhone = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (!myPhone.test(this.mobile)) {
          this.$toasted.show('输入的手机号不合法');

          return;
        }

        this.request({
          url: '/xingxiao/member/desktop/v1/register/sms/captcha/send',
          data: {
            memberMobile: this.mobile
          },
          success: () => {
            this.setTime();
            this.$toasted.show('发送成功');
          },
          error: (data) => {
            alert(data.message)
          }
        });
      },
      handleToIndex: function () {
        this.$router.push({path: '/index'});
      },
      handleRegister: function () {
        if (this.mobile.trim() === '') {
          this.$toasted.show('手机号码不能为空');

          return;
        }
        if (this.password.trim() === '') {
          this.$toasted.show('密码不能为空');

          return;
        }
        if (this.confirmPassword.trim() === '') {
          this.$toasted.show('确认密码不能为空');

          return;
        }
        if (this.password !== this.confirmPassword) {
          this.$toasted.show('密码和确认密码不一致');

          return;
        }
        if (this.confirmCode.trim() === '') {
          this.$toasted.show('验证码不能为空');

          return;
        }
        if (!this.status) {
          this.$toasted.show('请勾选服务条款');

          return;
        }
        var openId = '';
        var unionId = '';
        var nickname = '';
        var sex = '';
        var city = '';
        var province = '';
        var headImgUrl = '';

        if (storage.getWxMpUser() && storage.getWxMpUser() != '') {
          var wxMapUser = JSON.parse(storage.getWxMpUser());
          if (wxMapUser && wxMapUser.openId) {
            openId = wxMapUser.openId;
            unionId = wxMapUser.unionId ? wxMapUser.unionId : '';
            nickname = wxMapUser.nickname ? wxMapUser.nickname : '';
            sex = wxMapUser.sex ? wxMapUser.sex : '';
            city = wxMapUser.city ? wxMapUser.city : '';
            province = wxMapUser.province ? wxMapUser.province : '';
            headImgUrl = wxMapUser.headImgUrl ? wxMapUser.headImgUrl : '';
          }
        }

        this.request({
          url: '/xingxiao/member/desktop/v1/register',
          data: {
            memberNickName: '',
            memberMobile: this.mobile,
            memberPassword: this.password,
            smsCaptchaCode: this.confirmCode,
            openId: openId,
            unionId: unionId,
            nickname: nickname,
            sex: sex,
            city: city,
            province: province,
            headImgUrl: headImgUrl
          },
          success: (data) => {
            if(data){
              this.mobile = '';
              this.password = '';
              this.confirmPassword = '';
              this.confirmPassword = '';
              this.confirmCode = '';
              if (data.token) {
                this.storage.setToken(data.token);
                this.storage.setMemberNickName(data.memberNickName);
                this.storage.setMemberAvatarPath(data.memberAvatarPath);

                this.$toasted.show('注册成功');
                this.handleToIndex();
              }
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
  .content {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .register {
    width: 590px;
    border: 1px solid #e3e3e3;
    background-color: #fdfdfd;
    padding: 20px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
  }

  .register-title {
    margin-top: 20px;
    font-size: 22px;
  }

  .register-description {
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .relative{
    position: relative;
  }

  #confirmCode{
    width: 390px;
    position: absolute;
    left: 0px;
  }

  .get-code{
    width: 150px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    padding: 0px 10px;
    position: absolute;
    left: 398px;
    color: #ffffff;
    background: #e994a9;
    cursor: pointer;
  }

  .is-checkbox{
    margin-top: 36px;
    margin-right: 0px;
  }

  .clause{
    color: #e994a9;
    cursor: pointer;
    margin-left: -6px;
  }

  .register-submit {
    width: 90px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
    background-color: #e994a9;
    cursor: pointer;
    margin-top: 36px;
  }

</style>
