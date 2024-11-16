import { baseApi } from "../../../api/baseApi";

const reportApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getReport: build.query({
      query: (id) => ({
        url: `user-report/${id}`,
      }),
      providesTags: ["user-report"],
    }),
    createReport: build.mutation({
      query: (data) => ({
        url: "user-add-report",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user-report"],
    }),
    getReportedSeller: build.query({
      query: (id) => ({
        url: `reported-seller/${id}`,
      }),
    }),
  }),
});

export const {
  useGetReportQuery,
  useCreateReportMutation,
  useGetReportedSellerQuery,
} = reportApi;
