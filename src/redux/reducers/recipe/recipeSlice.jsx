import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: null,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipe: (state, action) => {
      state.recipes = action.payload;
    },
  },
});

export const { setRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
