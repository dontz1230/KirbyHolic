import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) 

let cart = window.localStorage.getItem('cart')

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : []
  },
  getters: {
    totalPrice: state => {
      let total = 0;
      state.cart.filter((item) => {
          total += (item.productPrice * item.productAmount);
      });
      return total;
    }
  },
  mutations: {
    addToCart(state, item){
      //先看看購物車中是否已經有此商品
      //已經有的話，就讓他的productAmount++
      //沒有的話則將該item push 到本檔案state.cart
      


      var bought = state.cart.find(function(good){
        return good.productID === item.productID
      })

      if (bought) {
        bought.productAmount++
      } else {
        state.cart.push(item);
      }

     

      // console.log(haveBoughtOne)

      // if(haveBoughtOne != undefined){
      //   haveBoughtOne.productAmount++
        
      // } else {
      //   state.cart.push(item);
      // }

      this.commit('saveData');
    },

    saveData(state){
      window.localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    removeFromCart(state, item){
      let indexOfItem = state.cart.indexOf(item);
      state.cart.splice(indexOfItem,1)

      this.commit('saveData');
    }
  },
  actions: {

  }
})
