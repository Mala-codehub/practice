// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxM21ok2zSSTjcm_kUcg9wMonGuFChrws",
  authDomain: "react-table-28861.firebaseapp.com",
  projectId: "react-table-28861",
  storageBucket: "react-table-28861.firebasestorage.app",
  messagingSenderId: "55165442398",
  appId: "1:55165442398:web:f70d358b851059f25d97cf",
  measurementId: "G-W0XJF3H2VJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
const db=getFirestore();
export {db};