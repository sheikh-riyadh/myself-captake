import PropTypes from "prop-types";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const Product = ({ product }) => {
  return (
    <div className="bg-white mt-[68px] lg:mt-28 xl:mt-[75px]">
      <div className="my_container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="col-span-5">
            <LeftSide product={product}/>
          </div>
          <div className="col-span-7">
            <RightSide product={product}/>
          </div>
        </div>
      </div>
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.object,
};
export default Product;
