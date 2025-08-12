// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";

// ✅ Replace with your actual Firebase credentials
const firebaseConfig = {
  apiKey: "AIzaSyD2lhDXrFEBCTUJO9t0Drx4g7FMqb_LuUw",
  authDomain: "coffee-shop-bf1cf.firebaseapp.com",
  projectId: "coffee-shop-bf1cf",
  storageBucket: "coffee-shop-bf1cf.appspot.com", // 🔧 corrected storage bucket
  messagingSenderId: "724639841255",
  appId: "1:724639841255:web:20bd97968dc3caaa4a1b42",
  measurementId: "G-Y5GBNMZBH9"
};

// 🔌 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🌐 Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'  // 🔁 Always ask user to choose an account
});

// 📘 Facebook Auth Provider
const facebookProvider = new FacebookAuthProvider();

// 🚀 Sign in with Google (returns result so `result.user` works)
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result; // 🔹 Important: return so caller can access result.user
  } catch (error) {
    console.error("Google sign-in error:", error);
    throw error;
  }
};

// 🔓 Sign out function
const logout = () => {
  return signOut(auth);
};

// 🧠 Export
export {
  auth,
  signInWithGoogle,
  logout
};
