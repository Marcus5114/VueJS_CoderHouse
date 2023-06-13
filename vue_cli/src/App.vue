<template>
 <div class="container-fluid">
            <div class="container w-75">

                <h1 class="text-center">Componentes</h1>

                <hr>
                <br>

                <div class="row row-cols-3">
                <UserCard v-for="usuarios in infoUsuarios" :key="usuarios.id"
                            :nombre ="usuarios.name"
                            :correo ="usuarios.email"
                            :ciudad ="usuarios.city"
                            :pais ="usuarios.country"
                            :depto ="usuarios.department"
                            :compania ="usuarios.company"
                            :antiguedad ="usuarios.seniority"
                ></UserCard>
                </div>

                

            </div>
        </div>
</template>

<script>
import UserCard from './components/UserCard.vue'



export default {
  name: 'App',
  data() {
    return {

      infoUsuarios: [
        {
          "name": "Donna Griffith",
          "email": "nunc.mauris@protonmail.couk",
          "city": "Fort Wayne",
          "country": "United States",
          "department": "Customer Service",
          "company": "Yahoo",
          "seniority": "5"
        },
        {
          "name": "Yasir Curtis",
          "email": "phasellus.elit.pede@outlook.org",
          "city": "Fayetteville",
          "country": "United States",
          "department": "Customer Service",
          "company": "Google",
          "seniority": "12"
        },
        {
          "name": "Tashya Henry",
          "email": "neque.pellentesque@outlook.couk",
          "city": "Topeka",
          "country": "United States",
          "department": "Customer Service",
          "company": "Apple",
          "seniority": "13"
        }
      ]
    }
  },
  components: {
    UserCard
  }
}
</script>

<style>


</style>
