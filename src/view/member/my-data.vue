
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
        我的资料
      </div>
    </div>
    <div class="container main">
      <Sidebar :thisPage="3"></Sidebar>
      <div class="conter">
        <div class="content-description">
          <h1 class="content-description-title">我的资料</h1>
          <b-form-group id="nickNameField"
                        label="名称:"
                        label-for="memberNickName">
            <b-form-input id="memberNickName"
                          placeholder="请输入账户名称"
                          v-model="memberNickName">
            </b-form-input>
          </b-form-group>
          <b-form-group id="genderField"
                        label="性别:"
                        label-for="gender">
            <b-form-select id="gender"
                           :options="genderOptions"
                           v-model="memberGender">
            </b-form-select>
          </b-form-group>
          <b-form-group id="exampleInputGroup3"
                        label="生日:"
                        label-for="exampleInput3">
            <b-form-input type ='date'
                          placeholder ='输入您的生日'
                          v-model="memberBirthday"
                          >
            </b-form-input>
          </b-form-group>
          <div class="row settlement">
            <div class="col-auto settlement-sublime" @click="handleSubmit">保存</div>
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

  .conter{
    flex: 1;
    padding-bottom: 50px;
  }

  .content-description{
    width: 548px;
  }

  .content-description-none{
    font-size: 36px;
  }

  .content-description-title{
    font-size: 22px;
    margin: 20px 0px 16px 0px;
    color: #666666;
  }

  .input-group-label{
    width: 58px;
    line-height: 32px;
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
    background-color: #e994a9;
    cursor: pointer;
    position: absolute;
    right: 12px;
    top: 30px;
  }

</style>

<script>
  import storage from '../../common/storage';
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
      storage: storage,
      memberNickName: '',
      memberGender: 0,
      memberBirthday: '',
      genderOptions: [
        { text: '男', value: 0 },
        { text: '女', value: 1 },
        { text: '请选择', value: 2 },
      ]
    }),
    created() {
    },
    mounted() {
      this.handleLoadMember();
    },
    methods: {
      handleLoadMember: function () {
        this.request({
          url: '/xingxiao/member/desktop/v1/view',
          data: {},
          success: (data) => {
            this.memberNickName = data.memberNickName;
            this.memberGender = data.memberGender;
            this.memberBirthday = data.memberBirthday;
            this.storage.setMemberNickName(data.memberNickName);
            this.slefData = data;
          },
          error: () => {
            console.log(data);
          }
        });
      },
      handleSubmit() {
        if (this.memberNickName.trim() === '') {
          alert("昵称不能为空");

          return;
        }
        this.request({
          url: '/xingxiao/member/desktop/v1/update',
          data: {
            memberNickName: this.memberNickName,
            memberGender: this.memberGender,
            memberBirthday: this.memberBirthday
          },
          success: (data) => {
            this.storage.setMemberNickName(this.memberNickName);
            this.$toasted.show('修改成功');
          },
          error: () => {

          }
        });
      }
    }
  }
</script>
