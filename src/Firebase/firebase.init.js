// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqZMW0oZ7dVnYe5qixxEvGqUpX67_h5kQ",
  authDomain: "equisports-2ad5a.firebaseapp.com",
  projectId: "equisports-2ad5a",
  storageBucket: "equisports-2ad5a.firebasestorage.app",
  messagingSenderId: "228207718329",
  appId: "1:228207718329:web:573ae50459360d417bd068"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);