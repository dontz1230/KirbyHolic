import Vue from 'vue'
import App from './App.vue'
import router from './router'


import VueFirestore from 'vue-firestore'
require('firebase/firestore')
Vue.use(VueFirestore, {
    key: 'id',         // the name of the property. Default is '.key'.
    enumerable: true  //  whether it is enumerable or not. Default is true.
})

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

Vue.component('nav-bar', require('./components/Nav.vue'));
Vue.component('add-cart',require('./components/AddToCart.vue').default);
import ProductList from './components/ProductList'
Vue.component('product-list', ProductList)

import 'popper.js';
import './assets/app.scss'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, )

import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel)

import VueScrollReveal from 'vue-scroll-reveal';
 
// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal);

import { fb } from './firebase.js'

Vue.config.productionTip = false

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import store from './store.js'

// ES6 Modules or TypeScript

// Vue.use(Swal)
// // CommonJS
// const Swal = require('sweetalert2')

//firebase user auth
let app = '';
fb.auth().onAuthStateChanged(function(user){
  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
