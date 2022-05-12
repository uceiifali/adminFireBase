import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "toturial-9c74d.firebaseapp.com",
  projectId: "toturial-9c74d",
  storageBucket: "toturial-9c74d.appspot.com",
  messagingSenderId: "405446729105",
  appId: "1:405446729105:web:ee7ba1c5204ac634420e30",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth();
