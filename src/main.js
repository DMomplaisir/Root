// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import App from './App'
import router from './router'
import firebase from 'firebase'
import Vue from 'vue'
import vuefire from 'vuefire'



Vue.use(vuefire);
Vue.config.productionTip = false



/* eslint-disable no-new */
var app = new Vue({
    el: '#app',
    render: h => h(App),
    template: '<App/>',
    components: { App },
    router,

        });
