import { useSelector } from "react-redux";

export const useQnAIndex = () => {
  return useSelector((state) => state.local.userqnaReducer.value);
};
