import { useEffect } from "react";
import PropTypes from "prop-types";
import { FaCircleXmark } from "react-icons/fa6";
import Button from "../Common/Button";
import cn from "../../utils/cn";

const ProductViewModal = ({
  isOpen = true,
  onClose,
  productDetails = null,
  src = null,
  className,
}) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && e.target.classList.contains("modal-overlay")) {
        onClose();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed  top-0 left-0 z-50 bg-[#2222227c] overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%)] max-h-full bg-black/90 flex flex-col justify-center items-center modal-overlay zoom-in-element ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className={cn("bg-white rounded-lg p-5 shadow-lg w-[350px] md:w-[700px] md:h-[450px] lg:w-[750px] lg:h-[465px]  overflow-y-auto custom-bar",className)}>
        <div className="flex flex-col">
          <div className="flex items-end justify-end">
            <FaCircleXmark
              onClick={() => onClose()}
              className="text-2xl hover:text-danger duration-300 cursor-pointer"
            />
          </div>
          {productDetails ? (
            <div className="md:grid grid-cols-2 gap-10">
              <img
                className="lg:h-[400px] w-full"
                src="https://www.startech.com.bd/image/cache/catalog/laptop/msi/stealth-16-studio-a13vg-407bd/stealth-16-studio-a13vg-407bd-pure-white-01-500x500.webp"
                alt="product_image"
              />

              <div className="flex flex-col gap-3">
                <p className="text-xl hover:underline hover:text-primary font-bold">{`MSI Stealth 16 Studio A13VG-407BD Core i9 13th Gen`}</p>
                <hr />
                <div className="h-60 overflow-y-auto custom-bar">
                  <p className="text-justify">
                    {`HP 15s-fq5342TU Core i5 12th Gen 15.6" FHD Laptop The HP 15s-fq5342TU Core i5 12th Gen 15.6" FHD Laptop is precisely designed to elevate your computing experience. At its core is the powerful Intel Core i5-1235U CPU, which has 12M cache and can reach speeds of up to 4.40 GHz. This powerhouse delivers seamless multitasking, fluid performance, and responsiveness across a broad range of tasks, from demanding jobs to immersive entertainment experiences. With 8GB of DDR4 RAM, the system can easily handle several apps, and the large 512GB SSD gives enough of storage space for your files, applications, and multimedia libraries, providing quick data access and smooth performance. The gorgeous 15.6-inch Full HD display with a resolution of 1920x1080 enhances your visual experience. Whether you're playing cinematic games, editing high-resolution films, or streaming your favorite movies, the display provides beautiful pictures with vibrant colors and fine details, bringing every moment to life with astonishing clarity. Beyond sheer speed, the HP 15s-fq5342TU laptop includes innovative capabilities to boost productivity and ease. Wi-Fi 6 connection provides quicker and more consistent internet access, allowing for smooth online collaboration and content streaming. The Mic Mute Key gives easy control over your audio, allowing you to rapidly quiet your microphone during calls or conferences. Furthermore, the built-in camera guarantees smooth video conferencing, making clear and sharp communication with colleagues, friends, and family members. The HP 15s-fq5342TU laptop, with its sleek and modern appearance, is more than simply a work tool; it's also a trendy accessory that fits into your lifestyle. Whether you're a professional on the road, a student navigating virtual classrooms, or an entertainment fanatic, this laptop is built to exceed your expectations and take your computing experience to new heights. With its strong performance, immersive display, and sophisticated features, the HP 15s-fq5342TU Core i5 12th Gen laptop is the ideal companion for work, study, and entertainment, keeping you productive and connected no matter where you go.`}
                  </p>
                </div>
                <Button>Buy now</Button>
              </div>
            </div>
          ) : (
            <div>
              <p className="hover:underline hover:text-primary font-bold">{`MSI Stealth 16 Studio A13VG-407BD Core i9 13th Gen`}</p>
              <video controls className="w-full h-full">
                <source
                  src={`${
                    src
                      ? src
                      : "https://d3cn6pl0719mpa.cloudfront.net/Lenovo-Ideapad-1-(2023)-Review---Unboxing,-benchmarks-and-more-1716443962546.mp4"
                  }`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ProductViewModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  productDetails: PropTypes.object,
  src: PropTypes.string,
  className: PropTypes.string
};

export default ProductViewModal;
