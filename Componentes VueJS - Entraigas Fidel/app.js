const { createApp } = Vue

const UserCard = {

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
    antiguedad: String,
    cardTheme: false
  },

  template: `

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
  
  `
}
      
createApp({

  components: {
    'user-card': UserCard
  },

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


}).mount('#app')