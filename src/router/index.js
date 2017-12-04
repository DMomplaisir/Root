import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// when making a new file, add it to the routers by saying import [nameOfComponent] from '@/components/[name of file]'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/',
      name: 'Client - Intro',
      component: HelloWorld
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
