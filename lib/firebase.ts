// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvJ_mt4QocXDBp9jiRH6jz_eTlPbXcITA",
  authDomain: "all-nepali-news-1.firebaseapp.com",
  databaseURL: "https://all-nepali-news-1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "all-nepali-news-1",
  storageBucket: "all-nepali-news-1.firebasestorage.app",
  messagingSenderId: "864641621350",
  appId: "1:864641621350:web:e6575b9a0c90b372b3fca7",
  measurementId: "G-52JNMBNG9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Only initialize analytics in the browser environment
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
// Initialize auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Configure Google Auth Provider with additional scopes if needed
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Google Sign-in function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

// Sign out function
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export { auth, onAuthStateChanged };
export type { User };