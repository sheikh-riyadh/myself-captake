import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limit: 20,
  sortedValue: 1,
  page: 1,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    handleFilter: (state, { payload }) => {
      if (payload.limit !== undefined) {
        state.limit = payload.limit;
      }
      if (payload.sortedValue !== undefined) {
        state.sortedValue = payload.sortedValue;
      }
      if (payload.page !== undefined) {
        state.page = payload.page;
      }
    },
  },
});

export const { handleFilter } = reviewSlice.actions;
export default reviewSlice.reducer;
