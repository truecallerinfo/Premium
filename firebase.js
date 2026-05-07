// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyzEWR2Bct6EkSBQTLCvkHi4Vzb7oasy4",
  authDomain: "truecaller-98603.firebaseapp.com",
  projectId: "truecaller-98603",
  storageBucket: "truecaller-98603.firebasestorage.app",
  messagingSenderId: "594765579227",
  appId: "1:594765579227:web:13db05082163fc3c371dfe",
  measurementId: "G-MHGXC59RCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

// Export for use in project
export { app, analytics, auth, db };
