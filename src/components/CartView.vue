<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="cartWindow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">MY CART</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                <ul>
                    <li v-for="item in this.$store.state.cart" :key="item">
                    <img :src="item.productImage" width="80px" alt="">
                    {{ item.productName }}
                    <span @click="removeItem" class="float-right">X</span>
                    {{ item.productAmount }}個
                    </li>
                </ul>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">繼續購物</button>
                <button @click="checkout(item)" type="button" class="btn btn-primary">完成訂單</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import sweetAlert from sweetAlert
export default {
    methods:{
        checkout(){
            // $('#cartWindow').modal('hide')
            // this.$router.push('/checkout')
            
        },
        removeItem(item){
            this.$store.commit('removeFromCart',item)
        }
    }
}
</script>