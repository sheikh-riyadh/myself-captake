import FeatureCategory from "../../components/Main/Home/FeatureCategory";
import FeatureProducts from "../../components/Main/Home/FeatureProducts";
import Brands from "../../components/Shop/SingleShopHome/Brands";
import Notice from "../../components/Shop/SingleShopHome/Notice";
import SingleShopBanner from "../../components/Shop/SingleShopHome/SingleShopBanner";
import SingleShopProductCard from "../../components/Shop/SingleShopHome/SingleShopProductCard";
import SingleShopReviews from "../../components/Shop/SingleShopHome/SingleShopReviews";
import MainFooter from "../../layout/Main/Footer/MainFooter";
import MainHeader from "../../layout/Main/Header/MainHeader";

const SingleShopHome = () => {
  return (
    <div>
      <MainHeader/>
      <div className="my_container">
        <SingleShopBanner />
        <Notice />

        <div className="grid grid-cols-5 gap-5">
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
      <MainFooter/>
    </div>
  );
};

export default SingleShopHome;
