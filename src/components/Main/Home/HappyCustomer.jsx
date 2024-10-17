import { FaGrinHearts } from "react-icons/fa";
const HappyCustomer = () => {
  return (
    <div className="p-10 bg-gradient-to-r from-[#0bc1e9] via-[#3749bb] to-[#00237e] rounded-xl">
      <div className="flex flex-wrap justify-between items-center gap-5">
        <div className="flex flex-wrap items-center gap-5 text-white">
          <div>
            <FaGrinHearts className="text-6xl up-and-down" />
          </div>
          <div>
            <h2 className="font-medium text-3xl leading-normal capitalize">
              happy customers
            </h2>
            <span className="text-xl">
              Over 25 Satisfied Customers and Counting!
            </span>
          </div>
        </div>
        <div>
          <button className="border px-10 py-4 rounded-xl text-white animate-bounce">
            See Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomer;
