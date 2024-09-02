import { FaStar } from "react-icons/fa";
import ProductCard from "../../Common/ProductCard";
import StoreFilterTop from "./StoreFilterTop";

const StoreCard = () => {
  return (
    <div>
      <StoreFilterTop />
      <div className="p-5 bg-white rounded-xl">
        <div className="grid lg:grid-cols-2 xl:grid-cols-12 gap-5">
          <div className="xl:col-span-4 flex flex-col gap-3">
            <div>
              <img
                className="rounded-xl h-60 w-full"
                src="https://d3cn6pl0719mpa.cloudfront.net/04jlYF4fsF2M5cejiU8lw7G-2-1716442859902.jpg"
                alt="store_image"
              />
            </div>
            <div className="grid grid-cols-4 gap-5">
              {[...Array(4).keys()].map((keys) => (
                <div key={keys}>
                  <img
                    className="w-full h-16 rounded-xl"
                    src="https://d3cn6pl0719mpa.cloudfront.net/04jlYF4fsF2M5cejiU8lw7G-2-1716442859902.jpg"
                    alt="store_banner_image"
                  />
                </div>
              ))}
            </div>
            <div>
              <button className="text-center font-bold w-full bg-stech text-white py-2.5 rounded-xl">
                <span>View Store</span>
              </button>
            </div>
          </div>
          <div className="xl:col-span-8 flex flex-col gap-5">
            <div className="flex items-center flex-wrap justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 border rounded-md p-1"
                  src="https://d3cn6pl0719mpa.cloudfront.net/imageedit_2_7927626630-1715095718842.png"
                  alt="store_logo"
                />
                <h2 className="font-bold underline text-xl">BD Trust</h2>
              </div>
              <div>
                <span className="font-semibold">Rating and reviews</span>
                <div className="flex items-center gap-1">
                  <FaStar className="text-warning" />
                  <span className="font-semibold">{`(110 Reviews)`}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-5">
              {[...Array(4).keys()].map((category) => (
                <ProductCard key={category} className="border shadow" imageSize={"lg:h-[175px] xl:h-[178px] xl:w-full"}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
