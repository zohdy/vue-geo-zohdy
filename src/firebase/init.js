import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
let config = {
  apiKey: "AIzaSyAKBoAPLUgePH3cORZenzxT6aWxb-mcw2E",
  authDomain: "vue-geo-zohdy.firebaseapp.com",
  databaseURL: "https://vue-geo-zohdy.firebaseio.com",
  projectId: "vue-geo-zohdy",
  storageBucket: "",
  messagingSenderId: "274225458454"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
