<template>
  <div class="col"> 
    <div class="card" :class="{temaOscuro: cardTheme}">
      <div class="card-header fw-bold">
        👤 User Data
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ nombre }}</h5>
        <small class="text-muted"> 🌐 {{ ciudad }} / {{ pais }}</small>

        <hr>

        <div class="table-responsive">

          <table class="table table-striped">
            <tbody>
              <tr>
                <th> 🏢 Comapany</th>
                <td>{{ compania }}</td>
  
              </tr>

              <tr>
                <th> 🗄 Department</th>
                <td>{{ depto }}</td>
  
              </tr>

              <tr>
                <th> 📅 Seniority</th>
                <td>{{ antiguedad }} Years</td>
  
              </tr>
            </tbody>
          </table>

        </div>

        <div class="text-end">
          <small class="text-muted">Change card theme</small>
          <br>

          <button type="button" class="btn btn-light btn-sm" @click="cardTheme = !cardTheme"><span  v-if="cardTheme">Light</span><span  v-else>Dark</span> </button>

        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  data() {
    return {

      cardTheme: false

    }
  },
  props: {
    nombre: String,
    correo: String,
    ciudad: String,
    pais: String,
    depto: String,
    compania: String,
    antiguedad: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.temaOscuro * {
      color: #fff !important;
      background-color: #212529;
  }


</style>
