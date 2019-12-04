<template> 
    <div class="add-to-cart" @click="addToCart">
        <button> <i class="fa fa-shopping-bag"></i> </button>
    </div>
</template>

<script>
export default {
    name: "add-cart",
    props:{
        name: String,
        price: String,
        image: String,
        pId: String
    },
    data(){
        return {
            item:{
                productName: this.name,
                productPrice: this.price,
                productImage: this.image,
                productAmount: 1,
                productID: this.pId
            }
        }
    },
    methods:{
        addToCart(){
            alert('成功加入購物車')
            this.$store.commit('addToCart', this.item)
        }
    }
}

</script>

<style lang="scss">
@import '../assets/style.scss';
    .add-to-cart{
        position: absolute;
        bottom: 10px;
        right:10px;
        
        
        > button {
            height: 40px;
            width: 40px;
            border-radius: 100%;
            background: $Color;
            border: none;
            color: #fff;
            transform: scale(1);
            opacity: 0.8;
            &:hover {
                animation: popping .3s ease-in-out;
            }
            @keyframes popping {
                0% {
                    transform: scale(1);
                }
                5% {
                    transform: scale(0.9);
                }
                50% {
                    opacity: 1;
                }
                95% {
                    transform: scale(1.2);
                }
                100%{
                    transform: scale(1);
                    
                }
            }
        }
    }
</style>