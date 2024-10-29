// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCa1aMeT5GDqcMKIX5dONLpe7weqaUEns8",
  authDomain: "swiggy-mirror.firebaseapp.com",
  projectId: "swiggy-mirror",
  storageBucket: "swiggy-mirror.appspot.com",
  messagingSenderId: "Y1042464311488",
  appId: "1:1042464311488:web:6c66a5778fa2f5b4268525",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
