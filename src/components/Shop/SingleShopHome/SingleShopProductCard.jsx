import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import cn from "../../../utils/cn";
import { numberWithCommas } from "../../../utils/numberWithComma";
import { GiShoppingBag } from "react-icons/gi";
import { FaHeart, FaSearch } from "react-icons/fa";
import ProductViewModal from "../../Modals/ProductViewModal";
import toast from "react-hot-toast";

const SingleShopProductCard = ({ className, imageSize, product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = (product) => {
    if (product) {
      navigate(
        `/product/${product?.title?.toLowerCase()?.split(` `)?.join("-")}`,
        {
          state: {
            payload: { ...product },
          },
        }
      );
    } else {
      toast.error("Data missing!. Please try again!", { id: "product_error" });
    }
  };

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
            src={product?.productImages?.[0]}
            alt="product_image"
          />
        </div>
        <div>
          <div onClick={() => handleRedirect(product)}>
            <p className="text-sm hover:underline hover:text-primary cursor-pointer">
              {`${
                product?.title?.length > 50
                  ? `${product?.title?.slice(0, 50)}...`
                  : product?.title
              }`}
            </p>
          </div>
          {product?.specialPrice ? (
            <div className="flex flex-wrap items-center gap-1 lg:gap-5">
              <span className="text-primary font-semibold">
                {`${numberWithCommas(product?.specialPrice)}TK`}
              </span>
              <span className="line-through font-semibold text-sm">{`${numberWithCommas(
                product?.price
              )}TK`}</span>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-1 lg:gap-5">
              <span className="text-primary font-semibold">
                {`${numberWithCommas(product?.price)}TK`}
              </span>
            </div>
          )}
        </div>
        <div className="absolute top-5 left-5">
          <div className="flex flex-col gap-3">
            <GiShoppingBag className="w-9 h-9 p-2 rounded-full bg-white shadow-md border hover:bg-primary hover:text-white duration-500 cursor-pointer" />
            <FaHeart className="w-9 h-9 p-2 rounded-full bg-white shadow-md border hover:bg-primary hover:text-white duration-500 cursor-pointer" />
            <FaSearch
              onClick={() => setIsOpen((prev) => !prev)}
              className="w-9 h-9 p-2 rounded-full bg-white shadow-md border hover:bg-primary hover:text-white duration-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <ProductViewModal
          onClose={setIsOpen}
          isOpen={isOpen}
          productDetails={product}
        />
      )}
    </div>
  );
};

SingleShopProductCard.propTypes = {
  className: PropTypes.string,
  imageSize: PropTypes.string,
  product: PropTypes.object,
};

export default SingleShopProductCard;
