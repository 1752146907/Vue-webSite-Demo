
<template>
  <div v-html="aliypayHtml">

  </div>
</template>

<style scoped>

</style>

<script>

  import mixins from '../../mixins/index';

  export default {
    components: {

    },
    mixins: [mixins],
    data: () => ({
      saleOrderId: '',
      aliypayHtml: ''
    }),
    created() {

    },
    mounted() {
      if (this.$route.params.saleOrderId) {
        this.saleOrderId = this.$route.params.saleOrderId;
        this.handlePay();
      }
    },
    methods: {
      handlePay() {
        this.request({
          url: '/xingxiao/sale/order/desktop/v1/website/alipay',
          data: {
            saleOrderId: this.saleOrderId,
            returnUrl: this.payReturnUrl + this.saleOrderId,
          },
          success: (data) => {
            if (data) {
              this.aliypayHtml = data.aliypayHtml;
              setTimeout(function () {
                document.forms[0].submit();
              }, 2000)
            }
          },
          error: () => {

          }
        });
      }
    }
  }
</script>
