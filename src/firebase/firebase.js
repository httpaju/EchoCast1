import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCd374nZFnsxAnc1nYN7-UtFWMVcjMtlf0",
  authDomain: "movie-stream-4ac11.firebaseapp.com",
  projectId: "movie-stream-4ac11",
  storageBucket: "movie-stream-4ac11.firebasestorage.app",
  messagingSenderId: "360286423205",
  appId: "1:360286423205:web:844ec936c6c35ef0ab654c",
  measurementId: "G-Z5N6YPBQTN"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let analytics = null;

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  import('firebase/analytics').then(({ getAnalytics }) => {
    analytics = getAnalytics(app);
  });
}

const db = getFirestore(app);

export { app, auth, analytics, db };
