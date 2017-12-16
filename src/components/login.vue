<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" placeholder="Email" v-model="email"><br>
    <input type="password" placeholder="Password" v-model="password"><br>
    <button @click="login">Log in</button>
    <p> Don't have an account ? You can <router-link to="/sign-up">create one!</router-link></p>
  </div>
</template>

<script>
import vuefire from 'vuefire'
import {auth} from '../firebase'
  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login:  function() {
          auth.signInWithEmailAndPassword(this.email, this.password).then(
            function(user){
              alert("Working")
            })
            .catch(function(error){
              var errorMessage = error.message
              alert(error.message)
            })
    }
  }
}
</script>


<style scoped>
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
    border: 1px black;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  P {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
