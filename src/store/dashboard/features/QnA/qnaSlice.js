import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    qNaIndex: 0,
  },
};

const qnaSlice = createSlice({
  name: "qna",
  initialState,
  reducers: {
    handleQuestionIndex: (state, { payload }) => {
      state.value.qNaIndex = payload;
    },
  },
});

export const { handleQnAIndex } = qnaSlice.actions;

export default qnaSlice.reducer;
