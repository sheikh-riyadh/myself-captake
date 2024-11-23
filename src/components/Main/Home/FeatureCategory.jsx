import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../../../store/main/service/category/categoryApi";
import FeatureCategorySkeleton from "../../Skeleton/Main/FeatureCategory/FeatureCategorySkeleton";
import toast from "react-hot-toast";

const FeatureCategory = () => {
  const { data, isLoading } = useGetCategoriesQuery();
  const navigate = useNavigate();

  const handleRedirect = (category) => {
    if (category) {
      navigate(
        `category-products?${category?.category
          ?.toLowerCase()
          ?.split(` `)
          ?.join("-")}`,
        {
          state: {
            payload: { ...category },
          },
        }
      );
    } else {
      toast.error("Data missing!. Please try again!", { id: "product_error" });
    }
  };

  return (
    <div className="my-10 xl:my-20">
      <div className="flex flex-col justify-center items-center my-7 text-center">
        <h2 className="font-bold text-lg">Featured Category</h2>
        <span>Get Your Desired Product from Featured Category!</span>
      </div>
      {data?.length ? (
        <>
          {!isLoading ? (
            <div className="grid grid-cols-3 gap-2 md:grid-cols-6 xl:grid-cols-8 md:gap-5 lg:gap-5">
              {data?.map((category) => (
                <div
                  onClick={() => handleRedirect(category)}
                  key={category?._id}
                  className="border-b-2 rounded-xl p-3 bg-white flex flex-col justify-center items-center gap-2 cursor-pointer"
                >
                  <img
                    src={category?.image}
                    alt="category_image"
                    className="h-12 w-12"
                  />
                  <span className="text-sm">{category?.category}</span>
                </div>
              ))}
            </div>
          ) : (
            <FeatureCategorySkeleton />
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <span>No data found</span>
        </div>
      )}
    </div>
  );
};

export default FeatureCategory;
