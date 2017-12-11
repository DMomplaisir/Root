<template>
  <div class="panel-body">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="protest in protests">
          <td><a v-bind:href="protest.url">{{protest.name}}</a></td>
          <td>{{protest.organizeruid}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Firebase from 'firebase'




export default {
  name: 'Client',
  data () {
    return {
      data: 0
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
