import { useLocation } from "react-router-dom";
import FeatureProducts from "../../components/Main/Home/FeatureProducts";
import Brands from "../../components/Shop/SingleShopHome/Brands";
import Notice from "../../components/Shop/SingleShopHome/Notice";
import SingleShopBanner from "../../components/Shop/SingleShopHome/SingleShopBanner";
import SingleShopProductCard from "../../components/Shop/SingleShopHome/SingleShopProductCard";
import SingleShopReviews from "../../components/Shop/SingleShopHome/SingleShopReviews";
import { smoothScroll } from "../../utils/scrollToTop";

const SingleShopHome = () => {
  smoothScroll();
  const { pathname } = useLocation();

  return (
    <section>
      <div className="my_container">
        <SingleShopBanner sellerId={pathname?.split("/")?.[2]} />
        <Notice sellerId={pathname?.split("/")?.[2]} />
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold text-lg">Latest products</h2>
            <span>Check & Get Your Desired Product!</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {[...Array(5).keys()].map((keys) => (
              <div key={keys}>
                <SingleShopProductCard />
              </div>
            ))}
          </div>
        </div>
        <FeatureProducts />
      </div>
      <Brands sellerId={pathname?.split("/")?.[2]} />
      <div className="my_container">
        <SingleShopReviews sellerId={pathname?.split("/")?.[2]} />
      </div>
    </section>
  );
};

export default SingleShopHome;
