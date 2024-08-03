import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs, doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCaMuRVECnCzK7XELrrLUfr0TJXLylRTp0",
  authDomain: "hai-pantry.firebaseapp.com",
  projectId: "hai-pantry",
  storageBucket: "hai-pantry.appspot.com",
  messagingSenderId: "802407385162",
  appId: "1:802407385162:web:1a641e81e522d3373b7eb3",
  measurementId: "G-JLXBHR6H8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore, collection, query, getDocs, doc, setDoc, deleteDoc, getDoc };
