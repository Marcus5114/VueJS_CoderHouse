<template>
  
  <nav class="navbar navbar-expand-lg bg-dark mb-5" >
        <div class="container-fluiar>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

              <li class="nav-item px-2">
                
                <UserForm></UserForm>

              </li>

              <li class="nav-item px-2">
              
                <CartComponent></CartComponent>

              </li>

            </ul>

            </div>
        </div>
  </nav>

  <div class="container-fluid">
    <div class="container w-75">

      <h1 class="text-center bagel">Papaletas</h1>

      <hr>
      <br>

      <div class="row row-cols-3">
      <CardComponent v-for="helados in datos" :key="helados.id"
                  :sabor ="helados.sabor"
                  :descripcion = "helados.descripcion"
      ></CardComponent>
      </div>

    </div>
  </div>
</template>

<script>
import CardComponent from './components/CardComponent.vue'
import CartComponent from './components/CartComponent.vue'
import UserForm from './components/UserForm.vue'




export default {
  name: 'App',
  data() {
    return {

      datos: [
        {
          "sabor": "Frutilla",
          "descripcion": "lorem ipsum dolor sit amet"
        },
        {
          "sabor": "Vainilla",
          "descripcion": "lorem ipsum dolor sit amet"
        },
        {
          "sabor": "Chocolate",
          "descripcion": "lorem ipsum dolor sit amet"
        }
      ]
    }
  },
  components: {
    CardComponent,
    CartComponent,
    UserForm
}
}
</script>

<style>


</style>
