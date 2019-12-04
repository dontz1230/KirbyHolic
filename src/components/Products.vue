<template> 
    <div class="products">

        <div class="dataContent">

                <section v-if="modal" class="addData">           
                        <div class="addDataTitle">
                            <h4 v-if="modal === 'new'">新增商品</h4>
                            <h4 v-else>修改商品</h4>
                        </div>

                        <div class="addDataBody">
                                <div class="dataInput">
                                    <input type="text" placeholder="商品名稱" v-model="product.name" class="form-control">
                                </div>
                                <div class="dataInput">
                                    <input type="text" placeholder="商品價格" v-model="product.price" class="form-control">
                                </div>
                                <div class="dataInput">
                                    <input type="text" @keyup.17="addTag" placeholder="新增商品標籤（請按ctrl分隔）" v-model="currenttag" class="form-control">
                                </div>
                                <div class="productInput">
                                    <span class="tagItem" v-for="(tag,index) in product.tags" :key="index" >
                                        {{ tag }}
                                    </span>
                                </div>
                                
                                <div class="dataInput">
                                    <vue-editor v-model="product.description" ></vue-editor>
                                </div>
                                <div class="dataInput">
                                <label for="product_image">Product Image</label>
                                <input type="file" @change="uploadImage">
                                </div>
                                <div class="form-group previewImgs">
                                <div class="thumbnails" v-for="(image,index) in product.images" :key="index">
                                    <img :src="image" width="80px">
                                    <span>
                                        <i class="fa fa-times" @click="deleteImage(image,index)"></i>
                                    </span>
                                </div>
                                </div>
                        </div>

                        <div class="dataButtons">
                        
                            <button @click="addProduct()" type="button" 
                                    v-if="modal == 'new'">確認新增</button>
                            <button @click="updateProduct()" type="button" 
                                    v-if="modal == 'edit'">儲存變更</button>
                            <button @click="resetProducts()" type="button" 
                                    v-if="modal">取消</button>

                        </div>
                                 
                </section>


        
            <section class="productList">
                
                <div class="productListTitle">
                    <h1>商品一覽</h1>
                </div>

                <button @click="addNew()" class="addProduct">點我新增商品</button>

                <div class="dataBody">
                    <table>
                        <tr>
                            <th>縮圖</th>
                            <th>名稱</th>
                            <th>金額</th>
                            <th>操作</th>
                        </tr>
                        <tr v-for="(singleP,index) in products" :key="index">
                            <td><img :src="singleP.images[0]" width="50px" alt=""></td>
                            <td>{{ singleP.name }} </td>
                            
                            <td>{{ singleP.price }}元</td>
                            <td>
                                <button class="editBtn" @click="editProduct(singleP)">修改</button>
                                <button class="deleteBtn" @click="deleteProduct(singleP)" >刪除</button>
                            </td>
                            
                        </tr>
                        
                    </table>

                </div>
            </section>
        </div>
        
    </div>

    
</template>

<script>
import { fb,db } from '../firebase.js'
import { VueEditor } from 'vue2-editor'

export default {
    name: 'Products',
    components:{
        VueEditor
    },
    data(){
        return {
            editState: false,
            activeItemId: null,
            value: null,
            products:[],
            product:{
                name:null,
                price:null,
                description:null,
                tags:[],
                images:[]
            },
            modal: '',
            currenttag: null
        }
    },
    firestore(){
        return {
            products: db.collection('products')
        }
    },
    computed:{
        computedTag(){
            return this.product.tags
        }
    },
    methods:{
        resetProducts(){
            this.product = {
                name:null,
                description:null,
                price:null,
                tags:[],
                images:[]
            }
            this.modal = ''
        },
        addNew(){
            this.modal = 'new'
            // this.resetProducts();
            // $('#product').modal('show');
        },
        addProduct(){
            this.$firestore.products.add(this.product);
            this.resetProducts();
        },
        deleteProduct(doc){
            Swal.fire({
            title: '刪除商品',
            text: "一旦選擇刪除，則該商品無法復原。",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: '取消',
            confirmButtonText: '是，我想要刪除這項商品。'
            }).then((result) => {
            if (result.value) {
                //刪除firebase中的資料
                this.$firestore.products.doc(doc.id).delete()
                Swal.fire(
                '刪除成功',
                '商品項目已經移除',
                '成功移除'
                )
            }
})
        },
        
        editProduct(product){
            this.product = product 
            this.modal = 'edit'
        },
        updateProduct(){
            this.$firestore.products.doc(this.product.id).update(this.product);
            this.resetProducts();

        },
        addTag(){
            this.product.tags.push(this.currenttag);
            this.currenttag = ''
            console.log(this.currenttag)
        },
        uploadImage(e){
            //check if we've uploaded img
            if(e.target.files[0]){
                let file = e.target.files[0]

                let storageRef = fb.storage().ref('products/' + file.name)
                
                //使用uploadTask才可以resume/cancel/get url/progress...
                let uploadTask = storageRef.put(file)

                uploadTask.on('state_changed', (snapshot) => {
                }, (error) => {
                    
                }, () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        this.product.images.push(downloadURL)
                        
                    })
                })
            }
        },
        deleteImage(img,index){
            let image = fb.storage().refFromURL(img);
            this.product.images.splice(index,1);
            image.delete().then(() => {
                console.log('img deleted')
            }).catch((error) => {
                console.log(error)
            })
        },
        onConfirm() {
            this.value = 'Agreed'
        },
        onCancel() {
            this.value = 'Disagreed'
      }
    }
}

</script>

<style lang="scss">
@import '../assets/style.scss';

.tagItem {
    padding:3px 6px;
    background: $Color;
    color:white;
    border-radius: $BorderRadius;
    margin: 0 5px;
}

    .dataContent {
    position: relative;
    height: 100vh;

    > .addData {
        width: 600px;
        top: 5%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: $BorderRadius;
        box-shadow: $DeepShadow;
        background: white;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
        margin-bottom: 10px;
        position: absolute;
        z-index: 99;

        > .addDataTitle {
            text-align:center;
            margin: 20px auto;

            > h5 {
                font-weight: bold;
            }
        }
        > .addDataBody {
            margin: auto;
    
            > .dataInput {
                margin: 10px;
            }
        }
        > .dataButtons {
            > button {
                text-align: center;
                border:$Border;
                background: none;
                padding:5px 10px;
                color: $Color;
                border-radius: $BorderRadius;
                transition: all .3s;
                margin-right: 10px;
                &:hover {
                    background: $Color;
                    padding:5px 10px;
                    color: white;
                }

                &:last-child{
                   text-align: center;
                    border: $Border2;
                    background: none;
                    padding:5px 10px;
                    color: $Color2;
                    border-radius: $BorderRadius;
                    transition: all .3s;
                    &:hover {
                        background: $Color2;
                        padding:5px 10px;
                        color: white;
                    }
                }
            }
                
        }
    }
    

    > .dataTitle {
        background: url('../assets/orderimg2.png');
        background-position: center;
        background-repeat: no-repeat;
        min-height:500px;
        position: relative;
        color: $TextColor;
        > h1 {
            position: absolute;
            top:50%;
            transform: translateY(-50%);
            left:5%;
        }
    }


    > .productList{
        margin: auto;

        >.productListTitle {
            text-align: center;
            background: url('../assets/orderimg2.png');
            background-size: cover;
            background-color:red;
            background-repeat: no-repeat;
            min-height:500px;
            position: relative;
            color: $Color;
            margin-bottom: 10px;

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
        > .addProduct {
            position: relative;
            left:50%;
            transform: translateX(-50%);
            text-align: center;
            border: 1px solid rgb(34, 141, 223);
            background: none;
            padding:5px 10px;
            color: rgb(34, 141, 223);
            border-radius: $BorderRadius;
            transition: all .3s;
            margin-right: 10px;
            margin-bottom: 10px;
            &:hover {
                background: rgb(34, 141, 223);
                padding:5px 10px;
                color: white;
            }
        }
        
        > .dataBody {
            margin: 0 5%;
            > table {
                    width: 100%;
                    border-radius: $BorderRadius;
                    
                    > tr {
                        color: $TextColor;
                        height: 65px;
                        border: ridge 1px $Color;

                        &:nth-child(odd) {
                                background:#fceaeb;
                            }

                        > th {
                            text-align: center;   
                            background: $Color;
                            color: white;
                        }
                        > td {    
                            text-align: center;

                            > .editBtn {
                                text-align: center;
                                border: 1px solid rgb(34, 141, 223);
                                background: none;
                                padding:5px 10px;
                                color: rgb(34, 141, 223);
                                border-radius: $BorderRadius;
                                transition: all .3s;
                                margin-right: 10px;
                                &:hover {
                                    background: rgb(34, 141, 223);
                                    padding:5px 10px;
                                    color: white;
                                }
                            }

                            > .deleteBtn {
                                text-align: center;
                                border: 1px solid rgb(215, 5, 5);
                                background: none;
                                padding:5px 10px;
                                color: rgb(215, 5, 5);
                                border-radius: $BorderRadius;
                                transition: all .3s;
                                &:hover {
                                    background: rgb(215, 5, 5);
                                    padding:5px 10px;
                                    color: white;
                                }
                            }

                            
                            > img {
                                border-radius: 100px;
                            }
                        }

                        
                    }
                }
        }
    }
    
}

.previewImgs {
    display: flex;
    
}
</style>