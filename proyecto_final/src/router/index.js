import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import LoginView from '../views/AuthView.vue'


const routes = [
  { path: '/',  name: 'Inicio', component: HomeView },
  { path: '/cart',  name: 'Carrito', component: CartView },
  { path: '/login',  name: 'Login', component: LoginView },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
