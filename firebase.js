// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {firebase} from 'firebase/app';
import firebase from "firebase/app";
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK2BQSehrEOIToLij0SFwABVhwBqcSfx8",
  authDomain: "react-native-uber-eats-392ac.firebaseapp.com",
  projectId: "react-native-uber-eats-392ac",
  storageBucket: "react-native-uber-eats-392ac.appspot.com",
  messagingSenderId: "772584674170",
  appId: "1:772584674170:web:4c312ae39df96c45557cc3"
};

// Initialize Firebase
// !firebase.app.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const app = firebase.initializeApp(firebaseConfig);
// const db = app.firestore()
export default app;