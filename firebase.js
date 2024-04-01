// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxfX9TTXVblx2aWTBzdYnEaoJfAL1hvcI",
  authDomain: "fir-test-e312b.firebaseapp.com",
  projectId: "fir-test-e312b",
  storageBucket: "fir-test-e312b.appspot.com",
  messagingSenderId: "83143225006",
  appId: "1:83143225006:web:08fd53dfc6ad7f9ae0073f",
  measurementId: "G-E7GJZC75LP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export {app,auth};