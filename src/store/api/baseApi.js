import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://myself-captake-server.vercel.app/",
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
    "review"
  ],
  endpoints: () => ({}),
});
