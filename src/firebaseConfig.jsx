// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvP0R4KagI5WdiIjWLnkj4JFQYrIi8le0",
  authDomain: "thesisv3-75214.firebaseapp.com",
  projectId: "thesisv3-75214",
  storageBucket: "thesisv3-75214.appspot.com",
  messagingSenderId: "448149860538",
  appId: "1:448149860538:web:cc602648858eef33b9d283",
  measurementId: "G-YBMW1X397R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);