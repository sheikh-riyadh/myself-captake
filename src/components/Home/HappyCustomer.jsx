import { FaGrinHearts } from "react-icons/fa";
const HappyCustomer = () => {
  return (
    <div className="p-10 bg-gradient-to-r from-[#0bc1e9] via-[#3749bb] to-[#00237e] rounded-xl">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-5 text-white">
          <div>
            <FaGrinHearts className="text-6xl up-and-down" />
          </div>
          <div>
            <h2 className="font-medium text-3xl leading-normal">
              happy customers
            </h2>
            <span className="text-xl">
              Over 25 Satisfied Customers and Counting!
            </span>
          </div>
        </div>
        <di>
          <button className=" border px-10 py-4 rounded-xl text-white">
            See Reviews
          </button>
        </di>
      </div>
    </div>
  );
};

export default HappyCustomer;
