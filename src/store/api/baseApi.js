import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/",
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
  ],
  endpoints: () => ({}),
});
