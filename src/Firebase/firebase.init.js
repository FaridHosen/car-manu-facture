// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId


  apiKey: "AIzaSyAKyTisI7L_SjUcvsn1YK0LaCtLyGDhF-4",
  authDomain: "car-manu-facture.firebaseapp.com",
  projectId: "car-manu-facture",
  storageBucket: "car-manu-facture.appspot.com",
  messagingSenderId: "83273995993",
  appId: "1:83273995993:web:625a92a7beed65debc10c8"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

