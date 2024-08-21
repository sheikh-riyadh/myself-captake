import { FaRegHeart, FaSearch } from "react-icons/fa";
const MainHeader = () => {
  return (
    <div className="bg-black my_container py-5 mb-8">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-2">Logo</div>
            <div className="col-span-10">
              <div className="bg-white flex items-center py-2 rounded-md ml-8">
                <div className="w-full">
                  <input
                    className="focus:outline-none w-full block px-3"
                    type="text"
                    placeholder="Search..."
                  />
                </div>
                <div className="w-8">
                  <FaSearch className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="grid grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <FaRegHeart className="text-xl" />
                <span>Wishlist</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaRegHeart className="text-xl" />
                <span>Wishlist</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaRegHeart className="text-xl" />
                <span>Wishlist</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaRegHeart className="text-xl" />
                <span>Wishlist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
