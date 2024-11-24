// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "resct-assign.firebaseapp.com",
  projectId: "resct-assign",
  storageBucket: "resct-assign.firebasestorage.app",
  messagingSenderId: "109475000659",
  appId: "1:109475000659:web:623af5693429938dcaf1a6",
  measurementId: "G-CCZCS7FJ23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
