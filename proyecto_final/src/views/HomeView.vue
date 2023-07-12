<template>

  <div class="container-fluid">

    <div class="container w-75">

      <div class="row row-cols-3 g-4">

        <ProductCard
        v-for="product in items"
        :key = "product.id"
        :product = "product"
        v-on:vista-producto="verProducto($event)"
        />

      </div>

      

    </div>

  </div>

  <ProductDescription
    :product ="datos_producto"
    :active = "activo.descripcion_producto"
    v-on:cerrar-descripcion-producto="cerrarProducto()"
  />

</template>

<script>
// @ is an alias to /src
import items from '@/data/items.js';
import ProductCard from '../components/products/ProductCard.vue'
import ProductDescription from '../components/products/ProductDescription.vue'


export default {
  name: 'HomeView',
  components: {
    ProductCard,
    ProductDescription

  },

  data() {
    return {

      items:items,
      datos_producto: null,
      activo: {
        descripcion_producto: false
      }

    }
  },

  methods: {
    verProducto(product) {
      this.datos_producto = product
      this.activo.descripcion_producto = true
      console.log(this.datos_producto)
    },

    cerrarProducto() {
      this.activo.descripcion_producto = false
    }
  }
}
</script>
