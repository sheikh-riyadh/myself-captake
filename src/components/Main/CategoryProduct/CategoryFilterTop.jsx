import { useDispatch } from "react-redux";
import { handleFilter } from "../../../store/main/features/category/categorySlice";
import { useLocation } from "react-router-dom";
import { useCategoryFilter } from "../../../hooks/useCategoryFilter";

const CategoryFilterTop = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const categoryData = location.state.payload;

  const { limit, sortedValue } = useCategoryFilter();

  return (
    <div className="my-14">
      <div className="border-b-2 p-5 bg-white rounded-xl">
        <div className="flex items-center justify-between gap-5">
          <span className="font-semibold">{categoryData?.category}</span>
          <div className="flex flex-wrap items-center gap-5">
            <div className="items-center gap-2 hidden md:flex">
              <span className="font-semibold">Limit:</span>
              <select
                onChange={(e) =>
                  dispatch(handleFilter({ limit: e.target.value }))
                }
                className="focus:outline-none border p-1 rounded-md text-base"
                defaultValue={limit}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="30">30</option>
                <option value="50">50</option>
              </select>
            </div>
            <div className="items-center gap-2 hidden md:flex">
              <span className="font-semibold">Sort by:</span>
              <select
                onChange={(e) =>
                  dispatch(handleFilter({ sortedValue: e.target.value }))
                }
                className="focus:outline-none border p-1 rounded-md text-base"
                defaultValue={sortedValue}
              >
                <option value="-1">{`Price (Low -> High)`}</option>
                <option value="1">{`Price (High -> Low)`}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilterTop;
