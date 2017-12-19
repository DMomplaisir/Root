<template>
  <v-app>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Root</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn color="red" @click="logout" v-if="$route.path != 'home'"><v-icon>lock_open</v-icon></v-btn>
  </v-toolbar>
  <div id="app">


    <router-view/>
  </div>
</v-app>
</template>

<script>
import vuefire from 'vuefire'
import firebase from 'firebase'
import {auth} from 'firebase'
export default {
  name: 'app',
  methods:{
    logout: function() {
    auth.signOut().then(function() {
      this.$router.replace('home')
    }).catch(function(error) {
      alert("Help me")
    });
  }
}
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
