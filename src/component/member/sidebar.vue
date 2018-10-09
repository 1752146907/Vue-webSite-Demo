<template>
  <div class="sidebar">
    <h2 class="sidebar-title">会员中心</h2>
    <p class="sidebar-item">
      <router-link class="sidebar-item-a"
                   :class="this.thisPage===0 ? 'sidebar-item-active' : ''"
                   to="/order">我的订单
      </router-link>
    </p>
    <!--<p class="sidebar-item">-->
      <!--<router-link class="sidebar-item-a"-->
                   <!--:class="thisPage === 1 ? 'sidebar-item-active' : ''"-->
                   <!--to="/evaluation">商品评价-->
      <!--</router-link>-->
    <!--</p>-->
    <p class="sidebar-item">
      <router-link class="sidebar-item-a"
                   :class="thisPage === 2 ? 'sidebar-item-active' : ''"
                   to="/address">收货地址
      </router-link>
    </p>
    <p class="sidebar-item">
      <router-link class="sidebar-item-a"
                   :class="thisPage === 3 ? 'sidebar-item-active' : ''"
                   to="/my/data">个人资料
      </router-link>
    </p>
    <h2 class="sidebar-title">账户和安全</h2>
    <p class="sidebar-item">
      <router-link class="sidebar-item-a"
                   :class="thisPage === 5 ? 'sidebar-item-active' : ''"
                   to="/member/password">修改密码
      </router-link>
    </p>
    <h2 class="sidebar-title sidebar-exit"
        @click="handleExit">退出</h2>
  </div>
</template>


<script>
  import storage from '../../common/storage';

  export default {
    components: {},
    props: {
      thisPage: {
        type: Number,
        required: true
      }
    },
    mixins: [],
    data: () => ({
      storage: storage
    }),
    created() {

    },
    mounted() {

    },
    methods: {
      handleExit: function(){
        this.storage.setToken('');
        this.storage.setMemberNickName('');
        this.storage.setMemberAvatarPath('');
        this.$toasted.show('退出成功');
        this.$router.push({path: '/index'});
      }
    }
  }
</script>

<style scoped>
  .sidebar {
    width: 324px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0px 15px 0px 30px;
  }

  .sidebar-title {
    font-size: 22px;
    margin: 20px 0px 16px 0px;
    color: #666666;
  }

  .sidebar-item {
    padding: 2px 0px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .sidebar-item-a {
    color: #1a1a1a;
  }

  .sidebar-item-active {
    color: #e994a9;
  }

  .sidebar-exit{
    cursor: pointer;
  }
</style>


