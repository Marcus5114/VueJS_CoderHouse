<template>

    <tr>
        <td>{{ product.fruit_name }}</td>
        <td>{{ product.weight }}</td>
        <td>$ {{ product.price }}</td>
        <td class="text-end">{{ product.quantity }} units</td>
        <td class="text-end">$ {{ item_cost_total.toFixed(2) }}</td>

    </tr>



</template>

<script>

export default {
    props: ['product'],
    computed: {

        item_cost_total() {
            return this.product.price * this.product.quantity
        } 

    }
}

</script>