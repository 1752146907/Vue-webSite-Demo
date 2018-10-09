
<template>
  <div>
    <!-- 头部 -->
    <Header :index="-1"
            :isShowCategoryLeft="false"></Header>
    <!-- 内容 -->
    <div class="content container d-flex justify-content-between">
      <div class="login">
        <div class="login-title">会员登录</div>
        <div class="login-description">如果您已经是本站会员，请直接登录。</div>
        <b-form-group
          id="fieldMobile"
          label="登录账号"
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
                        type="password"
                        v-model="password"
                        placeholder="请输入密码"></b-form-input>
        </b-form-group>
        <!--<b-form-group-->
          <!--id="fieldConfirmCode"-->
          <!--label="手机验证码"-->
          <!--label-for="confirmCode">-->
          <!--<div class="relative">-->
            <!--<b-form-input id="confirmCode"-->
                          <!--v-model="confirmCode"-->
                          <!--placeholder="请输入手机验证码"></b-form-input>-->
            <!--<span class="get-code"-->
                  <!--v-if="countDown < 120">{{"获取验证码(" + countDown + "s)"}}</span>-->
            <!--<span class="get-code"-->
                  <!--@click="handleGetCode"-->
                  <!--v-else-if="countDown == 120">获取验证码</span>-->
          <!--</div>-->
        <!--</b-form-group>-->
        <div class="clearfix">
          <div class="login-submit float-left" @click="handleLogin">登录</div>
          <!--<div class="margin-top-70 float-right">-->
            <!--<router-link class="to-password" to="/wechat/login">-->
              <!--微信登录-->
            <!--</router-link>-->
          <!--</div>-->
        </div>
      </div>
      <div class="register">
        <div class="register-title">快速登录</div>
        <div class="register-description">
          <div class="register-description-item">
            <b-img class="register-description-item-logo"
                   width="20px;"
                   src="./static/image/wechat-icon.png" alt=""/>微信
          </div>
        </div>
        <!--<router-link to="/member/register">-->
          <!--<div class="register-submit float-left">资料注册</div>-->
        <!--</router-link>-->
        <div class="register-submit float-left" @click="handleWechatAuth">微信登录</div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer>
  </div>

</template>

<style scoped>
  .margin-top-70{
    margin-top: 70px;
  }
  .content {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .login {
    width: 590px;
    border: 1px solid #e3e3e3;
    background-color: #fdfdfd;
    padding: 20px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
  }

  .login-title {
    margin-top: 20px;
    font-size: 22px;
  }

  .login-description {
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .login-submit {
    width: 64px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
    background-color: #e994a9;
    cursor: pointer;
    margin-top: 16px;
  }

  .to-password{
    color: #686868;
  }

  .to-password:hover{
    color: #e994a9;
  }

  .register {
    width: 590px;
    height: 210px;
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

  .register-description-item{
    display: inline-block;
    margin-right: 20px;
  }

  .register-description-item-logo{
    margin-right: 4px;
    margin-top: -4px;
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
    height: 33px;
    line-height: 33px;
    text-align: center;
    padding: 0px 10px;
    position: absolute;
    left: 398px;
    color: #ffffff;
    background: #e994a9;
    cursor: pointer;
  }

  .register-submit {
    width: 90px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
    background-color: #e994a9;
    cursor: pointer;
  }

</style>

<script>
  import bForm from 'bootstrap-vue/es/components/form/form';
  import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';
  import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
  import bImg from 'bootstrap-vue/es/components/image/img';

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
      Footer
    },
    mixins: [mixins],
    data: () => ({
      mobile: '',
      password: '',
      storage: storage,
      confirmCode: '',
      countDown: 120
    }),
    created() {

    },
    mounted() {

    },
    methods: {
      setTime () {
        var time = setInterval(function () {
          if (this.countDown > 0) {
            this.countDown--;
          } else {
            clearInterval(time);
            this.countDown = 120;
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
          url: '/xingxiao/member/desktop/v1/login/sms/captcha/send',
          data: {
            memberMobile: this.mobile
          },
          success: (data) => {
            this.setTime();
            this.$toasted.show('发送成功')
          },
          error: (data) => {
            // this.$toasted.show('发送失败')
          }
        });
      },
      handleToIndex: function () {
        this.$router.push({path: '/index'});
        // window.history.go(-1);
      },
      handleLogin: function () {
        if (this.mobile.trim() === '') {
          this.$toasted.show('手机号码不能为空');

          return;
        }
        if (this.password.trim() === '') {
          this.$toasted.show('密码不能为空');

          return;
        }
        // if (this.confirmCode.trim() === '') {
        //   this.$toasted.show('验证码不能为空');
        //
        //   return;
        // }
        this.request({
          url: '/xingxiao/member/desktop/v1/mobile/login',
          data: {
            memberMobile: this.mobile,
            memberPassword: this.password,
            smsCaptchaCode: this.confirmCode
          },
          success: (data) => {
            if (data) {
              if (data.token) {
                this.storage.setToken(data.token);
                this.storage.setMemberNickName(data.memberNickName);
                this.storage.setMemberAvatarPath(data.memberAvatarPath);
              }
              this.mobile = '';
              this.password = '';
              this.confirmCode = '',

              this.$toasted.show('登录成功');
              this.handleToIndex();
            }else{
              this.$toasted.show('登录失败');
            }
          },
          error: () => {
            this.password = '';
          }
        });
      },
      handleWechatAuth: function () {
        window.location.href = this.host + "/xingxiao/member/open/desktop/v1/wechat/open/auth?state=" + encodeURIComponent(encodeURIComponent('https://www.vpluslab.com/#/member/wechat/login'));
      }
    }
  }
</script>
