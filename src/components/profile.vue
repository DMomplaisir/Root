
<template>
  <div>
    <div v-if="type==''">
    <h3>Make Your Profile</h3>
    <h4>Are you a ...?</h4>
      <input type="radio" id="Client" v-model="type" value="Client">
      <label for="Client">Client</label>
      <br>
      <input type="radio" id="Organizer" v-model="type" value="Organizer">
      <label for="Organizer">Organizer</label>
    </div>
      <div v-if="type == 'Organizer'">
        <form v-on:submit="createOrganizerData">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Name" v-model="name"><br>
          <label for="Twitter">Twitter</label>
          <input type="text" id="Twitter"placeholder="Twitter" v-model="twitter"><br>
          <label for="Interests">Interests</label>
          <input type="text" id="Interests" placeholder="Interests" v-model="interests"><br>
          <v-btn @click="createOrganizerData">Submit</v-btn>
        </form>
      </div>
      <div v-if="type=='Protestor'">
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
import {auth} from '../firebase'
export default {
  name: 'profile',
  data () {
    return {
      type: this.$route.query.type,
      name: '',
      twitter: '',
      interests: '',
      phone: '',
      uid: ''
    }
  },
  //let user be authenticated and then get their id
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

  methods:{
    //saves organizer profile data
    createOrganizerData: function(){
      var userId = this.uid;
      db.ref('users' + '/' + userId).set({
      name: this.name,
      type: this.type,
      twitter: this.twitter,
      myProtests: [],
      currentProtests: 0
    });
    this.$router.replace('organizer_intro')
  },
  //saves client profile data
  createClientData: function(){
    var userId = this.uid;
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
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
  border: 1px black;
}
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
