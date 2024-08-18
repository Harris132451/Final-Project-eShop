// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9alnhyrODBzH-6KzvZY5LnxQLgG4wSz8",
  authDomain: "eshop-6e5eb.firebaseapp.com",
  projectId: "eshop-6e5eb",
  storageBucket: "eshop-6e5eb.appspot.com",
  messagingSenderId: "393840775935",
  appId: "1:393840775935:web:ed6f0194129569b4e372ca",
  measurementId: "G-LNDC9FV9M1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);
