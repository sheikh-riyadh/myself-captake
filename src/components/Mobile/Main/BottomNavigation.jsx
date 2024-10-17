import {
  FaHeart,
  FaSearch,
  FaShoppingBasket,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const BottomNavigation = () => {
  return (
    <div className="flex items-center bg-stech my_container py-3 justify-between gap-5  w-full fixed bottom-0 z-50 border-t xl:hidden">
      <Link to={'/cart'} className="flex flex-col items-center">
        <FaShoppingBasket className="text-xl text-white" />
        <span className="text-[#ffffff80]">Cart (0)</span>
      </Link>
      <Link to={'/wishlist'} className="flex flex-col items-center">
        <FaHeart className="text-xl text-white" />
        <span className="text-[#ffffff80]">Wishlist (0)</span>
      </Link>
      <div className="flex flex-col items-center">
        <FaSearch className="text-xl text-white" />
        <span className="text-[#ffffff80]">Account</span>
      </div>
      <div className="flex flex-col items-center">
        <FaUserCircle className="text-xl text-white" />
        <span className="text-[#ffffff80]">Account</span>
      </div>
    </div>
  );
};

export default BottomNavigation;
