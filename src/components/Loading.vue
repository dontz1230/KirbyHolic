<template>
    <div v-if="finishLoading" class="loading">
        <img class="loadingimg" :src="require('../assets/loading/loading.gif')">
    </div>
</template>

<script>
    
    // import asd from '../assets/loading/loading.gif'
    export default {
        data() {
            return {
              
            }
        },
        props: {
            finishLoading:{
                type: Boolean,
                required: true
            }
        },
        methods: {
            
        }
    }
</script> 

<style>
.loading {
    background: rgba(245,245,245,0.6);
    width:100vw;
    height: 100vh;
    position: relative;  
    display: flex;
    justify-content: center;
     align-items: center; 
}

 .loadingimg {
        height:100px;
    }

</style>