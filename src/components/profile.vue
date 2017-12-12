

<template>
  <div>
    <div v-if="type==''">
    <h3>Make Your Profile</h3>
    <h4>Are you a ...?</h4>
<<<<<<< HEAD
      <input type="radio" id="one" value="client" v-model="type">
      <label for"one">Client</label>
      <input type="radio" id="two" value="organizer" v-model="type">
      <label for="two">Organizer</label>
    <button >Connection</button>
  </div>
</template>

<div>
<template v-if= "type ==='organizer'">
  <div id = "organizer">
    <input type="text" placeholder="Name" v-model="name"><br>
    <input type="text" placeholder="Twitter" v-model="twitter"><br>
    <input type="text" placeholder="Photo" v-model="photo"><br>
    //social interests?
    //created protests
    //current protests

=======
      <input type="radio" id="Client" v-model="type" value="Client">
      <label for="Client">Client</label>
      <br>
      <input type="radio" id="Organizer" v-model="type" value="Organizer">
      <label for="Organizer">Organizer</label>
    </div>
      <div v-if="type == 'Organizer'"">
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

>>>>>>> dylan-workonclientflow
  </div>



</template>

<template v-if= "type ==='client'">
  <div id = "organizer">
    <input type="text" placeholder="Name" v-model="name"><br>
    <input type="text" placeholder="Phone" v-model="phone"><br>
    <input type="text" placeholder="Photo" v-model="photo"><br>
    //social interests
    //current protest
    //following protest

  </div>
  <button>Connection</button>
</template>
</div>



<script>
import firebase from 'firebase'

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
  computed:{
    userId: function(){
      return firebase.auth().currentUser.uid;
    }
  },
  methods:{
    createOrganizerData: function(){
      var database = firebase.database();
      var userId = this.userId;
      database.ref('users' + '/' + userId).set({
      name: this.name,
      type: this.type,
      twitter: this.twitter,
      myProtests: [],
      currentProtests: 0
    });
    this.$router.replace('organizer-intro')
  },
  createClientData: function(){
<<<<<<< HEAD
  firebase.database.ref('users' + '/' + this.userId).set({
    name : this.name,
    type: this.type,
    phone: this.phone,
    followingProtests,
    currentProtests
  })
=======
    var database = firebase.database();
    var userId = this.userId;
      database.ref('users' + '/' + userId).set({
      name: this.name,
      type: this.type,
      phone: this.phone,
      interests: this.interests,
      currentProtest: 0,
      followingProtests: []
    });
    this.$router.replace('client');
>>>>>>> dylan-workonclientflow
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
