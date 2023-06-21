<template>
    <div>
        <h3>Listado de Usuarios</h3>
    </div>

    <div class="table-responsive">

        <table class="table table-striped">

            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Contraseña</th>
                    <th>Correo</th>
                    <th>Le gusta la pizza con anana?</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(user, i) in usuarios" :key="i">
                    <td>{{user.usuario}}</td>
                    <td><del>{{ user.contraseña }}</del></td>
                    <td>{{user.correo}}</td>
                    <td><span v-if="user.anana">Si</span><span v-else>No</span></td>
                </tr>
            </tbody>

        </table>

    </div>

</template>

<script>
export default {

    props: ['usuarios'],

}

</script>