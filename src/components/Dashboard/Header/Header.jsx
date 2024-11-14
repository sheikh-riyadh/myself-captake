import { FaHome, FaUserCircle } from "react-icons/fa";
import { useGetUser } from "../../../hooks/useGetUser";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import MobileSidebar from "../../Mobile/Dashboard/MobileSidebar";

const Header = () => {
  const { user } = useGetUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
console.log(isModalOpen)
  return (
    <header className="w-full sticky top-0 bg-white border-b border-gray-200 z-50 p-3">
      <nav className="flex items-center justify-between px-8 w-full">
        <div>
          <FaBars
            onClick={() => setIsModalOpen((prev) => !prev)}
            className="block lg:hidden  text-2xl"
          />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <FaHome className="text-4xl bg-gray-100 p-2 rounded-full" />
            {user?.photo ? (
              <div className="bg-gray-100 w-10 h-10 border p-1 rounded-full flex flex-col items-center justify-center">
                <img
                  src={user?.photo}
                  alt="personal_image"
                  className="h-full w-full rounded-full"
                />
              </div>
            ) : (
              <FaUserCircle className="text-4xl bg-gray-100 p-2 rounded-full" />
            )}
          </div>
        </div>
      </nav>

      {
        isModalOpen && <MobileSidebar
          isOpen={isModalOpen}
          onClose={setIsModalOpen}
          key={"mobleSidebar"}
          className={"h-screen"}
        />
      }
    </header>
  );
};

export default Header;
