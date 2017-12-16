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

a {
    color: #42b983;
}

</style>

<template>

<div>
    <div class="container">
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
            source: db.ref('protests/' + 'followers')
        }
    },
    methods: {
        followNew: function(protest) {
            // var profileRef = db.ref('users/' + userId)
            console.log(protest)
            this.$firebaseRefs.user.push({
                name: protest
            })
            this.$firebaseRefs.protests_followers.push({
                uid: this.uid
            })
        }
    }

    // }
}

</script>
