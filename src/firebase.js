import * as firebase from "firebase/app";
import "firebase/functions";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDqSPSxMQOmTP6R2qOauDNYrBrKRPvfbc0",
  authDomain: "smiles-ai.firebaseapp.com",
  databaseURL: "https://smiles-ai.firebaseio.com",
  projectId: "smiles-ai",
  storageBucket: "smiles-ai.appspot.com",
  messagingSenderId: "165351250419",
  appId: "1:165351250419:web:d08a3639876167ba"
};

// Initialize Firebase
firebase.initializeApp(config);

const db = firebase.firestore();
const functions = firebase.functions();
const auth = firebase.auth();
export { db, functions, auth };
