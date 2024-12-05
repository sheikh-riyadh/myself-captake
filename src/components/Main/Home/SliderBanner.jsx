import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ReactPlayer from "react-player";

import { Pagination, Autoplay } from "swiper/modules";
import customSliderBullets from "../../../utils/customSliderBullets";
import { useDefaultAdminBannerQuery } from "../../../store/main/service/adminBanner/adminBannerApi";
import AdminBannerSkeleton from "../../Skeleton/Main/AdminBanner/AdminBannerSkeleton";
import sideImg1 from "../../../assets/Main/Home/big_sell.jpg";
import sideImg2 from "../../../assets/Main/Home/winter.jpg";

const SliderBanner = () => {
  const { data, isLoading } = useDefaultAdminBannerQuery();

  return (
    <>
      {!isLoading ? (
        <div className="mt-[80px] lg:mt-24 xl:mt-[100px]">
          <div className="h-full lg:grid lg:grid-cols-12 gap-5">
            <div className="w-full h-full col-span-full lg:col-span-9 border-r-4 border-b-4">
              {data?.type === "image" ? (
                <Swiper
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  style={customSliderBullets()}
                  loop={true}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Autoplay, Pagination]}
                >
                  {data?.images?.map((banner) => (
                    <SwiperSlide key={banner}>
                      <div className="h-[200px] md:h-[350px] xl:h-[460px] w-full">
                        <img
                          className="h-full w-full object-fill"
                          src={banner}
                          alt="banner_image"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="flex justify-center items-center w-full">
                  <ReactPlayer
                    url={data?.videoURL}
                    controls
                    width="100%"
                    height="460px"
                  />
                </div>
              )}
            </div>
            <div className="lg:col-span-3 h-full w-full mt-5 lg:mt-0">
              <div className="h-full w-full grid grid-cols-1 gap-5">
                <div className="h-[200px] lg:h-[165px] xl:h-[220px] w-full border-r-4 border-b-4">
                  <img
                    className="object-fill h-full w-full"
                    src={sideImg1}
                    alt="banner_image"
                  />
                </div>
                <div className="h-[200px] lg:h-[165px] xl:h-[220px] w-full border-r-4 border-b-4">
                  <img
                    className="object-fill h-full w-full"
                    src={sideImg2}
                    alt="banner_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <AdminBannerSkeleton />
      )}
    </>
  );
};

export default SliderBanner;
