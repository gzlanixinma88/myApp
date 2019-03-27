import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Cart from '../pages/Cart/Cart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/',
      redirect: 'home'
    }
  ]
})
