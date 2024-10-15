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
import { Link } from "react-router-dom";

const RightSide = () => {
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

          {/* Update product quantity button */}
          <div className="grid grid-cols-2 gap-5 items-center justify-between">
            <div className="grid grid-cols-3 border items-center text-center rounded">
              <button className="p-3">
                <FaMinus />
              </button>
              <input className="focus:outline-none text-center " value="1" />
              <button className="p-3">
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
              <FaBasketShopping className="border text-xl w-full p-2.5 h-10 rounded bg-gradient-to-r from-[#0bc1e9] via-[#3749bb] to-[#00237e] text-white" />
              <FaHeart className="border text-xl w-full p-2.5 h-10 rounded bg-gradient-to-r from-[#0bc1e9] via-[#3749bb] to-[#00237e] text-white" />
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

export default RightSide;
