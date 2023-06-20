<template>
    <div class="container-fluid">

        <div class="container">
            <h1 class="text-center">
YOUR CART
            </h1>
            <hr>
            

            <div class="row">

                <div class="col-md-7">

                    <div class="table-responsive">

                        <table class="table table-striped">

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Weight</th>
                                    <th>Price per Unit</th>
                                    <th class="text-end">In Cart</th>
                                    <th class="text-end">Total Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                <CartTableData
                                    v-for="product in products"
                                    :key="product.id"
                                    :product="product"
                                
                                />
                            </tbody>

                        </table>

                    </div>

                </div>
                <div class="col-md-5">

                    <CartTotalData/>

                </div>

            </div>

            
        </div>

    </div>

</template>

<script>
import CartTableData from '../components/cart/CartTableData.vue'
import CartTotalData from '../components/cart/CartTotalData.vue'

export default {
    components: {
        CartTableData,
        CartTotalData
    },

    computed: {

        products() {
            return this.$store.getters.cartItems
        }

    }
}

</script>