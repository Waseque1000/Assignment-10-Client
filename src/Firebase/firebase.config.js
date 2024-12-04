// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSme1CbQ_0LMZ14R-uo5A73WmnR1Hhmao",
  authDomain: "assignment-010-512d2.firebaseapp.com",
  projectId: "assignment-010-512d2",
  storageBucket: "assignment-010-512d2.firebasestorage.app",
  messagingSenderId: "913575052804",
  appId: "1:913575052804:web:99c494fa4e4ab40b8b9751",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
