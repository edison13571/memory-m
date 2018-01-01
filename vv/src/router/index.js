import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Index from '@/pages/index'
import Login from '@/pages/login'
import Lostway from '@/pages/lostway'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (to.path === '/login') {
          sessionStorage.removeItem('user')
        }
        let user = sessionStorage.getItem('user')
        if (!user && to.path !== '/login') {
          next({ path: '/login' })
        } else {
          next()
        }
      },
      children: [
        {path: '/', component: Index},
        {path: '/404', component: Lostway}
      ]
    },
    {path: '/login', component: Login}
  ]
})
