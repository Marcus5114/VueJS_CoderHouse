<template>


</template>

<script>

    const apiUrl = "https://64921a452f2c7ee6c2c96de7.mockapi.io"
    const endpoint = "/coderhouse"
    const url = apiUrl+endpoint

    export default {

        data: () => ({

            users: []

        }),

        methods: {
            async getUsers(url) {
                try {
                    this.users = await (await fetch(url)).json()
                } catch (error) {
                    console.log(error)
                }
            }
        }

    }

</script>