<style scoped>

h1,
h2 {
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



</style>

<template>

<div>
    <!-- <div class="container">
        <div class="row">
            <div class="col s8">
                <div class="card blue-grey darken-1" v-for="protest in protests">
                    <div class="card-content white-text">
                        <span class="card-title">{{protest.name}}</span>
                        <p>{{protest.description}}</p>
                    </div>
                    <div class="card-action">
                        <a @click="followNew(protest.name)">Follow</a>
                        <a v-if="protest.status ='active'">Join Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p>Working on the new design of this </p> -->
<v-app>
    <v-container>
    <v-layout v-for="protest in protests" :key="protest.name" class="mb-2">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
        <v-card-media src="" height="200px">
        </v-card-media>
        <v-card-title primary title >
          <div>
            <h3 class="headline mb-0" color="white"> {{protest.name}} </h3>
            <div>{{protest.description}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" @click="followNew(protest.name)">Follow</v-btn>
          <v-btn flat color="orange" v-if="protest.status === 'active'" @click="joinProtest(protest.name)"> Join Now </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    </v-layout>
  </v-container>
</v-app>

</div>





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

export default {
    name: 'Client',
    data: function() {
        return {
            protests: {},
            name: '',
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
            source: db.ref('protests'),
            cancelCallback(err) {
                console.log(err)
            }
        },
        protests_followers: {
            source: db.ref('protests/' +  'followers')
        }
    },
    methods: {
        //followNew: adds the current protest to the user's list of following protests
        followNew: function(protest) {
            this.$bindAsArray('protestfollow', db.ref('protests/' + protest + '/following'));

            // var profileRef = db.ref('users/' + userId)
            console.log(protest)
            this.$firebaseRefs.user.push({
                name: protest
            })
            this.$firebaseRefs.protestfollow.push({
                uid: this.uid
            })
        },
        //joinProtest: the user joins the protest when it is active
        joinProtest: function(protest) {
          console.log(protest);
          this.$bindAsArray('protestparticipants', db.ref('protests/' + protest + '/participants'));
          var number = this.$firebaseRefs.protestparticipants.length;
          this.$firebaseRefs.protestparticipants.set({
            participants: number

          })
=======
          this.$bindAsObject('protestparticipants', db.ref('protests/' + protest))
          this.$bindAsObject('protestsarr', db.ref('protests/' + protest))

          var number = this.protestparticipants.participants + 1
          this.$bindAsObject('protestpart', db.ref('protests/' + protest + '/participants'))


          this.$firebaseRefs.protestsarr.child('participants').set(number)
>>>>>>> dylan_versiontoend

          this.$router.replace('protestclient/' + protest)


        }
    }

    // }
}

</script>
