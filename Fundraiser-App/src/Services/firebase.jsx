// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { serverTimestamp } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDemNvVoyiMmZOkBawJOfwyVbIMaljLksU",
  authDomain: "fundraiser-by-harry.firebaseapp.com",
  projectId: "fundraiser-by-harry",
  storageBucket: "fundraiser-by-harry.appspot.com",
  messagingSenderId: "599110230367",
  appId: "1:599110230367:web:f2b855d60548a2fedd56ea"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = serverTimestamp();
export { auth, provider, timestamp };
