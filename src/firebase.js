// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADJ8PgvZyQpY8a9JiPX7nck5YVGmw6Lls",
  authDomain: "data-science-smoker-or-not.firebaseapp.com",
  projectId: "data-science-smoker-or-not",
  storageBucket: "data-science-smoker-or-not.appspot.com",
  messagingSenderId: "8168250284",
  appId: "1:8168250284:web:ba62f509ff23224ddff809",
  measurementId: "G-KX46M8QK21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);