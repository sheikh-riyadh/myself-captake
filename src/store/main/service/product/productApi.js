import { baseApi } from "../../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (sellerId) => ({
        url: `seller-products/${sellerId}`,
      }),
      providesTags: ["views"],
    }),
    getMostViewsProduct: build.query({
      query: () => ({
        url: `most-views-products`,
      }),
    }),
    getRatingProduct: build.query({
      query: (sellerId) => ({
        url: `seller-rating-products/${sellerId}`,
      }),
    }),
    updateViews: build.mutation({
      query: (data) => ({
        url: "update-views",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["views"],
    }),
    returnPolicy: build.query({
      query: (sellerId) => ({
        url: `seller-return-policy/${sellerId}`,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useUpdateViewsMutation,
  useGetMostViewsProductQuery,
  useReturnPolicyQuery,
  useGetRatingProductQuery,
} = productApi;
