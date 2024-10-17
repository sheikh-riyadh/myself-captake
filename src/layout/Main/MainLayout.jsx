import { Outlet } from "react-router-dom";
import MainFooter from "../../components/Common/MainFooter";
import MainHeader from "../../components/Common/MainHeader";
import MobileHeader from "../../components/Mobile/Main/MobileHeader";
import BottomNavigation from "../../components/Mobile/Main/BottomNavigation";

const MainLayout = () => {
  return (
    <div>
      <div>
        <div className="hidden xl:block">
          <MainHeader />
        </div>
        <div className="block xl:hidden">
          <MobileHeader />
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <MainFooter />
        <div className="block xl:hidden">
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
