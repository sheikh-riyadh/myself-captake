import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import customSliderBullets from "../../../utils/customSliderBullets";
import { FaEnvelope, FaPlayCircle } from "react-icons/fa";

const SingleShopBanner = () => {
  return (
    <div className="mt-[68px] lg:mt-28 xl:mt-[100px]">
      <div className="h-full lg:grid lg:grid-cols-12 gap-5">
        <div className="lg:col-span-3 h-full w-full mt-5 lg:mt-0 hidden lg:block">
          <div className="h-full w-full bg-white">
            <div className="flex flex-col items-center justify-between h-full w-full pt-16">
              <div className="flex flex-col items-center gap-3">
                <img
                  className="w-32 h-32 border-4 rounded-full border-[#081621]"
                  src="https://d3cn6pl0719mpa.cloudfront.net/imageedit_2_7927626630-1715095718842.png"
                  alt="shop_logo"
                />
                <h2 className="font-bold text-3xl text-black">BD Trust</h2>
                <div className="flex items-center gap-2 text-lg font-bold">
                  <FaEnvelope className="text-base" />
                  <span>Chat Now</span>
                </div>
                <div className="flex items-center gap-3  bg-danger px-3 py-1 text-white rounded-full">
                  <FaPlayCircle className=" animate-ping" />
                  <span>Live</span>
                </div>
                <span className="px-10 pb-5 xl:px-16 w-full text-center font-semibold">2025 Followers 85% Positive Store Rating</span>
              </div>
              <div className="border-t w-full flex flex-col items-center justify-center">
                <button className="w-full p-3 text-primary font-semibold text-lg">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full col-span-full lg:col-span-9 border-r-4 border-b-4">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            style={customSliderBullets()}
            loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            className="h-[220px] md:h-[360px] lg:h-[460px]"
          >
            <SwiperSlide>
              <div className="h-full">
                <img
                  className="h-full w-full object-fill"
                  src="https://www.startech.com.bd/image/cache/catalog/home/gadget-fest-feb-web-982x500.png"
                  alt="banner_image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full">
                <img
                  className="h-full w-full object-fill"
                  src="https://www.startech.com.bd/image/cache/catalog/home/banner/logitechdoubledeal%20queue%20-982x500.webp"
                  alt="banner_image"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SingleShopBanner;
