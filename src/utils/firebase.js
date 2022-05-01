// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM-FIZ7MFBjJ2BaB-ha_6Gg6EurFoUJVE",
  authDomain: "firecontactapp-9d5e8.firebaseapp.com",
  databaseURL: "https://firecontactapp-9d5e8-default-rtdb.firebaseio.com",
  projectId: "firecontactapp-9d5e8",
  storageBucket: "firecontactapp-9d5e8.appspot.com",
  messagingSenderId: "166908816012",
  appId: "1:166908816012:web:25c24b853ca0205c8de9a9"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;



