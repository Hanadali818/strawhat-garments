import { initializeApp } from 'firebase/app';
import {getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
}   from 'firebase/auth';
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';
import { useActionData } from 'react-router-dom';



const firebaseConfig = {
    apiKey: "AIzaSyC56LSM4UdYeYw-LMaV9tDFstU9wUFdWVA",
    authDomain: "strawhat-garments-db-43bfc.firebaseapp.com",
    projectId: "strawhat-garments-db-43bfc",
    storageBucket: "strawhat-garments-db-43bfc.appspot.com",
    messagingSenderId: "847322967288",
    appId: "1:847322967288:web:cbf082f2d4e9ad193a9f0d"
  };

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db,'users', userAuth.uid);

    console.log(userDocRef)
}
