// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBz5MZHXV366XNTI052BbhNWC6JsvDUCyk",
    authDomain: "face-book-auth.firebaseapp.com",
    projectId: "face-book-auth",
    storageBucket: "face-book-auth.appspot.com",
    messagingSenderId: "403797600505",
    appId: "1:403797600505:web:965d5321f3d7734356da28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;