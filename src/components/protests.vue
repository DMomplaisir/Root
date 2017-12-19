<template>
<div>
  <div class="protests">
    <h3>Your Protests</h3>

  </div>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'protests',
  data: function() {
    return {}
  },
  methods: {

    /*
    let ref = this.firebase.database().ref().child('documentation').orderByChild('type').equalTo('Q&A').on('value', snap => {
      doc = snap.val();
      console.log(doc);
    });
    */

  }
}
</script>
