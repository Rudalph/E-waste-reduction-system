import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY4lWShbO6O5ak3rU3Q8801UzB-fg9hmk",
  authDomain: "login-signup-auth-80703.firebaseapp.com",
  projectId: "login-signup-auth-80703",
  storageBucket: "login-signup-auth-80703.appspot.com",
  messagingSenderId: "692503940353",
  appId: "1:692503940353:web:d7cecd764b8828412adf00",
  measurementId: "G-XWRMTH1TXC"
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
