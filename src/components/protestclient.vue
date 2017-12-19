<template>
  <div class="protestclient">
    <h2>{{protest.name}}</h2>
    <p>There are <i>{{protest.participants}}</i> other protestors</p>
    <div class = "map-container">
      <gmap-map
        :center= protest_location
       :zoom="13"
       style="width:100%; height:300px;">
      <gmap-marker :position=protest_location>
      </gmap-marker>
      <gmap-info-window :position=protest_location>
        We're here!
      </gmap-info-window>
    </gmap-map>
  </div>
  <div class="rights">
    <h2>Know Your Rights</h2>
    <h4> When protesting you have the right to ... </h4>
    <ul>
      <li>Peacefully assemble to excervise your first amendment right to protest</li>
      <li>Protest in traditional 'public forums' such as streets, sidewalks, and parks as long as you aren't blocking traffic</li>
      <li>Protest without a permit in response to recent events</li>
      <li>Distribute leaflets and other literature on public sidewalks without a permit </li>>
      <li>Photograph or videotaps cops</li>
    </ul>
    <h4> When stopped by police</h4>
      <ul>
      <li> Don't run or argue, even if the police are violating your rights</li>
      <li> Ask if you're free to leave. If you're under arrest, you have a right to know why.</li>
      <li> You have the right to remain silent </li>
    </ul>
    <v-btn @click="moveEmergencyMode">FEEL UNSAFE</v-btn>
  </div>


  </div>
  </div>


  </script>
</template>

<script>
  import vuefire from 'vuefire'
  import {auth} from '../firebase'
  import {db} from '../firebase'
  import * as VueGoogleMaps from 'vue2-google-maps'
  import TwitterStream from 'twitter-stream-api'
  import fs from 'fs'
  import important from '../twitter'


  export default {
    name: 'ProtestClient',
    data(){
      return {
        protestId: this.$route.params.protestId,
        tweets: []
      }
  },
  created() {
    this.$bindAsObject('protest', db.ref('protests/' + this.protestId))
    this.$bindAsObject('protest_location', db.ref('protests/' + this.protestId + '/location'))



  },

  methods: {
      // Do awesome stuff with the results here
      moveEmergencyMode: function(){
        this.$router.replace('emergencymode')
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
  .vue-map {
    height: 300px;
    width: 300px;
  }
</style>
