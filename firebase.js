// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/stroage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-clone-c5632.firebaseapp.com",
  projectId: "twitter-clone-c5632",
  storageBucket: "twitter-clone- c5632.appspot.com",
  messagingSenderId: "375343693991",
  appId: "1:375343693991:web:d1c334611fc4c7daf91b82"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
// const app = initializeApp(firebaseConfig);