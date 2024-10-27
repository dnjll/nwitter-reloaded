import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgIH89AgRDXUlDtlVXKOjaYe5igAlrItw",
  authDomain: "nwitter-reloaded-373ec.firebaseapp.com",
  projectId: "nwitter-reloaded-373ec",
  storageBucket: "nwitter-reloaded-373ec.appspot.com",
  messagingSenderId: "84778138960",
  appId: "1:84778138960:web:262ac4cef7dd901a7f8055"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);