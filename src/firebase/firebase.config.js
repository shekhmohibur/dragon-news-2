// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOYSZWeHFmoyq1ctF6QZMOYyHjUQK0PXI",
  authDomain: "dragonnew-s.firebaseapp.com",
  projectId: "dragonnew-s",
  storageBucket: "dragonnew-s.firebasestorage.app",
  messagingSenderId: "470580746062",
  appId: "1:470580746062:web:7f46da65220d856fac701f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;