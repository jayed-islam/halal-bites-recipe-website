import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import authSlice from "./reducers/auth/authSlice";
import recipeSlice from "./reducers/recipe/recipeSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    recipe: recipeSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
