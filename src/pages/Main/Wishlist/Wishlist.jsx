import { FaHeart } from "react-icons/fa";
import { numberWithCommas } from "../../../utils/numberWithComma";
import Button from "../../../components/Common/Button";
import { useLocation } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";
import { smoothScroll } from "../../../utils/scrollToTop";

const Wishlist = () => {
  const { pathname } = useLocation();
  smoothScroll();

  const handleWishlist = () => {
    console.log("add to wishlist");
  };

  const handleAddToCart = () => {
    console.log("add to cart");
  };

  return (
    <div className="flex flex-col items-center justify-center my-20 my_container">
      <div className="lg:w-8/12 min-h-[350px] bg-white mt-20 rounded-md shadow p-5">
        <div className="flex flex-col items-center justify-center gap-5">
          {pathname == "/cart" ? (
            <FaBagShopping className="text-6xl -mt-12 text-danger" />
          ) : (
            <FaHeart className="text-6xl -mt-12 text-danger" />
          )}
          <span className="font-bold text-4xl capitalize">
            {`${pathname == "/cart" ? "my cart (10)" : "my wishlist (10)"}`}
          </span>
        </div>
        <div className="mt-10">
          {[...Array(5).keys()].map((key) => (
            <div
              key={key}
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center border-t py-5"
            >
              <div className="flex items-center gap-5 lg:col-span-8">
                <img
                  className="w-20 h-20"
                  src="https://www.startech.com.bd/image/cache/catalog/laptop/msi/stealth-16-studio-a13vg-407bd/stealth-16-studio-a13vg-407bd-pure-white-01-500x500.webp"
                  alt="product_image"
                />
                <div className="flex flex-col gap-1">
                  <span>
                    Canon EOS R100 Mirrorless Camera with 18-45mm Lens
                  </span>
                  <div className="flex items-center gap-5">
                    <span className="font-semibold text text-primary">{`${numberWithCommas(
                      300000
                    )}৳`}</span>
                    <span className="line-through font-semibold text">{`${numberWithCommas(
                      350000
                    )}৳`}</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex w-full gap-2">
                <Button
                  onClick={
                    pathname == "/cart" ? handleWishlist : handleAddToCart
                  }
                  className={"text-xs duration-500 py-3"}
                >
                  {`${pathname == "/cart" ? "Add to wishlist" : "Add to cart"}`}
                </Button>
                <Button className={"text-xs bg-danger duration-500 py-3"}>
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
