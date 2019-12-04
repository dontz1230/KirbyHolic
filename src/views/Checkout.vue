<template>
  <div class="checkout">
    <side-nav></side-nav>
    <div class="container mt-5 pt-5">
        <div class="row">
            <div class="col-md-9">
                <h4>CHECKOUT PAGE</h4>
                <ul>
                    <li v-for="item in this.$store.state.cart" :key="item">
                    <img :src="item.productImage" width="80px" alt="">
                   {{ item.productName }}
                   <span @click="$store.commit('removeFromCart',item)" class="float-right">X</span>
                    {{ item.productAmount }}個
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import sideNav from '../components/SideNav.vue'
export default {
    components:{
      sideNav
    }
}
</script>
