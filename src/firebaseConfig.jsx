// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzU9w_DLcAMeVcHfIBWQvNkzCCebyEdbo",
  authDomain: "acnedetectionapp.firebaseapp.com",
  projectId: "acnedetectionapp",
  storageBucket: "acnedetectionapp.appspot.com",
  messagingSenderId: "486659125490",
  appId: "1:486659125490:web:9657cddd6fb82525aea06b"
};

// Initialize Firebasefirebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
