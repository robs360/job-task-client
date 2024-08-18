// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy2RGVipUujZGGk1a0DCOrFaSKS8QboiQ",
  authDomain: "job-task-63d2b.firebaseapp.com",
  projectId: "job-task-63d2b",
  storageBucket: "job-task-63d2b.appspot.com",
  messagingSenderId: "151695601058",
  appId: "1:151695601058:web:9afabfc531996565b5d6fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app