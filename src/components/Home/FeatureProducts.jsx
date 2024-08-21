import FeatureProductCard from "./FeatureProductCard";

const FeatureProducts = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col justify-center items-center my-7">
        <h2 className="font-bold text-lg">Featured Products</h2>
        <span>Check & Get Your Desired Product!</span>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {[...Array(16).keys()].map((category) => (
          <FeatureProductCard key={category}/>
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
