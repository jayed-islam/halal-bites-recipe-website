/* eslint-disable no-undef */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.VITE_SERVER_API}/api/v1/`,
    prepareHeaders: async (headers) => {
      const accessToken = localStorage?.getItem("accessToken");
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "user-me", "recipes", "single-recipe"],
  endpoints: () => ({}),
});
