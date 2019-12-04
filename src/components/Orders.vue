<template> 
    <div> 

        <div class="orderContent">

            <div class="orderTitle">
                <h1>所有訂單</h1>
            </div>
            
            <div class="orderBody">
                <table>
                    <tr>
                        <th>縮圖</th>
                        <th>名稱</th>
                        <th>數量</th>
                        <th>金額</th>
                    </tr>
                    <tr v-for="(item,index) in this.$store.state.cart" :key="index">
                        <td><img :src="item.productImage" width="50px" alt=""></td>
                        <td>{{ item.productName }}</td>
                        <td>{{ item.productAmount }}個</td>
                        <td>{{ item.productPrice * item.productAmount }}元</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            總金額
                        </td>
                        <td>
                             <span class="totalPrice">總共 {{ this.$store.getters['totalPrice']}} 元</span>
                        </td>
                    </tr>
                    
                </table>

            </div>
        </div>
               
    </div>
</template>

<script>
export default { 
    
}

</script>

<style lang="scss">
@import '../assets/style.scss';

.orderContent {
    margin:0;
    padding: 0;
    
    > .orderTitle {
        background: url('../assets/orderimg2.jpg');
        background-size: cover;
        background-color:red;
        background-repeat: no-repeat;
        min-height:500px;
        position: relative;
        color: $Color;

        &:after{
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            background-color: white;
            opacity: 0.2;
            z-index: 1;
            width: 100%;
            height: 100%;
            }
        > h1 {
            background: white;
            padding:5px 20px;
            border: 1px solid $Color;
            border-radius: $BorderRadius;
            position: absolute;
            top:50%;
            transform: translateY(-50%);
            left:5%;
        }
    }

    > .orderBody {
            margin:5%;
            > table {
                    width: 100%;
                    border-radius: $BorderRadius;
                    
                    > tr {
                        color: $TextColor;
                        height: 65px;
                        border: ridge 1px $Color;

                        &:last-child {
                                background:#ffdadb;
                                font-weight: bold;
                            }

                        > th {
                            text-align: center;   
                            background: $Color;
                            color: white;
                        }
                        > td {    
                            text-align: center;

                            
                            > img {
                                border-radius: 100px;
                            }
                        }

                        
                    }
                }
        }
}
</style>