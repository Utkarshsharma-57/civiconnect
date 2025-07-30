import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAxCdEhrgotSWBIqPvs-CDE9R7iDqyHCMU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "civicoonect.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "civicoonect",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "civicoonect.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "62975870564",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:62975870564:web:ee5b20f180ae845369c171",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-5WW1X3YPL8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app); 