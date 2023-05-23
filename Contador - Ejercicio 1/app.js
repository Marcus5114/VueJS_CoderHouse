const { createApp } = Vue
      
        createApp({
          data() {
            return {
              contador: 0,

              mensaje: "Mi Mensaje",
              toggleMensaje : true
            }
          },

          methods: {

            sumar() {

                return this.contador++;
                
            },

            restar() {
                return this.contador--;
            },

            reset() {

                return this.contador = 0;

            },

            suma5(){ 

                return this.contador += 5;

            },

            resta5(){ 

                return this.contador -= 5;

            },

            suma10(){ 

                return this.contador += 10;

            },

            resta10(){ 

                return this.contador -= 10;

            },


            toggle() {
              this.toggleMensaje = !this.toggleMensaje
            }

          },

          computed: {

 
          }
        }).mount('#app')