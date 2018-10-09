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
        修改密码
      </div>
    </div>
    <div class="container main">
      <Sidebar :thisPage="5"></Sidebar>
      <div class="conter">
        <div class="content-description">
          <h2 class="content-description-title">修改密码</h2>
          <b-form-group label="原始密码:"
                        label-for="exampleInput1">
            <b-form-input type="password"
                          v-model="rawPassword"
                          placeholder="原始密码">
            </b-form-input>
          </b-form-group>
          <b-form-group label="新密码:"
                        label-for="exampleInput2">
            <b-form-input type="password"
                          v-model="newPassword"
                          placeholder="新密码">
            </b-form-input>
          </b-form-group>
          <b-form-group label="确认密码:"
                        label-for="exampleInput3">
            <b-form-input type="password"
                          v-model="newPassword2"
                          placeholder="确认密码">
            </b-form-input>
          </b-form-group>
          <div class="row settlement">
            <div class="col-auto settlement-sublime" @click="handlePasswordUpdate">提交</div>
          </div>
        </div>
      </div>
    </div>

    <!--&lt;!&ndash; 底部 &ndash;&gt;-->
    <Footer></Footer>
  </div>
</template>

<style scoped>
  .breadcrumb {
    margin: 30px 0px;
  }

  .breadcrumb-icon {
    width: 20px;
    height: 20px;
  }

  .breadcrumb-line {
    margin: 0px 10px;
  }

  .breadcrumb-a {
    color: #1a1a1a;
  }

  .breadcrumb-a:hover {
    color: #999;
  }

  .main {
    display: flex;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .conter {
    flex: 1;
    padding-bottom: 50px;
  }

  .content-description{
    width: 548px;
  }

  .content-description-none {
    font-size: 36px;
  }

  .content-description-title {
    font-size: 22px;
    margin: 20px 0px 16px 0px;
    color: #666666;
  }

  .input-group-label {
    width: 58px;
    line-height: 32px;
  }

  .settlement {
    position: relative;
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
  import bForm from 'bootstrap-vue/es/components/form/form';
  import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';
  import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';
  import bImg from 'bootstrap-vue/es/components/image/img';

  import mixins from '../../mixins/index';

  import Header from '../../component/header/index';
  import Footer from '../../component/footer/index';
  import Sidebar from '../../component/member/sidebar';

  export default {
    components: {
      bForm,
      bFormGroup,
      bFormInput,
      bImg,
      Header,
      Footer,
      Sidebar
    },
    mixins: [mixins],
    data: () => ({
      rawPassword: '',
      newPassword: '',
      newPassword2: ''
    }),
    created() {
    },
    mounted() {

    },
    methods: {
      handleToMemberIndex: function () {
        this.$router.push({path: '/member'});
      },
      handlePasswordUpdate: function () {
        if (this.rawPassword.trim() === '') {
          this.$toasted.show('请填写原密码');
          return;
        }
        if (this.newPassword.trim() === '') {
          this.$toasted.show('请填写新密码');
          return;
        }
        if (this.newPassword2.trim() === '') {
          this.$toasted.show('请填重复新密码');
          return;
        }
        if (this.newPassword != this.newPassword2) {
          this.$toasted.show('填写的两次新密码不相同');
          return;
        }
        this.request({
          url: '/xingxiao/member/desktop/v1/updatePassword',
          data: {
            memberPasswordRaw: this.rawPassword,
            memberPasswordNew: this.newPassword
          },
          success: (data) => {
            this.emptyData();
            this.$toasted.show("会员密码修改成功");
            this.handleToMemberIndex();
          },
          error: () => {
            this.emptyData();
          }
        });
      },
      emptyData: () => {
        this.rawPassword = '';
        this.newPassword = '';
        this.newPassword2 = '';
      }
    }
  }
</script>
