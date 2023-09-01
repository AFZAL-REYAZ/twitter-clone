import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcfds3FflS_Dh6IWZS5POLYCNga8PnrwM",
    authDomain: "twitter-clone-47181.firebaseapp.com",
    projectId: "twitter-clone-47181",
    storageBucket: "twitter-clone-47181.appspot.com",
    messagingSenderId: "224316757900",
    appId: "1:224316757900:web:d3f7ff3bbc34c856f828a9",
    measurementId: "G-XFJE1BVMLM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db;
