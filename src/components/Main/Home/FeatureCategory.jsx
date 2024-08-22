const FeatureCategory = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col justify-center items-center my-7">
        <h2 className="font-bold text-lg">Featured Category</h2>
        <span>Get Your Desired Product from Featured Category!</span>
      </div>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-6 xl:grid-cols-8 md:gap-5 lg:gap-5">
        {[...Array(16).keys()].map((category) => (
          <div
            key={category}
            className="border-b-2 rounded-xl p-5 bg-white flex flex-col justify-center items-center"
          >
            <img
              src="https://www.startech.com.bd/image/cache/catalog/category-thumb/ac-48x48.png"
              alt="category_image"
              className="h-12 w-12"
            />
            <span>AC</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCategory;
