import PropTypes from "prop-types";
import ProductCard from "../../Common/ProductCard";
import { useGetRatingProductQuery } from "../../../store/main/service/product/productApi";
import { FaClipboard } from "react-icons/fa";

const SellerProductPart = ({ seller }) => {
  const { data, isLoading } = useGetRatingProductQuery(seller?._id);

  return (
    <>
      {!isLoading ? (
        <div className="h-full">
          {data?.length ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-5">
              {data?.slice(0, 4)?.map((product) => (
                <ProductCard
                  key={product?._id}
                  product={product}
                  className="border shadow"
                  imageSize={"lg:h-[175px] xl:h-[178px] xl:w-full"}
                />
              ))}
            </div>
          ) : (
            <div className="flex gap-5 flex-col items-center justify-center w-full h-full bg-white">
              <FaClipboard className="text-8xl text-slate" />
              <span className="font-medium text-xl text-danger capitalize">
                No data found
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {[...Array(4).keys()].map((_, idx) => (
            <div
              key={idx}
              className="border shadow bg-gray-200 rounded-xl h-[178px] w-full animate-pulse"
            ></div>
          ))}
        </div>
      )}
    </>
  );
};

SellerProductPart.propTypes = {
  seller: PropTypes.object,
};
export default SellerProductPart;
