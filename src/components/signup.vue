<template>
  <div class="sign-up">
    <p>Let's create a new account !</p>
    <input v-model="email" type="text" placeholder="Email"><br>
    <input v-model="password" type="password" placeholder="Password"><br>

    <input type="radio" id="protestor" value="Protestor" v-model="type">
    <label for="one">Protesor</label>
    <input type="radio" id="organizer" value="Organizer" v-model="type">
    <label for="two">Organizer</label><br>

    <button v-on:click="signUp">Sign Up</button>

    <span> or go back to <router-link to="login">Login</router-link>.</span>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import vuefire from 'vuefire'
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
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          function (user) {
            alert('Your account has been created !')
          },
          function (err) {
            alert('Oops. ' + err.message)
          }
        );
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          function(user){
            console.log("Debugging email signin and password")
            this.$router.replace('profile')
          },
          function(err) {
            alert('Opps. ' + err.message)
          }
        );
        //Sign them in
      }
    }
  }
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
