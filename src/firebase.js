import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  // Populate your firebase configuration data here.
  apiKey: "AIzaSyCzniP0Wu1UpfyFwcs3w6PSvE95bMdA0zM",
  authDomain: "root-d486a.firebaseapp.com",
  databaseURL: "https://root-d486a.firebaseio.com",
  projectId: "root-d486a",
  storageBucket: "root-d486a.appspot.com",
  messagingSenderId: "980123833348"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();
export const auth = firebaseApp.auth();

var temp_uid = null;
firebaseApp.auth().onAuthStateChanged(function(user) {
  if (user) {
    var temp_uid = auth.currentUser.uid;
    console.log('Confirming user Id' + temp_uid);

    } else {
    // No user is signed in.
    console.log('yahurd');
  }
});

export default temp_uid;
