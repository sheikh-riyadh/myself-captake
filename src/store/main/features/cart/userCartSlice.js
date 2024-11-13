import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCart: [],
};

const userCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_to_cart: (state, { payload }) => {
      const isExist = state.userCart.find((cart) => cart?._id === payload?._id);
      if (isExist) {
        const filteredCart = state?.userCart.filter(
          (cart) => cart._id !== payload?._id
        );
        state.userCart = filteredCart;
      } else {
        state.userCart.push(payload);
      }
    },
  },
});

export const { add_to_cart } = userCartSlice.actions;
export default userCartSlice.reducer;
