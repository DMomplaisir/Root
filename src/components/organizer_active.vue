<template>
  <div>
    <div class ="organizer_active">
      <h3> Track your Location </h3>
      <p><button v-on:click="geoFindMe">Show my location</button></p>
      <div id="out"></div>
    </div>
  </div>
</template>

<script>
import vuefire from 'vuefire'
import {auth} from '../firebase'
import {db} from '../firebase'

export default {
  name: 'OrganizerActive',
  data: function() {
    return {
      protestId: this.$route.params.protestId,
    }
  },

  created() {
    this.$bindAsObject('protest', db.ref('protests/' + this.protestId))
  },

  methods:{
    //gets the geolocation of the organizer
    geoFindMe: function(){
      var self = this;
      var output = document.getElementById("out");


  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }
  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
    self.$bindAsObject('protestlocation', db.ref('protests' + '/' + self.protestId + '/' + 'location'))
    self.$firebaseRefs.protestlocation.set({
        //sends the geolocation data to firebase
        lng: position.coords.longitude,
        lat: position.coords.latitude
    })

    }

    function error() {
      output.innerHTML = "Unable to retrieve your location";
    }

      navigator.geolocation.getCurrentPosition(success, error);



    }
  }
}
</script>
