import firebase from "firebase";

const FIREBASE_CONFIG = {
    /*
        apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
    */
    apiKey: "AIzaSyBMmBMACQnJVuYhZqQVJO-G8I5mYwOL60Q",
    authDomain: "stockspokedex.firebaseapp.com",
    projectId: "stockspokedex",
    storageBucket: "stockspokedex.appspot.com",
    messagingSenderId: "581306552552",
    appId: "1:581306552552:web:cc9a078f23fc9d86f2795d",
    measurementId: "G-CWTV6M8W6G"
}

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}