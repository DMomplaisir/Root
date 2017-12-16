<template>
  <div class="protestclient">
    <h2>{{protest.name}}</h2>
    <p>There are <i>{{protest.participants}}</i></p>
    <div class = "map-container">
      <gmap-map
        :center="{lat:1.38, lng:103.8}"
       :zoom="12"
       style="width:100%; height:300px;">
      <gmap-marker :position="{lat:1.38, lng:103.8}">
      </gmap-marker>
      <gmap-info-window :position="{lat:1.38, lng:103.8}">
        Hello world!
      </gmap-info-window>
    </gmap-map>
  </div>
  <div class="rights">


  </div>
  </div>


  </script>
</template>

<script>
  import vuefire from 'vuefire'
  import {auth} from '../firebase'
  import {db} from '../firebase'
  import * as VueGoogleMaps from 'vue2-google-maps'

  export default {
    name: 'ProtestClient',

    data: function() {
      return {
        protestId: this.$route.params.protestId
    }
  },
  created() {
    this.$bindAsObject('protest', db.ref('protests/' + this.protestId))
  },

    methods: {

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
