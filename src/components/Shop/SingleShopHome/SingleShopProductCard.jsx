import PropTypes from "prop-types";
import cn from "../../../utils/cn";
import { numberWithCommas } from "../../../utils/numberWithComma";
import { GiShoppingBag } from "react-icons/gi";
import { FaHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductViewModal from "../../Modals/ProductViewModal";
import { useState } from "react";

const SingleShopProductCard = ({ className, imageSize }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className={cn(
          `rounded-xl p-3 lg:p-5 bg-white border-b-2 relative group`,
          className
        )}
      >
        <div className="flex items-center justify-center">
          <img
            className={cn(
              `h-32 w-32 lg:h-52 lg:w-full group-hover:scale-105 duration-500`,
              imageSize
            )}
            src="https://www.startech.com.bd/image/cache/catalog/laptop/msi/stealth-16-studio-a13vg-407bd/stealth-16-studio-a13vg-407bd-pure-white-01-500x500.webp"
            alt="product_image"
          />
        </div>
        <div>
          <Link to={"/product/12345"}>
            <p className="text-sm hover:underline hover:text-primary">{`MSI Stealth 16 Studio A13VG-407BD Core i9 13th Gen...`}</p>
          </Link>
          <div className="flex flex-wrap items-center gap-1 lg:gap-5">
            <span className="text-primary font-semibold">
              {`${numberWithCommas(299000)}৳`}
            </span>
            <span className="line-through font-semibold text-sm">{`${numberWithCommas(
              300000
            )}৳`}</span>
          </div>
        </div>
        <div className="absolute top-5 left-5">
          <div className="flex flex-col gap-3">
            <GiShoppingBag className="w-9 h-9 p-2 rounded-full bg-white shadow-md border hover:bg-primary hover:text-white duration-500 cursor-pointer" />
            <FaHeart className="w-9 h-9 p-2 rounded-full bg-white shadow-md border hover:bg-primary hover:text-white duration-500 cursor-pointer" />
            <FaSearch onClick={()=>setIsOpen(prev=>!prev)} className="w-9 h-9 p-2 rounded-full bg-white shadow-md border hover:bg-primary hover:text-white duration-500 cursor-pointer" />
          </div>
        </div>
      </div>
      {isOpen && <ProductViewModal onClose={setIsOpen} isOpen={isOpen} />}
    </div>
  );
};

SingleShopProductCard.propTypes = {
  className: PropTypes.string,
  imageSize: PropTypes.string,
};

export default SingleShopProductCard;
