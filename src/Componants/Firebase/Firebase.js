// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALi0n2jEnYx1BloKNaYUkkeOIKaXnOIB4",
  authDomain: "bistro-boss-rastaurent.firebaseapp.com",
  projectId: "bistro-boss-rastaurent",
  storageBucket: "bistro-boss-rastaurent.appspot.com",
  messagingSenderId: "4587409380",
  appId: "1:4587409380:web:cf101a380eb040e85381f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;