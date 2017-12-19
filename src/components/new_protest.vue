<template>
  <div class="new_protest">
    <h3>Make a New Protest</h3>
    <input type="text" v-model="protest_name" placeholder="Name of Protest"><br>
    <input type="text" v-model="protest_description" placeholder="Description of Protest"><br>
    <input type="text" v-model="datetime" placeholder="Date Time"><br>
    <input type="text" v-model="location" placeholder="location">
    <button v-on:click="createProtest">Submit Protest</button>
  </div>
</template>

<script>
import firebase from 'firebase'
import {db} from '../firebase'
import {auth} from '../firebase'

  export default {
    name: 'newProtest',
    data: function() {
      return {
        protest_name: '',
        protest_description: '',
        location: '',
        social_interests: '',
        datetime: '',
        uid: null
      }
    },
    beforeMount(){
      let currentUser = auth.currentUser;
      if (currentUser){
        this.uid = currentUser.uid;
      }
      else {
        let authListenerUnsubscribe = auth.onAuthStateChange(user => {
          if (user) {
            //recrusive function to continue searching for the userid
            this.uid = currentUser.uid;
            authListenerUnsubscribe();
          }
        })
      }
    },
    methods: {
      createProtest: function() {

        db.ref('protests' + '/' + this.protest_name).set({
          name: this.protest_name,
          organizerUid: this.uid,
          description: this.protest_description,
          datetime: this.datetime,
          status: 'inactive',
          people: []
        })
        this.$router.replace('organizer_intro')
      }
    }
  }
</script>


<style scoped>
  .new_protest {
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
</style>
