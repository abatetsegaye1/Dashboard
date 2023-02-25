import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getStorage} from "firebase/storage";

import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyR73Bpi6i3w4Az7yVnCgI03pq_H9ubDA",
  authDomain: "dashboard-fbbb7.firebaseapp.com",
  projectId: "dashboard-fbbb7",
  storageBucket: "dashboard-fbbb7.appspot.com",
  messagingSenderId: "827356751459",
  appId: "1:827356751459:web:ecd3a99764a3f22e7ffa56"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const storage = getStorage();

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth,storage, db };