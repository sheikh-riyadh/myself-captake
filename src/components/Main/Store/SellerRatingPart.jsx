import { FaSpinner, FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { useGetReviewBySellerIdQuery } from "../../../store/main/service/review/mainReviewApi";
const SellerRatingPart = ({ seller }) => {
  const { data, isLoading } = useGetReviewBySellerIdQuery(seller?._id);
  return (
    <div>
      <span className="font-semibold">Rating and reviews</span>
      <div className="flex items-center gap-1">
        <FaStar className="text-warning" />
        {!isLoading ? (
          <span className="font-semibold">{`(${data?.length} Reviews)`}</span>
        ) : (
          <FaSpinner className="animate-spin" />
        )}
      </div>
    </div>
  );
};

SellerRatingPart.propTypes = {
  seller: PropTypes.object,
};

export default SellerRatingPart;
