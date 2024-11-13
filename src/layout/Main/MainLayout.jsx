import { Outlet, useLocation } from "react-router-dom";
import MainFooter from "../../components/Common/MainFooter";
import MainHeader from "../../components/Common/MainHeader";
import MobileHeader from "../../components/Mobile/Main/MobileHeader";
import BottomNavigation from "../../components/Mobile/Main/BottomNavigation";

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <div
        style={{
          display: `${pathname?.startsWith("/dashboard") ? "none" : "block"}`,
        }}
      >
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
      <div
        style={{
          display: `${pathname?.startsWith("/dashboard") ? "none" : "block"}`,
        }}
      >
        <MainFooter />
        <div className="block xl:hidden">
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
