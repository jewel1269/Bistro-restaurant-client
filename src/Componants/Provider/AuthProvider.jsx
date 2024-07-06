import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut, // Added signOut import
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Added initial value for loading

  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    // Changed signOut to signOutUser to avoid conflict with the import
    setLoading(true);

    return signOut(auth);
  };

  const googleSignIn = provider => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      // Fixed spelling of unsubscribe
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        console.log(userInfo);
        axiosPublic.post('/jwt', userInfo).then(res => {
          const token = res.data.token;
          console.log(token);
          if (token) {
            localStorage.setItem('access-token', token);
          }
        });
      } else {
        localStorage.removeItem('access-token');
      }
      setLoading(false);
      console.log('current user', currentUser);
    });
    return () => {
      unsubscribe(); // Removed redundant return statement
    };
  }, []);
  const allInfo = {
    user,
    loading,
    createUser,
    signIn,
    signOut: signOutUser,
    googleSignIn,
    // Renamed signOut to signOutUser for consistency
  };

  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
