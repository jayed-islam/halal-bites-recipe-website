import { api } from "../../api";
export const recipeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createRecipe: builder.mutation({
      query: (body) => ({
        url: "/recipe/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["recipes"],
    }),
    getAllRecipes: builder.query({
      query: ({ pageNumber = 1, pageSize = 11, category, country, search }) => {
        let query = `/recipe/get-all-recipes?pageNumber=${pageNumber}&pageSize=${pageSize}`;

        if (category) {
          query += `&category=${category}`;
        }

        if (country) {
          query += `&country=${country}`;
        }

        if (search) {
          query += `&search=${search}`;
        }

        return {
          url: query,
          method: "GET",
        };
      },
      providesTags: ["Recipes"],
    }),
  }),
});

export const { useCreateRecipeMutation, useGetAllRecipesQuery } = recipeApi;
