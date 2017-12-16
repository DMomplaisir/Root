// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import App from './App'
import router from './router'
import firebase from 'firebase'
import Vue from 'vue'
import vuefire from 'vuefire'
import * as VueGoogleMaps from 'vue2-google-maps'
import Vuetify from 'vuetify'

// intializing our applications connection to vuefire - a handler
// for firebase/vue and VueGoogleMaps - so our dynamic
// connection to GoogleMapsApi
Vue.use(vuefire);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCzniP0Wu1UpfyFwcs3w6PSvE95bMdA0zM',
    libraries: 'places',
    installComponents: true
  }
});
Vue.use(Vuetify);



Vue.config.productionTip = false



/* eslint-disable no-new */
var app = new Vue({
    el: '#app',
    render: h => h(App),
    template: '<App/>',
    components: { App },
    router,
});
