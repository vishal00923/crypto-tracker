import { createContext, useState, useEffect } from 'react';
import {
  createUserDocument,
  onAuthStateChangedListener,
} from '../utils/firebase';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocument(user);
        setCurrentUser(user);
      }

      return unsubscribe;
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
