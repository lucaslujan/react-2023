import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkx7JgbR-8LSejjKeVO3OJKJQpS-mqB4k",
  authDomain: "react-2023-9e306.firebaseapp.com",
  projectId: "react-2023-9e306",
  storageBucket: "react-2023-9e306.appspot.com",
  messagingSenderId: "156165874745",
  appId: "1:156165874745:web:69a82a52a0cfa8297659e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app