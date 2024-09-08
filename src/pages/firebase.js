// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbwuU93k2ZYz8Uazl-XiKURemUdeNwPlY",
    authDomain: "fir-application-f40c6.firebaseapp.com",
    projectId: "fir-application-f40c6",
    storageBucket: "fir-application-f40c6.appspot.com",
    messagingSenderId: "120613682399",
    appId: "1:120613682399:web:1c8e32e78fc1b443a6bd6a",
    measurementId: "G-MJ55XTVTJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth()
export default app;