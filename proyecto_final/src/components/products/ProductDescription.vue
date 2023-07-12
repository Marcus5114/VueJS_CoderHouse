<template>
    <div class="fondo-descripcion" :class="{show: active}" @click ="$emit('cerrar-descripcion-producto')" />

    <div class="descripcion" :class="{show: active}">

        <div class="text-end">
            <i class="fas fa-times fs-3 text-muted" role="button" @click ="$emit('cerrar-descripcion-producto')"></i>
        </div>

        <div v-if="product" class="producto">
            <h3>{{ product.fruit_name }}</h3>
            <p class="text-muted">
                <small>{{ product.description }}</small>
            </p>
            <hr>

            <ul class="list-group list-group-flush text-start">

                <li class="list-group-item">
                    <b>Price:</b> ${{ product.price }}
                </li>
                <li class="list-group-item">
                    <b>Weight:</b> {{ product.weight }}g
                </li>
                <li class="list-group-item">
                    <b>Country:</b> {{ product.country }}
                </li>
                <li class="list-group-item">
                    <b>Organic:</b> <span v-if="product.organic">Yes</span> <span v-else>No</span>
                </li>

            </ul>

            <hr>

            <h4>Add to Cart</h4>
            <div class="btn-group">
                <button class="btn btn-outline-success" @click ="addToCart()"><i class="fas fa-plus"></i></button>
                <button class="btn btn-outline-danger" @click ="removeFromCart()"><i class="fas fa-minus"></i></button>
            </div>
            <br>

            <div class="text-end" v-if="product_total">
                <h3><i class="fas fa-shopping-cart"></i> x {{ product_total }}</h3>
        
            </div>
        </div>

        

    </div>
</template>

<script>
export default {
    props: ['product', 'active'],
    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.product)
        },

        removeFromCart() {
            this.$store.commit('removeFromCart', this.product)
        }
    },
    computed: {
        product_total() {
            return this.$store.getters.productQuantity(this.product)
        }
    }
}
</script>

<style lang="scss">

    .fondo-descripcion {
        width: 100%;
        height: 100vh;
        position: fixed;
        right: 0;
        top: 0;
        background-color: rgba(124, 124, 124, .55);
        z-index: 100;
        display: none;
        transition: display .5s ease;

        &.show {
            display: block;
        }
    }

    .descripcion {
        width: 95vw;
        height: 100vh;
        background-color: white;
        position: fixed;
        top: 0;
        right: -105vw;
        padding: 2rem;
        transition: right .5s ease;
        z-index: 101;
        overflow-y: scroll;
        
        &.show {
            right: 0;
        }
    }

    .producto {
        display: flex;
        justify-content: center;
        flex-direction: column;

    }

    @media (min-width: 500px) {
        .descripcion {
            width: 450px;
        }
    }

</style>