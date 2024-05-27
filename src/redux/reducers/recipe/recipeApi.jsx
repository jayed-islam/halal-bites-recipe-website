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
    reactRecipeByUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `/recipe/${id}/reactions`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["single-recipe"],
    }),
    getSingleRecipe: builder.query({
      query: (id) => ({
        url: `/recipe/get-one/${id}`,
        method: "GET",
      }),
      providesTags: ["single-recipe"],
      invalidatesTags: ["category"],
    }),
    getCategoryBasedRecipe: builder.query({
      query: (category) => ({
        url: `/recipe/suggestions?category=${category}`,
        method: "GET",
      }),
      providesTags: ["category"],
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
    confirmRecipeTrns: builder.mutation({
      query: (body) => ({
        url: "/recipe/confirm",
        method: "POST",
        body,
      }),
      invalidatesTags: ["single-recipe"],
    }),
  }),
});

export const {
  useCreateRecipeMutation,
  useGetAllRecipesQuery,
  useConfirmRecipeTrnsMutation,
  useGetSingleRecipeQuery,
  useReactRecipeByUserMutation,
  useGetCategoryBasedRecipeQuery,
} = recipeApi;
