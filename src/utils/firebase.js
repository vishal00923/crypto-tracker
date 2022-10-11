import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDFWeYpyv7LRYnsegCaMJiu3ohyLlyKDKo',
  authDomain: 'crypto-tracker-a9e45.firebaseapp.com',
  projectId: 'crypto-tracker-a9e45',
  storageBucket: 'crypto-tracker-a9e45.appspot.com',
  messagingSenderId: '1005594127774',
  appId: '1:1005594127774:web:e4e2a64c5d05429ddbba8f',
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

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
        email,
        createdAt,
        displayName,
        ...additionalInformation,
      });
    } catch (e) {
      console.error('error creating user: ', e.message);
    }
  }

  return userDocRef;
};

const createCoinDocumentListener = async (userAuth, callback) => {
  const coinDocRef = doc(db, 'watchlist', userAuth.uid);
  return onSnapshot(coinDocRef, callback);
};

export {
  db,
  doc,
  setDoc,
  signInUser,
  createUser,
  signOutUser,
  signInWithGoogle,
  createUserDocument,
  onAuthStateChangedListener,
  createCoinDocumentListener,
};
