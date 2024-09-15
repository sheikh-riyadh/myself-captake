import FeatureCategory from "../../../components/Main/Home/FeatureCategory";
import FeatureProducts from "../../../components/Main/Home/FeatureProducts";
import HappyCustomer from "../../../components/Main/Home/HappyCustomer";
import SliderBanner from "../../../components/Main/Home/SliderBanner";
import BottomNavigation from "../../../components/Mobile/Main/BottomNavigation";

const Home = () => {
  return (
    <div>
      <div className="my_container">
        <SliderBanner />
        <FeatureCategory />
        <HappyCustomer />
        <FeatureProducts />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Home;
