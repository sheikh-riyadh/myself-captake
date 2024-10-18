import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import comma from "../../../assets/Main/Review/drop-red-bc80918e.svg";
import customSliderBullets from "../../../utils/customSliderBullets";
const ReviewCarousel = () => {
  return (
    <div className="mb-10 xl:mb-20 my_container">
      <div className="flex flex-col justify-center gap-2 items-center my-7 text-center">
        <h2 className="font-bold text-3xl">{`Customer Love`}</h2>
        <span>Get Your Desired Product from Featured Category!</span>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={customSliderBullets(15, "#dc3545", "#2222228e", 15, 50, 5)}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <div>
          {[...Array(10).keys()].map((key) => (
            <SwiperSlide key={key}>
              <div className="flex flex-col gap-5 border p-5 rounded-md">
                <img className="w-8" src={comma} alt="drop_red" />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto consequuntur quod perferendis sint, voluptatem qui
                  quae, explicabo iste neque nesciunt quam! Temporibus numquam
                  nesciunt provident corrupti eius qui mollitia similique, quis
                  adipisci cum dolor beatae vitae iusto maxime quam amet
                  ducimus, tenetur maiores repellat doloribus harum dolores
                  velit ipsam! Nobis!
                </span>
                <div className="flex items-center gap-5">
                  <img
                    className="w-16 h-16 rounded-full"
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/157d2d0d0c06b7c34450261e005b28be-1664305937048/3521d275-e9ba-48e2-8d28-a34d44a0d660.jpg"
                    alt="reviewer_photo"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">Shunno Ayon</span>
                    <span className="text-lg italic font-medium">Dighal</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default ReviewCarousel;
