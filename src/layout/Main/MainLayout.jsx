import { Outlet } from "react-router-dom";
import MainFooter from "../../components/Common/MainFooter";
import MainHeader from "../../components/Common/MainHeader";
import MobileHeader from "../../components/Mobile/Main/MobileHeader";

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
      </div>
    </div>
  );
};

export default MainLayout;
