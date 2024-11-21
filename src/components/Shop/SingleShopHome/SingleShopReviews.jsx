import { FaFutbol } from "react-icons/fa";
import { useGetReviewBySellerIdQuery } from "../../../store/main/service/review/mainReviewApi";
import ReviewCard from "./ReviewCard";
import PropTypes from "prop-types";
import SelectInput from "../../Common/SelectInput";
import { useDispatch } from "react-redux";
import { useReviewFilter } from "../../../hooks/useReviewFilter";
import { handleFilter } from "../../../store/shop/features/reviewSlice";

const SingleShopReviews = ({ sellerId }) => {
  const dispatch = useDispatch();
  const { limit, sortedValue } = useReviewFilter();

  
  const query = new URLSearchParams({
    limit,
    sellerId,
    sortedValue,
  });

  const { data, isLoading } = useGetReviewBySellerIdQuery({
    query: query.toString(),
  });

  return (
    <>
      {!isLoading ? (
        <div className="flex flex-col gap-5 mb-20">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-lg">{`Seller reviews (${data?.length})`}</h2>
            <SelectInput
              defaultValue={sortedValue}
              onChange={(e) =>
                dispatch(handleFilter({ sortedValue: e.target.value }))
              }
              className="border bg-white px-10"
            >
              <option value="1">Oldest</option>
              <option value="-1">Newest</option>
            </SelectInput>
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
