import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_api_url}`,
  // credentials: "include",
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: [
    "user",
    "user-address",
    "user-report",
    "views",
    "seller-default-banner",
    "seller-brands",
    "announcement",
    "product-questions",
    "order",
    "review",
  ],
  endpoints: () => ({}),
});
