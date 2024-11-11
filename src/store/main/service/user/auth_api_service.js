import { baseApi } from "../../../api/baseApi";

const auth_api_service = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (data) => ({
        url: `user/${data}`,
      }),
      providesTags: ["user"],
    }),
    createUser: build.mutation({
      query: (payload) => ({
        url: "user-create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["user"],
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: "user-update",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateUserMutation, useGetUserQuery, useLazyGetUserQuery } =
  auth_api_service;
