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
