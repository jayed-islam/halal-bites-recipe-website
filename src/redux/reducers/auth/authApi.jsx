/* eslint-disable no-unused-vars */

import { api } from "../../api";
import { setAuthLoading, setUser } from "./authSlice";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({
        url: "/auth/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user-me"],
    }),
    getUserData: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["user-me"],

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setAuthLoading(true));
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          if (data.success) {
            dispatch(setUser(data.user));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    purchaseCoin: builder.mutation({
      query: ({ _id, ...body }) => ({
        url: `/auth/purchase-coin`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["user-me"],
    }),
  }),
});

export const {
  useGetUserDataQuery,
  useCreateUserMutation,
  usePurchaseCoinMutation,
} = authApi;
