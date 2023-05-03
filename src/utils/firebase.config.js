// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAeekV5WktZGzZYj-GgN4TzQMHTl217hM",
  authDomain: "chef-recipe-hunter-af85a.firebaseapp.com",
  projectId: "chef-recipe-hunter-af85a",
  storageBucket: "chef-recipe-hunter-af85a.appspot.com",
  messagingSenderId: "24167066770",
  appId: "1:24167066770:web:0bc5eaf733e6d677db4a4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;