const FeatureCategorySkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-2 md:grid-cols-6 xl:grid-cols-8 md:gap-5 lg:gap-5">
      {[...Array(16).keys()].map((category) => (
        <div
          key={category}
          className="border-b-2 rounded-xl p-5 bg-white flex flex-col justify-center items-center animate-pulse"
        >
          <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
          <div className="mt-2 h-4 w-16 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCategorySkeleton;
