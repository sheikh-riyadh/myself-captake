import { baseApi } from "../../../api/baseApi";

const auth_api_service = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: "/",
      }),
    }),
    createUser: build.mutation({
      query: (payload) => ({
        url: "/user",
        method: "POST",
        body: payload,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useCreateUserMutation, useGetUserQuery } = auth_api_service;
