// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9UUdqL1tnF5zHBbFzfNszStvOe8DRDJE",
  authDomain: "agence-voyage-2c207.firebaseapp.com",
  projectId: "agence-voyage-2c207",
  storageBucket: "agence-voyage-2c207.appspot.com",
  messagingSenderId: "166889748731",
  appId: "1:166889748731:web:24e0ba99ecc4d9b0acd85e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
