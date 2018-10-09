<style src="./index.css" scoped></style>
<template src="./index.html"></template>

<script>

  import storage from '../../common/storage';

  export default {
    components: {},
    props: {
      index: {
        type: Number,
        required: true
      },
      isShowCategoryLeft: {
        type: Boolean,
        required: true
      }
    },
    mixins: [],
    data: () => ({
      categoryId: '',
      isShowCategoryRight: false,
      categoryListChildren: [],
      token: '',
      memberNickName: '',
      storage: storage
    }),
    created() {

    },
    mounted() {
      this.token = storage.getToken();
      this.memberNickName = storage.getMemberNickName();
    },
    methods: {
      handleExit: function(){
        this.storage.setToken('');
        this.storage.setMemberNickName('');
        this.storage.setMemberAvatarPath('');
        this.$toasted.show('退出成功');
        this.$router.push({path: '/index'});
        location.reload();
      },
      handleToMember: function(){
        this.$router.push({path: '/member'});
      }
    }
  }
</script>
