import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MobileHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-stech py-2  fixed w-full z-50 top-0 block xl:hidden">
      <div className="my_container">
        <div className="flex items-center justify-between">
          <div>
            <img
              onClick={() => navigate("/")}
              className="w-20"
              src="https://www.startech.com.bd/image/catalog/logo.png"
              alt="logo"
            />
          </div>
          <div className="flex items-center gap-5">
            <div>
              <FaSearch className="text-xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
