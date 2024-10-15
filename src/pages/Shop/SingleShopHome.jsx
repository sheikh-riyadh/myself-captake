import FeatureCategory from "../../components/Main/Home/FeatureCategory";
import FeatureProducts from "../../components/Main/Home/FeatureProducts";
import Brands from "../../components/Shop/SingleShopHome/Brands";
import Notice from "../../components/Shop/SingleShopHome/Notice";
import SingleShopBanner from "../../components/Shop/SingleShopHome/SingleShopBanner";
import SingleShopProductCard from "../../components/Shop/SingleShopHome/SingleShopProductCard";
import SingleShopReviews from "../../components/Shop/SingleShopHome/SingleShopReviews";
import { smoothScroll } from "../../utils/scrollToTop";

const SingleShopHome = () => {
  smoothScroll();

  return (
    <div>
      <div className="my_container">
        <SingleShopBanner />
        <Notice />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {[...Array(5).keys()].map((keys) => (
            <div key={keys}>
              <SingleShopProductCard />
            </div>
          ))}
        </div>
        <FeatureCategory />
        <FeatureProducts />
      </div>
      <Brands />
      <div className="my_container">
        <SingleShopReviews />
      </div>
    </div>
  );
};

export default SingleShopHome;
