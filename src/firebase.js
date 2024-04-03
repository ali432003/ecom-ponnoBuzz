// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyYHXFoicwzfATvRy3O0Q-cFTsOPXeicg",
  authDomain: "new-ecom-559c4.firebaseapp.com",
  projectId: "new-ecom-559c4",
  storageBucket: "new-ecom-559c4.appspot.com",
  messagingSenderId: "703225543584",
  appId: "1:703225543584:web:2e344ac800b7d0c14502c5"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();


export {
    app, auth, db
}