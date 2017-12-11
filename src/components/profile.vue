<template v-else>
  <div class="profile">
    <h3>Make Your Profile</h3>
    <h4>Are you a ...?</h4>
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

  </div>
  <button>Connection</button>
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
      photo: ''
    }
  },
  computed:{
    userId: function(){
      return firebase.auth().currentUser.uid;
    }
  },
  methods:{
    checkType: function(){

    },
    createOrganizerData: function(){
    firebase.database.ref('users' + '/' + this.userId).set({
      name: this.name,
      type: this.type,
      twitter: this.twitter,
      myProtests,
      currentProtests
    });
  },
  createClientData: function(){
  firebase.database.ref('users' + '/' + this.userId).set({
    name : this.name,
    type: this.type,
    phone: this.phone,
    followingProtests,
    currentProtests
  })
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
