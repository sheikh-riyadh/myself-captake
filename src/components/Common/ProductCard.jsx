import PropTypes from "prop-types";
import cn from "../../utils/cn";
import { numberWithCommas } from "../../utils/numberWithComma";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProductCard = ({ className, imageSize, product }) => {
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
      toast.error("Data missing!. Please try again!");
    }
  };

  return (
    <div
      onClick={() => handleRedirect(product)}
      className={cn(
        `rounded-xl p-3 lg:p-5 bg-white border-b-2 relative cursor-pointer`,
        className
      )}
    >
      <div className="flex product-center justify-center">
        <img
          className={cn(`h-32 w-32 lg:h-52 lg:w-full`, imageSize)}
          src={`${product?.productImages?.[0]}`}
          alt="product_image"
        />
      </div>
      <div>
        <p className="text-sm hover:underline hover:text-primary">
          {`${
            product?.title?.length > 50
              ? `${product?.title?.slice(0, 50)}...`
              : product?.title
          }`}
        </p>

        {product?.specialPrice ? (
          <div className="flex flex-wrap product-center gap-1 lg:gap-5">
            <span className="text-primary font-semibold">
              {`${numberWithCommas(product?.specialPrice)}TK`}
            </span>
            <span className="line-through font-semibold text-sm">{`${numberWithCommas(
              product?.price
            )}TK`}</span>
          </div>
        ) : (
          <div>
            <span className="text-primary font-semibold">
              {`${numberWithCommas(product?.price)}TK`}
            </span>
          </div>
        )}
      </div>
      <div className="absolute top-4 left-0">
        {product?.discount && (
          <span className="text-xs bg-primary text-white px-3 py-1 rounded-tr-xl rounded-br-xl">
            Save: {`${numberWithCommas(10000)}৳`}
          </span>
        )}
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  className: PropTypes.string,
  imageSize: PropTypes.string,
  product: PropTypes.object,
};
export default ProductCard;
