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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => 
    signInWithPopup(auth,googleProvider);

export const signInWithGoogleRedirect = () => 
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db,'users', userAuth.uid);


    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email } = userAuth
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }

        return userDocRef;
    };








}
