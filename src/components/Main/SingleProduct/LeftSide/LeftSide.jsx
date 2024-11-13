import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";
import ProductViewModal from "../../../Modals/ProductViewModal";

const LeftSide = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-10 flex flex-col gap-5 items-center justify-center">
      <img
        className="w-[400px] md:h-[400px]"
        src={product?.productImages?.[0]}
        alt="product_image"
      />

      <div className="flex items-center gap-3">
        <FaPlay
          className="border w-14 h-14 rounded p-3"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        {[...Array(4).keys()].map((key) => (
          <div key={key}>
            <img
              className="border w-14 h-14 rounded p-1"
              src="https://www.startech.com.bd/image/cache/catalog/digital-camera/sony/alpha-a6400/alpha-a6400-3-500x500.jpg"
              alt="product_gallery_image"
            />
          </div>
        ))}
        <div>
          {isOpen && <ProductViewModal onClose={setIsOpen} isOpen={isOpen} />}
        </div>
      </div>
    </div>
  );
};

LeftSide.propTypes = {
  product: PropTypes.object,
};

export default LeftSide;
