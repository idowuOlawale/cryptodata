import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkabmTWRxx2LWHXTPjvWJuFQzr4eV1Lho",
  authDomain: "crypto2data.firebaseapp.com",
  projectId: "crypto2data",
  storageBucket: "crypto2data.firebasestorage.app",
  messagingSenderId: "9457065046",
  appId: "1:9457065046:web:ee4691423096a6d3c62ff7",
  measurementId: "G-CQRM8LHTGQ"
};
// PASTE YOUR COPIED CONFIG ABOVE THIS LINE

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the "tools" so other pages can use them
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
