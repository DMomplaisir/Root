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
  name: 'organizerActive',
  data: function() {
    return {
      id: this.$route.params.protestId
    }
  },

  created() {
    this.$bindAsObject('protest', db.ref('protests/' + this.id))
  },

  /*
  firebase: {
    protestsArr: {
      source: db.ref('protests/'),
      cancelCallback(err) {
        console.log(err)
      }
    },
    protestObj: {
      source: db.ref('protests/' + this.id),
      asObject: true
    }
  },
  */

/*   var app = new Vue({
  el: '#app',
  data: {
    position: null
  },
  mounted: function() {
    if(navigator.geolocation) {
       var self = this;
       navigator.geolocation.getCurrentPosition(function(position){
        self.position = position.coords;
      })
    }
  }
}); */

  methods:{
    geoFindMe: function(){
      var output = document.getElementById("out");


  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }
  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    db.ref('MJeib9lRqjfZcVdPGnBd3SUjM4W2' + '/' + this.protest_name).set({
      location: this.position.coords.latitude + this.position.coords.longitude
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
