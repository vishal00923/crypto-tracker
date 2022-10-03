import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-QtLHMGNG_ZFNltA46paUO3OhCc42_Ic',
  authDomain: 'crypto-tracker-4dbf0.firebaseapp.com',
  projectId: 'crypto-tracker-4dbf0',
  storageBucket: 'crypto-tracker-4dbf0.appspot.com',
  messagingSenderId: '66820886492',
  appId: '1:66820886492:web:e51f2225b2b4a5b858c919',
  measurementId: 'G-VFW3EGLXVK',
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const createUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

const signInUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

const signOutUser = async () => {
  return await signOut(auth);
};

const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = async () => {
  return await signInWithPopup(auth, googleProvider);
};

const db = getFirestore(firebaseApp);

const createUserDocument = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // is user exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error('error creating user: ', error.message);
    }
  }

  return userDocRef;
};

export {
  signInUser,
  createUser,
  signOutUser,
  signInWithGoogle,
  createUserDocument,
  onAuthStateChangedListener,
};
