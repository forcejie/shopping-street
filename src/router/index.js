import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: "/category",
    name: "category",
    component: () => import("../views/category/category.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/cart/cart.vue")
  },
  {
    path: "/my",
    name: "my",
    component: () => import("../views/my/my.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
