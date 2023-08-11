import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCnDW3dKwAKMjv68KNj2BY693K3SVnzOJc",
  authDomain: "mailicious-6fc3f.firebaseapp.com",
  projectId: "mailicious-6fc3f",
  storageBucket: "mailicious-6fc3f.appspot.com",
  messagingSenderId: "610763143563",
  appId: "1:610763143563:web:297a82f1d1f567fd06578e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };