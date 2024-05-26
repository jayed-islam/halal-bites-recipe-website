import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import { useCreateUserMutation } from "../redux/reducers/auth/authApi";
import { setToken } from "../redux/reducers/auth/authSlice";
import { useDispatch } from "react-redux";

export const AppContext = createContext();

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const [createUser] = useCreateUserMutation();

  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = async () => {
    signInWithPopup(auth, googleProvider)
      .then(async (res) => {
        const user = res.user;
        const userData = {
          email: user?.email,
          displayName: user?.displayName,
          photoURL: user.photoURL,
        };
        const response = await createUser(userData).unwrap();
        if (response.success === true) {
          dispatch(setToken(response.token));
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
