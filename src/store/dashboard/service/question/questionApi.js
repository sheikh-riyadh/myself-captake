import { baseApi } from "../../../api/baseApi";

const questionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQnA: build.query({
      query: (userId) => ({
        url: `user-product-questions/${userId}`,
      }),
    }),
  }),
});

export const { useGetQnAQuery } = questionApi;