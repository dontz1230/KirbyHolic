<template>
  <div> 
      <div class="loginModal" v-if="openLogin">

        <div class="loginContent">

          <div class="loginHeader">
              <a href="javascript:;" class="loginTitle" @click="wantToLog = true" :class="{ 'clicked' : wantToLog}">登入會員</a>
              <span> | </span>
              <a href="javascript:;" class="loginTitle" @click="wantToLog = false" :class="{ 'clicked' : !wantToLog}">註冊會員</a>
          </div>

          <div class="loginBody">

        
              <div class="tab login" v-if="wantToLog">
                  <input v-model="loginEmail" type="email" placeholder="請輸入您的登入信箱">
                  <input v-model="loginPwd" type="password" placeholder="請輸入您的登入密碼">
                  
                  <button @click="login" @keyup.enter="login">登入</button>
              </div>
          


              <div class="tab signup" v-if="!wantToLog">
                <input v-model="name" type="text" placeholder="請輸入會員姓名">
                  <input v-model="email" type="email" placeholder="請輸入您的電子信箱">
                  <input v-model="password" type="password" placeholder="請輸入您的密碼">
                  <button @click="signUp" @keyup.enter="signUp">註冊</button>
              </div>

          </div>

            <div class="loginFooter">
                <button type="button" @click="$emit('closeLogin')" class="closeLoginBtn">取消</button>
           </div>
  

    </div>
    </div>
  </div>
</template>

<script>
import {fb,db} from '../firebase.js'
  export default {
    name: 'Login',
    props:{
      openLogin: {
        type: Boolean,
        required:true
      }
    },
    data(){
      return {
        showDialog: false,
        email: '',
        password: '',
        loginEmail:'',
        loginPwd:'',
        name:'',
        wantToLog: true
      }
    },
    methods:{
      login(){
        fb.auth().signInWithEmailAndPassword(this.loginEmail, this.loginPwd)
        .then( (user) => {
          alert('登入成功')
          this.$router.replace('admin/orders')
          this.showDialog = false
        }, (err) => {
          alert(err.message)
         } )
      },
      signUp(){
        fb.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then( (user) => {
          alert('成功創好帳號囉')
          this.showDialog = false

          //儲存註冊姓名this.name到profiles database
          db.collection('profiles').doc(user.user.uid).set({
            name: this.name
          }).then(() => {
            console.log('Signed up successfully')
          }).catch((error) => {
            console.log('this is' + error)
          })

          this.$router.replace('admin')
        }, (err) => {
          alert(err.message)
         } )}
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';

    .loginModal {
        top:50%;
        right:50%;
        transform:translate(50%,-50%);
        width: 400px;
        background:white;
        padding:20px;
        position: absolute;
        z-index: 5;
        border-radius: 10px;
        border: $Border;
        box-shadow: $DeepShadow;
        

        > .loginContent {
            position: relative;

            > .loginHeader {
                color: $Color;
                position: relative;
                height:2rem;
                margin:1rem;
                
            }

            > .loginBody {
                padding: 10px;
                margin: 10px auto;
                   
                > .tab {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-start;
                  height:140px;
                  

                  > input {
                    margin: 5px 0;
                    border:$Border;
                    padding: 2px 0 2px 12px;
                    color: $Color2;
                    border-radius: 100px;
                    font-size: 1rem;
                  }
                  > button {
                    margin: 5px 0;
                    color: white;
                    padding: 2px;
                    background: $Color;
                    border: none;
                    border-radius: 100px;
                    transition: all .3s;
                    &:hover {
                      transform: scale(1.05);
                      animation: text 1s infinite ease-out;
                    }
                    @keyframes text {
                      0%{
                        background: $Color;
                      }
                      50%{
                        background: #ffd06b;
                      }
                      100%{
                        background: #81d8cc;
                      }
                    }
                  }
                }
            }

            > .loginFooter {
                display: flex;
                justify-content: flex-end;

                >.closeLoginBtn {
                    text-align: center;
                    border: $Border2;
                    background: none;
                    padding:5px 10px;
                    color: $Color2;
                    border-radius: $BorderRadius;
                    transition: all .3s;
                    
                }

                > .checkoutBtn {
                    margin-left: 15px;
                    text-align: center;
                    border:$Border;
                    background: none;
                    padding:5px 10px;
                    color: $Color;
                    border-radius: $BorderRadius;
                    transition: all .3s;
                    &:hover {
                        background: $Color;
                        padding:5px 10px;
                        color: white;
                    }
                }
            }
        }
       
  .clicked {
    color:$Color;
    padding-bottom: 3px;
    border-bottom: 2px dotted $Color;
    font-size:1.5rem;
  }


    }
</style>