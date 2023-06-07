import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const Authcontext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   google login
  const signinwithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   signout
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscrive = onAuthStateChanged(auth, (curentUser) => {
      setUser(curentUser);
      setLoading(false);
    });
    return () => {
      unsubscrive();
    };
  }, []);

  const autherinfo = {
    user,
    loading,
    signinwithGoogle,
    registerUser,
    logout,
  };
  return (
    <Authcontext.Provider value={autherinfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
