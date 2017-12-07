// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false



  // Initialize Firebase
    let app;
    let config = {
    apiKey: "AIzaSyCzniP0Wu1UpfyFwcs3w6PSvE95bMdA0zM",
    authDomain: "root-d486a.firebaseapp.com",
    databaseURL: "https://root-d486a.firebaseio.com",
    projectId: "root-d486a",
    storageBucket: "root-d486a.appspot.com",
    messagingSenderId: "980123833348"
  };
  firebase.initializeApp(config);
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
