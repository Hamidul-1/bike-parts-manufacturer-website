// Import the functions you need from the SDKs you need
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVVGI6LwgsQEq-HcBU4YjBw6SIu7_z8Bg",
  authDomain: "bike-parts-manufacturers-3fc17.firebaseapp.com",
  projectId: "bike-parts-manufacturers-3fc17",
  storageBucket: "bike-parts-manufacturers-3fc17.appspot.com",
  messagingSenderId: "1069101714834",
  appId: "1:1069101714834:web:fb849f03298a2a4703854b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;