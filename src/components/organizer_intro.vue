<template>
<div>
  <div class="organizer_intro">
    <h3>What would you like to do?</h3>
    <button v-on:click="createProtest">Create Protest</button>
    <button v-on:click="viewProtests">View Protests</button>
    <button v-on:click="logout">Logout</button>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'
  export default {
    name: 'organizerIntro',
    data: function() {
      return {}
    },
    methods: {
      logout: function() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      },

      createProtest: function() {
        this.$router.replace('new_protest')
      },

      viewProtests: function() {
        this.$router.replace('protests')

      }
    }
  }
</script>


<style scoped>
  .organizer_intro {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
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
  button {
    padding: 10px 20px;
    background: #42b983;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 22px;
    outline: 0;
    cursor: pointer;
  }
</style>
