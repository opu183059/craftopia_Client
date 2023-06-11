import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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
  const [role, setRole] = useState(null);

  const getRoleFromServer = async (email) => {
    const response = await fetch(
      `https://criptofia-server.vercel.app/usermail/${email}`
    );
    const user = await response.json();
    return user?.role;
  };

  // register
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // email login
  const emailLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
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

  useEffect(() => {
    if (user) {
      getRoleFromServer(user.email).then((res) => setRole(res));
    }
  }, [user]);

  const autherinfo = {
    user,
    loading,
    signinwithGoogle,
    registerUser,
    emailLogin,
    logout,
    role,
  };
  return (
    <Authcontext.Provider value={autherinfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
