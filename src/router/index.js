import Vue from 'vue'
import VueRouter from 'vue-router'
// which is lazy-loaded when the route is visited.
const Home = () => import(/* webpackChunkName: "home" */ '../views/home/Home')
const Category = () => import(/* webpackChunkName: "category" */ '../views/category/Category')
const Shopcart = () => import(/* webpackChunkName: "shopcart" */ '../views/shopcart/Shopcart')
const Profile = () => import(/* webpackChunkName: "profile" */ '../views/profile/Profile')


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
