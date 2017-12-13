<template>
  <div class="sign-up">
    <p>Let's create a new account !</p>
    <form>
    <input v-model="email" type="text" placeholder="Email"><br>
    <input v-model="password" type="password" placeholder="Password"><br>

    <input type="radio" name="group1" id="protestor" value="Protestor" v-model="type">
    <label for="protestor">Protestor</label>
    <input type="radio" name="group1" id="organizer" value="Organizer" v-model="type">
    <label for="organizer">Organizer</label><br>

    <button v-on:click="signFlow">Sign Up</button>
  </form>
    <span> or go back to <router-link to="login">Login</router-link>.</span>
  </div>
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
        type: ''
      }
    },
    methods: {
      signFlow: function(){
        console.log('running')
        this.signUp();
        this.signIn();
        alert('Completed')
      },
      signUp: function() {
        auth.createUserWithEmailAndPassword(this.email, this.password).then(
          function (user) {
            alert('Your account has been created !')
          },

        )
      },

      signIn: function() {
        auth.signInWithEmailAndPassword(this.email, this.password).then(
          function(user){
            alert("Debugging")
          },
          this.$router.replace('profile')



        )
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
