// // import firebase from "firebase/compat/app";
// import * as firebase from 'firebase';
// const firebaseConfig = {
//   apiKey: "AIzaSyCbwQrt3mGUvGr5whoLH371qzIGSU6WpbE",
//   authDomain: "texnomart-ae1fc.firebaseapp.com",
//   projectId: "texnomart-ae1fc",
//   storageBucket: "texnomart-ae1fc.appspot.com",
//   messagingSenderId: "67309774766",
//   appId: "1:67309774766:web:a9875f62e2cdec57628a3f",
//   measurementId: "G-650EX96XN3"
// };
// const backend = firebase.initializeApp(firebaseConfig);
// const auth = backend.auth;


// export { auth,  backend  }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCbwQrt3mGUvGr5whoLH371qzIGSU6WpbE",
  authDomain: "texnomart-ae1fc.firebaseapp.com",
  projectId: "texnomart-ae1fc",
  storageBucket: "texnomart-ae1fc.appspot.com",
  messagingSenderId: "67309774766",
  appId: "1:67309774766:web:a9875f62e2cdec57628a3f",
  measurementId: "G-650EX96XN3"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
