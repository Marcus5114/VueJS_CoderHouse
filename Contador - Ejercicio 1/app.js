const { createApp } = Vue
      
        createApp({
          data() {
            return {
              contador: 0
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

            }


          },

          computed: {

 
          }
        }).mount('#app')