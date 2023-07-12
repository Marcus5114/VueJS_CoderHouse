<template>
  <nav>
    <router-link :class ="{active: $route.name === 'Inicio'}" to="/">Home</router-link> | 
    <router-link :class ="{active: $route.name === 'Carrito'}" to="/cart">Cart</router-link> | 
    <router-link :class ="{active: $route.name === 'Login'}" to="/login">Login</router-link>
  </nav>
  <router-view/>
</template>

<script>
  export default {
    mounted() {
      this.$store.commit('updateCartFromLocalStorage')
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Montserrat Alternates', sans-serif;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
