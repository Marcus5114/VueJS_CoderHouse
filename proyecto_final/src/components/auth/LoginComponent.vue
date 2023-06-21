<template>

    <div class="container w-75">

        <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                    Login
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                    Register
                </button>
            </li>

        </ul>
        <div class="tab-content" id="myTabContent">

            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                
                <div class="text-center my-2">
                    <h4>Login Form</h4>
                </div>

                <div class="container w-50 my-3">
                    <form action="">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Password</label>
                        </div>

                        <button type="submit" class="btn btn-dark">Login</button>
                    </form>
                </div>

            </div>

            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                
                <div class="text-center my-2">
                    <h4>Register Form</h4>
                </div>

                <div class="container w-50 my-3">
                    <form action="">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Username</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Repeat Password</label>
                        </div>

                        <button type="submit" class="btn btn-dark">Login</button>
                    </form>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

    /*const apiUrl = "https://64921a452f2c7ee6c2c96de7.mockapi.io"
    const endpoint = "/coderhouse"
    const url = apiUrl+endpoint
    */

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