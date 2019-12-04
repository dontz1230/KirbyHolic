<template>
  <div class="home">
    <cart-pop></cart-pop>
    <side-nav></side-nav>
    <nav-bar></nav-bar>
    <product-list></product-list>
    <guaran-tee></guaran-tee>
    <good-reason></good-reason>

    <!-- <my-nav/>
    <home-carousel></home-carousel>
    <image-wall></image-wall>-->

    <!-- <cart-view></cart-view>-->
    <subscribe-form></subscribe-form>
    <my-footer></my-footer>
  </div>
</template>

<script>
import navBar from "../components/Nav.vue";
// import cartView from '../components/CartView.vue'
import CartPop from "../components/Cartpop.vue";
import guaranTee from "../components/Guarantee.vue";
import goodReason from "../components/Reason.vue";
import sideNav from "../components/SideNav.vue";
// import imageWall from '../components/ImageWall.vue'
import myFooter from "../components/Footer.vue";
import subscribeForm from "../components/Subscribe.vue";

export default {
  name: "home",
  components: {
    navBar,
    guaranTee,
    goodReason,
    sideNav,
    CartPop,
    myFooter,
    subscribeForm
  },
  mounted() {}
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
body {
  background: url("../assets/bg_dot.png");
  overflow: hidden;
}

//以下為隱藏捲軸
html {
  overflow: -moz-hidden-unscrollable;
  height: 100%;
}

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;
  height: 100%;
  overflow: auto;
}
</style>
