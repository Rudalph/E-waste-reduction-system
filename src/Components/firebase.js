// Import the functions you need from the SDKs you need

import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY4lWShbO6O5ak3rU3Q8801UzB-fg9hmk",
  authDomain: "login-signup-auth-80703.firebaseapp.com",
  projectId: "login-signup-auth-80703",
  storageBucket: "login-signup-auth-80703.appspot.com",
  messagingSenderId: "692503940353",
  appId: "1:692503940353:web:d7cecd764b8828412adf00",
  measurementId: "G-XWRMTH1TXC"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
// const db = getFirestore(app);


export {app , auth};
// export default db;
export const storage = getStorage(app);
export const db = getFirestore(app);



