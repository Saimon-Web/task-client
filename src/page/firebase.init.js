// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsUWc-pkYVdrPNPRoT9YV-3l9zCRNnnyQ",

  authDomain: "taskjob-2f120.firebaseapp.com",

  projectId: "taskjob-2f120",

  storageBucket: "taskjob-2f120.appspot.com",

  messagingSenderId: "93076761605",

  appId: "1:93076761605:web:4562f87a0555573af2c06c"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;