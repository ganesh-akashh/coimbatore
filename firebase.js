
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence, GoogleAuthProvider } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBivTZGALNyl3-sFsGYLTkUIkpWLw_3m44",
  authDomain: "covai-62603.firebaseapp.com",
  projectId: "covai-62603",
  storageBucket: "covai-62603.appspot.com",
  messagingSenderId: "1057776308318",
  appId: "1:1057776308318:web:efacf6abefe77ba9e2e4cf",
  measurementId: "G-T0QCYF08RW"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);

export const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const googleProvider = new GoogleAuthProvider();

export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
