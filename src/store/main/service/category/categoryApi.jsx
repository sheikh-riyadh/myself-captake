import { baseApi } from "../../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => ({
        url: "category",
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
