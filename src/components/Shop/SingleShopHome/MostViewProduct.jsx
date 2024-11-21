import { useGetMostViewSellerProductQuery } from "../../../store/shop/service/sellerProduct/sellerProductApi";
import ProductCard from "../../Common/ProductCard";
import { FaSpinner } from "react-icons/fa";
import PropTypes from "prop-types";
const MostViewProduct = ({ sellerId }) => {
  const { data, isLoading } = useGetMostViewSellerProductQuery(sellerId);

  return (
    <div className="my-10 xl:my-20">
      <div className="flex flex-col justify-center items-center my-7">
        <h2 className="font-bold text-lg">Most Views Products</h2>
        <span>Check & Get Your Desired Product!</span>
      </div>
      {!isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {data?.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <FaSpinner className="animate-spin text-2xl" />
        </div>
      )}
    </div>
  );
};

MostViewProduct.propTypes = {
  sellerId: PropTypes.string,
};
export default MostViewProduct;
