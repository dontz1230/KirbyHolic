<template>
  <div id="app">
    <loading-anime :finishLoading="finishLoading"></loading-anime>
    <router-view></router-view>
  </div>
</template>

<script>
import LoadingAnime from './components/Loading.vue'
export default {
  data(){
    return {
           finishLoading: true
        }
  },
  mounted(){
    setTimeout(() => {
      this.finishLoading = false
    }, 1000)
  },
  components:{
    LoadingAnime
  }
}
</script>

<style lang="scss">
  @import './assets/style.scss';
</style>