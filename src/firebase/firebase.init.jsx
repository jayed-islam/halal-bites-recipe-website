// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApRVDwtx2iuBXTMa7dSbM5BvnfR2NrALQ",
  authDomain: "halalbites-recipe.firebaseapp.com",
  projectId: "halalbites-recipe",
  storageBucket: "halalbites-recipe.appspot.com",
  messagingSenderId: "387211588944",
  appId: "1:387211588944:web:9ae3cb593e63a7ba5d6855",
  measurementId: "G-5HGV278108",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
