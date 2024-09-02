import ReviewCard from "./ReviewCard";

const SingleShopReviews = () => {
  return (
    <div className="flex flex-col gap-5 mb-20">
      <div className="flex items-center gap-5 justify-between">
        <span className="font-medium ">{`1 - 5 out of 233 Reviews`}</span>
        <div>
          <select className="focus:outline-none border p-1 rounded-md text-base">
            <option value="recent">Most recent</option>
            <option value="recent">Old Reviews</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 w-1/4">
      <div className="flex w-full items-center gap-3">
          <span className="w-20 bg-stech text-white text-center font-semibold rounded-md">{`5 Star`}</span>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className={`bg-stech h-2 rounded-full w-full`}></div>
          </div>
          <span className="font-medium">{`(250)`}</span>
        </div>
        <div className="flex w-full items-center gap-3">
          <span className="w-20 bg-stech text-white text-center font-semibold rounded-md">{`4 Star`}</span>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className={`bg-stech h-2 rounded-full w-9/12`}></div>
          </div>
          <span className="font-medium">{`(250)`}</span>
        </div>
        <div className="flex w-full items-center gap-3">
          <span className="w-20 bg-stech text-white text-center font-semibold rounded-md">{`3 Star`}</span>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className={`bg-stech h-2 rounded-full w-7/12`}></div>
          </div>
          <span className="font-medium">{`(250)`}</span>
        </div>
        <div className="flex w-full items-center gap-3">
          <span className="w-20 bg-stech text-white text-center font-semibold rounded-md">{`2 Star`}</span>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className={`bg-stech h-2 rounded-full w-5/12`}></div>
          </div>
          <span className="font-medium">{`(250)`}</span>
        </div>
        <div className="flex w-full items-center gap-3">
          <span className="w-20 bg-stech text-white text-center font-semibold rounded-md">{`1 Star`}</span>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className={`bg-stech h-2 rounded-full w-1/12`}></div>
          </div>
          <span className="font-medium">{`(250)`}</span>
        </div>
      </div>
      {[...Array(6).keys()].map((key) => (
        <ReviewCard key={key} />
      ))}

      <div className="flex items-center gap-3">
        <button className="bg-stech px-4 py-1 text-white rounded-md font-semibold">
          Prev
        </button>
        <div className="flex items-center gap-2">
          {[...Array(5).keys()].map((key) => (
            <span
              className="bg-stech px-4 py-1 text-white rounded-md font-semibold"
              key={key}
            >
              {key + 1}
            </span>
          ))}
        </div>
        <button className="bg-stech px-4 py-1 text-white rounded-md font-semibold">
          Next
        </button>
      </div>
    </div>
  );
};

export default SingleShopReviews;
