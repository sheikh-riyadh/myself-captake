import { Outlet } from "react-router-dom";
import LeftSide from "../../components/Dashboard/Layout/LeftSide";
import Header from "../../components/Dashboard/Header/Header";
import RightSide from "../../components/Dashboard/Layout/RightSide";


const DashboardLayout = () => {
  return (
    <div className="overflow-hidden">
      <div className={`flex`}>
        <div className="bg-white">
          <LeftSide />
        </div>
        <div className="w-full h-[calc(100vh)] overflow-y-auto bar-hidden">
          <Header />
          <div>
            <Outlet />
          </div>
        </div>
        <div>
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
