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
        url: "most-views-products",
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
  }),
});

export const {
  useGetProductsQuery,
  useUpdateViewsMutation,
  useGetMostViewsProductQuery,
} = productApi;
