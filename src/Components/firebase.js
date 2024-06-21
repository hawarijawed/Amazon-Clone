// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4XN5nRlhu_EckooTCHw48hvbyZ8mI6jI",
  authDomain: "myaz-clone.firebaseapp.com",
  projectId: "myaz-clone",
  storageBucket: "myaz-clone.appspot.com",
  messagingSenderId: "106456482209",
  appId: "1:106456482209:web:71bbb661834455c9ae8be0",
  measurementId: "G-52QL56SCWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// const auth = firebaseApp.auth();

export {app, auth};
