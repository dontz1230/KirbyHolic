<template>
    <div>
        <!-- mobile nav start -->
        <div id="m_menu">
            <a class="menu-burger" href="javascipt:;">
                <i class="fa fa-bars"></i>
</a>
            <div class="drawer">
                <ul class="global">
                   <li> <router-link to="/home" href="#">首頁</router-link> </li>
                   <li> <router-link to="/home" href="#">關於</router-link> </li>
                   <li> <a href="#product">商品</a> </li>
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

                        
                </ul>
                <ul class="social">
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
        </div>
        <!-- mobile nav end --> 
        <!-- mobile nav start -->
        <header id="header-top" class="bg-container">
            <div class="bg-area">
                <div class="bg-images slideshow"></div>
            </div>
            <div class="header-content">
                <img :src="require('../assets/menu.png')" alt="KBLOVER">
                <h1>KIRBY-HOLIC</h1>
                <p>專屬卡比之星的購物平台  </p>
                
            </div>
        </header>

        
         <cartpop :opencart="opencart" @closeCart="closeCart"></cartpop>
         <login :openLogin="openLogin" @closeLogin="closeLogin"></login>
        
    </div>
</template>

<script>
//menu change color when scroll


import Login from '../components/Login.vue';
import Cartpop from '../components/Cartpop.vue';
import { fb } from '../firebase.js';

export default {
    components: {
    Login,
    Cartpop
  },
  created(){
      var user = fb.auth().currentUser;
      if(user){
        this.loginStatus = true;
      }
  },
  data(){
    return {
      opencart: false,
      openLogin: false,
      loginStatus: null
    }
  },
  methods:{
    showCart(){
      this.opencart = true
    },
    openLogin(){
      this.openLogin = true
    },
    toggleMenu(){
      let mainNav = document.getElementById('js-menu');
      mainNav.classList.toggle('active');
    },
    closeCart(){
      this.opencart = false
    },
    closeLogin(){
      this.openLogin = false
    },
    logOut(){
      console.log('out')
      fb.auth().signOut()
      .then( ()=> {
          alert('成功登出');
          this.loginStatus = null;
      })
      .catch( (err) => console.log(err))
    }
  },
      mounted(){
          
          const menuBurger = document.querySelector('.menu-burger');
          menuBurger.addEventListener('click', () => {
              const drawer = document.querySelector('.drawer');
              drawer.classList.toggle('show');
          })

         

          
      }

        
}

</script>
<style lang="scss">
@import '../assets/style.scss';
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');


.slideshow {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    background-color: white;
    background-size:cover;
    width:100%;
    height: 100%;
    animation: crossfade 6s linear infinite alternate;
}

@keyframes crossfade {
    0% { background-image: url('../assets/slide01.jpg'); }
    20% { background-image: url('../assets/slide01.jpg'); }
   35% { background-image: url('../assets/slide02.jpg'); }
   55% { background-image: url('../assets/slide02.jpg'); }
   70% { background-image: url('../assets/slide02.png'); }
   100% { background-image: url('../assets/slide02.png'); }
}

#m_menu {
    display: none;
}

header {
    display: block;
}

.fade {
  transition: opacity 1s, z-index 0s 1s;
}

#header-top {
    width: 100%;
    background: #fff;
    position: relative;
    border: 20px solid #fff;
    height: calc(100vh - 50px);
    overflow: hidden;

    > .bg-area {
        text-align: left;
        position: absolute;
        width:100%;
        height: 100%;

        > .bg-images {
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
            background-color: white;
            width:100%;

            > ul {
                
                > li {
                    overflow: hidden;
                    transition: display .3s ease-in-out;
                    > img {
                        transition: display .3s ease-in-out;
                        width: 100%;
                    }
                }
                
            }
            
        }
    }

    > .header-content {
            position: absolute;
            z-index: 3; 
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            width: 100%;
            text-align: center;
            color: #fff!important;

            > h1 {
                margin-top:20px;
                font-size: 5rem;
                filter:drop-shadow(0px 0px 3px rgba(0,0,0,0.3));
                font-family: 'Righteous', cursive;
            }
            > p {
                font-size: 2rem;
                filter:drop-shadow(2px 1px 2px rgba(0,0,0,0.2));
            }

    }
}



@media (max-width:740px) {
    #w_menu {
        display: none!important;
    }

    .show {
        display:block!important;
    }

    #m_menu {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height:100%;
        
        > .menu-burger {
            position: absolute;
            top: 1rem;
            right: 1rem;
            z-index: 101;
            font-size: 2rem;
            height:50px;
            width:50px;
            color: #642200!important;

        }
        > .drawer {
            background-color: rgba(255,253,247,1);
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height:100%;
            padding: 60px 10% 0 10%;
            z-index: 100;
            display:none;

            > ul {
                overflow: hidden;
                display: block;
                list-style-type: none;
                text-align: center;

                > li {
                    font-size: 1.2rem;
                    line-height: 3;
                    display: list-item;
                    
                    > a {
                        color: #642200!important;
                    }
                }
            }

            > .social li{
                
                display: inline-block;
                margin: 5px;
                > a {
                    color: #642200!important;
                }
            }
        }
    }
}
</style>