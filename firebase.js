// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiO7Qhnx3Tp_Ytbj1GnLWBJoneZyz6Qpc",
  authDomain: "shoeapp-83cc5.firebaseapp.com",
  projectId: "shoeapp-83cc5",
  storageBucket: "shoeapp-83cc5.firebasestorage.app",
  messagingSenderId: "486582347629",
  appId: "1:486582347629:web:0ff489d166a363111d5c64",
  measurementId: "G-60KMDJ642V",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
