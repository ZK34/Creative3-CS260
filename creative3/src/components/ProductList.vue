<template>
    <div class="wrapper">
        <div class="products">
            <div class="product" v-for="product in products" :key="product.id">
                <div class="info">
                    <h1>{{product.item}}</h1>
                    <p>{{product.description}}</p>
                </div>
                <div class="image">
                    <img :src="product.img" :alt="product.alt">
                </div>
                <div class="price">
                    <h2>${{product.price}}</h2>
                    <button @click="addToCart(product)" class="auto">Add to Cart</button>
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
            addToCart(product) {
                let cart = this.$root.$data.cart

                if(cart.some(itm => itm.id === product.id)){
                    product.quantity += 1
                } else {
                    product.quantity += 1
                    cart.push(product)
                }
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .products {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .product {
        margin: 10px;
        margin-top: 50px;
        width: 200px;
    }

    .product img {
        border: 2px solid #333;
        height: 250px;
        width: 200px;
        object-fit: cover;
    }

    .product .image {
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    }

    .info {
        background: steelblue;
        color: white;
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
        margin: 0px;
        font-size: 10px;
    }


    .price {
        display: flex;
    }

    button {
        height: 50px;
        background: darkorange;
        color: black;
        border: none;
    }

    .auto {
        margin-left: auto;
    }
</style>
