<template v-else>
  <div class="profile">
    <h3>Make Your Profile</h3>
    <h4>Are you a ...?</h4>
      <input type="radio" id="one" value="Client" v-model="type">
      <label for"one">Client</label>
      <input type="radio" id="two" value="Organizer" v-model="type">
      <label for="two">Organizer</label>
    <button >Connection</button>
  </div>
</template>

<template v-if= "type ==='organizer'">
  <div id = "organizer">
    <input type="text" placeholder="Name" v-model="name"><br>
    <input type="text" placeholder="Twitter" v-model="twitter"><br>
    <input type="text" placeholder="Photo" v-model="photo"><br>
    <input type="text" placeholder="Photo" v-model="photo"><br>
  </div>
  <button>Connection</button>
</template>



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
