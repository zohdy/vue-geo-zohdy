import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
let config = {
  apiKey: "AIzaSyCvt3ior-zrPbKqte7-yn8gY9_IVy6YGX0",
  authDomain: "vue-geo-zohdy.firebaseapp.com",
  databaseURL: "https://vue-geo-zohdy.firebaseio.com",
  projectId: "vue-geo-zohdy",
  storageBucket: "",
  messagingSenderId: "274225458454"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true});

export default firebaseApp.firestore();
