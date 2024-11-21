import { FaShoppingBasket } from "react-icons/fa";
import { useGetCart } from "../../../hooks/useGetCart";
import { useState } from "react";
import FloatingCartModal from "./FloatingCartModal";

const FloatingCart = () => {
  const { userCart } = useGetCart();
  const [isFloatingModalOpen, setIsFloatingModalOpen] = useState(false);

  return (
    <div>
      <div
        className="right-2 fixed flex bottom-24 xl:bottom-5 mr-2 z-40"
        onClick={() => setIsFloatingModalOpen((prev) => !prev)}
      >
        <div className="w-[60px] hidden md:block shadow-2xl shadow-[#081621] cursor-pointer duration-300 relative border-2 border-black hover:border-[#3749BB] rounded-md ">
          <div className="bg-[#081621] flex justify-center items-center flex-col px-1 py-1 border-2 border-black hover:bg-[#3749BB] hover:border-[#3749BB]">
            <FaShoppingBasket size={30} color="white" />
            <p className="text-white text-[10px]">CART</p>
          </div>
          <span className="absolute -top-3 -right-2 bg-primary px-1.5 py-0.5 rounded-full text-sm text-white font-bold">
            {userCart?.length}
          </span>
        </div>
      </div>
      {isFloatingModalOpen && (
        <FloatingCartModal onClose={setIsFloatingModalOpen} />
      )}
    </div>
  );
};

export default FloatingCart;
