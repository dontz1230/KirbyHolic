<template>
  <div class="cartpop">
    <div class="cartModal" v-show="opencart" id="cartWindow">
      <button class="cartClose" @click="$emit('closeCart')">
        <span>
          <i class="fa fa-close"></i>
        </span>
      </button>

      <div class="cartContent">
        <div class="cartHeader">
          <h4 class="cartTitle">小小的購物車</h4>
        </div>

        <div class="cartBody">
          <ul>
            <li v-for="(item,index) in this.$store.state.cart" :key="index">
              <img :src="item.productImage" width="50px" alt />
              <span>{{ item.productName }} x {{ item.productAmount }}個</span>
              <span>{{ item.productPrice }}元</span>

              <span @click="removeItem" class="removeBtn">
                <i class="fa fa-close"></i>
              </span>
            </li>
            <span>總共 {{ this.$store.getters['totalPrice']}} 元</span>
          </ul>
        </div>

        <div class="cartFooter">
          <button type="button" @click="$emit('closeCart')" class="shoppingBtn">繼續購物</button>
          <button @click="checkout()" type="button" class="checkoutBtn">完成訂單</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import bgDot from "../assets/bg_dot.png";
export default {
  props: {
    opencart: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    checkout() {
      
      // this.$router.push('/checkout')
      let timerInterval;
      Swal.fire({
        title: "順利完成訂單",
        html: "本視窗將在三秒後自動關閉。",
        timer: 2000,
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        onBeforeOpen: () => {
        //   Swal.showLoading();
          timerInterval = setInterval(() => {
            Swal.getContent().querySelector(
              "b"
            ).textContent = Swal.getTimerLeft();
          }, 100);
        },
        onClose: () => {
          clearInterval(timerInterval);
          this.$emit('closeCart')
        }
      }).then(result => {
        if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.timer
        ) {
          console.log("I was closed by the timer"); // eslint-disable-line
        }
      });
    },
    removeItem(item) {
      this.$store.commit("removeFromCart", item);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/style.scss";

.cartModal {
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 400px;
  background: white;
  padding: 20px;
  position: absolute;
  z-index: 5;
  border-radius: 10px;
  border: $Border;
  box-shadow: $DeepShadow;

  > .cartClose {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    background: white;
    color: $Color;
    border: $Border;
    overflow: hidden;
    text-align: center;

    > span {
      text-align: center;
      font-size: 15px;
      margin: 0;
      padding: 0;
    }

    &:hover {
      background: $Color;
      color: white;
    }
  }

  > .cartContent {
    position: relative;

    > .cartHeader {
      color: $Color;
      position: relative;
      height: 2rem;
      margin: 1rem;
    }

    > .cartBody {
      padding: 10px;
      margin: 10px auto;
      color: $TextColor;
      > ul {
        display: grid;
        grid-gap: 10px;

        > li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: $Border;

          > .removeBtn {
            color: red;
          }

          > img {
            border-radius: 100px;
          }
        }
      }
    }

    > .cartFooter {
      display: flex;
      justify-content: flex-end;

      > .shoppingBtn {
        text-align: center;
        border: $Border2;
        background: none;
        padding: 5px 10px;
        color: $Color2;
        border-radius: $BorderRadius;
        transition: all 0.3s;
        &:hover {
          background: $Color2;
          padding: 5px 10px;
          color: white;
        }
      }

      > .checkoutBtn {
        margin-left: 15px;
        text-align: center;
        border: $Border;
        background: none;
        padding: 5px 10px;
        color: $Color;
        border-radius: $BorderRadius;
        transition: all 0.3s;
        &:hover {
          background: $Color;
          padding: 5px 10px;
          color: white;
        }
      }
    }
  }
}
</style>