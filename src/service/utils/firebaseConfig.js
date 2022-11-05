// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApeZSXza3Mk9_0w2kw_6YBlfSIG64JXwo",
  authDomain: "trello-clone-1623f.firebaseapp.com",
  projectId: "trello-clone-1623f",
  storageBucket: "trello-clone-1623f.appspot.com",
  messagingSenderId: "182025777266",
  appId: "1:182025777266:web:6ee1903c499f3f1bab12eb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
