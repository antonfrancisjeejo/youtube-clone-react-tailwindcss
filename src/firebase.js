// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzoVs7AsQEmhMouOdQcSVSwDWm_kY39dY",
  authDomain: "yt-clone-afe21.firebaseapp.com",
  projectId: "yt-clone-afe21",
  storageBucket: "yt-clone-afe21.appspot.com",
  messagingSenderId: "733407520498",
  appId: "1:733407520498:web:90da51bc47d92046ded26b",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { app, db, auth, timestamp, provider };
