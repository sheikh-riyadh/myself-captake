import FeatureCategory from "../../../components/Main/Home/FeatureCategory";
import FeatureProducts from "../../../components/Main/Home/FeatureProducts";
import HappyCustomer from "../../../components/Main/Home/HappyCustomer";
import SliderBanner from "../../../components/Main/Home/SliderBanner";
import BottomNavigation from "../../../components/Mobile/Main/BottomNavigation";
import MainFooter from "../../../layout/Main/Footer/MainFooter";
import MainHeader from "../../../layout/Main/Header/MainHeader";

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
      <MainFooter />

      <BottomNavigation />
    </div>
  );
};

export default Home;
