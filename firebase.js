
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyB5n_0psd66huC6EWm9pxENYlDvwshSXUE",
  authDomain: "covai-6d105.firebaseapp.com",
  projectId: "covai-6d105",
  storageBucket: "covai-6d105.appspot.com",
  messagingSenderId: "416140714000",
  appId: "1:416140714000:web:ddf204dfb6bcbf5160ea95",
  measurementId: "G-7H7RLKE24H"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);

export const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
