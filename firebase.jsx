// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage  } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpBhD8zNeMfEmhaRZ49iirojUyhkuIj_o",
    authDomain: "twitter-clone-e33b3.firebaseapp.com",
    projectId: "twitter-clone-e33b3",
    storageBucket: "twitter-clone-e33b3.appspot.com",
    messagingSenderId: "109744508404",
    appId: "1:109744508404:web:c4f75dd746f2fa0ccdbda1"
  };

  // Initialize Firebase

  const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore();
  const storage = getStorage();

  export default app;
  export { db, storage }