import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN23VVsFzXYn9VxXeQZpx04AH66nvBb18",
  authDomain: "my-ecommerce-proyect.firebaseapp.com",
  projectId: "my-ecommerce-proyect",
  storageBucket: "my-ecommerce-proyect.firebasestorage.app",
  messagingSenderId: "506369935506",
  appId: "1:506369935506:web:020481cbcf20187bb37e4b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
