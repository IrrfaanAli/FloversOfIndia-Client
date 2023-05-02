// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh4Hh57vafz6DwoadXACgPndwzFWUZKfs",
  authDomain: "chefs-recipe-client.firebaseapp.com",
  projectId: "chefs-recipe-client",
  storageBucket: "chefs-recipe-client.appspot.com",
  messagingSenderId: "247072989231",
  appId: "1:247072989231:web:292527a672be68d05ce6da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;