// src/Firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB2ZhlTm_9zpGYpKe9xB18TrK2FAY7xqWA",
  authDomain: "careermatch-aa804.firebaseapp.com",
  projectId: "careermatch-aa804",
  storageBucket: "careermatch-aa804.appspot.com",
  messagingSenderId: "255024351095",
  appId: "1:255024351095:web:57932865e499b30b310372",
  measurementId: "G-V95RKFRL81",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
