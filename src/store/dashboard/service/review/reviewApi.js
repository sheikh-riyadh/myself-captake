import { baseApi } from "../../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getReviews: build.query({
      query: (userId) => ({
        url: `review/${userId}`,
      }),
      providesTags: ["review"],
    }),
    getReviewByOrderId: build.query({
      query: (orderId) => ({
        url: `review-orderId/${orderId}`,
      }),
      providesTags: ["review"],
    }),
    createReview: build.mutation({
      query: (data) => ({
        url: "create-review",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useCreateReviewMutation,
  useGetReviewByOrderIdQuery,
} = reviewApi;
