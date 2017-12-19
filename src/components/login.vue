<template>
  <div class="login">
    <h3>Sign In</h3>
    <form>
    <input type="text" placeholder="Email" v-model="email"><br>
    <input type="password" placeholder="Password" v-model="password"><br>
    <v-btn @click="login">Log in</v-btn>
  </form>
    <p> Don't have an account ? You can <router-link to="/sign-up">create one!</router-link></p>
  </div>
</template>

<script>
import vuefire from 'vuefire'
import {auth} from '../firebase'
import {db} from '../firebase'
  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      //logins users with their email and password, will redirect them to different pages depending if they're an organizer or protestor
      login:  function() {
        var self = this;
          auth.signInWithEmailAndPassword(this.email, this.password).then(
            function(user){
              alert("Logged In")
              var typeRef = db.ref('users/' + user.uid + '/type')
              typeRef.on('value', function(snapshot){
                if (snapshot.val() == "Organizer"){
                  self.$router.replace("organizer")
                }
              else{
                self.$router.replace('client')
              }
              })

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
