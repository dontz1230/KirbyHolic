<template>
  <div>
    <div class="subscribeContainer">
      <div class="formContainer">
        <div class="formContent">
          <div class="formTitle">
            <h1>Subscribe</h1>
            <p>訂閱獲得所有卡比之星商品最新動態</p>
          </div>
          <form>
            <input
              v-model.trim="email"
              @input="$v.email.$touch()"
              type="email"
              placeholder="請輸入電子信箱"
              required
            />
            <div
              class="error-container"
              v-if="!$v.email.email"
              v-bind:class="{ 'error-email': !$v.email.email }"
            >請使用正確的email格式</div>
            <button>訂閱</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, minLength, email } from "vuelidate/lib/validators";

import scrollReveal from 'scrollreveal';

export default {
  data() {
    return {
      email: "",
        scrollReveal: scrollReveal()
    }
  },
    mounted(){
        this.scrollReveal.reveal('.formContainer', {
        // 动画的时长
        duration: 500,
        // 延迟时间
        delay: 100,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: 'top',
        // 回滚的时候是否再次触发动画
        reset: true,
        // 在移动端是否使用动画
        mobile: true,
        // 滚动的距离，单位可以用%，rem等
        distance: '300px',
        // 其他可用的动画效果
        opacity: 0,
        easing: 'ease-in-out',
        scale: 1,
    });
    }
  ,
  components: {
    required,
    minLength,
    email
  },
  validations: {
    email: {
      required,
      email
    }
  }
};
</script>

<style lang="scss">
.error-email {
  color: red;
}
.subscribeContainer {
  height: 600px;
  width: 100%;
  background: url("https://ppt.cc/fJUDcx@.jpg");
  position: relative;
}

.formContainer {
  position: absolute;
  text-align: center;
  border-radius: 10px;
  margin: auto;
  background: rgba(255, 255, 255, 0.95);
  height: 300px;
  width: 480px;
  padding: 1em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > .formContent {
    width: 80%;
    position: absolute;
    top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #60341f;
    > form {
      text-align: center;
      display: flex;
      flex-direction: column;
      > input {
        border-radius: 15px;
        margin-bottom: 5px;
        height: 3rem;
        letter-spacing: 2px;
        text-align: center;
        border-radius: 300px;
        background: #eee;
        padding: 1em 2em;
        outline: none;
        border: none;
        color: #222;
        transition: 0.3s linear;
        &:focus {
          background: #fce4ec;
        }
      }

      > button {
        cursor: pointer;
        border: none;
        background: #ff80ab;
        color: white;
        height: 3rem;
        border-radius: 300px;
        transition: 0.2s ease-in-out;
        &:hover {
          transform: translateY(2px);
        }
      }
    }
  }
}
</style>