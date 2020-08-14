import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6sgE3_ULc9jG2XtUtwiS-eXSAj9awrIA",
  authDomain: "tinder-a6eb0.firebaseapp.com",
  databaseURL: "https://tinder-a6eb0.firebaseio.com",
  projectId: "tinder-a6eb0",
  storageBucket: "tinder-a6eb0.appspot.com",
  messagingSenderId: "721479799018",
  appId: "1:721479799018:web:d04e3ab67824c11809c793",
  measurementId: "G-LMEDL6NRSX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
