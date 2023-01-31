// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOFOh4jwVA30cg7gA13KX3T7owFLFR148",
  authDomain: "realtor-clone-2edaf.firebaseapp.com",
  projectId: "realtor-clone-2edaf",
  storageBucket: "realtor-clone-2edaf.appspot.com",
  messagingSenderId: "319785177374",
  appId: "1:319785177374:web:8f2449314892b8d2ff390f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();