import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5Zhx2YWneWqAVd5ix7Dv1l-A5sn-_nKw",
  authDomain: "colne-yt-bb6aa.firebaseapp.com",
  projectId: "colne-yt-bb6aa",
  storageBucket: "colne-yt-bb6aa.appspot.com",
  messagingSenderId: "413373076221",
  appId: "1:413373076221:web:6bfb387e5606b9c5bde494",
  measurementId: "G-GK5KPL1C2H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
