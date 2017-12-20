<template>
    <v-app>
        <v-container>
        <v-layout v-for="protest in protests"  key="protest.name" class="mb-2">
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
            <v-card-media src="" height="200px">
            </v-card-media>
            <v-card-title primary title>
              <div>
                <h3 class="headline mb-0" color="white"> {{protest.name}} </h3>
                <div>{{protest.description}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange" @click="followNew(protest.name)">Follow</v-btn>
              <v-btn flat color="orange" @click="joinProtest(protest.name)"> Activate </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        </v-layout>
      </v-container>
  </v-app>


</template>



<script>
import {
    db
}
from '../firebase'
import {
    auth
}
from '../firebase'
import vuefire from 'vuefire'
import firebase from 'firebase'
export default {
    name: 'protests',
    data: function() {
        return {
            protests: [],
            protest: '',
            description: '',
            protestId: '',
            users: {},
            uid: null
        }
    },
    beforeMount() {
        let currentUser = auth.currentUser;
        if (currentUser) {
            this.uid = currentUser.uid;
            this.$bindAsArray('user', db.ref('users/' + this.uid + '/following'));
        } else {
            let authListenerUnsubscribe = auth.onAuthStateChanged(user => {
                if (user) {
                    this.uid = user.uid;
                    authListenerUnsubscribe();
                }

            });
        }
    },
    firebase: {
        protests: {
            source: db.ref('protests/'),
            cancelCallback(err) {
                console.log(err)
            }
        },
        protests_followers: {
            source: db.ref('protests/' +  'followers')
        }
    },

  methods: {
    joinProtest: function() {
      this.$bindAsObject('protestsarr', db.ref('protests/' + 'Workers Strike'));
      var status = 'active';
      this.$firebaseRefs.protestsarr.child('status').set(status);
      this.$router.replace('organizer_active');
    }
    //protests: function() {



      /*s
      let protestsRef = ref.child("protests");

      let queryRef = dataRef.queryOrdered(byChild: "organizerUid")
                            .queryEqual(toValue: "WWUuAXJt30dfiNSHFm94vZ3vVA23");
      queryRef.observeSingleEvent(of: .value, with: { (snapshot) in
      let a = snapshot.key //the posts node
      print(a)

      for child in snapshot.children {
        let childSnap = child as! FIRDataSnapshot
        print(childSnap.key) //the direct parent node
      }
    })
    */

  //  }
    // runOfficial:{
    // db.child('/users/' + this.uid + '/currentProtests').on('value', function(snapshot){
    //   snapshot.forEach(function(childSnapshot){
    //     var value = childSnapshot.value();
    //
    //   })
    // });
  }
    /*
    let ref = this.firebase.database().ref().child('documentation').orderByChild('type').equalTo('Q&A').on('value', snap => {
      doc = snap.val();
      console.log(doc);
    });
    */

  }

</script>
