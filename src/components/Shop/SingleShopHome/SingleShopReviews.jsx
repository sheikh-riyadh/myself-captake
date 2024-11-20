import { FaFutbol } from "react-icons/fa";
import { useGetReviewBySellerIdQuery } from "../../../store/main/service/review/mainReviewApi";
import ReviewCard from "./ReviewCard";
import PropTypes from "prop-types";

const SingleShopReviews = ({ sellerId }) => {
  const { data, isLoading } = useGetReviewBySellerIdQuery(sellerId);

  return (
    <>
      {!isLoading ? (
        <div className="flex flex-col gap-5 mb-20">
          <div>
            <h2 className="font-bold text-lg">{`Seller reviews (${data?.length})`}</h2>
          </div>
          {data?.map((data) => (
            <ReviewCard key={data?._id} data={data} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-10">
          <FaFutbol className="animate-spin text-4xl" />
          <span>Loading...</span>
        </div>
      )}
    </>
  );
};

SingleShopReviews.propTypes = {
  sellerId: PropTypes.string,
};

export default SingleShopReviews;
