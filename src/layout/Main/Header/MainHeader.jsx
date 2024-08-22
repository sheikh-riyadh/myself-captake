import {
  FaHeart,
  FaSearch,
  FaShoppingBasket,
  FaUserCircle,
} from "react-icons/fa";
const MainHeader = () => {
  return (
    <div className="bg-[#081621] my_container py-3 mb-8">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-7 flex items-center gap-10">
          <div>
            <img
              src="https://www.startech.com.bd/image/catalog/logo.png"
              alt="logo"
            />
          </div>
          <div className="flex items-center justify-between bg-white w-full p-2 rounded-md">
            <input
              className="w-full focus:outline-none px-1"
              type="text"
              placeholder="Search..."
            />
            <FaSearch />
          </div>
        </div>
        <div className="col-span-5">
          <div className="flex items-center justify-between gap-5">
            <div>
              <div className="flex items-center justify-center gap-2">
                <FaHeart className="text-2xl text-primary" />
                <div>
                  <span className="text-white">Wishlist</span>
                  <p className="text-sm text-[#ffffff80]">Items (0)</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2">
                <FaShoppingBasket className="text-2xl text-primary" />
                <div>
                  <span className="text-white">My Cart</span>
                  <p className="text-sm text-[#ffffff80]">Items (0)</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2">
                <FaUserCircle className="text-2xl text-primary" />
                <div>
                  <span className="text-white">Account</span>
                  <p className="text-sm text-[#ffffff80]">Register or Login</p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-secondary p-3 rounded-md flex items-center justify-center bg-gradient-to-r from-[#0bc1e9] via-[#3749bb] to-[#00237e] text-white">
                <button>
                  <span>Create Channel</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
