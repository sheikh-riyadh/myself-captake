import { FaSearch, FaShoppingBasket } from "react-icons/fa";

const MobileHeader = () => {
  return (
    <div className="bg-stech py-2  fixed w-full z-50 top-0 block xl:hidden">
      <div className="my_container">
        <div className="flex items-center justify-between">
          <div>
            <img
              className="w-20"
              src="https://www.startech.com.bd/image/catalog/logo.png"
              alt="logo"
            />
          </div>
          <div className="flex items-center gap-5">
            <div>
              <FaSearch className="text-xl text-white" />
            </div>
            <div className="relative">
              <div className="absolute  -top-3 bg-primary px-1 rounded-full text-center flex items-center justify-center">
                <span className="text-xs text-white font-medium">15</span>
              </div>
              <FaShoppingBasket className="text-xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
