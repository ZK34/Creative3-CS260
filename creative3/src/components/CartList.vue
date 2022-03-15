<template>
    <div class="wrapper">
        <div class="products">
            <div class="product" v-for="product in products" :key="product.id">
                <div class="image">
                    <img :src="product.img">
                </div>
                <div class="info-stuff">
                    <div class="info">
                        <h1>{{product.item}}</h1>
                        <p>{{product.description}}</p>
                    </div>
                    <div class="price">
                        <h2>${{product.price}}</h2>
                        <div id="quantity">
                            <h2>QTY: </h2>
                            <input type="number" v-model="product.quantity"/>
                        </div>
                        <button @click="removeFromCart(product)" class="auto">Remove Item</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductList',
        props: {
            products: Array
        },
        methods: {
            removeFromCart(product) {
                for (let i = 0; i < this.$root.$data.cart.length; i ++){
                    if(this.$root.$data.cart[i].id === product.id){
                        this.$root.$data.cart.splice(i, 1)
                    }
                }
                product.quantity = 0
            }
        }
    }
</script>

<style scoped>
    #quantity {
        display: inline-flex;
        padding-left: 55%;
    }

    #quantity h2 {
        padding-right: 5%;
    }

    #quantity input {
        width: 75px;
        display: inline-flex;
        padding-left: 5%;
    }

    .wrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .products {
        margin-top: 20px;
        display: inline-list-item;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .product {
        margin: 10px;
        margin-top: 50px;
        width: 100%;
        display: inline-block;
    }

    .product img {
        border: 2px solid #333;
        height: 250px;
        width: 200px;
        object-fit: cover;
        display: inline-block;
    }

    .product .image {
        display: inline-block;
        /*justify-content: center;*/
        margin-bottom: 5px;
    }

    .info {
        background: #F2921D;
        color: #000;
        padding: 10px 30px;
        height: 80px;
    }

    .info h1 {
        font-size: 16px;
    }

    .info h2 {
        font-size: 14px;
    }

    .info p {
        /*margin: 0px;*/
        font-size: 10px;
    }

    .info-stuff {
        flex: fit-content;
        display: inline-block;
        width: 800px;
    }


    .price {
        display: flex;
    }

    button {
        height: 50px;
        background: #000;
        color: white;
        border: none;
    }

    .auto {
        margin-left: auto;
    }
</style>
