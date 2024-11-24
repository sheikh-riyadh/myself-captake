import { useSelector } from "react-redux";

export const useCategoryFilter = () => {
  return useSelector((state) => state?.session?.userCategoryProductReducer);
};
