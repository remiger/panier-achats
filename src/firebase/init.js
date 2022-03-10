import firebaseConfig from './config'
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Initialiser Firease
export const instanceFirebase = initializeApp(firebaseConfig);

// Initialiser Firebase Authentication
export const authFirebase = getAuth();

// Initialiser l'Authentification federee Google
export const authGoogle = new GoogleAuthProvider();

// Initialiser Firestore
export const bdFirestore = getFirestore();

