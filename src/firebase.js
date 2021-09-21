import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, onSnapshot, collection, addDoc, doc } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfkXTvHiYnv_Q5PMSBhwJv78Hx3ig7qaU",
  authDomain: "discord-clone-8c88f.firebaseapp.com",
  projectId: "discord-clone-8c88f",
  storageBucket: "discord-clone-8c88f.appspot.com",
  messagingSenderId: "868739855549",
  appId: "1:868739855549:web:4657ab9603ae55609633d4",
  measurementId: "G-QVG4TBF0C4"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);

export { auth, provider, signInWithPopup, onSnapshot, collection, addDoc, doc };
export default db;
