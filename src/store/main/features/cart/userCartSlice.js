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
    remove_cart: (state, { payload }) => {
      const filteredCart = state.userCart.filter(
        (cart) => cart?._id !== payload
      );
      state.userCart = filteredCart;
    },
    increament: (state, { payload }) => {
      const increamentProduct = state.userCart.find(
        (cart) => cart?._id === payload
      );
      increamentProduct.buyQnt++;
    },
    decreament: (state, { payload }) => {
      const decreamentProduct = state.userCart.find(
        (cart) => cart?._id === payload
      );
      if (decreamentProduct?.buyQnt > 1) {
        decreamentProduct.buyQnt--;
      }
    },
  },
});

export const { add_to_cart, remove_cart, increament, decreament } =
  userCartSlice.actions;
export default userCartSlice.reducer;
