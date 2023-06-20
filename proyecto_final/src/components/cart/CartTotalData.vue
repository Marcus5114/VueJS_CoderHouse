<template>

    <div>
        <div class="card border-0">

            <div class="card-body">
                
                <h4 class="text-end fw-bold">Cart Summary</h4>
                <hr>

                <div class="text-end">

                    <p>
                        <b>Total Products:</b>
                        <br> 
                        {{ total_products }} units
                    </p>

                    <p>
                        <b>Total Price:</b>
                        <br> 
                        $ {{ total_price }}
                    </p>
                    
                </div>

            </div>

        </div>
    </div>

</template>

<script>
export default {
    props: ['products'],

    computed: {
        total_products() {
            return this.$store.getters.cartTotalProducts
        },

        total_price() {
            return this.$store.getters.cartTotalPrice
        }
    }
}

</script>