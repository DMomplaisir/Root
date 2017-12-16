import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import vuefire from 'vuefire'

//importing the db, auth to avoid replicating
import {db, auth} from '../firebase.js'

//impoting components of the website
import Login from '@/components/Login'
import SignUp from '@/components/signup'
import profile from '@/components/profile'
import Client from '@/components/client-intro'
import NewProtest from '@/components/new_protest'
import OrganizerIntro from '@/components/organizer_intro'
import ProtestClient from '@/components/protestclient'
import Home from '@/components/home'
// when making a new file, add it to the routers by saying import [nameOfComponent] from '@/components/[name of file]'

Vue.use(Router)

// Sets up routes, and makes sure that each page is connected to
// a vue component
let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Root - home',
      component: Home
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
        requiresLog: true

      }
    },
    {
      path: '/client',
      name: 'Root - find ',
      component: Client,
      meta: {
        requiresLog: true,
        requiresOrg: false
      }
    },

    {
      path: '/new_protest',
      name: 'newProtest',
      component: NewProtest,
      meta: {
        requiresLog: true,
        requiresOrg: true
      }
    },

    {
      path: '/organizer',
      name: 'organizerIntro',
      component: OrganizerIntro,
      meta: {
        requiresLog: true,
        requiresOrg: true

      }
    },
    {
      path: '/protestclient/:protestId',
      name: 'protestclient',
      component: ProtestClient,
      meta: {
        requiresLog: true,
        requiresOrg: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = auth.onAuthStateChanged(function(user){
    if (user) {
      return true;
    }
    else {
      return false;
    }
  });

  let orgStatus = function() {
    var userId = auth.onAuthStateChanged(function(user){
      if (user){
        return user.uid;
      }
    })
    return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
      if (snapshot.val().type == "Organizer"){
        return true;
      }
  })};
  let newUser = function() {
    var userId = currentUser.uid;
    return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
      if (snapshot.val().type == ""){
        return true;
      }
  })};
  let requiresLog = to.matched.some(record => record.meta.requiresLog);
  let requiresOrg = to.matched.some(record => record.meta.requiresOrg);


  if (!currentUser && requiresLog) next('home')
  else if (currentUser && !orgStatus && requiresOrg && !newUser) next('client')
  else if (currentUser && orgStatus && !requiresOrg && !newUser) next('organizer')
  else next () // if not logged in, abort trying to go any thing
  // else if userStatus,


  next()
})

export default router
