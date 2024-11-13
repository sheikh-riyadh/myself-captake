import { products } from "../../../data/product";
import ProductCard from "../../Common/ProductCard";

const FeatureProducts = () => {
  return (
    <div className="my-10 xl:my-20">
      <div className="flex flex-col justify-center items-center my-7">
        <h2 className="font-bold text-lg">Featured Products</h2>
        <span>Check & Get Your Desired Product!</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {products.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
