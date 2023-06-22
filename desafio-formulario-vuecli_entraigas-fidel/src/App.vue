<template>

  <div class="container-fluid">
    
    <h1 class="text-center">

      Formulario VueJS

    </h1>
    <hr>

    <div class="container w-75">
      <FormularioWeb 
        @emit-form="agregarUsuario"
      />
      
      <hr>
      <br>
      
      <DataTable
        :usuarios="usuarios"
      />

    </div>


  </div>

</template>

<script>
import DataTable from './components/DataTable.vue';
import FormularioWeb from './components/FormularioWeb.vue'


export default {
  name: 'App',

  data: () => ({
    usuarios: [],
  }),

  components: {
    FormularioWeb,
    DataTable
  },

  methods: {
    agregarUsuario(usuario) {
      this.usuarios.push(usuario)
    }

   
  },


}
</script>

<style>

</style>
