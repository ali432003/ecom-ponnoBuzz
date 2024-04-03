// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPbllWn62GBIqHXivw4j21c1zv3VxEuAc",
  authDomain: "e-com-js.firebaseapp.com",
  projectId: "e-com-js",
  storageBucket: "e-com-js.appspot.com",
  messagingSenderId: "151608838844",
  appId: "1:151608838844:web:8e91298c455f581368deb9"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();


export {
    app, auth, db
}