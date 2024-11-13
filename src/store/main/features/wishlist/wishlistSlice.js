import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userWishlist: [],
};

const userWishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    add_to_wishlist: (state, { payload }) => {
      const isExist = state.userWishlist.find(
        (list) => list?._id === payload?._id
      );
      if (isExist) {
        const filteredList = state?.userWishlist.filter(
          (list) => list._id !== payload?._id
        );
        state.userWishlist = filteredList;
      } else {
        state.userWishlist.push(payload);
      }
    },
  },
});

export const { add_to_wishlist } = userWishlistSlice.actions;
export default userWishlistSlice.reducer;
