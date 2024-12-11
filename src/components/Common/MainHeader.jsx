import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaSearch,
  FaShoppingBasket,
  FaUserCircle,
  FaStore,
} from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { useGetUser } from "../../hooks/useGetUser";
import { useGetCart } from "../../hooks/useGetCart";
import { useGetWishlist } from "../../hooks/useGetWishlist";
import GlobalSearch from "../Main/GlobalSearch/GlobalSearch";
import { useSearchProductQuery } from "../../store/main/service/product/productApi";
const MainHeader = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useGetUser();
  const { userCart } = useGetCart();
  const { userWishlist } = useGetWishlist();

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchValue(inputValue.trim());
    }, 500);

    return () => clearTimeout(timeout);
  }, [inputValue]);

  const query = searchValue
    ? new URLSearchParams({
        title: searchValue,
        limit: 10,
        page: 1,
        sellerId: undefined,
      }).toString()
    : null;

  const { data, isLoading } = useSearchProductQuery(query ? query : null);

  return (
    <header className="bg-widget fixed w-full z-50 top-0">
      <div className="my_container py-3">
        <div className="grid xl:grid-cols-2 gap-10">
          <div className="flex items-center gap-10">
            <div>
              <Link to="/">
                <div>
                  <img src="/logo.png" alt="logo" className="w-48" />
                </div>
              </Link>
            </div>
            <div className="flex items-center justify-between bg-white w-full p-2 rounded-md relative">
              <input
                onChange={(e) => handleChange(e)}
                onFocus={(e) => handleChange(e)}
                className="w-full focus:outline-none px-1"
                type="text"
                placeholder="Search..."
              />
              <FaSearch />
              {isModalOpen && (
                <GlobalSearch
                  isLoading={isLoading}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  data={data}
                />
              )}
            </div>
          </div>
          <div className="hidden xl:block">
            <div className="flex items-center justify-between gap-5">
              <Link to={"/store"}>
                <div className="flex items-center justify-center gap-2">
                  <FaStore className="text-2xl xl:text-xl text-accent" />
                  <div>
                    <span className="text-white">All Store</span>
                    <p className="text-sm text-slate">{`View Store`}</p>
                  </div>
                </div>
              </Link>
              <Link to={"/wishlist"}>
                <div className="flex items-center justify-center gap-2">
                  <FaHeart className="text-2xl xl:text-xl text-accent" />
                  <div>
                    <span className="text-white">Wishlist</span>
                    <p className="text-sm text-slate">{`Items (${userWishlist?.length})`}</p>
                  </div>
                </div>
              </Link>
              <Link to={"/cart"}>
                <div className="flex items-center justify-center gap-2">
                  <FaShoppingBasket className="text-2xl xl:text-xl text-accent" />
                  <div>
                    <span className="text-white">My Cart</span>
                    <p className="text-sm text-slate">{`Items (${userCart?.length})`}</p>
                  </div>
                </div>
              </Link>
              <div>
                {!user ? (
                  <div className="flex items-center justify-center gap-2">
                    <FaUserCircle className="text-2xl xl:text-xl text-accent" />
                    <div>
                      <span className="text-white">Account</span>
                      <div className="text-sm xl:text-xs text-slate">
                        <Link to="/sign-up">Register</Link> or{" "}
                        <Link to="/sign-in">Login</Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <MdWindow className="text-2xl xl:text-xl text-accent" />
                    <div>
                      <span className="text-white">Dashboard</span>
                      <div className="text-sm xl:text-xs text-slate">
                        <Link to={"/dashboard"}>Go to dashbaord</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div className="p-3 rounded-sm flex items-center justify-center text-white bg-[#047857]">
                  <button>
                    <a
                      href="https://seller-center-32880.web.app"
                      target="_blank"
                    >
                      Create Channel
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
