
<template>
  <div>

  </div>

  </template>

<style scoped>


</style>

<script>

import mixins from '../../mixins/index';
import storage from '../../common/storage';


export default {
  components: {
  },
  mixins: [mixins],
  data: () => ({

  }),
  created() {

  },
  mounted() {
    if (this.$route.query.openId) {
      this.request({
        url: '/xingxiao/member/desktop/v1/weixinLogin',
        data: {
          openId: this.$route.query.openId,
          unionId: this.$route.query.unionId ? this.$route.query.unionId : '',
          nickName: this.$route.query.nickName ? this.$route.query.nickName : '',
          headImgUrl: this.$route.query.headImgUrl ? this.$route.query.headImgUrl : '',
          sex: this.$route.query.sex ? this.$route.query.sex : '',
          country: this.$route.query.country ? this.$route.query.country : '',
          language: this.$route.query.language ? this.$route.query.language : '',
          province: this.$route.query.province ? this.$route.query.province : '',
          city: this.$route.query.city ? this.$route.query.city : ''
        },
        success: (data) => {
          if (data && data.token) {
              storage.setToken(data.token);
              storage.setMemberNickName(data.memberNickName);
              storage.setMemberAvatarPath(data.memberAvatarPath);
              this.$toasted.show('登录成功');
              this.handleToIndex();
          }
        },
        error: () => {
          this.password = '';
        }
      });
    }
  },
  methods: {
    handleToIndex: function () {
      this.$router.push({path: '/index'});
    },
    handleToRegister: function () {
      this.$router.push({path: '/member/register'});
    }
  }
}
</script>
