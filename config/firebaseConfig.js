// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGV6DjZYWSDlIrONgJsP8o5GovOS0vOBo",
  authDomain: "law-hubb.firebaseapp.com",
  projectId: "law-hubb",
  storageBucket: "law-hubb.appspot.com",
  messagingSenderId: "774858592932",
  appId: "1:774858592932:web:1b967ba9c7eb32799b8c31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
