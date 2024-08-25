import StoreBanner from "../../../components/Main/Store/StoreBanner";
import MobileHeader from "../../../components/Mobile/Main/MobileHeader";
import MainHeader from "../../../layout/Main/Header/MainHeader";

const Store = () => {
  return (
    <div>
        <MainHeader/>
        {/* <MobileHeader/> */}
      <div className="my_container mt-[68px] lg:mt-28 xl:mt-[100px]">
        <StoreBanner />
      </div>
    </div>
  );
};

export default Store;
