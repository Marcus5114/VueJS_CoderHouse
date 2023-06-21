<template>

    <form  @submit.prevent>

    

        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="username" placeholder="Username" v-model="usuario">
            <label for="username">Usuario</label>
        </div>

        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="contraseña">
            <label for="password">Contraseña</label>
        </div>

        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="email" placeholder="Email" v-model="correo">
            <label for="email">Correo</label>
        </div>

        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="switch" v-model="anana">
            <label class="form-check-label" for="switch"> | Te gusta la pizza con ananá?</label>
        </div>

        <button @click="subirDatos" class="btn btn-dark my-4">Subir Datos</button>

    </form>

    {{ datosForm }}


</template>

<script>



export default {
    name: "FormularioWeb",

    data: () => ({

        datosForm: {
        usuario: "",
        contraseña: "",
        correo: "",
        anana: false
        },
        estadoForm: {}

    }),

    methods: {

        subirDatos() {

            // Emitir los datos del formulario
            // desde el componente del formulario a App.vue
            this.$emit('emit-form', this.datosForm)
        
            
            // Resetear los campos del formulario
            this.resetFormData()
            
        },
        resetFormData() {
            Object.keys(this.datosForm).forEach(key => this.datosForm[key] = '')
        }


    },
}
</script>