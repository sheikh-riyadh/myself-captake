import { baseApi } from "../../../api/baseApi";

const sellerProductApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMostViewSellerProduct: build.query({
      query: (sellerId) => ({
        url: `seller-most-views-products/${sellerId}`,
      }),
    }),
    getSellerLatestProducts: build.query({
      query: (sellerId) => ({
        url: `seller-latest-product/${sellerId}`,
      }),
    }),
  }),
});

export const { useGetMostViewSellerProductQuery,useGetSellerLatestProductsQuery } = sellerProductApi;
