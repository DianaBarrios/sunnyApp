// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");
var firestore = require("firebase/firestore");

require("firebase/functions");

//var admin = require('firebase-admin');

// Add the Firebase products that you want to use
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDqSPSxMQOmTP6R2qOauDNYrBrKRPvfbc0",
    authDomain: "smiles-ai.firebaseapp.com",
    databaseURL: "https://smiles-ai.firebaseio.com",
    projectId: "smiles-ai",
    storageBucket: "smiles-ai.appspot.com",
    messagingSenderId: "165351250419",
    appId: "1:165351250419:web:d08a3639876167ba"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var functions = firebase.functions();

module.exports = { db, functions };
