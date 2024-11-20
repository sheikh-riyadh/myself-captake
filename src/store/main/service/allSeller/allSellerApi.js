import { baseApi } from "../../../api/baseApi";

const allSellerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSeller: build.query({
      query: () => ({
        url: "all-seller",
      }),
    }),
  }),
});

export const { useGetAllSellerQuery } = allSellerApi;
