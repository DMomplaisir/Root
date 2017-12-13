
<template>
  <div>
    <div v-if="type==''">
    <h3>Make Your Profile</h3>
    <h4>Are you a ...?</h4>
      <div v-if="type == 'Organizer'">

        <form v-on:submit="createOrganizerData">
          <input type="text" placeholder="Name" v-model="name"><br>
          <input type="text" placeholder="Twitter" v-model="twitter"><br>
          <input type="text" placeholder="Interests" v-model="interests"><br>
          <input type="Submit">
        </form>
      </div>
      <div v-if="type=='Client'">
        <h3>Citizen Registration</h3>
        <form v-on:submit="createClientData">
        <input type="text" placeholder="Name" v-model="name"><br>
        <input type="text" placeholder="Twitter" v-model="twitter"><br>
        <input type="text" placeholder="Phone" v-model="phone"><br>
        <input type="text" placeholder="Interests" v-model="interests"><br>
        <input type="Submit">
      </form>
      </div>
    </div>
  </div>

</template>





<script>
import firebase from 'firebase'
import {db} from '../firebase'
export default {
  name: 'profile',
  data () {
    return {
      type: '',
      name: '',
      twitter: '',
      interests: '',
      phone: ''

    }
  },

  methods:{
    createOrganizerData: function(){
      var userId = this.userId;
      db.ref('users' + '/' + userId).set({
      name: this.name,
      type: this.type,
      twitter: this.twitter,
      myProtests: [],
      currentProtests: 0
    });
    this.$router.replace('organizer_intro')
  },
  createClientData: function(){
    var userId = this.userId;
      db.ref('users' + '/' + userId).set({
      name: this.name,
      type: this.type,
      phone: this.phone,
      interests: this.interests,
      currentProtest: 0,
      followingProtests: []
    });
    this.$router.replace('client');
  }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
