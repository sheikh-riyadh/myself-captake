import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  FaAngleRight,
  FaExclamationCircle,
  FaHeart,
  FaMinus,
  FaMoneyBillAlt,
  FaPlus,
  FaTruck,
} from "react-icons/fa";
import { numberWithCommas } from "../../../../utils/numberWithComma";
import { FaBasketShopping } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { PiKeyReturnFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../../../../store/main/features/cart/userCartSlice";
import { useGetCart } from "../../../../hooks/useGetCart";
import { useGetWishlist } from "../../../../hooks/useGetWishlist";
import { add_to_wishlist } from "../../../../store/main/features/wishlist/wishlistSlice";

const RightSide = ({ product }) => {
  const [buyQnt, setBuyQnt] = useState(1);

  const disptach = useDispatch();
  const { userCart } = useGetCart();
  const { userWishlist } = useGetWishlist();

  const handleIncreament = () => {
    setBuyQnt((prev) => prev + 1);
  };

  const handleDecreament = () => {
    if (buyQnt >= 2) setBuyQnt((prev) => prev - 1);
  };

  const handleCart = () => {
    const cartData = {
      title: product?.title,
      price: product?.price,
      sellerId: product?.sellerId,
      _id: product?._id,
      image:product?.productImages?.[0],
      buyQnt,
    };
    disptach(add_to_cart(cartData));
  };

  const handleWishlist = () => {
    const wishlistData = {
      title: product?.title,
      price: product?.price,
      sellerId: product?.sellerId,
      _id: product?._id,
      buyQnt,
    };
    disptach(add_to_wishlist(wishlistData));
  };

  return (
    <div>
      <div>
        {/* Product short description */}
        <div className="flex flex-col gap-3 pt-5">
          <h1 className="font-semibold text-2xl">
            Canon EOS R100 Mirrorless Camera with 18-45mm Lens
          </h1>
          <p className="">{`The Canon EOS R100 Mirrorless Camera is a powerful imaging tool that allows you to easily and precisely shoot spectacular images and movies. This camera's 24.2MP APS-C CMOS sensor, along with the DIGIC 8 image processor, provides superb image quality and performance, allowing you to capture every moment in vivid detail.`}</p>
          <hr />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-3">
          {/* Product key features */}
          <div className="flex flex-col gap-3 pt-3">
            <h2 className="font-bold">Key Features</h2>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaAngleRight />
                <span>Model: Sony Alpha A6400</span>
              </div>
              <div className="flex items-center gap-2">
                <FaAngleRight />
                <span>24.2MP APS-C Exmor CMOS Sensor</span>
              </div>
              <div className="flex items-center gap-2">
                <FaAngleRight />
                <span>BIONZ X Image Processor</span>
              </div>
              <div className="flex items-center gap-2">
                <FaAngleRight />
                <span>Real-Time Eye AF; Real-Time Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <FaAngleRight />
                <span>XGA Tru-Finder 2.36m-Dot OLED EVF</span>
              </div>
            </div>
          </div>

          {/* Product price */}
          <div className="flex items-center gap-5">
            <span className="font-semibold text-xl text-primary">{`${numberWithCommas(
              300000
            )}৳`}</span>
            <span className="line-through font-semibold text-xl">{`${numberWithCommas(
              350000
            )}৳`}</span>
          </div>

          {/* Update product buyQnt button */}
          <div className="grid grid-cols-2 gap-5 items-center justify-between">
            <div className="grid grid-cols-3 border items-center text-center rounded">
              <button onClick={handleDecreament} className="p-3">
                <FaMinus />
              </button>
              <input
                className="focus:outline-none text-center "
                value={buyQnt}
              />
              <button onClick={handleIncreament} className="p-3">
                <FaPlus />
              </button>
            </div>
            <div>
              <button className="py-2 text-center text-white font-semibold bg-primary w-full rounded">
                Buy Now
              </button>
            </div>
          </div>

          {/* View store ,wishlist, add to card button */}
          <div className="flex gap-5 w-full">
            <div className="flex items-center justify-between gap-5 w-full">
              <FaBasketShopping
                onClick={handleCart}
                className={`border text-xl w-full p-2.5 h-10 rounded ${
                  userCart?.find((cart) => cart?._id === product?._id)
                    ? " bg-gradient-to-r from-[#0bc1e9] via-[#3749bb] to-[#00237e] text-white"
                    : null
                }`}
              />
              <FaHeart
                onClick={handleWishlist}
                className={`border text-xl w-full p-2.5 h-10 rounded ${
                  userWishlist?.find((list) => list?._id === product?._id)
                    ? " bg-gradient-to-r from-[#0bc1e9] via-[#3749bb] to-[#00237e] text-white"
                    : null
                }`}
              />
            </div>
            <Link
              to="/single-store/123"
              className="font-semibold w-full rounded bg-stech text-white"
            >
              <button className="py-2 font-semibold w-full rounded bg-stech text-white">
                View Store
              </button>
            </Link>
          </div>
        </div>

        {/* Delivery info */}
        <div className="bg-[#f3f4f8] px-5 py-3 flex flex-col gap-3 text-[15px]">
          <div className="flex items-center justify-between gap-5">
            <span>Delivery</span>
            <FaExclamationCircle />
          </div>
          <hr />
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <FaTruck />
                <span>Free Delivery</span>
              </div>
              <span className="text-primary font-medium">Free</span>
            </div>
            <span className="bg-white p-2 rounded">
              Enjoy free shipping promotion with minimum spend of ৳ 499 from
            </span>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <FaMoneyBillAlt />
              <span>Cash on Delivery not available</span>
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-between gap-5">
            <span>Service</span>
            <FaExclamationCircle />
          </div>
          <div>
            <div className="flex items-center gap-3 text-violet-900">
              <AiFillSafetyCertificate />
              <span>100% Authentic from Trusted Brand</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 text-violet-900">
              <PiKeyReturnFill />
              <span>14 Days free & easy return</span>
            </div>
            <span className="text-xs">Change of mind is not available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

RightSide.propTypes = {
  product: PropTypes.object,
};
export default RightSide;
