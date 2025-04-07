import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Yy-Q3t8utFTnqkJWMcwlVuinJVhRo0M",
  authDomain: "portfolio-efcf0.firebaseapp.com",
  projectId: "portfolio-efcf0",
  storageBucket: "portfolio-efcf0.firebasestorage.app",
  messagingSenderId: "506265127565",
  appId: "1:506265127565:web:a270e9522363386246b0c4",
  measurementId: "G-JR7DK3574L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };