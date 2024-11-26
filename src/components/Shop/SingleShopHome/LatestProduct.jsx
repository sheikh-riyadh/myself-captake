import { FaSpinner } from "react-icons/fa";
import { useGetSellerLatestProductsQuery } from "../../../store/shop/service/sellerProduct/sellerProductApi";
import SingleShopProductCard from "./SingleShopProductCard";
import PropTypes from "prop-types";

const LatestProduct = ({ sellerId }) => {
  const { data, isLoading } = useGetSellerLatestProductsQuery(sellerId);

  return (
    <>
      {!isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {data?.map((product) => (
            <div key={product?._id} className="h-full">
              <SingleShopProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <FaSpinner className="animate-spin text-2xl" />
        </div>
      )}
    </>
  );
};

LatestProduct.propTypes = {
  sellerId: PropTypes.string,
};
export default LatestProduct;
