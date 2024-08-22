import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import customSliderBullets from "../../../utils/customSliderBullets";

const SliderBanner = () => {
  return (
    <div>
      <div className="h-full lg:grid lg:grid-cols-12 gap-5">
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
          >
            <SwiperSlide>
              <div className="h-[200px] md:h-[350px] xl:h-[460px] w-full">
                <img
                  className="h-full w-full object-fill"
                  src="https://www.startech.com.bd/image/cache/catalog/home/gadget-fest-feb-web-982x500.png"
                  alt="banner_image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[200px] md:h-[350px] xl:h-[460px] w-full">
                <img
                  className="h-full w-full object-fill"
                  src="https://www.startech.com.bd/image/cache/catalog/home/banner/logitechdoubledeal%20queue%20-982x500.webp"
                  alt="banner_image"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="lg:col-span-3 h-full w-full mt-5 lg:mt-0">
          <div className="h-full w-full grid grid-cols-1 gap-5">
            <div className="h-[200px] lg:h-[165px] xl:h-[220px] w-full border-r-4 border-b-4">
              <img
                className="object-fill h-full w-full"
                src="https://www.startech.com.bd/image/catalog/home/banner/small/Shape-Your-Career-with-Us.png1.webp"
                alt="banner_image"
              />
            </div>
            <div className="h-[200px] lg:h-[165px] xl:h-[220px] w-full border-r-4 border-b-4">
              <img
                className="object-fill h-full w-full"
                src="https://www.startech.com.bd/image/catalog/home/banner/small/Shape-Your-Career-with-Us.png1.webp"
                alt="banner_image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderBanner;
