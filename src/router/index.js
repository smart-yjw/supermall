import Vue from 'vue'
import VueRouter from 'vue-router'
// which is lazy-loaded when the route is visited.
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shopcart = () => import( '../views/shopcart/Shopcart')
const Profile = () => import('../views/profile/Profile')
const GoodsDetail = () => import('../views/detail/GoodsDetail')


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
  },
  {
    path: '/goodsdetail/:iid',
    name: 'GoodsDetail',
    component: GoodsDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
