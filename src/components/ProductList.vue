<template>
  <section id="product">
    <div class="p-container">
      <div class="p-title">
        <h1>產品一覽</h1>
        <h5>PRODUCTS</h5>
      </div>
      <div class="p-list">
        <swiper :options="swiperOption" ref="mySwiper" v-if="products.length>1">
          <!--用v-if控制loop環狀輪播，否則不起作用-->
          <swiper-slide v-for="(product,index) in products" :key="index" class="swiper_box">
            <div class="goodsimg">
              <img :src="product.images[0]" alt />
              <!-- <carousel :perPage="1">
                                            <slide v-for="(img, index) in product.images" 
                                                :key="index"  class="slideimg">
                                                <img :src="img">
                                            </slide>
              </carousel>-->
            </div>
            <h5 class="pname">{{ product.name }}</h5>
            <div class="description" v-html="product.description"></div>
            <span class="viewnum">{{ product.price }} 元</span>
            <!-- 使用按鈕組件 -->
            <add-cart
              :price="product.price"
              :p-id="product.id"
              :name="product.name"
              :image="getImage(product.images)"
            ></add-cart>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>

        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { db } from "../firebase.js";


export default {
  name: "Products-List",
  components: {},
  props: {
    msg: String
  },
  components:{
      swiper,
      swiperSlide
  },
  data() {
    return {
      products: [],
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 10,
        autoplay: {
            delay: 1500,
            disableOnInteraction: true
          },
        loop: true,
        speed: 1000,
        loopedSlide: 0.5,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounter(){
      
  },
  firestore() {
    return {
      products: db.collection("products")
    };
  },
  methods: {
    //選擇第一張主圖
    getImage(imgs) {
      return imgs[0];
    }
  }
};
</script>

<style lang="scss">
#product {
  width: 100%;
  padding: 40px 0 80px 0;
  overflow: hidden;
  > .p-container {
    width: 100%;
    padding: 0;
    > .p-title {
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
    > .p-list {
      width: 100%;
      padding: 0;
      margin: 0;
    }
  }
}
.description {
  margin: 0;
  p {
    color: gray;
    text-overflow: ellipsis;
    line-clamp: 3;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    margin: 0 10px;
  }
}


.pname {
  margin: 10px 10px;
}
.viewnum {
  margin: 0 0 0 10px;
}

.VueCarousel-dot {
  margin: 0 !important;
}

.swiper-container {
  margin: auto;
  position: relative;
  text-align: center;
  width: 100%;
  overflow-y: visible!important;
  overflow-x: visible!important;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
}

.swiper-wrapper {
  position: relative;
  width: 10%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  overflow:visible!important;
}

.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 300px!important;
  height: 100%!important;
  position: relative;
  border: 1px solid #efefef;
  background: #fff;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  overflow:visible!important;
}

.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: 0.2;
  margin: 0 10px!important;
}
.swiper-pagination {
  position: absolute;
  bottom: -45px!important;
  text-align: center;
  -webkit-transition: 300ms opacity;
  -o-transition: 300ms opacity;
  transition: 300ms opacity;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 9999999999999!important;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  transform: scale(2)!important;
  background: #ff9a9e!important;
}

.goodsimg {
  overflow: hidden!important;
  height: 300px!important;
  border-bottom: 1px dotted pink;
  > img {
    width: 100%!important;
  }
}

@media screen and (max-width: 767px) {
  #product {
    width: 100% !important;
    padding: 80px 0;
    min-width: 300px;
    > .p-container {
      width: 100%;
      margin: auto;
      overflow: hidden;
      padding: 0 20px;
      > .p-title {
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
      > .p-list {
        width: 1140px;
        margin: 30px auto 0;
      }
    }
  }
}
</style>