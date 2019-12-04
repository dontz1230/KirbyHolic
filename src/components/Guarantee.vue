<template>
<div id="feature">
    <div class="p-title">
        <h1>商城特色</h1>
        <h5>Features</h5>
      </div>

      <div class="guarantee">
    <div class="g-left">
      <div class="g-content">
        <h5 class="g-eng">High Quality Products</h5>
        <h1 class="g-title">正版原裝高品質</h1>
        <p class="g-paragraph">高品質商品平行輸入，沒有拐瓜裂棗的次級品。只有精緻呆萌的優質商品。</p>
      </div>
    </div>
    <div class="g-right">
      <div class="g-content">
        <h5 class="g-eng">High Variety Products</h5>
        <h1 class="g-title">商品種類最齊全</h1>
        <p class="g-paragraph">高品質商品平行輸入，沒有拐瓜裂棗的次級品。只有精緻呆萌的優質商品。</p>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
// Using ScrollReveal
import scrollReveal from "scrollreveal";

export default {
  name: "Guarantee",
  data() {
    return {
      scrollReveal: scrollReveal()
    };
  },
  mounted() {
    this.scrollReveal.reveal(".guarantee", {
      // 动画的时长
      duration: 400,
      // 延迟时间
      delay: 300,
      // 动画开始的位置，'bottom', 'left', 'top', 'right'
      origin: "left",
      // 回滚的时候是否再次触发动画
      reset: true,
      // 在移动端是否使用动画
      mobile: false,
      // 滚动的距离，单位可以用%，rem等
      distance: "300px",
      // 其他可用的动画效果
      opacity: 0.001,
      easing: "linear",
      scale: 1
    });
  }
};
</script>

<style lang="scss">
@import url("../assets/style.scss");
.p-title {
    margin-top: 40px;
      text-align: center;
      margin-bottom: 80px;
      > h5 {
        font-size: 0.8rem;
        text-align: center;
        letter-spacing: 1px;
        color: rgb(96, 52, 31);
      }
      > h1 {
        text-align: center;
        font-size: 2rem;
        color: rgb(96, 52, 31);
      }
    }
.guarantee {
  height: 540px;
  width: 100%;
  z-index: 2;
  display: flex;
  margin-bottom: 0;
  padding-bottom: 0;
  overflow: hidden;
  

  > .g-left {
    width: 100%;
    height: 100%;
    background-image: url(../assets/g-left.jpg);
    background-size: cover;
    background-position-y: -80px;
    background-repeat: no-repeat;
    transition: all 0.3s ease-in-out;

    &:hover .g-content {
      transform: scale(1.2) translate(-50%, -50%);
      transform-origin: left;
      opacity: 0.9;
    }
  }
  > .g-right {
    width: 100%;
    height: 100%;
    background-image: url(../assets/g-right.jpg);
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease-in-out;

    &:hover .g-content {
      transform: scale(1.2) translate(-50%, -50%);
      transform-origin: left;
      opacity: 0.9;
    }
  }
  > div {
    position: relative;

    > .g-content {
      cursor: pointer;
      background: #fff;
      opacity: 0.6;
      width: 80%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 30px 60px;
      transition: all 0.3s ease-in-out;
      color: rgb(96, 52, 31);
    }
  }
}

@media screen and (max-width: 768px) {
  .guarantee {
    flex-direction: column;
  }
}
</style>