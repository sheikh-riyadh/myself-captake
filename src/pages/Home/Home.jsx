import FeatureCategory from "../../components/Home/FeatureCategory";
import FeatureProducts from "../../components/Home/FeatureProducts";
import HappyCustomer from "../../components/Home/HappyCustomer";
import SliderBanner from "../../components/Home/SliderBanner";
import MainHeader from "../../layout/Main/Header/MainHeader";

const Home = () => {
  return (
    <div>
      <MainHeader />
      <div className="my_container">
        <SliderBanner />
        <FeatureCategory />
        <HappyCustomer />
        <FeatureProducts />
      </div>
    </div>
  );
};

export default Home;
