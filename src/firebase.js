import Firebase from 'firebase'

// intializing the connection to Firebase which both authenivates
// but also our database
const firebaseApp = Firebase.initializeApp({
  // Populate your firebase configuration data here.
  apiKey: "AIzaSyCzniP0Wu1UpfyFwcs3w6PSvE95bMdA0zM",
  authDomain: "root-d486a.firebaseapp.com",
  databaseURL: "https://root-d486a.firebaseio.com",
  projectId: "root-d486a",
  storageBucket: "root-d486a.appspot.com",
  messagingSenderId: "980123833348"
});

// Export instances of the database, and auth to prevent redundacy
export const db = firebaseApp.database();
export const auth = firebaseApp.auth();
