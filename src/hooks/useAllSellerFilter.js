import { useSelector } from "react-redux";

export const useAllSellerFilter = () => {
  return useSelector((state) => state?.session?.userAllSellerFilterReducer);
};
