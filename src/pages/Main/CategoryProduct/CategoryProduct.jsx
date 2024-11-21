import { FaClipboard, FaFutbol } from "react-icons/fa";
import ProductCard from "../../../components/Common/ProductCard";
import CategoryFilterTop from "../../../components/Main/CategoryProduct/CategoryFilterTop";
import { useCategoryFilter } from "../../../hooks/useCategoryFilter";
import { useGetCategoryProductsQuery } from "../../../store/main/service/product/productApi";

const CategoryProduct = () => {
  const { limit, sortedValue } = useCategoryFilter();

  const query = new URLSearchParams({
    limit,
    sortedValue,
  });

  const { data, isLoading } = useGetCategoryProductsQuery({
    query: query.toString(),
  });

  return (
    <>
      {!isLoading ? (
        <div>
          {data?.length ? (
            <div className="my_container my-[80px] lg:my-24 xl:my-[100px]">
              <div className=" ">
                <CategoryFilterTop />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {data?.map((product) => (
                  <ProductCard key={product?._id} product={product} />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex gap-5 flex-col items-center justify-center w-full h-80 bg-white">
              <FaClipboard className="text-8xl text-slate" />
              <span className="font-medium text-xl text-danger capitalize">
                No data found
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-80">
          <FaFutbol className="text-6xl animate-spin" />
        </div>
      )}
    </>
  );
};

export default CategoryProduct;
