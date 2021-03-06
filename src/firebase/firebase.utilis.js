import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBNRu_mSdg2wWMh4iKFTQvtIm655jHREU0",
    authDomain: "crwn-db-e22f4.firebaseapp.com",
    databaseURL: "https://crwn-db-e22f4.firebaseio.com",
    projectId: "crwn-db-e22f4",
    storageBucket: "crwn-db-e22f4.appspot.com",
    messagingSenderId: "142871051280",
    appId: "1:142871051280:web:b93516256739a001151e95",
    measurementId: "G-W7Y9EDGX47"
}

firebase.initializeApp(config);
const db = firebase.firestore();

export const createUserProfile = async (userAuth,additionalData) => {
    if (!userAuth) return;
    const userRef = db.doc(`users/${userAuth.uid}`);

    const userSnapshot = await userRef.get();
    

    if (!userSnapshot.exists) {
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try {
           await userRef.set({displayName,email,createdAt,...additionalData});    
        } catch (error) {
            console.log('error creating user',error.message);
        }
    }

    // console.log(userSnapshot);
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInwithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
