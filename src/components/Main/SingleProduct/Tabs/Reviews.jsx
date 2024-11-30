import PropTypes from "prop-types";
import { useGetReviewByProductIdQuery } from "../../../../store/main/service/review/mainReviewApi";
import LoadingSpinner from "../../../Common/LoadingSpinner";
import { FaClipboard } from "react-icons/fa";
import ReviewCard from "../../../Shop/SingleShopHome/ReviewCard";
const Reviews = ({ productId }) => {
  const { data, isLoading } = useGetReviewByProductIdQuery(productId);

  return (
    <>
      {!isLoading ? (
        <div>
          {data?.length ? (
            <div>
              {data?.map((review) => (
                <ReviewCard key={review?._id} data={review} />
              ))}
            </div>
          ) : (
            <div className="flex gap-5 flex-col items-center justify-center w-full h-80 bg-white">
              <FaClipboard className="text-8xl text-slate" />
              <span className="font-medium text-xl text-accent capitalize">
                No data found
              </span>
            </div>
          )}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

Reviews.propTypes = {
  productId: PropTypes.string,
};

export default Reviews;
