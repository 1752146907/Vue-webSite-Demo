import Vue from 'vue'
import Router from 'vue-router'

import ViewIndex from '../view/index/index';
import ViewCart from '../view/cart/index';
import ViewProductList from '../view/product/list';
import ViewDetail from '../view/product/detail';
import ViewPurchase from '../view/product/purchase';
import ViewOrderAdd from '../view/product/order-add';
import ViewOrderAlipay from '../view/pay/alipay';
import ViewOrderWxpay from '../view/pay/wxpay';
import ViewAbout from '../view/about/about';
import ViewVlab from '../view/about/V-lab';
import ViewTale from '../view/about/tale';
import ViewShare from '../view/about/share';
import ViewJoin from '../view/about/join';
import ViewMember from '../view/member/index';
import ViewAddress from '../view/member/address';
import ViewAddressEdit from '../view/member/address-edit';
import ViewCoupon from '../view/member/coupon';
import ViewEvaluation from '../view/member/evaluation';
import ViewEvaluationDetail from '../view/member/evaluation-detail';
import ViewMemberIndex from '../view/member/index';
import ViewMyData from '../view/member/my-data';
import ViewOrder from '../view/member/order';
import ViewOrderDetail from '../view/member/order-detail';
import ViewMemberPassword from '../view/member/password';
import ViewLogin from '../view/login/index';
import ViewWechatLogin from '../view/login/wechat';
import ViewRegister from '../view/login/register';
import ViewAntifake from '../view/antifake/index';
import ViewArticleDetails from '../view/article/details';
import ViewCertificate from '../view/certificate/index';
import ViewPay from '../view/pay/alipay';
import ViewSuccess from '../view/pay/success';


import storage from "../common/storage";

const handleBeforeEnter = (to, from, next) => {
  var token = storage.getToken();
  if (token !== '') {
    next();
  } else {
    next('/member/login');
  }
}

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [{
    path: '/',
    component: ViewIndex
  }, {
    path: '/index',
    component: ViewIndex
  }, {
    path: '/cart',
    component: ViewCart,
    beforeEnter: handleBeforeEnter
  }, {
  path: '/product/list',
    component: ViewProductList
  }, {
    path: '/product/cart/:productId',
    component: ViewDetail
  }, {
    path: '/product/purchase',
    component: ViewPurchase
  }, {
    path: '/product/order',
    name: 'productOrder',
    component: ViewOrderAdd,
    beforeEnter: handleBeforeEnter
  }, {
    path: '/product/order/wxpay',
    name: 'orderWxpay',
    component: ViewOrderWxpay,
    beforeEnter: handleBeforeEnter
  }, {
    path: '/product/order/alipay',
    name: 'orderAlipay',
    component: ViewOrderAlipay,
    beforeEnter: handleBeforeEnter
  }, {
    path: '/about',
    component: ViewAbout,
  }, {
    path: '/about/join',
    component: ViewJoin
  }, {
    path: '/vlab',
    component: ViewVlab
  }, {
    path: '/tale',
    component: ViewTale
  }, {
    path: '/share',
    component: ViewShare
  }, {
    path: '/member',
    component: ViewMember,
    beforeEnter: handleBeforeEnter
  }, {
    path: '/address',
    component: ViewAddress,
    beforeEnter: handleBeforeEnter
  }, {
    path: '/address/add',
    component: ViewAddressEdit,
    beforeEnter: handleBeforeEnter
  }, {
    path: '/address/edit/:memberAddressId',
    component: ViewAddressEdit,
    beforeEnter: handleBeforeEnter
  }, {
    path: '/coupon',
    component: ViewCoupon,
    beforeEnter: handleBeforeEnter
  }, {
    path: '/evaluation',
    component: ViewEvaluation,
    beforeEnter: handleBeforeEnter
  }, {
    path: '/evaluationdetail',
    component: ViewEvaluationDetail,
    beforeEnter: handleBeforeEnter
  }, {
    path: '/member/index',
    component: ViewMemberIndex,
    beforeEnter: handleBeforeEnter
  }, {
    path: '/my/data',
    component: ViewMyData,
    beforeEnter: handleBeforeEnter
  }, {
    path: '/order',
    component: ViewOrder,
    beforeEnter: handleBeforeEnter
  }, {
    path: '/order/detail/:saleOrderId',
    name: 'orderDetail',
    component: ViewOrderDetail,
    beforeEnter: handleBeforeEnter
  }, {
    path: '/member/password',
    component: ViewMemberPassword
  }, {
    path: '/member/register',
    component: ViewRegister,
  }, {
    path: '/member/login',
    component: ViewLogin,
  }, {
    path: '/member/wechat/login',
    component: ViewWechatLogin,
  }, {
    path: '/antifake',
    component: ViewAntifake,
  }, {
    path: '/article/details/:articleId',
    component: ViewArticleDetails,
  }, {
    path: '/certificate/index',
    component: ViewCertificate,
  }, {
    path: '/pay',
    component: ViewPay,
  }, {
    path: '/pay/success/:saleOrderId',
    component: ViewSuccess,
  }

  ]
})
