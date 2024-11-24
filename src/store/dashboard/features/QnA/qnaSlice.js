import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    qNaIndex: 0,
    currentSize: 0,
    previousSize: 0,
    showSize: 0,
    isClicked: false,
  },
};

const qnaSlice = createSlice({
  name: "qna",
  initialState,
  reducers: {
    handleQuestionIndex: (state, { payload }) => {
      state.value.qNaIndex = payload;
    },
    handleQnASize: (state, { payload }) => {
      state.value.currentSize = payload;
      if (state.value.currentSize > state.value.previousSize) {
        console.log(
          `${state.value.previousSize} - ${state.value.currentSize} ${Math.abs(
            state.value.previousSize - payload
          )}`
        );
        state.value.showSize = Math.abs(state.value.previousSize - payload);
        console.log(`${state.value.showSize}`);
        state.value.previousSize = payload;
        state.value.isClicked = false;
      }
    },
    handleIsClicked: (state) => {
      state.value.isClicked = true;
      state.value.showSize = 0;
    },
  },
});

export const { handleQnAIndex, handleQnASize, handleIsClicked } =
  qnaSlice.actions;

export default qnaSlice.reducer;
