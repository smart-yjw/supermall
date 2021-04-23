import Vue from 'vue'
import VueRouter from 'vue-router'
// which is lazy-loaded when the route is visited.
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import( '../views/cart/Cart')
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
    component: Home,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/goodsdetail',
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
