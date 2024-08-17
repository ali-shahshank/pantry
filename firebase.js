'use client'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpP31PWD9skrR6E8ISw0UszB92gE-5pBo",
  authDomain: "inventory-38e28.firebaseapp.com",
  projectId: "inventory-38e28",
  storageBucket: "inventory-38e28.appspot.com",
  messagingSenderId: "560852736986",
  appId: "1:560852736986:web:ef585a32cfc77afb35fee3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
 
