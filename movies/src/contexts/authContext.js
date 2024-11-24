import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase'; // Import firebase auth
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

// Create the AuthContext
export const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext); // Access AuthContext
};

// AuthContext Provider component
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Method to sign up a new user
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Method to log in an existing user
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Method to log out the current user
  const logOut = () => {
    return signOut(auth);
  };

  // Effect to set up a listener for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe; // Clean up the listener on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
