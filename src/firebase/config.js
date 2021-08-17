 
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDQorD0qCOUYAKuOw1GdChnrjx11WBnrb4",
    authDomain: "bread-firegram.firebaseapp.com",
    databaseURL: 'https://bread-firegram.firebaseio.com',
    projectId: "bread-firegram",
    storageBucket: "bread-firegram.appspot.com",
    messagingSenderId: "782307504056",
    appId: "1:782307504056:web:65b427f3d48aab243c694d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };