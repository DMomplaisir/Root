// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import App from './App'
import router from './router'
import firebase from 'firebase'
import Vue from 'vue'
var VueFire = require('vuefire')



Vue.use(VueFire);
Vue.config.productionTip = false

let app;

let config = {
  // Populate your firebase configuration data here.
  apiKey: "AIzaSyCzniP0Wu1UpfyFwcs3w6PSvE95bMdA0zM",
  authDomain: "root-d486a.firebaseapp.com",
  databaseURL: "https://root-d486a.firebaseio.com",
  projectId: "root-d486a",
  storageBucket: "root-d486a.appspot.com",
  messagingSenderId: "980123833348"
};
firebase.initializeApp(config);

const db = firebase.database();


firebase.auth().onAuthStateChanged(function(user){
      if (!app) {
/* eslint-disable no-new */
        app = new Vue({
          el: '#app',
          template: '<App/>',
          components: { App },
          router
        })
      }
    });
