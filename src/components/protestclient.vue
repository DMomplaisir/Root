<template>
  <div class="protestclient">
    <h2>{{protest.name}}</h2>
    <div id = "map"></div>
  </div>

  </script>
</template>

<script>
  import vuefire from 'vuefire'
  import {auth} from '../firebase'
  import {db} from '../firebase'
  import GoogleMapsLoader from 'google-maps'
  export default {
    name: 'ProtestClient',

    data: function() {
      return {
        email: '',
        password: '',
        type: '',
        id: this.$route.params.protestId
    }
  },
  created() {
    this.$bindAsObject('protest', db.ref('protests/' + this.id))
  },
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
  #map {
    height: 400px;
    width: 100%;
  }
</style>
