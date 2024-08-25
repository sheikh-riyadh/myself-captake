import { FaPlayCircle } from "react-icons/fa";
import banner_1 from "../../../assets/Main/Store/banner_1.jpg";
import banner_2 from "../../../assets/Main/Store/banner_2.jpg";
const StoreBanner = () => {
  return (
    <div>
      <div className="h-[400px] w-full">
        <div className="grid grid-cols-12 gap-3 h-full">
          <div className="col-span-4 bg-slate-600 rounded-xl flex justify-end items-center relative">
            <div className="w-28 h-28 flex items-center justify-center rounded-full bg-[#f3f4f8] -mr-[58px] -mt-[115px] z-50">
              <div className="">
                <FaPlayCircle className="text-5xl text-primary animate-ping" />
              </div>
            </div>
            <img
              className="absolute h-full rounded-xl"
              src={banner_1}
              alt="banner_image"
            />
            <div className="absolute h-full w-full bg-[#081621c0] rounded-xl"></div>
          </div>
          <div className="col-span-8 bg-slate-600 rounded-xl relative flex items-center justify-center">
            <img
              className="absolute h-full w-full rounded-xl"
              src={banner_2}
              alt="banner_image"
            />
            <div className="absolute z-50 text-6xl text-white font-bold p-20 flex flex-col gap-5">
              <h1>Active Store Accounts</h1>
              <p className="text-2xl font-normal">
                An Extensive List of Verified Stores with Accounts Ready for
                Purchases, Ensuring a Seamless Shopping Experience
              </p>
            </div>
            <div className="absolute h-full w-full bg-[#081621c0] rounded-xl"></div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <div className="border-b-2 p-5 bg-white rounded-xl">
            <span>Total store showing:</span>
        </div>
      </div>
    </div>
  );
};

export default StoreBanner;
