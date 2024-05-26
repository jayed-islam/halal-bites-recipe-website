import { createSlice } from "@reduxjs/toolkit";
import { setSession } from "../../../utils/auth-utils";

const initialState = {
  user: null,
  authenticated: false,
  authLoading: false,
  accessToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      setSession(action.payload);
      state.accessToken = action.payload;
    },
    setAuthLoading: (state, action) => {
      state.authLoading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.authLoading = false;
      state.authenticated = true;
    },
    logOut: (state) => {
      state.authenticated = false;
      state.authLoading = false;
      state.accessToken = "";
      state.user = null;
      setSession(null);
      localStorage.clear();
    },
  },
});

export const { setToken, setAuthLoading, setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
