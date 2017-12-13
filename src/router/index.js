import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'


import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Profile from '@/components/Profile'
import NewProtest from '@/components/new_protest'
// when making a new file, add it to the routers by saying import [nameOfComponent] from '@/components/[name of file]'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/new_protest',
      name: 'newProtest',
      component: newProtest
    }
  ]
})



export default router
