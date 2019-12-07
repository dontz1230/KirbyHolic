<template>
  <div>
    <nav id="w_menu">
      <div class="side-toggle" @click="sideMenuToggle">
        顯示選單
      </div>
      <div class="menu-content">
        <div class="menu-icon">
          <img src="../assets/menu.png" alt />
        </div>
        <ul>
          <li>
            <router-link to="/home" href="#">首頁</router-link>
          </li>
          <li>
            <a href="#feature">關於</a>
          </li>
          <li>
            <a href="#product">商品</a>
          </li>

          <li v-if="!loginStatus">
            <a @click="openLogin = true">
              <span class="login">登入</span>
            </a>
          </li>
          <li v-else>
            <a class="login" @click="logOut">
              <span class="login">登出</span>
            </a>
          </li>

          <li>
            <a @click="showCart">
              <span class="cartbtn">
                <i class="fas fa-shopping-cart"></i>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <cartpop :opencart="opencart" @closeCart="closeCart"></cartpop>
    <login :openLogin="openLogin" @closeLogin="closeLogin"></login>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Cartpop from "../components/Cartpop.vue";
import { fb } from "../firebase.js";

export default {
  components: {
    Login,
    Cartpop
  },
  created() {
    var user = fb.auth().currentUser;
    if (user) {
      this.loginStatus = true;
    }
  },
  data() {
    return {
      opencart: false,
      openLogin: false,
      loginStatus: null
    };
  },
  methods: {
    showCart() {
      this.opencart = true;
    },
    openLogin() {
      this.openLogin = true;
    },
    sideMenuToggle() {
      let sideNav = document.querySelector('.menu-content');
      let sideToggle = document.querySelector('.side-toggle');
      sideNav.classList.toggle("hide");
      sideToggle.classList.toggle("move");
    },
    closeCart() {
      this.opencart = false;
    },
    closeLogin() {
      this.openLogin = false;
    },
    logOut() {
      console.log("out");
      fb.auth()
        .signOut()
        .then(() => {
          alert("成功登出");
          this.loginStatus = null;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss">
@import "../assets/style.scss";

.hide {
  transform: translateX(80px);
}

.move {
  transform: translateX(80px)!important;
}

#w_menu {
  display: relative;
  z-index: 99999999;
  overflow: hidden;
  > .menu-content {
    transition: all .3s ease-in-out;
    display: block;
    z-index: 999999;
    position: fixed;
    top: 0;
    right: 0;
    background: #fff;
    width: 80px;
    height: 100%;
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #efefef;
    padding: 0;
    > ul {
      width: 100%;
      > li {
        padding: 10px 0;
        border-top: 1px solid #efefef;
        
        > a {
          color: #60341f;
          position: relative;
          &::before{
            position: absolute;
            top: 0;
            left: 10px;
            opacity: 0;
            content: '';
            background: $Color;
            border-radius: 100%;
            width:8px;
            height:8px;
            transition: .2s ease-in-out;
            transform: translateY(50%);
          }
          &:hover{
            color:$Color;
          }

          &:hover::before{
            position: absolute;
            top: 0;
            left: -15px;
            content: '';
            background: $Color;
            border-radius: 100%;
            width:8px;
            height:8px;
            opacity: 1;
            transform: translateY(50%);
          }
        }
      }
    }
    > .menu-icon {
      padding-bottom: 20px;
      width: 50px;
      &:hover {
        cursor: pointer;
      }

      > img {
        width: 100%;
      }
    }
  }

  > .side-toggle {
    transition: all .3s ease-in-out;
    opacity: 0.8;
    cursor: pointer;
    z-index: 99999999;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 80px;
    width: 40px;
    height: 150px;
    text-align: center;
    writing-mode: vertical-lr;
    border-color: transparent #60341f transparent transparent ;
    border-style: solid solid solid solid;
    border-width: 30px;
    color: #fff;
    
  }
}
</style>