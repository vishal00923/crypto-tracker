import { createContext, useState, useEffect } from 'react';
import {
  db,
  doc,
  createUserDocument,
  onAuthStateChangedListener,
} from '../utils/firebase';

import { onSnapshot } from 'firebase/firestore';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  notifications: {},
  setNotifications: () => {},
  watchlist: [],
  setWatchlist: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const [notifications, setNotifications] = useState({
    open: false,
    message: '',
    type: 'success',
  });

  const value = {
    currentUser,
    setCurrentUser,
    notifications,
    setNotifications,
    watchlist,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocument(user);
        setCurrentUser(user);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (currentUser) {
      const coinRef = doc(db, 'watchlist', currentUser.uid);

      const unsubscribe = onSnapshot(coinRef, (coinDoc) => {
        if (coinDoc.exists()) {
          setWatchlist(coinDoc.data().coins);
        } else {
          console.log('No items in watchlist');
        }
      });

      return () => unsubscribe();
    }
  }, [currentUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
