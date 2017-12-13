import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import vuefire from 'vuefire'


import Login from '@/components/Login'
import SignUp from '@/components/signup'
import profile from '@/components/profile'
import Client from '@/components/client-intro'
// when making a new file, add it to the routers by saying import [nameOfComponent] from '@/components/[name of file]'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },

    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {

      }
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/profile',
      name: 'Profile',
      component: profile,
      meta: {

      }
    },
    {
      path: '/client',
      name: 'Root - find ',
      component: Client,
      meta: {

      }
    }

    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let userStatus = function() {
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
      if (snapshot.val().type == "Organizer"){
        return true;
      }
  })};

  // let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  // let isOrganizer = to.matched.some(record => record.meta.isOrganizer);

  next()
})

export default router
