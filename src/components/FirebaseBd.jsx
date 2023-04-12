// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbO0nE0Xjujg_7WMM5SlliFHfhsVTqtNM",
  authDomain: "portfolio-2e788.firebaseapp.com",
  projectId: "portfolio-2e788",
  storageBucket: "portfolio-2e788.appspot.com",
  messagingSenderId: "89254871567",
  appId: "1:89254871567:web:6eaff50e330df1ae41197a"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);