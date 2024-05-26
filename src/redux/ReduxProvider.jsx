/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { isValidToken } from "../utils/auth-utils";
import { useGetUserDataQuery } from "./reducers/auth/authApi";
import { logOut, setToken } from "./reducers/auth/authSlice";

export const ReduxProvider = ({ children }) => (
  <Provider store={store}>
    <GLobalApiCallProvider> {children}</GLobalApiCallProvider>
  </Provider>
);

const GLobalApiCallProvider = ({ children }) => {
  const { accessToken } = useSelector((state) => state.auth);

  const { data, error } = useGetUserDataQuery(undefined, {
    skip: !(accessToken && isValidToken(accessToken)),
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage?.getItem("accessToken");
    if (token && isValidToken(token)) {
      dispatch(setToken(token));
    } else {
      dispatch(logOut());
    }
  }, [dispatch]);

  return <>{children}</>;
};
