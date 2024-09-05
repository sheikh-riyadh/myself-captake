import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const Product = () => {
  return (
    <div className="bg-white mt-[68px] lg:mt-28 xl:mt-[75px]">
      <div className="my_container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <LeftSide />
          </div>
          <div>
            <RightSide/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
