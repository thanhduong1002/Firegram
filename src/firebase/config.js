import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtHgvGMWTh8CxnYH1sd9VS1goyzdvMQ8g",
  authDomain: "ninja-firepram.firebaseapp.com",
  projectId: "ninja-firepram",
  storageBucket: "ninja-firepram.appspot.com",
  messagingSenderId: "828941000800",
  appId: "1:828941000800:web:31a7ac69f6b8c01ad2a305"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestorage = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export{projectStorage, projectFirestorage, timestamp};