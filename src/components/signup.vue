<template>
  <v-app light>
  <v-content>
  <v-layout>
    <v-flex xs6 offset-sm3>
   <v-card>
     <v-card-media src="https://pixel.nymag.com/imgs/daily/intelligencer/2017/01/29/29-anti-travel-ban-protest-nyc.w710.h473.jpg" height="300px">
    </v-card-media>
    <v-card-title primary-title>
      <h2 class = "headline ">
      Let's create a new account!
    </h2>
    </v-card-title>
    <v-form >
      <v-text-field
        label = "email"
        v-model = "email"
        class = "mb-0"
        required
      ></v-text-field>
      <v-text-field
        label = "password"
        v-model = "password"
        type= "password"
        required>
      </v-text-field>
      <v-select
        label = "Are you a protestor or a organizer?"
        v-model = "type"
        v-bind:items = "types"
        required
        ></v-select>
      <v-btn color="blue lighten-1 white--text" @click="signUp">Sign Up</v-btn>
  </v-form>
    <span> or go back to <router-link to="login">Login</router-link>.</span>
  </div>
</v-card>
</v-flex>
</v-layout>
</v-content>
</v-app light>
</template>

<script>
  import firebase from 'firebase'
  import vuefire from 'vuefire'
  import {auth} from '../firebase'
  export default {
    name: 'signUp',
    data: function() {
      return {
        email: '',
        password: '',
        types: ['Organizer', 'Protestor'],
        type: ''
      }
    },
    methods: {
      signUp: function() {
        var self = this
        auth.createUserWithEmailAndPassword(this.email, this.password).then(
          function (user) {
            alert('Your account has been created !')
            var user = auth.currentUser
            console.log('This user account ID' + user.uid)
            self.switchProfile()
          })
          .catch(function(error){
            console.log(error)
          })
      },
      switchProfile: function() {
        this.$router.push({path: 'profile', query:{type: this.type}})
      }
    }
  }

        //Sign them in



</script>

<style scoped>
  .signUp {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>
