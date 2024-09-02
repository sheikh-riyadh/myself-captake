import ReviewCard from "./ReviewCard";

const SingleShopReviews = () => {
  return (
    <div className="flex flex-col gap-5 mb-20">
      <div className="flex items-center gap-5 justify-between">
        <span>{`1 - 5 out of 233 Reviews`}</span>
        <div>
          <select className="focus:outline-none border p-1 rounded-md text-base">
            <option value="recent">Most recent</option>
            <option value="recent">Old Reviews</option>
          </select>
        </div>
      </div>
      {[...Array(6).keys()].map((key) => (
        <ReviewCard key={key} />
      ))}

      <div className="flex items-center gap-3">
        <button className="bg-stech px-4 py-1 text-white rounded-md font-semibold">Prev</button>
        <div className="flex items-center gap-2">
          {[...Array(5).keys()].map((key) => (
            <span className="bg-stech px-4 py-1 text-white rounded-md font-semibold" key={key}>{key + 1}</span>
          ))}
        </div>
        <button className="bg-stech px-4 py-1 text-white rounded-md font-semibold">Next</button>
      </div>
    </div>
  );
};

export default SingleShopReviews;
