<template>
    <div class="admin">
        <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
            <a @click="toggleMenu" href="#" id="show-sidebar" class="btn btn-sm btn-dark">
                <i class="fas fa-bars"></i>
            </a>
         <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <a href="#">管理者後台</a>
                    <span style="color:white" @click="toggleMenu"><i class="fas fa-times"></i></span>
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                    
                    <div class="user-info">
                        <span><strong>Account</strong></span>
                        <span class="user-role">{{email}}</span>
                    </div>
                </div>
                
                <!-- sidebar-menu  -->
                <div class=" sidebar-item sidebar-menu">
                    <ul>
                        <li class="header-menu">
                            <span>Menu</span>
                        </li>
                        
                        <li>
                            <router-link to="/admin/products">
                                <i class="fa fa-book"></i>
                                <span class="menu-text">產品</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/orders">
                                <i class="fa fa-calendar"></i>
                                <span class="menu-text">訂單</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/home">
                                <i class="fa fa-home"></i>
                                <span class="menu-text">回首頁</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="javascipt:;" @click="logout">
                                <i class="fa fa-folder"></i>
                                <span class="menu-text">登出</span>
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
           
            
        </nav>
        <!-- page-content  -->
        <main class="page-content pt-2">
           <router-view></router-view>
               
        </main>
        <!-- page-content" -->
    </div>
    </div>
</template>

<script>
import Hero from "../components/Hero.vue"
import { fb } from '../firebase.js'
export default {
    name: "admin",
    data(){
        return {
            name: null,
            email: null,
        }
    },
    components:{
        Hero
    },
    methods:{
        toggleMenu(){
            $(".page-wrapper").toggleClass('toggled')
        },
        logout(){
            fb.auth().signOut()
            .then( ()=> {
                this.$router.replace('/')
            })
            .catch( (err) => console.log(err))
        }
    },
    created(){
      var user = fb.auth().currentUser;
      this.email = user.email;
  }
}
</script>