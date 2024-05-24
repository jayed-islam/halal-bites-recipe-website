import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";

export const AppContext = createContext();

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();

  // const signIn = (provider) => {
  //   return signInWithPopup(auth, provider);
  // };

  const googleSignIn = () => {
    // signIn(googleProvider)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscripe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscripe();
    };
  }, []);

  const authInfo = {
    user,
    logOut,
    googleSignIn,
  };
  return <AppContext.Provider value={authInfo}>{children}</AppContext.Provider>;
};

export default AuthContext;
