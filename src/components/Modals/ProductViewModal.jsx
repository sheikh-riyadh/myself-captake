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
      className={`fixed  top-0 left-0 z-50 backdrop-blur-sm bg-[#2222227c] overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%)] max-h-full bg-black/90 flex flex-col justify-center items-center modal-overlay zoom-in-element ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className={cn(
          "bg-white rounded-lg p-5 shadow-lg w-[350px] md:w-[700px] md:h-[450px] lg:w-[750px] lg:h-[465px]  overflow-y-auto custom-bar",
          className
        )}
      >
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
                src={productDetails?.productImages?.[0]}
                alt="product_image"
              />

              <div className="flex flex-col gap-3">
                <p className="text-xl hover:underline hover:text-primary font-bold">
                  {`${
                    productDetails?.title?.length > 50
                      ? `${productDetails?.title?.slice(0, 50)}...`
                      : productDetails?.title
                  }`}
                </p>
                <hr />
                <div className="h-60 overflow-y-auto custom-bar">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: productDetails?.description,
                    }}
                  ></div>
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
  className: PropTypes.string,
};

export default ProductViewModal;
