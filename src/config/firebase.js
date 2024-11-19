
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import dotenv from "dotenv"

dotenv.config()

// Use the environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore(app)

const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user;
    await setDoc(doc(db,"users",user.uid),{
      id:user.uid,
      username:username.toLowerCase(),
      email,
      name:"",
      avatar:"",
      bio:"I am using chatApp",
      lastSeen:Date.now()
    })
    await setDoc(doc(db,"chats",user.uid),{
      chatData:[]
    })
  } catch (error) {
    console.error(error)
    toast.error(error.code.split('/')[1].split("-").join(" "))
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email,password);
  } catch (error) {
    console.error(error)
    toast.error(error.code.split('/')[1].split("-").join(" "))
  }
}

const logout = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.error(error)
    toast.error(error.code.split('/')[1].split("-").join(" "))
  }
}
export {signup, login, logout, auth, db}
