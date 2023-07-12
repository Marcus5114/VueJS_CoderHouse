<template>

    <Formkit type="form" @submit.prevent>

        <FormKit
            type="text"
            label="Usuario"
            v-model="datosForm.usuario"
            validation ="required|alpha|"
            validation-visibility="live"
            :validation-messages="{
                required: 'Este campo es obligatorio'
            }"
        />

        <FormKit
            type="password"
            label="Contraseña"
            v-model="datosForm.contraseña"
            validation ="required"
            validation-visibility="live"
            :validation-messages="{
                required: 'Este campo es obligatorio'
            }"
        />

        <FormKit
            type="email"
            label="Correo"
            v-model="datosForm.correo"
            validation ="required|email"
            validation-visibility="live"
            
            :validation-messages="{
                required: 'Este campo es obligatorio',
                email: 'Esta no es una casilla de correo válida'
            }"
        />

        <FormKit
            type="checkbox"
            label="Te gusta la pizza con ananá?"
            v-model="datosForm.anana"
        />

        <button @click="subirDatos" class="btn btn-dark my-4">Subir Datos</button>

    </Formkit>


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
        }

    }),

    methods: {

        subirDatos() {

            // Emitir los datos del formulario
            // desde el componente del formulario a App.vue
            this.$emit('emit-form', {...this.datosForm})
        
            
            // Resetear los campos del formulario
            this.resetFormData()
            
        },
        resetFormData() {
            Object.keys(this.datosForm).forEach(key => this.datosForm[key] = '')
        }


    },
}
</script>